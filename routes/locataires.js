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
        //res.send(200,r);
        res.status(200).json(r);
    })
});
router.delete('/:locataireId', async function (req, res, next) {
    var Result = Locataire.destroy({where: { id:req.params.locataireId}});
    Result.then((r) => {
        res.status(200);
    })
});

router.put('/', async function (req, res, next) {
    var Result = Locataire.update(req.body, {where: {id: req.body.id}})
    Result.then((r) => {
        res.status(200).json(req.body);
    }).catch((err)=>{
        res.status(500).json(err);
    })
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
