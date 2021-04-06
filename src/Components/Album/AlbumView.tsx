import React, { FunctionComponent } from 'react'
import Description from '../Description'
import PhotoItems from '../PhotoItems'
import Subtitle from '../Subtitle'
import './Album.scss'

interface AlbumViewProps {
  photos?: [
    {
      albumId: number
      id: number
      title: string
      url: string
      thumbnailUrl: string
    }
  ]
}

const AlbumView: FunctionComponent<AlbumViewProps> = ({ photos }) => {
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

export default AlbumView
