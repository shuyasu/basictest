import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Shubham from './Shubham';


// import react from react




function App() {
  return (
   
    <BrowserRouter>
    <Routes>
        <Route
            path="/dashboard"
            element={<Dashboard/>} 
            
            />
            <Route
            path="/Shubham"
            element={<Shubham/>}
            />
            </Routes>
            </BrowserRouter>    
            
            
            
            
            
            
            
            
            
  );
}

export default App;
