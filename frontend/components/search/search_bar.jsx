import React from 'react';
// import ProductIndexItem from '../product/product_index_item'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { allProducts } from '../../actions/product_actions'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(e) {
        this.setState({search: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.search}`);
        // this.props.history.push('/search');
    }

    render () {
        // const {products} = this.props;
        // let searchProducts = this.props.products.filter(
        //     (product) => {
        //         return product.productName.toLowerCase().indexOf(
        //             this.state.search.toLowerCase()) !== -1;
        //     } 
        // );
        return (
            // <div className="all-images">
            //     <ul className="img-testing">
            //         {
            //           searchProducts.map(product => <ProductIndexItem
            //             product={product}
            //             key={product.id}
            //           />)
            //         }
            //     </ul>

            // </div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        value={this.state.search}
                        onChange={this.update} />
                </div>

                <button type='submit'>Search</button>
            </form>
        )
    }
}

const mSTP = (state) => {
    return {
        products: Object.values(state.entities.products)
    }
};

const mDTP = dispatch => {
    return {
        allProducts: () => dispatch(allProducts())
    }
};

export default withRouter(connect(mSTP, mDTP)(SearchBar));