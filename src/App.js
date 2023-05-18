
import './App.css';
import { Routes, Route } from "react-router-dom"
import NavBar from './Components/Header/NavBar';
import Home from './Components/Home';
import Login from './Components/LandingPage/Login';
import Movies from './Components/Movies/Movies';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={Home()}/>
        <Route exact path="/login" element={Login()} />
        <Route exact path="/movies" element={Movies()} />
      </Routes>
      
    </div>
  )
}

export default App;
