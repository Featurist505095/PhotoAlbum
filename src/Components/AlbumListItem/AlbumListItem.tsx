import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import './AlbumListItem.scss'

interface AlbumListItemProps {
  id: number
  selected: number
  name: string
  user: string
}
const AlbumListItem: FunctionComponent<AlbumListItemProps> = ({
  id,
  selected,
  name,
  user,
}) => {
  const classNames =
    selected === id ? 'album-list-item selected' : 'album-list-item'

  return (
    <Link className={classNames} to={`/profile?user=${user}&album=${id}`}>
      <h3 className="album-list-item__title">{id}</h3>
      <div className="album-list-item__description">{name}</div>
    </Link>
  )
}

export default AlbumListItem
