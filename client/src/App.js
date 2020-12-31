import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './state-management/Store'
import Test1 from './components/Test1'
import Test2 from './components/Test2'


function App() {
  return (
    <Store>
      <div className="App">
        <Header className="App-header" />
        <Test1/>
        <Test2/>
        <Footer />
      </div>
    </Store>
  );
}

export default App;
