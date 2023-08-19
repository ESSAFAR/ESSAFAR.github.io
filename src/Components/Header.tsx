import React from 'react'
import memberPhoto from '../assets/members.png';


const Header = () => {
  return (
    <img
    src={memberPhoto}
    width="100%"
    height="400px"
    className="d-inline-block align-top"
    alt="Logo"
    style={{objectPosition: '50% 40%', objectFit: 'cover'
  }}
  />



  )
}

export default Header