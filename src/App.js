import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="flex flex-col ">
      <Router>
        <NavBar />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
