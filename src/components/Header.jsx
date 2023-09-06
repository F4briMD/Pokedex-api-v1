import Nav from './Nav.jsx'
import Search from '../assets/img/search.svg'
const Header = () => {
  return (
    <header className="flex items-center justify-between w-full max-w-6xl px-3 py-4 mx-auto rounded-lg bg-slate-600">
        <div className="flex flex-row items-center cursor-pointer">
          <img src="./src/assets/img/ball.png" width='46px' alt=""  />
           <span className="pl-1 text-xl font-semibold text-white">PokeDex</span>
        </div>
        <div className='bg-white rounded-md w-[320px] flex h-[38px] py-[10px] pl-[15px] divide-x divide-2 divide-gray-300'>
          <input          
          placeholder='Buscar pokemon...'
          className='flex-1 outline-none pr-[60px]'
          />
          <img src={Search}
           className='items-center justify-center px-2 text-gray-300 cursor-pointer flex-2'
          //  onClick={}
         />
        </div>
      
        <Nav/>

      
    </header>
  )
}

export default Header
