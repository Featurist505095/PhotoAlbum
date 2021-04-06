import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <Link to="/home">
        <h1 className="logo-name">The Photo Album</h1>
      </Link>
    </header>
  )
}

export default Header
