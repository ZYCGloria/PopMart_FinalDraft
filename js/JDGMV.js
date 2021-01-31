am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
     // Create chart instance
    var chart = am4core.create("chartdiv1", am4charts.XYChart);

    var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Alibaba, JD.com)";
    label.align = "center";
    label.isMeasured = false;
    label.x = 490;
    label.y = 380;
    
    // Add data
    chart.data = [{
      
      "year": 2017,
      "Alibaba": 168.2,
      "JD": 127.1
    },{
      "year": 2018,
      "Alibaba": 213.5,
      "JD": 159.8
    },{
      "year": 2019,
      "Alibaba": 268.4,
      "JD": 204.4
    },{
      "year": 2020,
      "Alibaba": 498.2,
      "JD": 271.5
    }];
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    
    var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
    valueAxis.renderer.opposite = true;
    
    // Create series
    function createSeries(field, name) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "year";
      series.name = name;
      series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
      series.columns.template.height = am4core.percent(100);
      series.sequencedInterpolation = true;
    
      var valueLabel = series.bullets.push(new am4charts.LabelBullet());
      valueLabel.label.text = "{valueX}";
      valueLabel.label.horizontalCenter = "left";
      valueLabel.label.dx = 10;
      valueLabel.label.hideOversized = false;
      valueLabel.label.truncate = false;
    
      var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
      categoryLabel.label.text = "{name}";
      categoryLabel.label.horizontalCenter = "right";
      categoryLabel.label.dx = -10;
      categoryLabel.label.fill = am4core.color("#fff");
      categoryLabel.label.hideOversized = false;
      categoryLabel.label.truncate = false;
    }
    
    createSeries("Alibaba", "Alibaba");
    createSeries("JD", "JD");

    var title = chart.titles.create();
    title.text = "Alibaba and JD.com Singles Day Total GMV (RMB billion)";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;
    
    }); // end am4core.ready()