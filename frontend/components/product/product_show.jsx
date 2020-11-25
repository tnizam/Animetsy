import React from 'react';
import {Link} from 'react-router-dom';

class ProductShow extends React.Component {
    // constructor(props) {
    //     super(props);
    // };

    componentDidMount() {
        // debugger;
        this.props.eachProduct(this.props.match.params.productId);
    };

    render () {
        // debugger;
        const {product} = this.props;

        if(!product) {
            return null;
        }

        // debugger;
        return (
            <div>
                <img src={product.photoUrl} width="200px" height="100px"/>
                <h2>{product.product_name}</h2>
                <h3>${product.price}</h3>
            </div>
        )
    }
}


export default ProductShow;