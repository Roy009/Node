const http = require('http');
const data = {
    name: 'Rohit',
    age: '22'
}
const server = http.createServer((req,res) => {
    console.log("server started");
    res.setHeader('Dummy','Dummy value')
    res.setHeader('Content-Type', 'application/json')
    // res.end('<h1>Hello, World!</h1>')
    res.end(JSON.stringify(data));
})
server.listen(8080);