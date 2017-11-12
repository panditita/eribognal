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

router.post('/places', function(req, res, next) {

    try {

        placesDB.addNewPlace(req.body)
        // .then(item => {
        //     res.send("Place saved to database");
        // })
        // .catch(err => {
        //     res.status(400).send("Unable to save to database");
        // });
     
    } catch (e)
    {
        console.error(e);
    }
   
});

module.exports = router;
