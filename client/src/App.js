import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './state-management/Store'
import Test1 from './components/Test1'


function App() {
  return (
    <Store>
      <div className="App">
        <Header className="App-header" />
        <Test1/>
        <Footer />
      </div>
    </Store>
  );
}

export default App;
