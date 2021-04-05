const initialState = {
  authorID: 1,
  album: 1,
}

export const stateSelector = (state: any) => state

const reducer = (state = initialState, action: { type: any }) => {
  switch (action.type) {
    case 'TEST': {
      return {
        ...state,
        album: 2,
      }
    }
    default:
      return state
  }
}

export default reducer
