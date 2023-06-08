var express = require('express');

var router = express.Router();

const {Locataire} = require("../models");

router.get('/', async function (req, res, next) {
    var Result = await Locataire.findAll();
    res.send(Result);

});

router.get('/test', function (req, res, next) {
    Locataire.create({
        nom: 'Frodon Sacquet',
        age: '38'
    })
    res.send('ok');
});

router.get('/:locataireId', async function (req, res, next) {
    var Result = Locataire.findByPk(req.params.locataireId);
    Result.then((r) => {
        var loc = [];
        loc[0] = r
        res.send(loc);
    })
});

module.exports = router;
