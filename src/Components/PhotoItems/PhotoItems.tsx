import React, { FunctionComponent } from 'react'
import Photo from '../Photo'
import './PhotoItems.scss'

interface PhotoItemsProps {
  photos: [any]
}

const PhotoItems: FunctionComponent<PhotoItemsProps> = ({ photos }) => {
  const Photos = photos.map((item) => {
    return <Photo thumbnailUrl={item.thumbnailUrl} key={item.id} />
  })

  return <div className="photoes">{Photos}</div>
}

export default PhotoItems
