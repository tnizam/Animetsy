import React from 'react';
import ProductIndexItem from '../product/product_index_item';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { allProducts } from '../../actions/product_actions';

class SearchShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.allProducts();
    }

    render() {
        const {products} = this.props;
        // let searchProducts = this.props.products.filter(
        //     (product) => {
        //         return product.productName.toLowerCase().indexOf(
        //             this.state.search.toLowerCase()) !== -1;
        //     } 
        // );

        return (
            <div className="all-images">
                <ul className="img-testing">
                    {
                      this.props.searchProducts.map(product => <ProductIndexItem
                        product={product}
                        key={product.id}
                      />)
                    }
                </ul>

            </div>
        )
    }


}

const mSTP = (state, ownProps) => {
    const products = Object.values(state.entities.products);
    const searched = ownProps.match.params.searched.toLowerCase();
    return {
        products: Object.values(state.entities.products),
        searchProducts: products.filter(product => {
            return(product.productName.toLowerCase().includes(searched))
        })
    }
};

const mDTP = dispatch => {
    return {
        allProducts: () => dispatch(allProducts())
    }
};

export default connect(mSTP, mDTP)(SearchShow);