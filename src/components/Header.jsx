// import Nav from './Nav.jsx'

import Ball from '../assets/img/ball.png'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
const Header = () => {
  return (
    <section className='w-full bg-slate-600'>
      <header className="flex items-center justify-between px-3 py-4 mx-auto max-w-7xl ">
        
        <Link to='/'>
          <div className="flex flex-row items-center cursor-pointer">
            <img src={Ball} width='46px' alt="Pokeball"  />  
              <span className="pl-1 text-xl font-semibold text-white">PokeDex</span>
          </div>
        </Link>
          
          <SearchInput/>
        {/* <div className='bg-white rounded-md w-[320px] flex h-[38px] py-[10px] pl-[15px] divide-x divide-2 divide-gray-300'>
          <input          
          placeholder='Buscar pokemon...'
          className='flex-1 outline-none pr-[60px]'
          />
          <img src={Search}
           className='items-center justify-center px-2 text-gray-300 cursor-pointer flex-2'
          //  onClick={}
         />
        </div> */}
      
        <nav className='flex items-center font-semibold text-white '>
        <Link className='pr-2' to='/'>Inicio</Link>
        <Link className='pr-2' to=''>Pokedex</Link>
        {/* <Link className='' to=''></Link> */}
    </nav>

      
    </header>
    </section>
    
  )
}

export default Header
