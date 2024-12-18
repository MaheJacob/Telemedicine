import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] =useState(false)
  const [token, setToken] = useState (true)
  return (
    <div className='flex justify-between items-center text-sm py-4 mb-5 border-b border-b-black '>
      <img onClick={() => navigate('/')} src="/Images/logo 1.jpg" alt="logo"  width={100} height={100}/>
      <ul className='hidden md:flex item-start gap-5 font-medium'>
        <NavLink to={'/'}>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to={'/doctors'}>
            <li className='py-1'>Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to={'/about'}>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to={'/contact'}>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

      </ul>
      <div className='item-center gap-4 '>
        {
        token? <div className='flex item-center gap-2 cursor-pointer group relative'>
          <img className='w-8 rounded-full' src="/Images/profile.jpg" alt="profile" />
          <div className='w-2.5'><IoMdArrowDropdownCircle /></div>
          <div className='absolute top-0 right-0 pt-14 text-base font-medium text-secondary z-20 hidden group-hover:block'>
            <div className='min-w-48 bg-sbg rounded flex flex-col gap-4 p-4 '>
              <p onClick={()=>navigate('my-profile')} className='hover:text-primary cursor-pointer'>My Profile</p>
              <p onClick={()=>navigate('my-appointment')} className='hover:text-primary cursor-pointer'>My Appointment</p>
              <p onClick={()=>setToken(false)} className='hover:text-primary cursor-pointer'> Logout</p>
            </div>
          </div>
          </div>:
        <button  onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>Create Account</button>

        }
       
      </div>
    </div>
  )
}

export default Navbar
