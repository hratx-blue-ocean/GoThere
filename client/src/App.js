import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Preferences from './pages/Preferences/Preferences';
import useToken from './useToken';

// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Store from './state-management/Store';

function App() {
  let loggedIn = true;

  const { token, setToken } = useToken();

	//if (!token) {
	//return <Login setToken={setToken} />;
	//}

  return (
    <Store>
      <div className="App">
        <Header className="App-header" />
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              {loggedIn
                ? <Redirect to="/dashboard" />
                : <Home />
              }
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </Store>
  );
}

export default App;
