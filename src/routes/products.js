import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.send([{
    display_name: 'Default product',
    cover_image: 'hugestring.to.any.image',
    description: 'Default product description',
    price: 100
    }]
))

export default router