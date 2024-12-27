import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomeScreen from "./Screens/HomeScreen";
import Footer from './Components/Footer';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <div className="flex-grow overflow-hidden">
          <Routes>
            <Route path = "/" element={<HomeScreen />} />
            <Route path = "/shop" element={<ProductScreen />} />
            <Route path = "/cart" element={<CartScreen />} /> 
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
