am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv2", am4charts.XYChart);
    chart.numberFormatter.numberFormat = "#.#'%'";

    var label = chart.chartContainer.createChild(am4core.Label);
    label.text = "(Sources: Company Reports)";
    label.align = "center";
    label.isMeasured = false;
    label.fontSize = 13;
    label.x = 190;
    label.y = 300;

    // Add data
    chart.data = [{
        "Category": 2017,
        "Bandai": 36.1,
        "Funko": 38.5,
        "PopMart": 47.6,
    },
    {
        "Category": 2018,
        "Bandai": 35.6,
        "Funko": 37.6,
        "PopMart": 57.9,
    },
    {
        "Category": 2019,
        "Bandai": 35.9,
        "Funko": 35.5,
        "PopMart": 64.8,
    }];

    chart.data.forEach(function (o) {

        o.Category = "" + o.Category;
        o["Project Development"] = o["Project Development"] || undefined;

    });

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    ["Bandai",
        "Funko",
        "PopMart"].forEach(function (elem) {

            // Create series
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = elem;
            series.dataFields.dateX = "Category";
            series.tooltipText = elem + ": {valueY}"
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

            series.legendSettings.valueText = elem;
        });



    // // Create vertical scrollbar and place it before the value axis
    // chart.scrollbarY = new am4core.Scrollbar();
    // chart.scrollbarY.parent = chart.leftAxesContainer;
    // chart.scrollbarY.toBack();

    // // Create a horizontal scrollbar with previe and place it underneath the date axis
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series);
    // chart.scrollbarX.parent = chart.bottomAxesContainer;

    // chart.events.on("ready", function () {
    //     dateAxis.zoom({ start: 0.79, end: 1 });

    // });

    chart.legend = new am4charts.Legend();

    var title = chart.titles.create();
    title.text = "Chart2: Gross Proit Margin Comparison";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;

}); // end am4core.ready()