import React from 'react'
import './index.css'

const NavBar = ({ appName, fixed }) => (
  <div className={fixed? 'navbar title fixed': 'navbar title'}>
    {appName}
  </div>
)
 
export default NavBar