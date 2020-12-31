import React from 'react';
import ProductIndexItem from './product_index_item';


class productIndex extends React.Component {
    constructor(props) {
        super(props);
           console.log(this.props)
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
                <div className='blank'></div>
            </div>
        )
    }
}

export default productIndex;