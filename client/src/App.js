import React, { useState } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Login from './pages/Login/Login';

// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LogOut from './components/SignOut/Logout';
import Store from './state-management/Store';

function App() {
  const loggedInWithCookies = Cookies.get('loggedIn') === 'true';
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Store>
      <div className="App">
        <Header className="App-header" />
        <BrowserRouter>
          { loggedIn
            ? <nav>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/userPage">User Page</Link></li>
                  <li><LogOut setLoggedIn={setLoggedIn}/></li>
                </ul>
              </nav>
            : <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </nav>
          }

          <Switch>
            <Route exact path="/">
              { loggedIn
                ? <Redirect to="/userPage" />
                : <Home />
              }
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              { loggedIn
                ? <Redirect to='/userPage' />
                : <Login setLoggedIn={setLoggedIn} />
              }
            </Route>
            <Route path="/userPage">
              { loggedIn
                ? <UserPage />
                : <Redirect to="/" />
              }
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </Store>
  );
}

export default App;
