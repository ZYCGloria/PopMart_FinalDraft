am4core.ready(function () {

  // Apply chart themes
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(am4themes_kelly);

  // Create chart instance
  var chart = am4core.create("chartdiv4", am4charts.XYChart);

  // Add data
  chart.data = [{
    "country": "Lithuania",
    "litres": 501.9,
    "units": 250000
  }, {
    "country": "Czech Republic",
    "litres": 301.9,
    "units": 222000
  }, {
    "country": "Ireland",
    "litres": 201.1,
    "units": 170000
  }, {
    "country": "Germany",
    "litres": 165.8,
    "units": 122000
  }, {
    "country": "Australia",
    "litres": 139.9,
    "units": 99000
  }, {
    "country": "Austria",
    "litres": 128.3,
    "units": 85000
  }, {
    "country": "UK",
    "litres": 99,
    "units": 93000
  }, {
    "country": "Belgium",
    "litres": 60,
    "units": 50000
  }, {
    "country": "The Netherlands",
    "litres": 50,
    "units": 42000
  }];

  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  categoryAxis.title.text = "Countries";

  // First value axis
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Litres sold (M)";
  valueAxis.numberFormatter.numberFormat = "#.#'%'";

  // Second value axis
  var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis2.title.text = "Units sold";
  valueAxis2.renderer.opposite = true;

  // First series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "litres";
  series.dataFields.categoryX = "country";
  series.name = "Sales";
  series.tooltipText = "{name}: [bold]{valueY}[/]";

  // Second series
  var series2 = chart.series.push(new am4charts.LineSeries());
  series2.dataFields.valueY = "units";
  series2.dataFields.categoryX = "country";
  series2.name = "Units";
  series2.tooltipText = "{name}: [bold]{valueY}[/]";
  series2.strokeWidth = 3;
  series2.yAxis = valueAxis2;

  // Add legend
  chart.legend = new am4charts.Legend();

  // Add cursor
  chart.cursor = new am4charts.XYCursor();


}); // end am4core.ready()

