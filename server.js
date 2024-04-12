const express = require('express')

const app = express() // Init express framework

app.use(express.static('public')) // Serve static public folder

app.get('/', function(req, res) { // Serve index.html path
    res.sendFile(__dirname + 'public/index.html')
})

let server = app.listen(8888, function() {
    console.log('App server is running on port 8888')
})