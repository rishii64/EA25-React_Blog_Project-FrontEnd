import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    let handleNav = (()=>{
        let nav_Menu = document.querySelector('.nav')
        nav_Menu.classList.toggle('hide')
        nav_Menu.classList.remove('active')
    })
    return (
        <>
        <button id='navBtn' onClick={handleNav}><i className="fa-solid fa-bars"></i></button>
        <div className='nav hide active'>
            <h2 className='links'><NavLink onClick={handleNav} className='active' to='/'>Home</NavLink></h2>
            <h2 className='links'><NavLink onClick={handleNav} className='active' to='/Bollywood'>Bollywood</NavLink></h2>
            <h2 className='links'><NavLink onClick={handleNav} className='active' to='/Technology'>Technology</NavLink></h2>
            <h2 className='links'><NavLink onClick={handleNav} className='active' to='/Food'>Food</NavLink></h2>
            <h2 className='links'><NavLink onClick={handleNav} className='active' to='/Hollywood'>Hollywood</NavLink></h2>
            <h2 className='links'><NavLink onClick={handleNav} className='active' to='/Fitness'>Fitness</NavLink></h2>
        </div>
        </>
    )
}
