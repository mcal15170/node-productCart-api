`use strict`
const Productmodel = require('./../Model/product');
const responce = require('./../Config/responceservice');



module.exports = {
    addproduct: async function(req, res) {
        const data = req.body;
        data.images = {};
        data.price = {};
        data.images.img = 'public/images/uploads/' + req.files[0].filename;
        data.images.thumbnail = 'public/images/uploads/' + req.files[1].filename;
        data.images.brandimg = 'public/images/uploads/' + req.files[2].filename;
        const savedata = await Productmodel.create(data);
        if(savedata){
            return res.json(responce.sucess(savedata));
        } else {
            return res.json(responce.error('data not inserted'));
        }
    
    },
     deleteproduct:  function(req, res) {
         const id = req.body.id;
         Productmodel.deleteOne({id: id}, async function(err, data){
             if(err){
                return res.json(await responce.error(err));
             } else {
                return res.json(await responce.sucess(data));
             }
         })
     },
     updateproduct: async function (req, res) {
         const product = req.body.product;
         const productdata = await Productmodel.findOne({id: product.id});
         if(productdata){
            [productdata.title,  productdata.desc,  productdata.price,  productdata.qty,  productdata.img,  productdata.activ,  productdata.caregory, productdata.cartQty] = [product.title,  product.desc,  product.price,  product.qty,  product.img,  product.activ,  product.caregory, product.cartQty];
            productdata.save().then(data => {
                return res.json(responce.sucess(data));
            })
         } else {
            return res.json(responce.error('data not found'));
         }
    
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