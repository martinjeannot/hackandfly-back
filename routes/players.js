var express = require('express');
var bcrypt = require('bcrypt');
var Player = require('../models/player');

var router = express.Router();

// GET -----------------------------------------------------------------------------------------------------------------

router.get('/', function (req, res, next) {
    Player.find(function (err, players) {
        if (err) {
            res.send(err);
        }
        res
            .type('json')
            .json(players);
    });
});

// POST ----------------------------------------------------------------------------------------------------------------

router.post('/', function (req, res, next) {
    var player = new Player();
    player.login = req.body.login;

    // encrypt password
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            player.password = hash;

            // save player into db
            player.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res
                    .type('json')
                    .status(201)
                    .json(player);
            });
        })
    });
});

module.exports = router;