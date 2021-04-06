import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import './Photo.scss'

interface PhotoProps {
  thumbnailUrl: string
}

const Photo: FunctionComponent<PhotoProps> = ({ thumbnailUrl }) => {
  const linkPath = `/profile?user=1&album=1`
  return (
    <div className="photo-wrapper">
      <img className="photo" src={thumbnailUrl} alt="album_image" />
      <div className="photo-author">
        <Link to={linkPath}>Leanne Graham</Link>
      </div>
    </div>
  )
}

export default Photo
