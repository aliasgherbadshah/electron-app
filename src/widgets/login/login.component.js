import React, { Component } from 'react';
import LoginMainView from './templates/login.mainView';
import serviceInterface from '../../services';
import { Redirect } from 'react-router';

class LoginComponent extends Component {



    login = (userCredentials) => {
        // <Redirect from="/" to="/mooddiary" />

        // 


        serviceInterface.authService().login(userCredentials)
            .then((response) => {
                if (response.status == 400) {
                    alert("Invalid Credentials.")
                } else if (response.status == 200) {
                    this.props.history.replace("/moorning")
                    window.localStorage.setItem("user", JSON.stringify(response.data.data))
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Unable to login")
            })
    }

    render() {
        return <LoginMainView
            loginHandler={this.login}
        />;
    }
}

export default LoginComponent;