import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomeScreen from "./Screens/HomeScreen";
function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-gradient-to-t from-[#38bdb2] to-[#1E1E1E]">
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
