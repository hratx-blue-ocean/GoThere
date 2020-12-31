import './App.css';
import Header from './components/Header';
import TravelBar from './components/TravelBar/TravelBar';
import Footer from './components/Footer';
import Store from './state-management/Store'

function App() {
  return (
    <Store>
      <div className="App">
        <Header className="App-header" />
        <TravelBar/>
        <Footer />
      </div>
    </Store>
  );
}

export default App;
