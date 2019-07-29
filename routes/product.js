var express = require('express');
var router = express.Router();
var product = require('./../controller/ProductCOntroller');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+ '.jpeg')
    }
});
var upload = multer({storage: storage});

/* GET home page. */
router.post('/addproduct', upload.single('img'), async function(req, res, next) {
  req.body.img = 'public/images/uploads/' + req.file.filename;
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
