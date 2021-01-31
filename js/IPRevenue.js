am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_frozen);
  am4core.useTheme(am4themes_animated);

  // Themes end

  /**
   * Define data for each year
   */
  var chartData = {
    "2017": [
      { "sector": "Molly", "size": 41 },
      { "sector": "Pucky", "size": 0 },
      { "sector": "Others", "size":117  }],
    "2018": [
      { "sector": "Molly", "size": 214, },
      { "sector": "Pucky", "size": 75 },
      { "sector": "Others", "size": 226 }],
    "2019": [
      { "sector": "Molly", "size": 456 },
      { "sector": "Pucky", "size": 315 },
      { "sector": "Others", "size": 912 }],
    "2020": [
      { "sector": "Molly", "size": 112 },
      { "sector": "Pucky", "size": 119 },
      { "sector": "Others", "size": 587 }],

  };

  // Create chart instance
  var chart = am4core.create("chartdiv4", am4charts.PieChart);

  var label = chart.chartContainer.createChild(am4core.Label);
  label.text = "(Source: Company prospectus)";
  label.align = "center";
  label.isMeasured = false;
  label.fontSize = 13;
  label.x = 180;
  label.y = 7;

  // Add data
  chart.data = [
    { "sector": "Molly", "size": 41 },
    { "sector": "Pucky", "size": 0 },
    { "sector": "Others", "size": 117 }
  ];

  // Add label
  chart.innerRadius = 80;
  var label = chart.seriesContainer.createChild(am4core.Label);
  label.text = "2017";
  label.horizontalCenter = "middle";
  label.verticalCenter = "middle";
  label.fontSize = 30;

  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "size";
  pieSeries.dataFields.category = "sector";
  pieSeries.slices.template.stroke = am4core.color("#fff");
  pieSeries.slices.template.strokeWidth = 2;
  pieSeries.slices.template.strokeOpacity = 1;

  // Animate chart data
  var currentYear = 2017;



  function getCurrentData() {

    var data = chartData[currentYear];

    if (currentYear == 2020)
      label.text = '2020 H1';
    else
      label.text = currentYear;

    currentYear++;

    if (currentYear > 2020)
      currentYear = 2017;
    return data;
  }




  var title = chart.titles.create();
  title.text = "Chart4: Revenue by IP";
  title.fontSize = 20;
  title.marginTop = 10;
  title.marginBottom = 10;

  function loop() {
    //chart.allLabels[0].text = currentYear;
    var data = getCurrentData();
    for (var i = 0; i < data.length; i++) {
      chart.data[i].size = data[i].size;
    }
    chart.invalidateRawData();
    chart.setTimeout(loop, 4000);
  }

  loop();



}); // end am4core.ready()