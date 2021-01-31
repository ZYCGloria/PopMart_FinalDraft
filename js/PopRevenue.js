am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_frozen);
  am4core.useTheme(am4themes_animated);

  // Themes end

  // Create chart instance
  var chart = am4core.create("chartdiv3", am4charts.XYChart);

  var label = chart.chartContainer.createChild(am4core.Label);
  label.text = "(Sources: Company prospectus, Great Wall Securities)";
  label.align = "center";
  label.isMeasured = false;
  label.fontSize = 13;
  label.x = 110;
  label.y = 300;

  // Export
  chart.exporting.menu = new am4core.ExportMenu();

  // Data for both series
  var data = [{
    "year": "2017",
    "revenue": 158,
    "growth": 79.5
  }, {
    "year": "2018",
    "revenue": 515,
    "growth": 225.5
  }, {
    "year": "2019",
    "revenue": 1683,
    "growth": 227.2
  }, {
    "year": "2020(E)",
    "revenue": 2561,
    "growth": 52.1,
    "strokeWidth": 1,
    "columnDash": "5,5",
    "fillOpacity": 0.2,
    "additional": "(projection)"
  }];

  /* Create axes */
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.minGridDistance = 60;

  /* Create value axis */
  // var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  // First value axis
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = "Revenue (RMB m)";
  

  var columnSeries = chart.series.push(new am4charts.ColumnSeries());
  columnSeries.name = "Revenue";
  columnSeries.dataFields.valueY = "revenue";
  columnSeries.dataFields.categoryX = "year";

  columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}M[/] [#fff]{additional}[/]"
  columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
  columnSeries.columns.template.propertyFields.stroke = "stroke";
  columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
  columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
  columnSeries.tooltip.label.textAlign = "middle";

  // Second value axis
  var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis2.title.text = "Revenue Growth";
  valueAxis2.renderer.opposite = true;

  var lineSeries = chart.series.push(new am4charts.LineSeries());
  lineSeries.name = "Revenue Growth";
  lineSeries.dataFields.valueY = "growth";
  lineSeries.dataFields.categoryX = "year";
  lineSeries.yAxis = valueAxis2;
  valueAxis2.numberFormatter = new am4core.NumberFormatter();
  valueAxis2.numberFormatter.numberFormat = "#.#'%'";
  // valueAxis2.numberFormatter.numberFormat = "#.#'%'";

  /* Create series */


  lineSeries.stroke = am4core.color("#fdd400");
  lineSeries.strokeWidth = 3;
  lineSeries.propertyFields.strokeDasharray = "lineDash";
  lineSeries.tooltip.label.textAlign = "middle";

  var bullet = lineSeries.bullets.push(new am4charts.Bullet());
  bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
  bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}%[/] [#fff]{additional}[/]"
  var circle = bullet.createChild(am4core.Circle);
  circle.radius = 4;
  circle.fill = am4core.color("#fff");
  circle.strokeWidth = 3;

  chart.data = data;

  var title = chart.titles.create();
  title.text = "Chart3: Pop Mart Revenue (RMB m) & Revenue Growth";
  title.fontSize = 20;
  title.marginTop = 20;
  title.marginBottom = 20;





}); // end am4core.ready()