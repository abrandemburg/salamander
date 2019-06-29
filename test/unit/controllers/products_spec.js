/* eslint-disable no-undef */
import ProductsController from '../../../src/controllers/products'
import sinon from 'sinon'

describe('Controllers :: Products', () => {

    const defaultProduct = [{
        display_name: 'Default product',
        cover_image: 'hugestring.to.any.image',
        description: 'Default product description',
        price: 100
    }]

    describe('get() products', () => {
        it('should return a list of products', () => {
            const request = {}
            const response = {
                send: sinon.spy()
            }

            const productsController = new ProductsController()
            productsController.get(request, response)

            expect(response.send.called).to.be.true
            expect(response.send.calledWith(defaultProduct)).to.be.true
        })
    })
})