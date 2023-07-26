const fs = require('fs')
const express = require('express')
const server = express();
const morgan = require('morgan')
const data = fs.readFileSync('data.json');

//MIDDLEWARE
server.use(morgan('dev'))
server.use(express.static('public'))
server.use(express.json())
server.use((req,res,next) => {
    console.log(req.method, req.ip, req.hostname, req.get('User-Agent'));
    next()
})

// API - ENDPOINT - ROUTE
const auth = (req,res,next) => {
    // console.log(req.query);
    // if(req.query.password === '123'){
    //     next()
    // }else{
    //     res.sendStatus(401);
    // }
    if(req.body.password === '123'){
        next()
    }else{
        res.sendStatus(401);
    }
}
server.get('/', auth ,(req,res) => {
    // res.send('<h1>Hello, World From Node Js.</h1>')
    // res.sendFile('C:\\Users\\ROHIT ROY\\OneDrive\\Desktop\\Node\\Express\\index.html');
    res.json({type: 'GET'})
})
server.post('/', auth, (req,res) => {
    res.json({type: 'POST'})
})
// server.put('/',(req,res) => {
//     res.json({type: 'PUT'})
// })
// server.delete('/',(req,res) => {
//     res.json({type: 'DELETE'})
// })
// server.patch('/',(req,res) => {
//     res.json({type: 'PATCH'})
// })
// server.use(auth)
server.listen(8080, () => {
    console.log("Server Started");
});












