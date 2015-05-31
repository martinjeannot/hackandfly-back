var express = require('express');
var User = require('../models/user');

var router = express.Router();

// GET -----------------------------------------------------------------------------------------------------------------

// /users
router.get('/', function (req, res, next) {
    User.find(function(err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

// POST ----------------------------------------------------------------------------------------------------------------

// /users
router.post('/', function (req, res, next) {
    var user = new User();
    user.name = req.body.name;

    user.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Created'});
    });
});

module.exports = router;
