import React from 'react';
import { Link } from 'react-router-dom'

// class productIndexItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         const productId = this.props.product.id;
//         this.props.history.push(`/products/${productId}`);
//     }

//     render() {
//         const { product_name, price } = this.props.product;
//         return (
//             <div>
//                 <div onClick={this.handleClick}>
//                     <h2>{product_name}</h2>
//                     <h3>{price}</h3>
//                 </div>
//             </div>
//         )
//     }
// }

const ProductIndexItem = ({product}) => {

    return (
        <div>
            <Link to={`/products/${product.id}`}>
                <img src={product.photoUrl}/>
            </Link>
            <h2>{product.product_name}</h2>
            <h3>${product.price}</h3>
        </div>
    )
}

export default ProductIndexItem;