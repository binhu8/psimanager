const express = require('express');
const app = express();
const database = require('./src/database/database');
const cors = require('cors');
const googleApiFolder = "1ekp2Z9AP8jnslJGF8g7o4pUc99xxze04";
const {google} = require('googleapis');
let port = process.env.PORT || 3003

app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/add', require('./src/routes/event.routes'));
app.use('/clientes', require('./src/routes/getClientes.routes'));
app.use('/add-cliente', require('./src/routes/cliente.routes'));
app.use('/events', require('./src/routes/event.routes'));
app.use('/login', require('./src/routes/login.routes'));
app.use('/user', require('./src/routes/usuario.routes'));
app.use('/', require('./src/routes/getUserData.routes'));

app.listen(port, ()=>{
    console.log('servidor online')
})