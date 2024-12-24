import React from 'react'
import './Spinner.css';
const Spinner = () => {
  return (
    <div className='flex items-center flex-col space-y-2'>

         {/* for gola to appear we use div */}
        <div className="spinner"></div> 
        <p className='text-lg text-blue-700 font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner