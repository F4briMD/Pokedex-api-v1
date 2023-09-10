import {DotSpinner} from '@uiball/loaders'

const Loader = () => {
  return (
    <div className='flex items-center justify-center mx-auto mt-52'>
      <DotSpinner size={40} speed={0.9} color='white' />
    </div>
  )
}

export default Loader
