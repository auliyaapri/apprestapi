// Berfungsi agar code javascript ini lebih di ketatin apakah salah bikin variable dsb
'use strict'; 
/* 
 Jadi ketika nanti responnya bener atau oke, dari rest api nya.
 Maka akan diberikan sebuah respon dalam bentuk function
*/
exports.ok = function (value, rest) {
    var data = {
        'status':200,
        'values':values
    };
     res.json(data);
     res.end();    
}