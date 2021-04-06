export const test = () => {
  return {
    type: 'TEST',
  }
}

export const getPhotoImages = (albumId) => {
  const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`

  return {
    type: 'GET_PHOTO_IMAGES',
    payload: fetch(url).then((response) => response.json()),
  }
}

export const getUser = (userId) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`

  return {
    type: 'GET_USER',
    payload: fetch(url).then((response) => response.json()),
  }
}

export const getUserAlbums = (userId) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`

  return {
    type: 'GET_USER_ALBUMS',
    payload: fetch(url).then((response) => response.json()),
  }
}
