import Navbar from './components/navbar';
import logo from './images/logo-dark.png'
import './App.css';
import React from 'react';
import Home from './screens/home'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar-wrapper">
        <nav className="navbar">
        
        <img className = "logo" height="40px"  src={logo}></img>
      
        <Navbar/>

        <button className="sign-in-btn">SIGN-IN NOW</button>
        </nav>
        </div>
      </header>

      <Home></Home>
    </div>
  );
}

export default App;
