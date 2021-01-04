import AttractionsFan from './components/AttractionsFan/AttractionsFan';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './state-management/Store';

function App() {
	return (
		<Store>
			<div className="App">
				<Header className="App-header" />
				<AttractionsFan />
				<Footer />
			</div>
		</Store>
	);
}

export default App;
