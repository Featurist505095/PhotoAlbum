import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const HeaderView = () => {
  return (
    <header>
      <Link to="/home">
        <h1 className="logo-name">The Photo Album</h1>
      </Link>
    </header>
  )
}

export default HeaderView
