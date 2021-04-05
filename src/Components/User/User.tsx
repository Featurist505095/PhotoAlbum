import React from 'react'
import './User.scss'

const User = () => {
  return (
    <div className="user-block">
      <div className="user-info">
        <img className="user-photo" src="" alt="" />
        <div className="user-name">Scolara Visari</div>
        <div className="user-description">
          Nulla sed nunc et tortor luctus faucibus. Morbi at aliquet turpis, et
          consequat felis. Quisque condimentum.
        </div>
      </div>
      <div className="user-albums">
        <img src="" alt="user" width="300" height="300" />
      </div>
    </div>
  )
}

export default User
