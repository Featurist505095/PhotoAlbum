import React from 'react'
import Description from '../Description'
import PhotoItems from '../PhotoItems'
import Subtitle from '../Subtitle'
import './Album.scss'

const Album = () => {
  return (
    <div className="album">
      <Subtitle text={'Album'} />
      <Description
        text={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus omnis nihil, debitis ipsa doloribus!'
        }
      />
      <PhotoItems />
    </div>
  )
}

export default Album
