import React, { Component } from 'react';
import './styles/common/app.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import IndexRoutes from './routes';


class App extends Component {

  constructor(props) {
    super(props);

   

  }
  render() {
    return (
      <div>
        <Switch>
          <Route path={'/'} component={IndexRoutes}  />
        </Switch>
      </div>
    );
  }

}

export default App;
