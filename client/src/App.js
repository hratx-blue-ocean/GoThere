import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
	const { token, setToken } = useToken();

	//if (!token) {
	//return <Login setToken={setToken} />;
	//}

	return (
		<Store>
			<div className="App">
				<Header className="App-header" />
				<BrowserRouter>
					<Switch>
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
