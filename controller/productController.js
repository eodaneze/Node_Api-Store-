const Products = require('../models/productModels');
exports.addProducts =  async(req, res)=> {
    try{
       const product = new Products(req.body);
       const saveProduct = await product.save();
       res.status(200).json({message: "Product added successfully", saveProduct});
    }catch(err){
       res.status(500).json(err)
    }
}

exports.getProducts = async(req, res)=> {
    try{
       const product = await Products.find()
       res.status(200).json(product);
    }catch(err){
       res.status(500).json(err)
    }
}

exports.getProduct = async(req, res) => {
    try {
        const{id} = req.params;
         const product = await Products.findById(id);
         res.status(200).json(product);
    } catch (error) {
        res.status(500).json(err)
    }
}

exports.updateProduct =  async(req, res) => {
    try {
        const{id} = req.params;
         const product = await Products.findByIdAndUpdate(id,{
            $set: req.body
         }, {new: true});
         if(!product){
            res.status(401).json({message: `Could not find any product with the ID ${id}`})
         }
         res.status(200).json(product);
    } catch (error) {
        res.status(500).json(err)
    }
}

exports.deleteProduct = async(req, res) => {
    try {
        const{id} = req.params;
         const product = await Products.findByIdAndDelete(id);
         if(!product){
            res.status(401).json({message: `Could not find any product with the ID ${id}`})
         }
         res.status(200).json("Product have been deleted successfully");
    } catch (error) {
        res.status(500).json(err)
    }
}