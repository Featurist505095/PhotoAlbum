import {
  GET_PHOTO_IMAGES,
  GET_PHOTO_IMAGES_FULFILLED,
  GET_USER,
  GET_USER_ALBUMS,
  GET_USER_ALBUMS_FULFILLED,
  GET_USER_FULFILLED,
} from './actionCreators'

type payloadType = {
  user?: { name: string; company: { catchPhrase: string } }
  albums?: [{ id: number; title: string }]
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

const initialState = {
  user: undefined,
  albums: undefined,
  photos: undefined,
}

export const stateSelector = (state: payloadType) => state

const reducer = (
  state: payloadType = initialState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case GET_PHOTO_IMAGES: {
      return {
        ...state,
      }
    }
    case GET_PHOTO_IMAGES_FULFILLED: {
      return {
        ...state,
        photos: action.payload,
      }
    }
    case GET_USER: {
      return {
        ...state,
      }
    }
    case GET_USER_FULFILLED: {
      return {
        ...state,
        user: action.payload,
      }
    }
    case GET_USER_ALBUMS: {
      return {
        ...state,
      }
    }
    case GET_USER_ALBUMS_FULFILLED: {
      return {
        ...state,
        albums: action.payload,
      }
    }
    default:
      return state
  }
}

export default reducer
