import React from 'react';
import ProductIndexItem from './product_index_item';

// const productIndex = ({ products }) => {
    
//     return (
//     <div>
//         {products.map(product => (
//             <productIndexItem
//                 product={product}
//                 key={product.id}
//             />
//         ))}
//     </div>
//     )
// };

class productIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.allProducts();
    }

    render () {
        const {products} = this.props;

        return (
            <div className="all-images">
                <ul className="img-testing">
                    {
                      products.map(product => <ProductIndexItem
                        product={product}
                        key={product.id}
                      />)
                    }
                </ul>
            </div>
        )
    }
}

export default productIndex;