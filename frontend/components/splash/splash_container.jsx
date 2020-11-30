import {connect} from 'react-redux';
import Splash from './splash';
import { allProducts } from '../../actions/product_actions';

const mstp = ({session, entities: {users, products}}) => {
    return {
        currentUser: users[session.id],
        products
    }
}

const mdtp = dispatch => {
    return {
        allProducts: () => dispatch(allProducts())
    }
}

export default connect(mstp, mdtp)(Splash);