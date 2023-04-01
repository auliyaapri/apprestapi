'use strict';

var response = require('./res');
var connection = require('./koneksi');

// Membuat modul namanya index
exports.index = function (req, res) {
    response.ok('Aplikasi REST API BERJALAN');
}

