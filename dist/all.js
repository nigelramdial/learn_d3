'use strict';

/*]
[|] DEFINE SVG's
[*/
var svg1 = dimple.newSvg('#FirstChartBox', 1000, 700);
/*]
[|] Make HTTP request using D3
[*/
d3.json('/get-presidents', function (data) {
    /*]
    [|] This looks like a chart 'declaration'.
    [|] It also looks like we are pumping in the predefined SVG area, AND,
    [|] the freshly recovered json data from the server.
    [*/
    var prez_chart = new dimple.chart(svg1, data);
    /*]
    [|] I don't know what setBounds does.
    [*/
    prez_chart.setBounds(75, 30, 900, 330);
    /*]
    [|] 
    [*/
    var x = prez_chart.addCategoryAxis('x', 'termStarts');
    var y = prez_chart.addCategoryAxis('y', 'party');
    x.ticks = 2;
    x.fontSize = '14px';
    prez_chart.addSeries('party', dimple.plot.bubble);
    /*]
    [|] Add Legends
    [*/
    prez_chart.addLegend(180, 10, 360, 20, 'right');
    /*]
    [|] This part I understand.
    [*/
    prez_chart.draw();
});
/*]
[E] END
[*/

/*]
[|] DEFINE an SVG using dimple.
[*/
var svg2 = dimple.newSvg('#PrezBarChartByParty', 700, 700);
/*]
[|] Make HTTP request using D3
[*/
d3.json('/get-presidents', function (data) {
    /*]
    [|] Declare a dimple chart object, using the 
    [*/
    var bar_chart = new dimple.chart(svg2, data);
    /*]
    [|] Determine where in the SVG the chart will exist.
    [|] Q: Can two charts exist in a single SVG?
    [*/
    bar_chart.setBounds(75, 30, 490, 330);
    /*]
    [|] Category axis means that the axis isn't meant to be viewed
    [|] in a numerical sense. It's titles or names only.
    [*/
    bar_chart.addCategoryAxis('x', 'party');
    /*]
    [|] make the font more readable
    [*/
    bar_chart.addMeasureAxis('y', 'party');
    /*]
    [|] Plot the data as a Series (What is a series in dimple, is it like pandas?)
    [*/
    bar_chart.addSeries('term', dimple.plot.bar);
    /*]
    [|] Decide where to put the legend.
    [*/
    bar_chart.addLegend(180, 10, 360, 20, 'right');
    /*]
    [|] Draw the damned chart.
    [*/
    bar_chart.draw();
});
/*]
[E] END
[*/