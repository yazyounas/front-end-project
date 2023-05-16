
import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './Components/Header/NavBar';
import Home from './Components/Home';
import Login from './Components/LandingPage/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={Home()}/>
        <Route exact path="/login" element={Login()} />
      </Routes>
      
    </div>
  )
}

export default App;
