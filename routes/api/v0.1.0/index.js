var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


require("./foundation/token")(router);

require("./foundation/upload")(router);

require("./foundation/download")(router);

module.exports = router;
