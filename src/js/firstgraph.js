/*]
[|] This seems to be where we are defining a 'space' for the SVG to exist.
[*/
const svg = dimple.newSvg('#FirstChartBox', 600, 400)
/*]
[|] Now we are using D3 stuff.
[*/
d3.json('/get-presidents', (data) => {
    console.log(data)
    /*]
    [|] I want to get first term dates from data set
    [*/
    const term_starts = []
    data.forEach((n) => {
        term_starts.push(n.termStarts)
    })
    console.log(term_starts)
    /*]
    [|] This looks like a chart 'declaration'.
    [|] It also looks like we are pumping in the predefined SVG area, AND,
    [|] the freshly recovered json data from the server.
    [*/
    const prez_chart = new dimple.chart(svg, data)
    /*]
    [|] I don't know what setBounds does.
    [*/
    prez_chart.setBounds(75, 30, 490, 330)
    prez_chart.addMeasureAxis('x', 'Hmmm')
    const y = prez_chart.addCategoryAxis('y', 'aha.')
    y.addOrderRule('termStart') // --> I have no idea.
    prez_chart.addSeries('Channel', dimple.plot.bubble)
    prez_chart.addLegend(180, 10, 360, 20, 'right')
    /*]
    [|] This part I understand.
    [*/
    prez_chart.draw()

    console.log(prez_chart.series)
})
/*]
[E] END
[*/
// var svg = dimple.newSvg("#chartContainer", 590, 400);
// d3.tsv("/data/example_data.tsv", function (data) {
//   var myChart = new dimple.chart(svg, data);
//   myChart.setBounds(75, 30, 490, 330)
//   myChart.addMeasureAxis("x", "Unit Sales");
//   var y = myChart.addCategoryAxis("y", "Month");
//   y.addOrderRule("Date");
//   myChart.addSeries("Channel", dimple.plot.bubble);
//   myChart.addLegend(180, 10, 360, 20, "right");
//   myChart.draw();
// });

