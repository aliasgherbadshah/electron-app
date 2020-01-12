import React,{Component} from 'react';


class LoginCard extends Component {
    state = {
        userCredentials : {
            username: 'sam@gmail.com',
            password: '123'
        }
    }

    changeHandler = (evt, type) => {
        let userCredentials = {...this.state.userCredentials};
        userCredentials[type] = evt.target.value;
        this.setState({
            userCredentials
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.loginHandler(this.state.userCredentials);
    }

    render() {
        return (
            <form className='login-card'>
                <input 
                    placeholder='Email'
                    className='login-input' 
                    type='email' 
                    value={this.state.userCredentials.username}
                    onChange={evt => this.changeHandler(evt,"username")}
                />
                <input 
                    placeholder='Password'
                    className='login-input' 
                    type='password' 
                    value={this.state.userCredentials.password}
                    onChange={evt => this.changeHandler(evt,"password")}
                />
                <button 
                    type='submit' 
                    className='button-primary login-button'
                    onClick = {this.submitHandler}>
                        Login
                </button>  
            </form>
        )
    }
    
}

export default LoginCard;