import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import UserView from './pages/UserView';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/user-list">
            <UserList />
          </Route>
          <Route path={`/user-view/:userId`}>
            <UserView />
          </Route>
          <Route path="/user-view">
            <UserView />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
