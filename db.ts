var sql = require("mssql");
const dbConfig = require("./configs/database.config.ts");



var pool = sql.connect(dbConfig, function (err) {

    if (err) console.log(err);

});

function getAllLoc(){
    let res = pool.request().query("select * from locataires");
    return res.recordsets;
}

console.log('connexion');

module.exports = pool;