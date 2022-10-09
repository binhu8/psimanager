const express = require('express');
const app = express();
const database = require('./src/database/database');
const cors = require('cors');
const googleApiFolder = "1ekp2Z9AP8jnslJGF8g7o4pUc99xxze04";
const {google} = require('googleapis');
let port = process.env.PORT || 3003

app.use(express.json());
app.use(cors());

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