import React from 'react'
import './index.css'

const NavBar = ({ appName, style }) => (
  <div className={`navbar title ${style}`}>
    {appName}
  </div>
)
 
export default NavBar