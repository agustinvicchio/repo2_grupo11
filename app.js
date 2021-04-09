const express = require('express');
const color = require('colors');
const path = require('path');
const app = express();


//Config
app.use(express.static('public'));

//Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});


//Levantamos servidor y por si nos dan un puerto
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log("Server on port".trap.random, app.get('port'));