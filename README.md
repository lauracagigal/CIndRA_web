# CIndRA_web

Interactive product matrix for the CIndRA climate indicators (national and regional scales, Pacific).
Static site: open `index.html` or publish the repository with GitHub Pages (root of `main`).

## Contents

| Path | What |
|---|---|
| `index.html` | The matrix web page |
| `products.js` | Product catalogue (indicators, sites, file paths) |
| `eez.js` | Pacific EEZ polygons for the map |
| `figures/` | Ocean, biochemistry and tropical cyclone products |
| `outputs/figures/` | Station and regional atmosphere products |
| `outputs/tables/` | Station summary tables (CSV) |
| `outputs/mhw/` | National marine heatwave figures |

The products are generated in the [CIndRA](https://github.com/lauracagigal/CIndRA) repository
(`matrix_cc/figures`, `outputs/figures`, `outputs/tables`, `notebooks/matrix_cc/figures`) and copied here.

## Updating

After regenerating products in CIndRA, run:

```bash
./sync_from_cindra.sh              # assumes ../CIndRA
./sync_from_cindra.sh /path/to/CIndRA
```

It copies the page, rewrites the paths in `products.js` for this layout and mirrors the product folders
(files removed in CIndRA are removed here too).
