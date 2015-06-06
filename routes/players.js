var express = require('express');
var bcrypt = require('bcrypt');
var Player = require('../models/player');

var router = express.Router();

// GET -----------------------------------------------------------------------------------------------------------------

router.get('/', function (req, res, next) {
    Player.find(function (err, players) {
        if (err) {
            res
                .status(500)
                .send(err);
        }
        res
            .status(200)
            .json(players);
    });
});

router.get('/:id', function (req, res, next) {
    Player.findById(req.params.id, function (err, player) {
        if (err) {
            res
                .status(500)
                .send(err);
        }
        res
            .status(200)
            .json(player);
    });
});

// POST ----------------------------------------------------------------------------------------------------------------

router.post('/', function (req, res, next) {
    var player = new Player();
    player.login = req.body.login;
    player.score = 0;

    // encrypt password
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            player.password = hash;

            // save player into db
            player.save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send(err);
                }
                res
                    .status(201)
                    .json(player);
            });
        });
    });
});

router.post('/authenticate', function (req, res, next) {
    Player.findOne({'login': req.body.login}, function (err, player) {
        bcrypt.compare(req.body.password, player.password, function (err, result) {
            if (result) {
                res
                    .status(200)
                    .json(player);
            } else {
                res
                    .status(401)
                    .send();
            }
        });
    });
});

// PUT -----------------------------------------------------------------------------------------------------------------

router.put('/:id', function (req, res, next) {
    Player
        .findById(req.params.id)
        .exec()
        .then(function (player) {
            player.login = req.body.login;
            player.password = req.body.password;
            player.score = req.body.score;
            player.save(function (err) {
                if (err) {
                    throw err;
                }
                res
                    .status(200)
                    .json(player);
            });
        }, function (err) {
            res
                .status(500)
                .send(err);
        });
});

module.exports = router;