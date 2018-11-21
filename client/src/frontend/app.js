import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router";
import FrontRoutes from './routes';


const App = ({store, history}) => {
  return (
    <Provider store={store}>
        <Router history={history}>
          <FrontRoutes />
        </Router>
    </Provider>
  );
};
export default App;