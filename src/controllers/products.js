class ProductsController {

    get(req, res) {
        return res.send([{
            display_name: 'Default product',
            cover_image: 'hugestring.to.any.image',
            description: 'Default product description',
            price: 100 
        }])
    }

}

export default ProductsController