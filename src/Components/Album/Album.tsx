import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getPhotoImages } from '../../Store/actionCreators'
import { stateSelector } from '../../Store/reducers'
import AlbumView from './AlbumView'

const useQuery = () => new URLSearchParams(useLocation().search)

const Album = () => {
  const { photos } = useSelector(stateSelector)
  const dispatch = useDispatch()
  const query = useQuery()
  const albumId = query.get('album') || '1'

  useEffect(() => {
    dispatch(getPhotoImages(albumId))
  }, [albumId, dispatch])

  return <AlbumView photos={photos} />
}

export default Album
