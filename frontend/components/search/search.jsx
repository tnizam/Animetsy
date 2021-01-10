import React from 'react';
import SearchItem from './search_item_index';
import {withRouter} from 'react-router-dom'

class productIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.allProducts();
    }

    render () {
        const {products, nameSearches} = this.props;

        return (
            <div className="all-images">
                <ul className="img-testing">
                    {
                      nameSearches.map(product => <SearchItem
                        product={product}
                        key={product.id}
                        url={this.props.match.url}
                      />)
                    }
                </ul>
                <div className='blank'></div>
            </div>
        )
    }
}

export default withRouter(productIndex);