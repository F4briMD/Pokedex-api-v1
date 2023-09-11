import { useContext } from 'react'
import Search from '../assets/img/search.svg'
import { PokeContext } from '../context/PokeContext'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {

    const {onInputChange,valueSearch,onResetForm} = useContext(PokeContext)

    const navigate = useNavigate()

    const onSearchSubmit = (e) =>{
        e.preventDefault()
            navigate('/search',{
                state: valueSearch
            })   
        onResetForm()
    }

  return (
    <>
        <form onSubmit={onSearchSubmit}
        className='bg-white max-md:hidden rounded-md w-[320px] flex h-[38px] py-[10px] pl-[15px] divide-x divide-2 divide-gray-300'>
          <input   
          type='search'       
          name='valueSearch'
          placeholder='Buscar pokemon...'
          className='flex-1 outline-none pr-[60px]'
          value={valueSearch}
          onChange={onInputChange}
          />
          <img src={Search}
           className='items-center justify-center px-2 text-gray-300 cursor-pointer flex-2'
          //  onClick={}
         />
    </form>
    </>
    
  )
}

export default SearchInput
