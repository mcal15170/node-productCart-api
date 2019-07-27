`use strict`
const Productmodel = require('./../Model/product');


module.exports = {
    addproduct: function(req, res) {
        const product = req.body;
        Productmodel.create(product, function(err, data){
            if(err){
                return res.send(err);
            } else {
                return res.send(data);
            }
        });
    },
     deleteproduct: function(req, res) {
         const id = req.body.id;
         Productmodel.deleteOne({id: id}, function(err, data){
             if(err){
                 return res.send(err);
             } else {
                 return res.send(data);
             }
         })
     },
     updateproduct: async function (req, res) {
         const product = req.body.product;
         const productdata = await Productmodel.findOne({id: product.id});
        [productdata.title,  productdata.desc,  productdata.price,  productdata.qty,  productdata.img,  productdata.activ,  productdata.caregory, productdata.cartQty] = [product.title,  product.desc,  product.price,  product.qty,  product.img,  product.activ,  product.caregory, product.cartQty];
        productdata.save().then(data => {
            return res.send(data);
        })
     },
     getallproduct: async function(req, res) {
         const data = await Productmodel.find({});
         return res.send(data);
     },
     getproductbyid: async function(req, res) {
         const id = req.body.id;
         const data = await Productmodel.findOne({id: id});
         return res.send(data);
     }
}