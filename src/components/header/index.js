import React from 'react'
import link from '../../assets/share_icon.png'
import './header.css'

function Header() {
  return (
    <header className='header'>
       <a className='share__link' href="#header">
        <img src={link} alt="" srcset="" />
       </a>
    </header>
  )
}

export default Header
