import React from 'react';
import LoginCard from './login.card';
import Widgets from '../../index';
import { Link } from 'react-router-dom';
import '../../../styles/widgets/login.css';

const LoginMainView = (props) => {
    return (
        // <Widgets.ModalWrapper>
        <div className='login-page'>
            {/* <div className="sidebar">
                <Link style={{fontSize:"30px", padding: "10px"}} to={'/mooddiary'}>Mood Diary</Link>
            </div> */}
            {/* <div className="login-container"> */}
            <div className="aling-content">
                <LoginCard
                    loginHandler={props.loginHandler}
                />
            </div>

            {/* </div> */}
        </div>
        // </Widgets.ModalWrapper>
    );
}

export default LoginMainView;