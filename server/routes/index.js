var express = require('express');
var router = express.Router();
const phones = require('../data/phones.json');

/* GET home page. */
router.get('/phones', function(req, res, next) {
  res.status(200).json({
    data: phones
  });
});

module.exports = router;
