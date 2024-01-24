import React from 'react'
import Image from 'next/image'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logo">
        <Image src='/gdsc_logo.png' alt='logo' width={120} height={120}/>
      </div>
      <SearchBar/>
      
    </div>
  )
}

export default NavBar