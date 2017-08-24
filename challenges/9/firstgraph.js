/*]
[|] DEFINE SVG's
[*/
const svg1 = dimple.newSvg('#FirstChartBox', 1000, 700)
/*]
[|] Make HTTP request using D3
[*/
d3.json('/get-presidents', (data) => {
    /*]
    [|] This looks like a chart 'declaration'.
    [|] It also looks like we are pumping in the predefined SVG area, AND,
    [|] the freshly recovered json data from the server.
    [*/
    const prez_chart = new dimple.chart(svg1, data)
    /*]
    [|] I don't know what setBounds does.
    [*/
    prez_chart.setBounds(75, 30, 900, 330)
    /*]
    [|] 
    [*/
    const x = prez_chart.addCategoryAxis('x', 'termStarts')
    const y = prez_chart.addCategoryAxis('y', 'party')
    x.ticks = 2
    x.fontSize = '14px'
    prez_chart.addSeries('party', dimple.plot.bubble)
    /*]
    [|] Add Legends
    [*/
    prez_chart.addLegend(180, 10, 360, 20, 'right')
    /*]
    [|] This part I understand.
    [*/
    prez_chart.draw()
})
/*]
[E] END
[*/
