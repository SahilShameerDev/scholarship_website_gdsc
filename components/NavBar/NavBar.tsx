import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logo">
        <Image src='/gdsc_logo.png' alt='logo' width={120} height={120}/>
      </div>
      
    </div>
  )
}

export default NavBar