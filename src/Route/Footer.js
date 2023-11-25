import React from 'react'
import logo from './logo.jpeg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>    
        <img className='footerImg' src={logo} alt='not found'></img>

        <div className='routes'>
          <Link className='footerLink' to='/'>Home</Link>
          <Link className='footerLink' to='/Bollywood'>Bollywood</Link>
          <Link className='footerLink' to='/Technology'>Technology</Link>
          <Link className='footerLink' to='/Food'>Food</Link>
          <Link className='footerLink' to='Hollywood'>Hollywood</Link>
          <Link className='footerLink' to='/Fitness'>Fitness</Link>
        </div>

        <div className='add1'>
          <h3>London</h3>
          <span>newbusiness@thesiren.co.in</span>
          <span>+44 20 7998 7571</span>
          <span>Unit 306, Meteopolitan Wharf,</span>
          <span>70 Wapping Wall, London E1W3SS</span>
        </div>

        <div className='add2'>
          <h3>Buenos Aries</h3>
          <span>buenosaries@thesiren.co.in</span>
          <span>+54 11 6799 7949</span>
          <span>Cabildo 1458 1st floor,</span>
          <span>Buenos Aries</span>
        </div>

        <div className='social'>
          <h3>Follow Us</h3>
          <span><a className='footerLink' href='https://www.facebook.com/'>Facebook</a></span>
          <span><a className='footerLink' href='https://www.instagram.com'>Instagram</a></span>
          <span><a className='footerLink' href='https://www.linkedin.com'>LinkedIn</a></span>
          <span><a className='footerLink' href='https://www.twitter.com'>Twitter</a></span>
        </div>
    </div>
  )
}
