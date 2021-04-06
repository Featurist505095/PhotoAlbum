import React, { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import AlbumListItem from '../AlbumListItem'
import './AlbumList.scss'

interface AlbumListProps {
  albums?: [{ id: number; title: string }]
  user: string
}

const useQuery = () => new URLSearchParams(useLocation().search)

const AlbumList: FunctionComponent<AlbumListProps> = ({ albums, user }) => {
  const query = useQuery()
  const selected = Number(query.get('album')) || 1
  const albumList = albums
    ? albums.map((item) => {
        return (
          <AlbumListItem
            key={item.id}
            id={item.id}
            name={item.title}
            selected={selected}
            user={user}
          />
        )
      })
    : undefined

  return <div className="album_list">{albumList}</div>
}

export default AlbumList
