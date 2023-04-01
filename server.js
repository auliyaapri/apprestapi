// tulis express lalu enter
const express = require('express');             // Untuk memanggil library express js
const bodyParser = require('body-parser');      // Untuk memanggil library body-parser
const app = express();                          // app ini fungsi secara global untuk memanggil express js

// Parse application/json 
app.use(bodyParser.urlencoded({extended: true}));   // tulis bodyParser.url (ENTER)
app.use(bodyParser.json());                         // tulis bodyParser.json (ENTER)

// Panggil routes. Jadi routes.js gak akan kepanggil kalau di server.js gak kepanggil
var routes = require('./routes');
routes(app)

 app.listen(3000, () => {                           // tulis app.listern (ENTER)
    console.log(`Server started on port`);
 });






