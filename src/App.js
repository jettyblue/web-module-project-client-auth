import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/friends">Friends List</Link>
          <Link className="link" to="/friends/add">Add Friends</Link>
          <Link className="link" to="/logout">Logout</Link>
        </header>

        <Switch>
          <Route path='/' component={Login} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <PrivateRoute path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
