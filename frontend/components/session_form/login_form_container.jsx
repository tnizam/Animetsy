import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_action';


const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'login',
        // navLink: <Link to="/signup">why not sign up?</Link>
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => {
            return dispatch(login(user))},
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionForm);