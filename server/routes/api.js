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
    const callback = (error, places) => {
        res.send(places);
    };
    placesDB.getPlaces({}, callback);
})

router.post('/places', function (req, res, next) {
    const callback = () => { res.send(200) }
    placesDB.addNewPlace(req.body, callback)
});

router.get('/places/:placeId', function (req, res, next) {
    const body = req.body;
    const placeId = req.params.placeId;

    const callback = (error, data) => {
        if (error) {
            console.error(error);
            return res.send(500);
        }
        res.json(data);
    }
    placesDB.viewPlaces({ _id: placeId }, callback);
});

module.exports = router
