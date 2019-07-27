var express = require('express');
var router = express.Router();
var product = require('./../controller/ProductCOntroller');

/* GET home page. */
router.post('/addproduct', async function(req, res, next) {
  const data = await product.addproduct(req, res);
  res.send(data);
});

router.post('/deleteproduct', async function(req, res, next) {
  const data = await product.deleteproduct(req, res);
  res.send(data);
});
router.post('/updateproduct', async function(req, res, next) {
  const data = await product.updateproduct(req, res);
  res.send(data);
});
router.get('/getallproduct', async function(req, res, next) {
  const data = await product.getallproduct();
  res.send(data);
});
router.post('/getproductbyid', async function(req, res, next) {
  const data = await product.getproductbyid(req, res);
  res.send(data);
});

module.exports = router;
