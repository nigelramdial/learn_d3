/*]
[|] DEFINE an SVG using dimple.
[*/
const svg2 = dimple.newSvg('#PrezBarChartByParty', 700, 700)
/*]
[|] Make HTTP request using D3
[*/
d3.json('/get-presidents', (data) => {
    /*]
    [|] Declare a dimple chart object, using the 
    [*/
    const bar_chart = new dimple.chart(svg2, data)
    /*]
    [|] Determine where in the SVG the chart will exist.
    [|] Q: Can two charts exist in a single SVG?
    [*/
    bar_chart.setBounds(75, 30, 490, 330)
    /*]
    [|] Category axis means that the axis isn't meant to be viewed
    [|] in a numerical sense. It's titles or names only.
    [*/
    bar_chart.addCategoryAxis('x', 'party')
    /*]
    [|] make the font more readable
    [*/
    bar_chart.addMeasureAxis('y', 'party')
    /*]
    [|] Plot the data as a Series (What is a series in dimple, is it like pandas?)
    [*/
    bar_chart.addSeries('term', dimple.plot.bar)
    /*]
    [|] Decide where to put the legend.
    [*/
    bar_chart.addLegend(180, 10, 360, 20, 'right')
    /*]
    [|] Draw the damned chart.
    [*/
    bar_chart.draw()
})
/*]
[E] END
[*/
