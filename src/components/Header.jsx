import Nav from './Nav.jsx'

const Header = () => {
  return (
    <header className="flex justify-between w-full max-w-6xl px-3 py-4 mx-auto rounded-lg bg-slate-600">
        <div className="flex flex-row items-center cursor-pointer">
          <img src="./src/assets/img/ball.png" width='46px' alt=""  />
           <span className="pl-1 text-xl font-semibold text-white">PokeDex</span>
        </div>
        
      
        <Nav/>

      
    </header>
  )
}

export default Header
