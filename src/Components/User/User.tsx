import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getUser, getUserAlbums } from '../../Store/actionCreators'
import { stateSelector } from '../../Store/reducers'
import UserView from './UserView'

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
    <UserView
      userName={userName}
      userId={userId}
      userInfo={userInfo}
      albums={albums}
    />
  )
}

export default User
