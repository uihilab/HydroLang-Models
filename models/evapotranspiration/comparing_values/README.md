# Data Retrieval and Comparison

## Introduction

This model retrieves potential evapotranspiration data from CUAHSI source [MOPEX](https://pubs.er.usgs.gov/publication/70030278) (Model Parameter Esimation Experiment) for a station in [Tallapoosa River](https://selfie.cuahsi.org/MOPEX/02414500), and near [Locust Fork](https://selfie.cuahsi.org/MOPEX/02456500) to compare the two datasets statistically and evaluate if they might come from the same sample.

## Workflow
The data is retrieved from the datasource with the data type "GetValuesObject" for both locations. Since we only require the values for each location, the values are stripped and afterwards the Kolmogorov-Smirnov two sided test is used to determine P and D-statistics. The results were afterwards retrieved rendered on screen to see the trends on the data as column bars.

The results from the P-Value show that the two groups were smapled from populations on different distributinons with low variability.

## Running
Please run your code onloading the HydroLang library in an HTML file using either a local live server or using any other way to serve HTML pages. In your web console, you can replicate the results by copy-pasting the lines delimited by comments inside JS file attached to this folder.

## Notes
A proxy server is required to run to retrieve data from CUAHSI data sources. For this model, we are using a local proxy server deployed using Node.js. If you do not have Node, please change the following in the configuration object and visit the proxy server requirements prior to running.

```javascript
//Some code
  general_config = {
    source: "waterOneFlow",
    datatype: "GetValuesObject",
    proxyServer: "local-proxy", // use cors-anywhere instead
  },
```


