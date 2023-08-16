const router = require('express').Router();
const {
    addProducts, 
    getProducts, 
    getProduct, 
    updateProduct,
    deleteProduct 
} = require('../controller/productController');



router.post('/products',addProducts)
router.get('/', getProducts)
router.get('/:id', getProduct)
router.put('/:id',updateProduct)
router.delete('/:id', deleteProduct)
module.exports = router