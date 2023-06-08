const ProductModel = require('../models/productModel.js');

exports.CreateProduct = async(req,res)=>{
    try {
        const Product= new ProductModel({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            createdAt: req.body.createdAt
        });
        const result = await Product.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error:error.message})
}
}


exports.GetProduct =  async (req, res) => {
    try {
        let Query = {};
        let Projection = "name price";
        const products = await ProductModel.find(Query,Projection);
        res.status(200).json({status:"Success",data:products});
        
    } catch (error) {
        res.status(400).json({status:"fail",data:err});
    }
    
  }