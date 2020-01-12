import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routeConfig from './routeConfig';

class Routes {

    renderRoutes() {
        let keys = Object.keys(routeConfig);
        console.log(keys, routeConfig);
        return (<Switch>
            
            {
                keys.map(key => {
                    return (
                        <Route path={key} exact component={routeConfig[key]} />
                    )
                })
            }
            {/* <Redirect from="/mooddiary" to={'tips'} /> */}
             {/* <Route path='/login' component={routeConfig['/login']} /> */}
        </Switch>)    
    }

}


export default {routes: new Routes(), routeConfig};

