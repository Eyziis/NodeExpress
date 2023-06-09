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
        age: '38',
        email: "frodon@DeLaComté.unique",
        date_e: '1997-06-08'
    })
    Locataire.create({
        nom: 'Tanjiro Kamado',
        age: '16',
        email: "antidemon@nezuko.pillier",
        date_e: '2019-06-08'
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
router.delete('/:locataireId', async function (req, res, next) {
    var Result = Locataire.destroy({where: { id:req.params.locataireId}});
    Result.then((r) => {
        res.send({code:200, content:'SUCCES'});
    })
});

router.put('/', async function (req, res, next) {
    console.log(req.body)

    Locataire.update(req.body, {where: {id: req.body.id}})
    res.send(req.body)
    /*
    var Result = Locataire.destroy({where: { id:req.params.locataireId}});
    Result.then((r) => {
        res.send({code:200, content:'SUCCES'});
    })

     */
});

router.post('/', async function (req, res, next) {
    var loc = req.body;
    delete loc.id;

    var Result = Locataire.create(loc)
    Result.then((r) => {
        res.send(r.dataValues);
    })


});

module.exports = router;
