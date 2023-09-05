import {Link}  from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex items-center font-semibold text-white '>
        <Link className='pr-2' to=''>Inicio</Link>
        <Link className='pr-2' to=''>Pokedex</Link>
        {/* <Link className='' to=''></Link> */}
    </nav>
  )
}

export default Nav
