const initialState = {
  authorID: 1,
  album: 1,
  photos: [],
}

export const stateSelector = (state: any) => state

const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'GET_PHOTO_IMAGES': {
      return {
        ...state,
      }
    }
    case 'GET_PHOTO_IMAGES_FULFILLED': {
      return {
        ...state,
        photos: action.payload,
      }
    }
    case 'GET_USER': {
      return {
        ...state,
      }
    }
    case 'GET_USER_FULFILLED': {
      return {
        ...state,
        user: action.payload,
      }
    }
    case 'GET_USER_ALBUMS': {
      return {
        ...state,
      }
    }
    case 'GET_USER_ALBUMS_FULFILLED': {
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
