import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer:React.FC = () => {
  return (
    <footer className='md:p-10 p-5 rounded-3xl flex-row-center justify-between  bg-[#F5F5F5] '>
        <p className='text-xs md:text-sm'>©Talup 2023. All rights reserved</p>
        <div className='md:text-sm text-xs flex md:gap-5 gap-3'>
            <NavLink to='/' className='hover:underline'>Terms & Conditions</NavLink>
            <NavLink to='/' className='hover:underline'>Privacy Policy</NavLink>
        </div>
    </footer>
  )
}

export default Footer