import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

//Paths
import Index from './pages/index/Index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  );

}