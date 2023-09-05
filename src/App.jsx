// import { useState } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import Home from './pages/Home';

function App() {
  

  return (
    <main className='flex flex-col items-center h-full max-w-6xl m-auto'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      
    </main>
  )
}

export default App
