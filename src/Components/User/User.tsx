import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUser, getUserAlbums } from '../../Store/actionCreators'
import { stateSelector } from '../../Store/reducers'
import AlbumList from '../AlbumList'
import './User.scss'

const useQuery = () => new URLSearchParams(useLocation().search)

const User = () => {
  const { user, albums } = useSelector(stateSelector)
  const userName = user ? user.name : ' '
  const userInfo = user && user.company ? user.company.catchPhrase : ' '
  const dispatch = useDispatch()
  const query = useQuery()
  const userId = query.get('user') || '1'

  useEffect(() => {
    dispatch(getUser(userId))
    dispatch(getUserAlbums(userId))
  }, [userId, dispatch])

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

export default User
