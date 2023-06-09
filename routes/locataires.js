var express = require('express');

var router = express.Router();

const {Locataire} = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', async function (req, res, next) {
    var Result = Locataire.findAll();
    Result.then((r) => {
        res.status(200).json(r);
    }).catch((err) => {
        res.status(500).json(err);
    })
});

router.get('/mock', function (req, res, next) {
    Locataire.bulkCreate([{
        nom: 'Frodon Sacquet',
        age: '38',
        email: "frodon@DeLaComté.unique",
        date_e: '1997-06-08'
    }, {
        nom: 'Tanjiro Kamado',
        age: '16',
        email: "antidemon@nezuko.pillier",
        date_e: '2019-06-08'
    }]).then((r) => {

    }).catch((error) => {
        res.status(500);
    })


    res.send('ok');
});

router.get('/search', async function (req, res, next) {
    var Result;
    if (req.query.id) {
        var Result = Locataire.findByPk(req.query.id);
        Result.then((r) => {
            res.status(200).json(r);
        })
    } else if (req.query.nom && req.query.type) {

        if (req.params.type === "Contient") {
            Result = Locataire.findAll({where: {nom: {[Op.like]: '%' + req.query.nom + '%'}}})
        } else {
            Result = Locataire.findAll({where: {nom: {[Op.like]: req.query.nom + '%'}}})
        }

        Result.then((r) => {
            res.status(200).json(r);
        }).catch((err) => {
            res.status(500).json(err);
        })
    } else {
        if (req.query.nom === '') {
            Result = Locataire.findAll()
            Result.then((r) => {
                res.status(200).json(r);
            })
        } else {
            res.status(400);
        }
    }


});
router.delete('/:locataireId', async function (req, res, next) {
    var Result = Locataire.destroy({where: {id: req.params.locataireId}});
    Result.then((r) => {
        res.status(200).json('locataire supprimé');
    }).catch((err) => {
        res.status(500).json(err);
    })
});

router.put('/', async function (req, res, next) {
    var Result = Locataire.update(req.body, {where: {id: req.body.id}})
    Result.then((r) => {
        res.status(200).json(req.body);
    }).catch((err) => {
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
