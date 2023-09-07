// import { useState } from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import PokePage from './pages/PokePage';
import SearchPage from './pages/SearchPage';
import { useState } from 'react';

function AppRouter() {
  
  const [loading,setLoading]= useState(true)


  return (
    <main className='flex flex-col items-center h-full m-auto max-md:w-4/5'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home loading={loading}/>}/>
          <Route path='/pokemon/:id' element={<PokePage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </Router>
      
    </main>
  )
}

export default AppRouter
