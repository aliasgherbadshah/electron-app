import React from "react";
import { Link } from 'react-router-dom';
import '../../../../styles/common/navigator.css'


const NavigatorMainView = (props) => {
    return (
        <div className="navigation-container">

            {
                props.routes.map((route) => {
                    return (
                        // <li>
                        <>
                            <Link to={route.to} onClick={props.closeMenu} className="navigation-links">{route.name}</Link>
                            <br />
                        </>
                        // </li>
                    )
                })
            }

            <button onClick={() => {
                window.localStorage.removeItem('user')
                window.localStorage.removeItem('modalData')
                window.location = "/"
            }}>Logout</button>

        </div>
    );
}

export default NavigatorMainView; 