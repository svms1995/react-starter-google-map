import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router";

import { Store } from 'redux';
import { ConnectedRouter } from 'react-router-redux';

import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = ({store, history}) => {
  return (
    <Provider store={store}>
        <Router history={history}>

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dynamic" component={DynamicPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      </Provider>
  );
};

export default App;