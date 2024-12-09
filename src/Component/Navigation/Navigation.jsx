import React from 'react'
import './Navigation.css'
import Logo from '/src/assets/logo.png'
import logo1 from '/src/assets/logo1.jpeg'
import '/src/App.css'



function Navigation() {
  return (
    <>    
    <nav>
      <img src={logo1} alt="" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
     </>


  )
}

export default Navigation
