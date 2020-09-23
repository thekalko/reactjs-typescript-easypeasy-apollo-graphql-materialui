import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const home1: React.FC = () => <div>asds</div>;
export const home2: React.FC = () => <div>bbb</div>;

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home1} />
        <Route path="/home2" component={home2} />
      </Switch>
    </Router>
  );
};
