const fs = require('fs')
const express = require('express')
const server = express();
const data = fs.readFileSync('data.json');

//MIDDLEWARE
server.use((req,res,next) => {
    console.log(req.method, req.ip, req.hostname, req.get('User-Agent'));
    next()
})

// API - ENDPOINT - ROUTE
server.get('/', (req,res) => {
    // res.send('<h1>Hello, World From Node Js.</h1>')
    // res.sendFile('C:\\Users\\ROHIT ROY\\OneDrive\\Desktop\\Node\\Express\\index.html');
    res.json({type: 'GET'})
})
// server.post('/',(req,res) => {
//     res.json({type: 'POST'})
// })
// server.put('/',(req,res) => {
//     res.json({type: 'PUT'})
// })
// server.delete('/',(req,res) => {
//     res.json({type: 'DELETE'})
// })
// server.patch('/',(req,res) => {
//     res.json({type: 'PATCH'})
// })
const auth = (req,res,next) => {
    console.log(req.query);
    if(req.query.password === '123'){
        next()
    }else{
        res.sendStatus(401);
    }
}
server.use(auth)
server.listen(8080, () => {
    console.log("Server Started");
});












