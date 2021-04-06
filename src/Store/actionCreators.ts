export const GET_PHOTO_IMAGES = 'GET_PHOTO_IMAGES'
export const GET_PHOTO_IMAGES_FULFILLED = 'GET_PHOTO_IMAGES_FULFILLED'

export const getPhotoImages = (albumId) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`

  return {
    type: GET_PHOTO_IMAGES,
    payload: fetch(url).then((response) => response.json()),
  }
}

export const GET_USER = 'GET_USER'
export const GET_USER_FULFILLED = 'GET_USER_FULFILLED'

export const getUser = (userId) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`

  return {
    type: GET_USER,
    payload: fetch(url).then((response) => response.json()),
  }
}

export const GET_USER_ALBUMS = 'GET_USER_ALBUMS'
export const GET_USER_ALBUMS_FULFILLED = 'GET_USER_ALBUMS_FULFILLED'

export const getUserAlbums = (userId) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`

  return {
    type: GET_USER_ALBUMS,
    payload: fetch(url).then((response) => response.json()),
  }
}
