var express = require('express');
var Player = require('../models/player');

var router = express.Router();

// GET -----------------------------------------------------------------------------------------------------------------

router.get('/', function (req, res, next) {
    Player.find(function(err, players) {
        if (err) {
            res.send(err);
        }
        res
            .type('json')
            .json(players);
    });
});

// POST ----------------------------------------------------------------------------------------------------------------

router.post('/', function(req, res, next) {
    var player = new Player();
    player.login = req.body.login;
    player.password = req.body.password;
    player.faction = req.body.faction;

    player.save(function(err) {
        if (err) {
            res.send(err);
        }
        res
            .type('json')
            .status(201)
            .json({message: 'Created'});
    });
});

module.exports = router;