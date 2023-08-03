import React from 'react'

function StyledInput({type, placeholder}) {
  return (
    <input className='appearance-none bg-[#FBD1BD] py-2.5 px-5 mt-2.5 ' type={type} placeholder={placeholder}/>
  )
}

export default StyledInput