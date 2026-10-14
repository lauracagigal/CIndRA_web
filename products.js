// CIndRA product catalogue used by index.html.
//
// Paths are relative to index.html. Tokens:
//   {FIG}      figures                      (ocean / biochemistry / TC products)
//   {OUT}      outputs/figures              (station + regional atmosphere products)
//   {TAB}      outputs/tables               (station summary tables)
//   {MHW}      outputs/mhw                  (national MHW notebook output)
//   {station}  station slug of the selected national site
//   {eez}      EEZ slug of the selected national site
// A product whose path uses a token the selected site does not define is shown as "not available".
// Missing files are detected at runtime and flagged as "not generated yet".

window.CINDRA = {
  book: 'https://lauracagigal.github.io/CIndRA/',
  roots: {
    FIG: 'figures',
    OUT: 'outputs/figures',
    TAB: 'outputs/tables',
    MHW: 'outputs/mhw',
  },

  // Regional domain used by the regional notebooks (functions/rainfall_regional.py PACIFIC_EXTENT, lon 0-360).
  regionalExtent: { lonMin: 125, lonMax: 245, latMin: -35, latMax: 45 },

  // National sites. `eezName` matches the Country field of data/regional/Pacific_EEZs (see eez.js).
  sites: [
    {
      id: 'palau', label: 'Palau', station: 'Koror (GSN 91408)', eezName: 'Palau', lat: 7.337, lon: 134.477,
      tokens: { station: 'palau_psw00040309_lat7p337_lon134p477', eez: 'palau', ocean: 'palau' },
    },
    {
      id: 'marshall', label: 'Marshall Islands', station: 'Majuro (GSN 91376)', eezName: 'Marshall Islands', lat: 7.065, lon: 171.272,
      tokens: { station: 'marshall_islands_rmw00040710_lat7p065_lon171p272' },
    },
  ],

  national: [
    // ─────────────────────────── ATMOSPHERE ───────────────────────────
    {
      domain: 'Atmosphere', variable: 'Air Temperature', icon: 'thermo',
      page: 'notebooks/historical/National/air_temperature/surface_temperature',
      indicators: [
        {
          code: '1.1', name: 'Mean surface temperature',
          notebook: 'notebooks/historical/National/air_temperature/a_mean_temperature',
          products: [
            { kind: 'plot', title: 'Anomalies & 10 warmest years', path: '{OUT}/{station}/F2_ST_Annomalies_top10_{station}.png',
              caption: 'Annual mean temperature anomalies relative to the reference period. Coloured dots mark the 10 warmest years on record; the black line is the linear trend (solid when significant, p < 0.05).' },
            { kind: 'plot', title: 'Annual mean temperature', path: '{OUT}/{station}/F2_ST_Mean_{station}.png',
              caption: 'Annual mean air temperature at the station with its linear trend.' },
          ],
          tables: [
            { title: 'Summary table', path: '{TAB}/{station}/T_mean_summary_table_{station}.csv' },
            { title: 'Annual series', path: '{TAB}/{station}/T_mean_annual_{station}.csv' },
            { title: 'Top-10 warmest years', path: '{TAB}/{station}/T_mean_top10_warmest_years_{station}.csv' },
            { title: 'ENSO summary', path: '{TAB}/{station}/ENSO_temperature_summary_{station}.csv' },
          ],
        },
        {
          code: '1.2', name: 'Minimum and maximum temperature',
          notebook: 'notebooks/historical/National/air_temperature/b_min_max_temperature',
          products: [
            { kind: 'interactive', title: 'Annual Tmin & Tmax', path: '{OUT}/{station}/F3_ST_min_max_{station}.html',
              caption: 'Annual maximum (red) and minimum (blue) temperature. Solid black lines: significant trends (p < 0.05); dashed: not significant.' },
            { kind: 'interactive', title: 'Minimum temperature', path: '{OUT}/{station}/F3_ST_min_{station}.html',
              caption: 'Annual minimum temperature (TMIN) and trend.' },
            { kind: 'interactive', title: 'Maximum temperature', path: '{OUT}/{station}/F3_ST_max_{station}.html',
              caption: 'Annual maximum temperature (TMAX) and trend.' },
          ],
          tables: [
            { title: 'Summary table', path: '{TAB}/{station}/T_minmax_summary_table_{station}.csv' },
            { title: 'Annual series', path: '{TAB}/{station}/T_minmax_annual_{station}.csv' },
          ],
        },
        {
          code: '1.3', name: 'Hot days and cold nights',
          notebook: 'notebooks/historical/National/air_temperature/c_hot_cold_days',
          products: [
            { kind: 'interactive', title: 'Hot days & cold nights (TX90p / TN10p)', path: '{OUT}/{station}/F4_ST_hot_cold_{station}.html',
              caption: 'Annual number of hot days (above the calendar-day 90th percentile) and cold nights (below the calendar-day 10th percentile) of the reference period.' },
            { kind: 'interactive', title: 'Fixed-percentile variant', path: '{OUT}/{station}/F4_ST_hot_cold_percentiles_{station}.html',
              caption: 'Hot days and cold nights computed with fixed percentile thresholds.' },
          ],
          tables: [
            { title: 'ETCCDI summary', path: '{TAB}/{station}/T_hot_cold_summary_table_etccdi_{station}.csv' },
            { title: 'Percentile summary', path: '{TAB}/{station}/T_hot_cold_summary_table_percentiles_{station}.csv' },
            { title: 'Hot days per year', path: '{TAB}/{station}/T_hot_days_per_year_{station}.csv' },
            { title: 'Cold nights per year', path: '{TAB}/{station}/T_cold_nights_per_year_{station}.csv' },
          ],
        },
      ],
    },
    {
      domain: 'Atmosphere', variable: 'Rainfall', icon: 'rain',
      page: 'notebooks/historical/National/rainfall/rainfall',
      indicators: [
        {
          code: '2.1', name: 'Total rainfall',
          notebook: 'notebooks/historical/National/rainfall/a_Total_rainfall',
          products: [
            { kind: 'plot', title: 'Anomalies & 10 wettest years', path: '{OUT}/{station}/F5_Rain_anom_top10_{station}.png',
              caption: 'Annual total rainfall anomalies relative to the reference period (mm/year). Coloured dots mark the 10 wettest years.' },
            { kind: 'interactive', title: 'Daily precipitation', path: '{OUT}/{station}/F5_Rain_daily_{station}.html',
              caption: 'Daily precipitation time series at the station.' },
            { kind: 'interactive', title: 'Annual daily maxima', path: '{OUT}/{station}/F5_Rain_annual_max_{station}.html',
              caption: 'Annual maximum daily rainfall.' },
            { kind: 'plot', title: 'Accumulated precipitation', path: '{OUT}/{station}/F5_Rain_accum_{station}.png',
              caption: 'Annual accumulated precipitation.' },
            { kind: 'plot', title: 'Dry season (Nov–Apr)', path: '{OUT}/{station}/F6a_Rain_dry_season_{station}.png',
              caption: 'Accumulated rainfall during the dry season (November–April).' },
            { kind: 'plot', title: 'Wet season (May–Oct)', path: '{OUT}/{station}/F6a_Rain_wet_season_{station}.png',
              caption: 'Accumulated rainfall during the wet season (May–October).' },
            { kind: 'plot', title: 'ENSO – daily rainfall', path: '{OUT}/{station}/F5_Rain_mean_ONI_daily_{station}.png', enso: true,
              caption: 'Daily rainfall modulated by ENSO phase (ONI index).' },
            { kind: 'plot', title: 'ENSO – accumulated rainfall', path: '{OUT}/{station}/F5_Rain_mean_ONI_accum_{station}.png', enso: true,
              caption: 'Accumulated rainfall by ENSO phase (ONI index).' },
          ],
          tables: [
            { title: 'Summary table', path: '{TAB}/{station}/R_mean_summary_table_{station}.csv' },
            { title: 'Annual series', path: '{TAB}/{station}/R_mean_annual_{station}.csv' },
            { title: 'Top-10 wettest years', path: '{TAB}/{station}/R_top10_wettest_years_{station}.csv' },
            { title: 'Dry-season totals', path: '{TAB}/{station}/R_dry_season_annual_{station}.csv' },
            { title: 'Wet-season totals', path: '{TAB}/{station}/R_wet_season_annual_{station}.csv' },
            { title: 'ONI annual', path: '{TAB}/{station}/R_ONI_annual_{station}.csv' },
          ],
        },
        {
          code: '2.2', name: 'Dry conditions',
          notebook: 'notebooks/historical/National/rainfall/b_Consecutive_dry_days',
          products: [
            { kind: 'plot', title: 'Dry days per year', path: '{OUT}/{station}/F6a_Number_dry_{station}.png',
              caption: 'Annual number of dry days (below 1 mm).' },
            { kind: 'plot', title: 'Max consecutive dry days', path: '{OUT}/{station}/F6b_Consecutive_dry_{station}.png',
              caption: 'Longest sequence of consecutive days with rainfall below 1 mm in each year.' },
            { kind: 'plot', title: 'Mean consecutive dry days', path: '{OUT}/{station}/F6b_Mean_consecutive_dry_{station}.png',
              caption: 'Mean length of dry spells in each year.' },
            { kind: 'plot', title: 'Wet / dry distribution', path: '{OUT}/{station}/F6a_Wet_dry_distribution_{station}.png',
              caption: 'Distribution of wet and dry days.' },
          ],
          tables: [
            { title: 'Summary table', path: '{TAB}/{station}/R_dry_summary_table_{station}.csv' },
            { title: 'Dry days per year', path: '{TAB}/{station}/R_dry_days_per_year_{station}.csv' },
            { title: 'Max consecutive dry days', path: '{TAB}/{station}/R_consecutive_dry_max_per_year_{station}.csv' },
            { title: 'Mean consecutive dry days', path: '{TAB}/{station}/R_consecutive_dry_mean_per_year_{station}.csv' },
          ],
        },
        {
          code: '2.3', name: 'Heavy rainfall',
          notebook: 'notebooks/historical/National/rainfall/c_Heavy_rainfall',
          products: [
            { kind: 'plot', title: 'Wet days (> 1 mm)', path: '{OUT}/{station}/F7a_Wet_days_1mm_{station}.png',
              caption: 'Annual number of wet days (above 1 mm).' },
            { kind: 'plot', title: 'Heavy rainfall days (> p95)', path: '{OUT}/{station}/F7b_Wet_days_95p_{station}.png',
              caption: 'Annual number of days above the 95th percentile of wet-day rainfall.' },
            { kind: 'plot', title: 'Wet / dry distribution', path: '{OUT}/{station}/F7a_Wet_dry_distribution_{station}.png',
              caption: 'Distribution of wet and dry days.' },
          ],
          tables: [
            { title: 'Summary table', path: '{TAB}/{station}/R_heavy_summary_table_{station}.csv' },
            { title: 'Wet days per year', path: '{TAB}/{station}/R_wet_days_per_year_{station}.csv' },
            { title: 'Heavy days per year', path: '{TAB}/{station}/R_heavy_days_per_year_{station}.csv' },
          ],
        },
      ],
    },
    {
      domain: 'Atmosphere', variable: 'Tropical Cyclones', icon: 'cyclone',
      page: 'notebooks/historical/National/tropical_cyclones/tropical_cyclones',
      indicators: [
        {
          code: '3.1', name: 'All tropical cyclones',
          notebook: 'notebooks/historical/National/tropical_cyclones/a_tropical_cyclones',
          products: [
            { kind: 'map', title: 'Historical TC tracks', path: '{FIG}/F8_TCs_Historical.png', sites: ['palau'],
              caption: 'Tropical cyclone tracks in the vicinity of the site since 1950, coloured by Saffir–Simpson category. Grey: no wind information.' },
            { kind: 'plot', title: 'Annual counts by category', path: '{FIG}/F8_TCs_Historical_bars_category.png', sites: ['palau'],
              caption: 'Annual storm count by category with linear trend.' },
            { kind: 'map', title: 'El Niño years', path: '{FIG}/F9_TCs_El Niño.png', sites: ['palau'], enso: true,
              caption: 'Historical TC tracks during El Niño years.' },
            { kind: 'map', title: 'La Niña years', path: '{FIG}/F9_TCs_La Niña.png', sites: ['palau'], enso: true,
              caption: 'Historical TC tracks during La Niña years.' },
            { kind: 'map', title: 'Neutral years', path: '{FIG}/F9_TCs_Neutral.png', sites: ['palau'], enso: true,
              caption: 'Historical TC tracks during ENSO-neutral years.' },
          ],
        },
        {
          code: '3.2', name: 'Severe tropical cyclones',
          notebook: 'notebooks/historical/National/tropical_cyclones/b_severe_tropical_cyclones',
          products: [
            { kind: 'map', title: 'Severe TC tracks', path: '{FIG}/F8_TCs_Historical_Severe.png', sites: ['palau'],
              caption: 'Severe tropical cyclones (Category 3 or greater, winds above 96 kt) in the vicinity of the site since 1950.' },
            { kind: 'plot', title: 'Severe TCs by category', path: '{FIG}/F8_TCs_Historical_bars_category_severe.png', sites: ['palau'],
              caption: 'Annual count of severe TCs by category.' },
            { kind: 'plot', title: 'Severe TCs through time', path: '{FIG}/F8_TCs_Historical_Severe_cat_time.png', sites: ['palau'],
              caption: 'Annual severe storm count and trend.' },
            { kind: 'plot', title: 'Severe TCs & ENSO trend', path: '{FIG}/F9_TCs_severe_bars_trend.png', sites: ['palau'], enso: true,
              caption: 'Severe TC counts coloured by ENSO phase (ONI index).' },
            { kind: 'map', title: 'Severe – El Niño', path: '{FIG}/F9_TCs_El Niño_SEVERE.png', sites: ['palau'], enso: true,
              caption: 'Severe TC tracks during El Niño years.' },
            { kind: 'map', title: 'Severe – La Niña', path: '{FIG}/F9_TCs_La Niña_SEVERE.png', sites: ['palau'], enso: true,
              caption: 'Severe TC tracks during La Niña years.' },
            { kind: 'map', title: 'Severe – Neutral', path: '{FIG}/F9_TCs_Neutral_SEVERE.png', sites: ['palau'], enso: true,
              caption: 'Severe TC tracks during ENSO-neutral years.' },
          ],
        },
      ],
    },

    // ───────────────────────────── OCEAN ─────────────────────────────
    {
      domain: 'Ocean', variable: 'Sea Surface Temperature', icon: 'wave',
      page: 'notebooks/historical/National/sea_surface_temperature/sea_surface_temperature',
      indicators: [
        {
          code: '4.1', name: 'Mean sea surface temperature',
          notebook: 'notebooks/historical/National/sea_surface_temperature/a_Mean_Temperature_maps',
          products: [
            { kind: 'map', title: 'Mean SST', path: '{FIG}/SST_mean_{eez}.png',
              caption: 'Mean sea surface temperature inside the EEZ from NOAA OISST v2.1.' },
            { kind: 'map', title: 'SST trend', path: '{FIG}/SST_trend_{eez}.png',
              caption: 'Linear SST trend (°C per decade) inside the EEZ.' },
            { kind: 'plot', title: 'Trends & anomalies', path: '{FIG}/SST_trends_anomalies_{eez}.png',
              caption: 'EEZ-averaged SST anomalies and linear trend.' },
            { kind: 'plot', title: 'Point time series', path: '{FIG}/SST_timeseries_{eez}.png',
              caption: 'SST time series at the selected point.' },
            { kind: 'map', title: 'SST by ENSO phase', path: '{FIG}/SST_ENSO_{eez}.png', enso: true,
              caption: 'SST anomalies under La Niña, Neutral and El Niño conditions.' },
          ],
        },
        {
          code: '4.2', name: 'Degree heating weeks',
          notebook: 'notebooks/historical/National/sea_surface_temperature/b_DHW',
          products: [
            { kind: 'plot', title: 'DHW full period', path: '{FIG}/F13_DHW.png', sites: ['palau'],
              caption: 'Degree Heating Weeks (NOAA Coral Reef Watch) over the full period.' },
            { kind: 'plot', title: 'Days per bleaching alert level', path: '{FIG}/F13_DHW_days_year_level.png', sites: ['palau'],
              caption: 'Annual number of days at each bleaching alert level.' },
            { kind: 'plot', title: 'DHW by ENSO phase', path: '{FIG}/F13_DHW_oni_cat.png', sites: ['palau'], enso: true,
              caption: 'Degree Heating Weeks by ENSO phase (ONI index).' },
          ],
        },
        {
          code: '4.3', name: 'Marine heatwaves',
          notebook: 'notebooks/historical/National/sea_surface_temperature/c_MHW',
          products: [
            { kind: 'map', title: 'EEZ mask', path: '{MHW}/F_MHW_EEZ_mask.png', sites: ['palau'],
              caption: 'Grid cells used for the EEZ-wide marine heatwave analysis.' },
            { kind: 'plot', title: 'EEZ MHWs – full period', path: '{MHW}/F_MHW_EEZ_full_period.png', sites: ['palau'],
              caption: 'EEZ-average marine heatwaves detected with the Hobday et al. (2016) method.' },
            { kind: 'plot', title: 'EEZ MHWs – last 10 years', path: '{MHW}/F_MHW_EEZ_last_10_years.png', sites: ['palau'],
              caption: 'EEZ-average marine heatwaves over the last 10 years.' },
            { kind: 'plot', title: 'EEZ annual indicators', path: '{MHW}/F_MHW_EEZ_annual_indicators.png', sites: ['palau'],
              caption: 'Annual MHW frequency, duration, intensity and trends for the EEZ average.' },
            { kind: 'plot', title: 'Selected point', path: '{MHW}/F_MHW_selected_point_full_period.png', sites: ['palau'],
              caption: 'Marine heatwaves at the user-selected point.' },
            { kind: 'plot', title: 'EEZ vs point', path: '{MHW}/F_MHW_EEZ_vs_point.png', sites: ['palau'],
              caption: 'Comparison between EEZ-average and single-point MHW statistics.' },
          ],
        },
      ],
    },
    {
      domain: 'Ocean', variable: 'Ocean Biogeochemistry', icon: 'leaf',
      page: 'notebooks/historical/National/biochemistry/biochemistry',
      indicators: [
        bioNational('5.1', 'Ocean acidification: pH', 'a_oceanic_pH', 'F14_pH', 'pH'),
        bioNational('5.2', 'Chlorophyll concentration', 'b_chlorophyll', 'F15_chlorophyll', 'chlorophyll-a'),
        bioNational('5.3', 'Estimated phytoplankton size', 'c_phytoplankton', 'F16_phytoplankton', 'phytoplankton size'),
        bioNational('5.4', 'Subsurface oxygen (O₂)', 'd_dissolved_o2', 'F17_O2', 'dissolved oxygen'),
      ],
    },
  ],

  regional: [
    {
      domain: 'Atmosphere', variable: 'Air Temperature', icon: 'thermo',
      page: 'notebooks/historical/Regional/air_temperature/air_temperature',
      indicators: [
        {
          code: 'R1.1', name: 'Mean temperature',
          notebook: 'notebooks/historical/Regional/air_temperature/regional_indicators',
          products: [
            { kind: 'plot', title: 'Regional mean anomaly (stations)', path: '{OUT}/regional_pacific/T_regional_mean_anomaly_timeseries_pacific.png',
              caption: 'Regional-mean annual temperature anomaly from GHCN stations inside the Pacific EEZs.' },
            { kind: 'map', title: 'Station trends – Tmean', path: '{OUT}/regional_pacific/T_regional_tmean_annual_trend_pacific.png',
              caption: 'Linear trend of annual mean temperature at each station (filled markers: significant).' },
            { kind: 'map', title: 'ERA5 mean temperature', path: '{OUT}/regional_pacific/T_regional_tmean_annual_mean_era5_pacific.png',
              caption: 'ERA5 annual mean 2 m temperature over the Pacific.' },
            { kind: 'map', title: 'ERA5 temperature trend', path: '{OUT}/regional_pacific/T_regional_tmean_annual_trend_era5_pacific.png',
              caption: 'ERA5 linear trend of annual mean 2 m temperature.' },
            { kind: 'plot', title: 'ERA5 EEZ-mean anomaly', path: '{OUT}/regional_pacific/T_regional_mean_anomaly_timeseries_era5_pacific.png',
              caption: 'ERA5 annual temperature anomaly averaged over the Pacific EEZs.' },
          ],
        },
        {
          code: 'R1.2', name: 'Minimum, maximum & diurnal range',
          notebook: 'notebooks/historical/Regional/air_temperature/regional_indicators',
          products: [
            { kind: 'map', title: 'Station trends – Tmax', path: '{OUT}/regional_pacific/T_regional_tmax_annual_trend_pacific.png',
              caption: 'Linear trend of annual maximum temperature at each station.' },
            { kind: 'map', title: 'Station trends – Tmin', path: '{OUT}/regional_pacific/T_regional_tmin_annual_trend_pacific.png',
              caption: 'Linear trend of annual minimum temperature at each station.' },
            { kind: 'map', title: 'Station trends – diurnal range', path: '{OUT}/regional_pacific/T_regional_diff_annual_trend_pacific.png',
              caption: 'Linear trend of the diurnal temperature range (Tmax − Tmin).' },
          ],
        },
        {
          code: 'R1.3', name: 'Hot days & cold nights',
          notebook: 'notebooks/historical/Regional/air_temperature/regional_indicators',
          products: [
            { kind: 'map', title: 'Hot days trend', path: '{OUT}/regional_pacific/T_regional_hot_days_pct_trend_pacific.png',
              caption: 'Trend in the percentage of hot days (TX90p) at each station.' },
            { kind: 'map', title: 'Cold nights trend', path: '{OUT}/regional_pacific/T_regional_cold_nights_pct_trend_pacific.png',
              caption: 'Trend in the percentage of cold nights (TN10p) at each station.' },
          ],
        },
      ],
    },
    {
      domain: 'Atmosphere', variable: 'Rainfall', icon: 'rain',
      page: 'notebooks/historical/Regional/rainfall/rainfall',
      indicators: [
        {
          code: 'R2.1', name: 'Total rainfall',
          notebook: 'notebooks/historical/Regional/rainfall/regional_indicators',
          products: [
            { kind: 'map', title: 'Station trends – total rainfall', path: '{OUT}/regional_pacific/R_regional_total_annual_mm_trend_pacific.png',
              caption: 'Linear trend of annual total rainfall at each station.' },
            { kind: 'map', title: 'ERA5 mean rainfall', path: '{OUT}/regional_pacific/R_regional_total_annual_mm_mean_era5_pacific.png',
              caption: 'ERA5 mean annual total precipitation.' },
            { kind: 'map', title: 'ERA5 rainfall trend', path: '{OUT}/regional_pacific/R_regional_total_annual_mm_trend_era5_pacific.png',
              caption: 'ERA5 linear trend of annual total precipitation.' },
          ],
        },
        {
          code: 'R2.2', name: 'Dry conditions',
          notebook: 'notebooks/historical/Regional/rainfall/regional_indicators',
          products: [
            { kind: 'map', title: 'Dry days trend', path: '{OUT}/regional_pacific/R_regional_dry_days_trend_pacific.png',
              caption: 'Trend in annual dry days (below 1 mm) at each station.' },
            { kind: 'map', title: 'Max consecutive dry days', path: '{OUT}/regional_pacific/R_regional_max_consecutive_dry_days_trend_pacific.png',
              caption: 'Trend in the annual maximum dry-spell length.' },
            { kind: 'map', title: 'Mean consecutive dry days', path: '{OUT}/regional_pacific/R_regional_mean_consecutive_dry_days_trend_pacific.png',
              caption: 'Trend in the mean dry-spell length.' },
          ],
        },
        {
          code: 'R2.3', name: 'Heavy rainfall',
          notebook: 'notebooks/historical/Regional/rainfall/regional_indicators',
          products: [
            { kind: 'map', title: 'Wet days trend', path: '{OUT}/regional_pacific/R_regional_wet_days_trend_pacific.png',
              caption: 'Trend in annual wet days (above 1 mm).' },
            { kind: 'map', title: 'Heavy rainfall days trend', path: '{OUT}/regional_pacific/R_regional_heavy_days_trend_pacific.png',
              caption: 'Trend in annual heavy rainfall days (above the 95th percentile).' },
          ],
        },
      ],
    },
    {
      domain: 'Atmosphere', variable: 'Tropical Cyclones', icon: 'cyclone',
      page: 'notebooks/historical/Regional/tropical_cyclones/tropical_cyclones',
      indicators: [
        {
          code: 'R3.1', name: 'Tracks and spatial patterns',
          notebook: 'notebooks/historical/Regional/tropical_cyclones/regional_indicators',
          products: [
            { kind: 'map', title: 'Pacific TC subregions', path: '{OUT}/regional_pacific/TC_regional_subregions_pacific.png',
              caption: 'Subregions used to aggregate tropical-cyclone statistics.' },
            { kind: 'map', title: 'Tracks by genesis subregion', path: '{OUT}/regional_pacific/TC_regional_genesis_tracks_pacific.png',
              caption: 'Historical cyclone tracks coloured by genesis subregion (IBTrACS).' },
            { kind: 'map', title: 'Track density', path: '{OUT}/regional_pacific/TC_regional_track_density_pacific.png',
              caption: 'Spatial density of cyclone tracks.' },
            { kind: 'map', title: 'Period comparison', path: '{OUT}/regional_pacific/TC_regional_period_comparison_pacific.png',
              caption: 'Difference in track density between two periods.' },
            { kind: 'map', title: 'Regional activity dashboard', path: '{OUT}/regional_pacific/TC_regional_map_dashboard_pacific.png',
              caption: 'Per-subregion activity charts plotted over the Pacific map.' },
          ],
        },
        {
          code: 'R3.2', name: 'Frequency, intensity & energy',
          notebook: 'notebooks/historical/Regional/tropical_cyclones/regional_indicators',
          products: [
            { kind: 'plot', title: 'Annual storm counts', path: '{OUT}/regional_pacific/TC_regional_annual_counts_pacific.png',
              caption: 'Annual number of tropical cyclones per subregion with trends.' },
            { kind: 'plot', title: 'Intensity composition', path: '{OUT}/regional_pacific/TC_regional_intensity_composition_pacific.png',
              caption: 'Annual storm counts stacked by intensity category.' },
            { kind: 'plot', title: 'Monthly genesis', path: '{OUT}/regional_pacific/TC_regional_monthly_genesis_pacific.png',
              caption: 'Monthly distribution of cyclone genesis by intensity.' },
            { kind: 'plot', title: 'Accumulated Cyclone Energy', path: '{OUT}/regional_pacific/TC_regional_ace_pacific.png',
              caption: 'Annual Accumulated Cyclone Energy (ACE) per subregion.' },
          ],
        },
      ],
    },
    {
      domain: 'Ocean', variable: 'Sea Surface Temperature', icon: 'wave',
      page: 'notebooks/historical/Regional/sea_surface_temperature/sea_surface_temperature',
      indicators: [
        {
          code: 'R4.1', name: 'Mean SST & trends',
          notebook: 'notebooks/historical/Regional/sea_surface_temperature/regional_indicators',
          products: [
            { kind: 'map', title: 'Regional mean SST', path: '{FIG}/SST_regional_mean.png',
              caption: 'Mean sea surface temperature over the Pacific (NOAA OISST).' },
            { kind: 'map', title: 'SST trend', path: '{FIG}/F19_SST_regional_trend.png',
              caption: 'Linear SST trend over the Pacific with EEZ boundaries.' },
            { kind: 'map', title: 'DJF 5-year anomalies', path: '{FIG}/F20_SST_DJF_5year_anomalies.png',
              caption: 'Boreal-winter (DJF) SST anomalies by five-year period.' },
          ],
        },
        {
          code: 'R4.2', name: 'Marine heatwaves',
          notebook: 'notebooks/historical/Regional/sea_surface_temperature/mhw_regional',
          products: [
            { kind: 'map', title: 'Mean annual MHW days', path: '{FIG}/MHW_regional_mean_days.png',
              caption: 'Mean number of marine-heatwave days per year in each grid cell.' },
            { kind: 'map', title: 'Trend in MHW days', path: '{FIG}/MHW_regional_days_trend.png',
              caption: 'Linear trend in annual marine-heatwave days.' },
            { kind: 'map', title: 'Frequency, duration & intensity', path: '{FIG}/MHW_regional_frequency_duration_intensity.png',
              caption: 'Mean MHW event frequency, duration and intensity.' },
            { kind: 'map', title: '5-year MHW-day anomalies', path: '{FIG}/MHW_regional_5year_days_anomalies.png',
              caption: 'Recent five-year anomalies of MHW days.' },
            { kind: 'map', title: 'Decadal summaries', path: '{FIG}/MHW_regional_decadal_summaries.png',
              caption: 'Decadal marine-heatwave summaries.' },
            { kind: 'plot', title: 'Annual MHW days & ENSO', path: '{FIG}/MHW_regional_annual_days_ENSO.png', enso: true,
              caption: 'Regional mean annual MHW days coloured by ENSO phase.' },
            { kind: 'map', title: 'MHW anomalies by ENSO phase', path: '{FIG}/MHW_regional_ENSO_anomalies.png', enso: true,
              caption: 'MHW-day anomaly maps for La Niña, Neutral and El Niño.' },
          ],
        },
      ],
    },
    {
      domain: 'Ocean', variable: 'Ocean Biogeochemistry', icon: 'leaf',
      page: 'notebooks/historical/Regional/biochemistry/biochemistry',
      indicators: [
        bioRegional('R5.1', 'Ocean acidification: pH', 'a_oceanic_pH', 'ph', 'pH'),
        bioRegional('R5.2', 'Chlorophyll-a', 'b_chlorophyll', 'chl', 'chlorophyll-a'),
        bioRegional('R5.3', 'Phytoplankton size (MD50)', 'c_phytoplankton', 'MD50', 'median phytoplankton size (MD50)'),
        bioRegional('R5.4', 'Phytoplankton biomass', 'c2_phytoplankton', 'phyc', 'phytoplankton biomass'),
        bioRegional('R5.5', 'Dissolved oxygen (O₂)', 'd_dissolved_o2', 'o2', 'dissolved oxygen'),
      ],
    },
  ],
};

