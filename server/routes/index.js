var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/phones', function(req, res, next) {
  res.status(200).json({
    message: 'Hello World'
  });
});

module.exports = router;
