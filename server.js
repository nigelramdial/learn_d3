const express = require('express')
const jsonfile = require('jsonfile')
const path = require('path')
/*]
[|] configure app
[*/
const app = express()
app.use(express.static('./dist'))
/*]
[|] (-------------------------)
[|]    configure post routes
[|] (-------------------------)
[*/

/*]
[|] (-------------------------)
[|]    configure GET routes
[|] (-------------------------)
[*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/main.html'))
})
/*]
[|] Get presidential data [ Thanks r/datasets! ]
[*/
app.get('/get-presidents', (req, res) => {
    /*]
    [|] create filename variable
    [*/
    const filename = './data/presidents.json'
    /*]
    [|] Read the presidents json file in the data folder.
    [*/
    jsonfile.readFile(filename, (err, data) => {
        if(!err){
            res.send(data)
        } else {
            console.log(err)
        }
    })
})
/*]
[|] Listen on port 5000
[*/
app.listen(5000, () => {
    console.log('listening on port 5000')
})