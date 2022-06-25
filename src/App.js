import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProductsList />
    </div>
  );
}

export default App;