#!/usr/bin/env bash
# Copy the product matrix and its products from the CIndRA repository into this one.
#
# Usage:  ./sync_from_cindra.sh [path/to/CIndRA]     (default: ../CIndRA next to this repo)
#
# The product folders here are mirrors: files deleted in CIndRA are deleted here too.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$(cd "${1:-$HERE/../CIndRA}" && pwd)"

for d in matrix_cc matrix_cc/figures outputs/figures outputs/tables notebooks/matrix_cc/figures; do
  [ -d "$SRC/$d" ] || { echo "Error: $SRC/$d not found. Is $SRC the CIndRA repository?" >&2; exit 1; }
done

echo "Syncing from $SRC"

# Page and map
cp "$SRC/matrix_cc/index.html" "$SRC/matrix_cc/eez.js" "$HERE/"

# Catalogue, with paths rewritten from matrix_cc/ to this repository's layout
sed \
  -e "s#OUT: '\.\./outputs/figures'#OUT: 'outputs/figures'#" \
  -e "s#TAB: '\.\./outputs/tables'#TAB: 'outputs/tables'#" \
  -e "s#MHW: '\.\./notebooks/matrix_cc/figures'#MHW: 'outputs/mhw'#" \
  -e "s#used by matrix_cc/index.html#used by index.html#" \
  -e "s#relative to matrix_cc/index.html#relative to index.html#" \
  -e "s#{FIG}      matrix_cc/figures           #{FIG}      figures                     #" \
  -e "s#{MHW}      notebooks/matrix_cc/figures #{MHW}      outputs/mhw                 #" \
  "$SRC/matrix_cc/products.js" > "$HERE/products.js"

if grep -q "'\.\./" "$HERE/products.js"; then
  echo "Error: products.js still has paths outside this repo (roots changed in CIndRA?):" >&2
  grep -n "'\.\./" "$HERE/products.js" >&2
  exit 1
fi

# Products
RSYNC=(rsync -a --delete --exclude .DS_Store)
"${RSYNC[@]}" "$SRC/matrix_cc/figures/"            "$HERE/figures/"
"${RSYNC[@]}" "$SRC/outputs/figures/"              "$HERE/outputs/figures/"
"${RSYNC[@]}" "$SRC/outputs/tables/"               "$HERE/outputs/tables/"
"${RSYNC[@]}" "$SRC/notebooks/matrix_cc/figures/"  "$HERE/outputs/mhw/"

# Bundle the CSV tables so the matrix shows them when index.html is opened from disk (file://)
python3 "$SRC/matrix_cc/build_tables_js.py" "$HERE" figures outputs/tables outputs/mhw

echo "Done. Review with: git -C \"$HERE\" status"
