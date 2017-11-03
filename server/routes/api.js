const express = require('express');
const router = express.Router();
const Place = require('../models/Place');
const placesDB = require('../dbClients/placesDB')


/* GET questions list from db. */
router.get('/questions', function (req, res, next) {
    res.send(
        [{
            title: 'Questions1'
        }, {
            title: 'Questions2'
        }, {
            title: 'Questions3'
        }]
    );
});

router.get('/places', function (req, res, next) {
    Place.find({}, (error, data) => {
        res.json(data)
    })
})

router.post('/api/places', function(req, res, next) {
    res.render('new-place', { title: 'Suggest New Place' });
  });

module.exports = router;
