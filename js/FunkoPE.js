am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("chartdiv6", am4charts.XYChart);

  var label = chart.chartContainer.createChild(am4core.Label);
  label.text = "(Sources: Bloomberg, Gurufocus)";
  label.align = "center";
  label.isMeasured = false;
  label.fontSize = 13;
  label.x = 110;
  label.y = 300;

  // Add data
  chart.data = [{
    "date": "2017-11-02",
    "value": 17
  }, {
    "date": "2017-11-20",
    "value": 18
  }, {
    "date": "2017-12-01",
    "value": 23
  }, {
    "date": "2017-12-06",
    "value": 21
  }, {
    "date": "2017-12-14",
    "value": 18
  }, {
    "date": "2017-12-19",
    "value": 15
  }, {
    "date": "2017-12-27",
    "value": 16
  }, {
    "date": "2017-12-29",
    "value": 0
  }, {
    "date": "2018-03-27",
    "value": 0
  }, {
    "date": "2018-03-29",
    "value": 86
  }, {
    "date": "2018-04-11",
    "value": 87
  }, {
    "date": "2018-04-16",
    "value": 86
  }, {
    "date": "2018-04-23",
    "value": 89
  }, {
    "date": "2018-04-25",
    "value": 92
  }, {
    "date": "2018-04-30",
    "value": 93
  }, {
    "date": "2018-05-02",
    "value": 95
  }, {
    "date": "2018-05-08",
    "value": 97
  }, {
    "date": "2018-05-11",
    "value": 101
  }, {
    "date": "2018-05-16",
    "value": 103
  }, {
    "date": "2018-05-22",
    "value": 101
  }, {
    "date": "2018-05-29",
    "value": 104
  }, {
    "date": "2018-06-04",
    "value": 111
  }, {
    "date": "2018-06-07",
    "value": 119
  }, {
    "date": "2018-06-11",
    "value": 125
  }, {
    "date": "2018-06-14",
    "value": 122
  }, {
    "date": "2018-06-18",
    "value": 121
  }, {
    "date": "2018-06-21",
    "value": 120
  }, {
    "date": "2018-06-25",
    "value": 126
  }, {
    "date": "2018-06-27",
    "value": 123
  }, {
    "date": "2018-06-29",
    "value": 43
  }, {
    "date": "2018-07-04",
    "value": 46
  }, {
    "date": "2018-07-06",
    "value": 51
  }, {
    "date": "2018-07-09",
    "value": 47
  }, {
    "date": "2018-07-13",
    "value": 55
  }, {
    "date": "2018-07-18",
    "value": 56
  }, {
    "date": "2018-07-24",
    "value": 61
  }, {
    "date": "2018-07-27",
    "value": 57
  }, {
    "date": "2018-07-31",
    "value": 60
  }, {
    "date": "2018-08-03",
    "value": 63
  }, {
    "date": "2018-08-07",
    "value": 68
  }, {
    "date": "2018-08-13",
    "value": 74
  }, {
    "date": "2018-08-16",
    "value": 67
  }, {
    "date": "2018-08-22",
    "value": 79
  }, {
    "date": "2018-08-30",
    "value": 83
  }, {
    "date": "2018-09-03",
    "value": 87
  }, {
    "date": "2018-09-07",
    "value": 99
  }, {
    "date": "2018-09-10",
    "value": 106
  }, {
    "date": "2018-09-12",
    "value": 84
  }, {
    "date": "2018-09-14",
    "value": 72
  }, {
    "date": "2018-09-21",
    "value": 71
  }, {
    "date": "2018-09-26",
    "value": 74
  }, {
    "date": "2018-09-28",
    "value": 137
  }, {
    "date": "2018-10-02",
    "value": 116
  }, {
    "date": "2018-10-05",
    "value": 113
  }, {
    "date": "2018-10-11",
    "value": 101
  }, {
    "date": "2018-10-15",
    "value": 110
  }, {
    "date": "2018-10-18",
    "value": 106
  }, {
    "date": "2018-10-22",
    "value": 116
  }, {
    "date": "2018-10-23",
    "value": 111
  }, {
    "date": "2018-10-29",
    "value": 104
  }, {
    "date": "2018-10-31",
    "value": 109
  }, {
    "date": "2018-11-05",
    "value": 112
  }, {
    "date": "2018-11-07",
    "value": 121
  }, {
    "date": "2018-11-09",
    "value": 91
  }, {
    "date": "2018-11-14",
    "value": 96
  }, {
    "date": "2018-11-20",
    "value": 87
  }, {
    "date": "2018-11-23",
    "value": 90
  }, {
    "date": "2018-11-28",
    "value": 92
  }, {
    "date": "2018-12-04",
    "value": 85
  }, {
    "date": "2018-12-07",
    "value": 83
  }, {
    "date": "2018-12-13",
    "value": 79
  }, {
    "date": "2018-12-18",
    "value": 76
  }, {
    "date": "2018-12-24",
    "value": 67
  }, {
    "date": "2018-12-27",
    "value": 75
  }, {
    "date": "2018-12-31",
    "value": 39
  }, {
    "date": "2019-01-09",
    "value": 49
  }, {
    "date": "2019-01-14",
    "value": 48
  }, {
    "date": "2019-01-25",
    "value": 54
  }, {
    "date": "2019-01-29",
    "value": 52
  }, {
    "date": "2019-02-12",
    "value": 55
  }, {
    "date": "2019-02-19",
    "value": 57
  }, {
    "date": "2019-02-26",
    "value": 60
  }, {
    "date": "2019-03-04",
    "value": 60
  }, {
    "date": "2019-03-06",
    "value": 56
  }, {
    "date": "2019-03-01",
    "value": 58
  }, {
    "date": "2019-03-14",
    "value": 63
  }, {
    "date": "2019-03-20",
    "value": 64
  }, {
    "date": "2019-03-27",
    "value": 63
  }, {
    "date": "2019-04-02",
    "value": 58
  }, {
    "date": "2019-04-10",
    "value": 57
  }, {
    "date": "2019-04-16",
    "value": 54
  }, {
    "date": "2019-04-18",
    "value": 51
  }, {
    "date": "2019-04-29",
    "value": 53
  }, {
    "date": "2019-05-06",
    "value": 57
  }, {
    "date": "2019-05-13",
    "value": 55
  }, {
    "date": "2019-05-16",
    "value": 59
  }, {
    "date": "2019-05-24",
    "value": 57
  }, {
    "date": "2019-05-31",
    "value": 56
  }, {
    "date": "2019-06-03",
    "value": 52
  }, {
    "date": "2019-06-07",
    "value": 58
  }, {
    "date": "2019-06-18",
    "value": 59
  }, {
    "date": "2019-06-21",
    "value": 65
  }, {
    "date": "2019-06-27",
    "value": 68
  }, {
    "date": "2019-06-28",
    "value": 46
  }, {
    "date": "2019-07-04",
    "value": 41
  }, {
    "date": "2019-07-08",
    "value": 40
  }, {
    "date": "2019-07-15",
    "value": 43
  }, {
    "date": "2019-07-22",
    "value": 45
  }, {
    "date": "2019-07-26",
    "value": 46
  }, {
    "date": "2019-08-05",
    "value": 41
  }, {
    "date": "2019-08-09",
    "value": 45
  }, {
    "date": "2019-08-16",
    "value": 42
  }, {
    "date": "2019-08-23",
    "value": 42
  }, {
    "date": "2019-08-29",
    "value": 45
  }, {
    "date": "2019-09-09",
    "value": 43
  }, {
    "date": "2019-09-16",
    "value": 53
  }, {
    "date": "2019-09-19",
    "value": 44
  }, {
    "date": "2019-09-25",
    "value": 38
  }, {
    "date": "2019-10-04",
    "value": 28
  }, {
    "date": "2019-10-11",
    "value": 28
  }, {
    "date": "2019-10-16",
    "value": 26
  }, {
    "date": "2019-10-25",
    "value": 24
  }, {
    "date": "2019-10-31",
    "value": 25
  }, {
    "date": "2019-11-01",
    "value": 21
  }, {
    "date": "2019-11-14",
    "value": 19
  }, {
    "date": "2019-11-27",
    "value": 20
  }, {
    "date": "2019-12-04",
    "value": 20
  }, {
    "date": "2019-12-16",
    "value": 21
  }, {
    "date": "2019-12-24",
    "value": 23
  }, {
    "date": "2019-12-31",
    "value": 46
  }, {
    "date": "2020-01-07",
    "value": 43
  }, {
    "date": "2020-01-16",
    "value": 41
  }, {
    "date": "2020-01-20",
    "value": 42
  }, {
    "date": "2020-01-27",
    "value": 41
  }, {
    "date": "2020-02-03",
    "value": 41
  }, {
    "date": "2020-02-10",
    "value": 23
  }, {
    "date": "2020-02-14",
    "value": 26
  }, {
    "date": "2020-02-26",
    "value": 22
  }, {
    "date": "2020-03-04",
    "value": 20
  }, {
    "date": "2020-03-10",
    "value": 17
  }, {
    "date": "2020-03-17",
    "value": 12
  }, {
    "date": "2020-03-23",
    "value": 10
  }, {
    "date": "2020-03-26",
    "value": 12
  }, {
    "date": "2020-03-31",
    "value": 23
  }, {
    "date": "2020-04-08",
    "value": 20
  }, {
    "date": "2020-04-17",
    "value": 22
  }, {
    "date": "2020-04-22",
    "value": 20
  }, {
    "date": "2020-04-28",
    "value": 23
  }, {
    "date": "2020-05-05",
    "value": 22
  }, {
    "date": "2020-05-08",
    "value": 28
  }, {
    "date": "2020-05-14",
    "value": 25
  }, {
    "date": "2020-05-19",
    "value": 28
  }, {
    "date": "2020-05-28",
    "value": 31
  }, {
    "date": "2020-06-02",
    "value": 32
  }, {
    "date": "2020-06-04",
    "value": 37
  }, {
    "date": "2020-06-08",
    "value": 45
  }, {
    "date": "2020-06-11",
    "value": 36
  }, {
    "date": "2020-06-19",
    "value": 33
  }, {
    "date": "2020-06-26",
    "value": 32
  }, {
    "date": "2020-06-29",
    "value": 0
  }, {
    "date": "2020-09-03",
    "value": 0
  }, {
    "date": "2021-01-23",
    "value": 0
  }];

  // Set input format for the dates
  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value}"
  series.strokeWidth = 2;
  series.minBulletDistance = 15;

  // Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0;
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = "middle";
  series.tooltip.label.textValign = "middle";

  // Make bullets grow on hover
  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.strokeWidth = 2;
  bullet.circle.radius = 4;
  bullet.circle.fill = am4core.color("#fff");

  var bullethover = bullet.states.create("hover");
  bullethover.properties.scale = 1.3;

  // Make a panning cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "panXY";
  chart.cursor.xAxis = dateAxis;
  chart.cursor.snapToSeries = series;

  // Create vertical scrollbar and place it before the value axis
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.parent = chart.leftAxesContainer;
  chart.scrollbarY.toBack();

  // Create a horizontal scrollbar with previe and place it underneath the date axis
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series);
  chart.scrollbarX.parent = chart.bottomAxesContainer;

  dateAxis.start = 0.2;
  dateAxis.keepSelection = true;

  var title = chart.titles.create();
  title.text = "Chart6: Funko Historical P/E Ratio (TTM)";
  title.fontSize = 20;
  title.marginTop = 20;
  title.marginBottom = 20;


}); // end am4core.ready()