let express = require('express');
let app = express();
let path = require('path')
require('dotenv').config()


app.use(function middleware(req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next();
});

app.get("/now", function middleware(req, res, next){
  req.time = new Date().toString()
  next()
},(req, res)=>{
   res.json({time: req.time})
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
});

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE === 'uppercase' ? res.json({"message": "HELLO JSON"}) :
    res.json({"message": "Hello json"})
});






































 module.exports = app;
