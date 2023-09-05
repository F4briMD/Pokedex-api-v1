// import { useState } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import PokeProvider from './context/PokeProvider';
import AppRouter from './AppRouter';


function App() {
  

  return (
    
      <PokeProvider>
        <AppRouter/>
      </PokeProvider>
    
  )
}

export default App
