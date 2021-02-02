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
        let bgImg;
        if(this.props.searchProducts.length === 0) {
            bgImg = <img src={window.searchbg} className="search-bg" />
        }
        return (
            <div className="all-images">
                <div className="no-prod-container"> 
                {bgImg}
                {this.props.searchProducts.length === 0 ?
                    <p className="no-prod">We could not find any 
                        results for "{this.props.searched}" 
                        <p>Try searching something else instead?</p>
                    </p> 
                    : <p className="num-product"> 
                        Number of products found: {this.props.searchProducts.length}
                        </p> 
                        
                    }
                </div>

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
        }),
        searched: ownProps.match.params.searched.toLowerCase()
    }
};

const mDTP = dispatch => {
    return {
        allProducts: () => dispatch(allProducts())
    }
};

export default connect(mSTP, mDTP)(SearchShow);