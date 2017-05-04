import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/home/components/index';
import Blog from './routes/blog/components/index';
// dva路由
export default ({history, app}) => {
  return (
    <Router history={history} >
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
    </Router>
  );
};