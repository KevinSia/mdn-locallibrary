// routes with '/users' prepended
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next){
	// getting name from query parameters
  res.render('users/cool', { name: req.query.name })
})

router.get('/:name/cool', function(req, res, next){
	// getting name from route parameters
	res.render('users/cool', { name: req.params.name })
})

module.exports = router;
