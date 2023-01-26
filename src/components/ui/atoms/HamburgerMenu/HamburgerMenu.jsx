import React, { useState } from 'react'
import './hamburger-menu.css'

const HamburgerLine = ({ className }) => {
  return (
    <span className={`bg-black hamburger-line ${className}`} />
  )
}

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div onClick={() => { setOpen(!open) }} className='hamburger-container'>
      <HamburgerLine className={`${open ? 'active' : ''}`} />
      <HamburgerLine className={`${open ? 'hidden' : 'block'}`} />
      <HamburgerLine className={`${open ? 'active' : ''}`} />
    </div>
  )
}
