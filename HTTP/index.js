const http = require('http');
const fs = require('fs');
// const data = {
//     name: 'Rohit',
//     age: '22'
// }
const index = fs.readFileSync('index.html','utf-8');
const data = fs.readFileSync('data.json','utf-8')
const server = http.createServer((req,res) => {
    console.log("server started");
    // res.setHeader('Dummy','Dummy value')
    res.setHeader('Content-Type','application/json');
    res.setHeader('Content-Type', 'text/html')
    // res.end('<h1>Hello, World!</h1>')
    // res.end(JSON.stringify(data)); 
    // res.end(index)
    res.end(data)
})
server.listen(8080);