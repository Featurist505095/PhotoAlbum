import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { test } from '../../Store/actionCreators'
import { stateSelector } from '../../Store/reducers'
import Description from '../Description'
import PhotoItems from '../PhotoItems'
import Subtitle from '../Subtitle'
import './Album.scss'

const Album = () => {
  const { album } = useSelector(stateSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(test())
  })
  return (
    <div className="album">
      <Subtitle text={'Album'} />
      <Description
        text={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis nihil, debitis ipsa doloribus!'
        }
      />
      <div>{album}</div>
      <PhotoItems />
    </div>
  )
}

export default Album
