import { VALUE_UPDATE, SET_VALUE } from '../actions/FetchAction'

const initialState = {
  value: 1,
  name: ""
}

//action always a object
const FetchReducer = (state=initialState, action) => {
  switch (action.type) {
    case VALUE_UPDATE:
      return {...state, value: state.value + 1}
    case SET_VALUE:
      return {...state, name: action.data}
    default:
      return state;
  }
}

export default FetchReducer
