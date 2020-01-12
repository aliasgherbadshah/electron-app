import React, { Component } from 'react';
import NavigatorMainView from './templates/navigator.mainView';
import Routes from '../../../routes/routes';
import { Link } from 'react-router-dom';
import '../../../styles/common/navigator.css'

class NavigatorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenu: false
        }
        this.routes = this.createRouteArray(Routes.routeConfig)
    }
    createRouteArray = (routes) => {
        const routeNames = Object.keys(routes);
        const routeArray = [];
        for (let i = 0; i < routeNames.length; i++) {
            routeArray.push({ to: routeNames[i], name: this.extractName(routeNames[i]) })
        }
        return routeArray;
    }
    extractName = (routeLinkName) => {
        const routeName = routeLinkName.substr(1);
        return routeName;
    }

    render() {
        return (
            <>
                <button className="menu-button" onClick={() => {
                    console.log("ASDASDS")
                    this.setState({
                        isMenu: true
                    })
                }} >Menu</button>
                {
                    this.state.isMenu ?
                        <div className="menu-container">
                            <NavigatorMainView
                            closeMenu={()=>{
                                this.setState({
                                    isMenu:false
                                })
                            }}
                                routes={this.routes}
                            />
                        </div> : null
                }
            </>
        )
    }

}

export default NavigatorComponent;