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
    }

    render () {

        return (

            <div className="search">
                <div className="search-wrapper">
                    <form onSubmit={this.handleSubmit} className="search-form">
                        <div className="search-container">
                            <input type="text"
                                value={this.state.search}
                                onChange={this.update}
                                className="search-input"/>
                        </div>

                        <button type='submit'>Search</button>
                    </form>
                </div>
            </div>
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