let express = require('express');
let app = express();
require('dotenv').config()


app.get('/', (req, res) => {
  res.send('Servidor Express rodando! Acesse a rota /json para ver a resposta JSON.');
});

app.get('/json', (req, res) => {
    process.env.MESSAGE_STYLE === 'uppercase' ? res.json({"message": "HELLO JSON"}) :
    res.json({"message": "Hello json"})
});






































 module.exports = app;
