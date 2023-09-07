import {DotSpinner} from '@uiball/loaders'

const Loader = () => {
  return (
    <div className='flex justify-center mx-auto mt-5'>
      <DotSpinner size={40} speed={0.9} color='white' />
    </div>
  )
}

export default Loader
