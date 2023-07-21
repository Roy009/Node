const fs = require('fs')
const express = require('express')
const server = express();
const data = fs.readFileSync('data.json');
server.get('/', (req,res) => {
    // res.send('<h1>Hello, World From Node Js.</h1>')
    // res.sendFile('C:\\Users\\ROHIT ROY\\OneDrive\\Desktop\\Node\\Express\\index.html');
    res.json(data)
})

server.listen(8080, () => {
    console.log("Server Started");
});