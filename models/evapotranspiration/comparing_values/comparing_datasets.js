//Declaring the HydroLang library instance and using the retrieval functions. The retrieved data contains daily values for both datasets.
var hydro = new Hydrolang(),
  general_config = {
    source: "waterOneFlow",
    datatype: "GetValuesObject",
    proxyServer: "local-proxy",
  },
  args_1 = {
    sourceType: "MOPEX",
    location: "02414500",
    variable: "Clim_PE",
    startDate: "2003-01-01",
    endDate: "2003-11-30",
  },
  response_1 = hydro.data.retrieve({ params: general_config, args: args_1 }),
  args_2 = {
    sourceType: "MOPEX",
    location: "02456500",
    variable: "Clim_PE",
    startDate: "2003-01-01",
    endDate: "2003-11-30",
  },
  response_2 = hydro.data.retrieve({ params: general_config, args: args_2 });

//Stripping the values from the dataset
var clean_1 =
    response_1[0].TimeSeriesResponse.timeSeriesResponse.timeSeries.values.value.map(
      (x) => JSON.parse(x)
    ),
  clean_2 =
    response_2[0].TimeSeriesResponse.timeSeriesResponse.timeSeries.values.value.map(
      (x) => JSON.parse(x)
    );

//Visualizing the raw datasets. Notice that the data does not contain information about the dates
var chart_1 = [Array.from(Array(clean_1.length).keys()), clean_1],
  chart_2 = [Array.from(Array(clean_2.length).keys()), clean_2];
hydro.visualize.draw({
  params: { type: "chart", divID: "data_1_chart" },
  args: { charttype: "column" },
  data: chart_1,
});
hydro.visualize.draw({
  params: { type: "chart", divID: "data_2_chart" },
  args: { charttype: "column" },
  data: chart_2,
});

//Visualizing the basic statistics of the datasets
hydro.visualize.draw({
  params: { type: "table", divID: "data_1_stats" },
  data: hydro.analyze.stats.basicstats({ data: clean_1 }),
});
hydro.visualize.draw({
  params: { type: "table", divID: "data_2_stats" },
  data: hydro.analyze.stats.basicstats({ data: clean_2 }),
});

//Calculate the KS-two sided test
var KS_P = hydro.analyze.stats.KS_computePValue({ data: [clean_1, clean_2] });
