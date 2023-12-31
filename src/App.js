import Navbar from './components/navbar';
import logo from './images/logo-dark.png'
import './App.css';
import React from 'react';
import Home from './screens/home'
import AllRoutes from './routes/routes';
import "@fontsource/poppins"; 
import Documentation from './screens/documentation';
import {BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
// import { Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     {/* <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/documentation" element={<Documentation/>}></Route>
        </Routes> */}
      

      {/* <Home></Home> */}
      
      <AllRoutes/>
    </div>
  );
}

export default App;