function bioNational(code, name, nb, prefix, label) {
  return {
    code, name,
    notebook: 'notebooks/historical/National/biochemistry/' + nb,
    products: [
      { kind: 'map', title: 'Mean', path: `{FIG}/${prefix}_mean_map.png`, sites: ['palau'],
        caption: `Long-term mean ${label} in the vicinity of the site.` },
      { kind: 'map', title: 'Change', path: `{FIG}/${prefix}_mean_map_trend.png`, sites: ['palau'],
        caption: `Linear trend in ${label}.` },
      { kind: 'interactive', title: 'Area-average time series', path: `{FIG}/${prefix}_mean_trend.html`, sites: ['palau'],
        caption: `Area-averaged ${label} time series with linear trend.` },
      { kind: 'map', title: 'ENSO composites', path: `{FIG}/${prefix}_ENSO.png`, sites: ['palau'], enso: true,
        caption: `Mean ${label} under La Niña, Neutral and El Niño conditions.` },
    ],
  };
}

function bioRegional(code, name, nb, v, label) {
  return {
    code, name,
    notebook: 'notebooks/historical/Regional/biochemistry/' + nb,
    products: [
      { kind: 'map', title: 'Long-term mean', path: `{FIG}/regional_${v}_mean.png`,
        caption: `Long-term mean ${label} over the Pacific.` },
      { kind: 'map', title: 'Linear trend', path: `{FIG}/regional_${v}_trend.png`,
        caption: `Linear trend in ${label}.` },
      { kind: 'map', title: 'Seasonal climatology', path: `{FIG}/regional_${v}_seasonal.png`,
        caption: `Seasonal climatology of ${label}.` },
      { kind: 'map', title: 'Seasonal anomaly', path: `{FIG}/regional_${v}_seasonal_anomaly.png`,
        caption: `Seasonal anomalies of ${label} relative to the annual mean.` },
      { kind: 'interactive', title: 'Regional time series', path: `{FIG}/regional_${v}_timeseries.html`,
        caption: `Area-weighted regional ${label} time series.` },
      { kind: 'map', title: 'ENSO anomalies', path: `{FIG}/regional_${v}_enso_anomalies.png`, enso: true,
        caption: `${label[0].toUpperCase() + label.slice(1)} anomalies under La Niña, Neutral and El Niño conditions.` },
    ],
  };
}
