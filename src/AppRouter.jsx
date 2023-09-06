// import { useState } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import PokePage from './pages/PokePage';
import SearchPage from './pages/SearchPage';

function AppRouter() {
  

  return (
    <main className='flex flex-col items-center h-full m-auto '>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pokemon/:id' element={<PokePage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </Router>
      
    </main>
  )
}

export default AppRouter
