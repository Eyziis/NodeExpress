var express = require('express');

var sample_locataire = require('../data/sample_locataire.ts');

var pool = require('../db.ts');
const sql = require("mssql");

const dbConfig = require("../configs/database.config.ts");

var router = express.Router();


router.get('/', function(req, res, next) {

    res.send(sample_locataire);
});

router.get('/:locataireId', function(req, res, next) {
    //const locataireId = req.params.locataireId;

    var pool = sql.connect(dbConfig, function (err) {

        if (err) console.log(err);

    });

    try {
        let resa = pool.request().query("select * from locataires");

        resa.then((result)=>{
            res.send(result);
        })

    }catch(error){
        res.send(error);
    }
});



module.exports = router;
