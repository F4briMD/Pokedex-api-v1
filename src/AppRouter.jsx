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
    <main className='flex flex-col items-center h-full mx-auto '>
      <Router>
        <Header/>
        <section className='w-full mx-auto max-md:w-4/5 max-sm:w-full max-w-7xl max-lg:max-w-max ' >
          <Routes>
          <Route path='/' element={<Home loading={loading}/>}/>
          <Route path='/pokemon/:id' element={<PokePage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
        </section>
        
      </Router>
      
    </main>
  )
}

export default AppRouter
