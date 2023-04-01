// Panggil library dari MYSQL
var mysql = require('mysql');

// Buat koneksi database
const connect = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
})
connect.connect((err)=> {
    if (err) throw err;
    console.log('Mysql terkoneksi');
    
})

module.exports = connect;