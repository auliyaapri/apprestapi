'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');
    
    /* Jadi ketika kita melakukan exports, dengan cara memanggil
       controllernya ketika kita halamannya slash(/). Jadi nanti .g(jsonku.index); */

    /* jsonku (controller), dan di controller kan ada menu index,
       maka akan ada response.ok;. Setelah itu  controller akan respon dari res.js yang status,
       kalau values(res.js) itu ('Aplikasi REST API BERJALAN') */
       
    app.route('/')
        .get(jsonku.index);
    
}
