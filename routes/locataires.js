var express = require('express');

var sample_locataire = require('../data/sample_locataire.ts');

//var db = require('../db.ts');

const dbConfig = require("../configs/database.config.ts");

var router = express.Router();

const db = require('../models');
//const Locataire  = require('../models/Locataire.js');

const { Locataire } = require("../models");

router.get('/', function(req, res, next) {

    res.send(sample_locataire);
});

router.get('/test', function(req, res, next) {
    Locataire.create({
        nom:'Kevin Bastin',
        age:'29'
    })
    res.send('ok');
});

router.get('/:locataireId', function(req, res, next) {
    //const locataireId = req.params.locataireId;



    try {
        let resa = db.request().query("select * from locataires");

        resa.then((result)=>{
            res.send(result.recordsets);
        })

    }catch(error){
        res.send(error);
    }
});



module.exports = router;
