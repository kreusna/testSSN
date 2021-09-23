var express = require('express');
var router = express.Router();
const { generateHashAndSignature } = require('../helper');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signature', async function (req, res, next) {
  try {
    const { secretKey, message } = req.body
    const generateSignature = await generateHashAndSignature(secretKey, message);
    res.send(generateSignature);
  } catch (error) {
    console.log('==========', error)
    return res.status(401).send({ message: error.message })
  }

});

module.exports = router;
