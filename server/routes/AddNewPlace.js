var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('new-place', { title: 'Suggest New Place' });
});

module.exports = router;
