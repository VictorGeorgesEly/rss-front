import React from 'react';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <NavLink to="/home">Home</NavLink>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (Login);