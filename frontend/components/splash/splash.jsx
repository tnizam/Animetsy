import React from 'react';
import ProductIndexContainer from '../product/product_index_container';
import GreetingContainer from '../greeting/greeting_container';
import Banner from '../banner/banner'
import Footer from '../footer/footer'

class Splash extends React.Component{
    constructor(props) {
        super(props);

        this.state = {isLoaded: false}
    }

    componentDidMount() {
        this.props.allProducts().then(products => {
            this.setState({ isLoaded: true });
        });
    }

    render() {
        return (
            <div>
                <div>
                    {/* <GreetingContainer /> */}
                </div>
                <div><Banner/></div>

                <div>
                    {this.state.isLoaded ?
                        <ProductIndexContainer 
                            products={this.props.products}/> : null
                    }
                </div>

                <div><Footer /></div>
            </div>
        )
    }
}

export default Splash;