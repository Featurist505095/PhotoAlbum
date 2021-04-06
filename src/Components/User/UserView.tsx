import React, { FunctionComponent } from 'react'
import AlbumList from '../AlbumList'
import './User.scss'

interface UserViewProps {
  userName: string
  userId: string
  albums?: [{ id: number; title: string }]
  userInfo: string
}

const UserView: FunctionComponent<UserViewProps> = ({
  userName,
  userInfo,
  albums,
  userId,
}) => {
  return (
    <div className="user-block">
      <div className="user-info">
        <img className="user-photo" src="" alt="" />
        <div className="user-name">{userName}</div>
        <div className="user-description">{userInfo}</div>
      </div>
      <div className="user-albums">
        <AlbumList albums={albums} user={userId} />
      </div>
    </div>
  )
}

export default UserView
