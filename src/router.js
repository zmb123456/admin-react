import React from 'react';
import { Router, Route } from 'dva/router';
import HomePage from './routes/HomePage';
import NotFound from './routes/NotFound';
import Users from './routes/Users';
import Editor from './routes/Editor';

/* eslint react/prop-types:0 */
export default function ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Editor} />
            {/* <Route path="/" component={HomePage} /> */}
      <Route path="/users" component={Users} />
      <Route path="/editor" component={Editor} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
