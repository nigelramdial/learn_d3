const express = require('express')
const jsonfile = require('jsonfile')
/*]
[|] configure app
[*/
const app = express()
/*]
[|] configure routes
[*/
app.post('/get-presidents', (req, res) => {
    /*]
    [|] create filename variable
    [*/
    const filename = './data/presidents.json'
    /*]
    [|] Read the presidents json file in the data folder.
    [*/
    jsonfile.readFile(filename, (err, data) => {
        res.send(data)
    })
})
/*]
[|] Listen on port 5000
[*/
app.listen(5000, () => {
    console.log('listening on port 5000')
})