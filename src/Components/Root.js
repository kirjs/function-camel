import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import App from './App';
import {Router, Route} from 'react-router';

export default function Root({store, history}) {
  return <Provider store={store}>
    <Router history={history}>
      <Router history={history}>
        <Route path="exercise/:id" component={App}> </Route>
      </Router>
    </Router>
  </Provider>;

}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};