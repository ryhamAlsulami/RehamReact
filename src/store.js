import {createStore,combineReducers} from 'redux'
import inputReducer from './reducers/inputReducers.js'
import mainReducer from './reducers/baseReducers.js'
const store=createStore(combineReducers({
  input:inputReducer,
  main:mainReducer
}))
export default store