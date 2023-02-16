import React from 'react'
import buffer from './buffer.gif'
 const  Spinner = () =>  {
 
    return (
      <div className='text-center'>
        <img src = {buffer} alt="buffering"/>
      </div>
    )
  
}
export default Spinner