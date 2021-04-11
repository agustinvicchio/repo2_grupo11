const express = require('express');
const app = express ();
const port = 3000;
const path = require('path');
app.use (express.static('public'));


app.get ('/', (req,res) => { res.sendFile (path.join(__dirname,'/views/product.html'));});
app.get ('/', (req,res) => { res.sendFile (path.join(__dirname,'/views/index.html'));});


app.listen (3000, () => { console.log('servidor corriendo')});