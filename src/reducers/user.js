import { SET, RESET } from '../actions/user'

const initialState = {
  email: 'user@example.com'
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case SET:
      return {...state, ...action.payload}
    case RESET:
      return {...initialState}
    default:
      return state
  }
}
