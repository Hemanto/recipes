import {combineReducers} from 'redux'
import FetchReducer from './reducer/FetchReducer'

const Reducer = combineReducers({
  xyz: FetchReducer,
})

export default Reducer

// fetch state=""
// store state= {}
// {fetch: "", store={}}