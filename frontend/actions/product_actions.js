import * as ProductAPIUtil from '../util/product_api_utl'

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_EACH_PRODUCT = "RECEIVE_EACH_PRODUCT"

const receiveAllProducts = products => ({
    type: RECEIVE_ALL_PRODUCTS,
    products
});

const receiveEachProduct = product => ({
    type: RECEIVE_EACH_PRODUCT,
    product 
});


export const allProducts = () => dispatch => {
    return ProductAPIUtil.allProducts().then(products => (
        dispatch(receiveAllProducts(products))
    ))
};

export const eachProduct = (productId) => dispatch => {
    return ProductAPIUtil.eachProduct(productId).then((product) =>(
        dispatch(receiveEachProduct(product))
    ))
};