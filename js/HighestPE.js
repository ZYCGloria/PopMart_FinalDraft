am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // am4core.useTheme(am4themes_material);
  // Themes end
  am4core.useTheme(am4themes_kelly);
  
  
  // Create chart instance
  var chart = am4core.create("chartdiv5", am4charts.RadarChart);
  
  var label = chart.chartContainer.createChild(am4core.Label);
  label.text = "(Source: Bloomberg)";
  label.align = "center";
  label.isMeasured = false;
  label.fontSize = 13;
  label.x = 50;
  label.y = 300;


  // Add data
  chart.data = [{
    "category": "Bandai",
    "value": 39,
    "full": 250
  }, {
    "category": "Disney",
    "value": 42,
    "full": 250
  }, {
    "category": "Funko",
    "value": 137,
    "full": 250
  }, {
    "category": "Pop Mart",
    "value": 219,
    "full": 250
  }];


  
  // Make chart not full circle
  chart.startAngle = -90;
  chart.endAngle = 180;
  chart.innerRadius = am4core.percent(20);
  
   
  
  // Create axes
  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.grid.template.strokeOpacity = 0;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.fontWeight = 500;
  categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
    return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
  });
  categoryAxis.renderer.minGridDistance = 10;
  
  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.strokeOpacity = 0;
  valueAxis.min = 0;
  valueAxis.max = 230;
  valueAxis.strictMinMax = true;
  
  // Create series
  var series1 = chart.series.push(new am4charts.RadarColumnSeries());
  series1.dataFields.valueX = "full";
  series1.dataFields.categoryY = "category";
  series1.clustered = false;
  series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
  series1.columns.template.fillOpacity = 0.08;
  series1.columns.template.cornerRadiusTopLeft = 20;
  series1.columns.template.strokeWidth = 0;
  series1.columns.template.radarColumn.cornerRadius = 20;
  
  var series2 = chart.series.push(new am4charts.RadarColumnSeries());
  series2.dataFields.valueX = "value";
  series2.dataFields.categoryY = "category";
  series2.clustered = false;
  series2.columns.template.strokeWidth = 0;
  series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
  series2.columns.template.radarColumn.cornerRadius = 20;
  
  series2.columns.template.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });
  

  // Add cursor
  chart.cursor = new am4charts.RadarCursor();

  var title = chart.titles.create();
  title.text = "Chart5: Highest Historical Price-to-Earnings (P/E) Ratio";
  title.fontSize = 20;
  title.marginTop = 20;
  title.marginBottom = 20;


                                                                                                                                                                                                                        
  
  }); // end am4core.ready()