/* eslint-disable no-undef */
describe('Routes :: Products', () => {
    const defaultProduct = {
        display_name: 'Default product',
        cover_image: 'hugestring.to.any.image',
        description: 'Default product description',
        price: 100
    }

    describe('GET /products', () => {
        it('should return a list of products', done => {
            
            request
            .get('/products')
            .end((err, res) => {
                expect(res.body[0]).to.eql(defaultProduct)
                done(err)
            })
        })
    })
})