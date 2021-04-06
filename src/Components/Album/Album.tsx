import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getPhotoImages } from '../../Store/actionCreators'
import { stateSelector } from '../../Store/reducers'
import Description from '../Description'
import PhotoItems from '../PhotoItems'
import Subtitle from '../Subtitle'
import './Album.scss'

const useQuery = () => new URLSearchParams(useLocation().search)

const Album = () => {
  const { photos } = useSelector(stateSelector)
  const dispatch = useDispatch()
  const query = useQuery()
  const albumId = query.get('album') || '1'

  useEffect(() => {
    dispatch(getPhotoImages(albumId))
  }, [albumId, dispatch])

  return (
    <div className="album">
      <Subtitle text={'Album'} />
      <Description
        text={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis nihil, debitis ipsa doloribus!'
        }
      />
      <PhotoItems photos={photos} />
    </div>
  )
}

export default Album
