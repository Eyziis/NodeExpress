var express = require('express');

var sample_locataire = require('../data/sample_locataire.ts');

var router = express.Router();

router.get('/', function(req, res, next) {

    res.send(sample_locataire);
});

router.get('/:locataireId', function(req, res, next) {
    const locataireId = req.params.locataireId;

    res.send(locataireId);

});

module.exports = router;
