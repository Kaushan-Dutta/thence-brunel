import React from 'react'
import Logo from '../../../public/assets/Logo.png'
import { NavLink } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <nav className='p-3 rounded-full border-[1px] border-shade2 flex-row-center justify-between md:h-20 h-14'>
        <NavLink to="/" className="relative md:translate-x-6 translate-x-4">
            <img src={Logo} alt="logo" className='md:w-28 w-20' />
        </NavLink>
        <div className='md:text-sm text-xs flex md:gap-5 gap-3'>
            <NavLink to='/' className='redirect border-[1px] border-shade2 hover:bg-shade4'>Get Projects</NavLink>
            <NavLink to='/' className='redirect bg-black text-white  hover:bg-shade1'>Onboard Talent</NavLink>
        </div>
    </nav>
  )
}

export default Navbar