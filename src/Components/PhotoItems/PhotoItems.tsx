import React, { FunctionComponent } from 'react'
import Photo from '../Photo'
import './PhotoItems.scss'

interface PhotoItemsProps {
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

const PhotoItems: FunctionComponent<PhotoItemsProps> = ({ photos }) => {
  const Photos = photos
    ? photos.map((item) => {
        return <Photo thumbnailUrl={item.thumbnailUrl} key={item.id} />
      })
    : undefined

  return <div className="photoes">{Photos}</div>
}

export default PhotoItems
