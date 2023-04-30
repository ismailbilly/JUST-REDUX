import { createStore } from 'redux'
import counterReducer from './reducer'
import {init} from './reducer'
let store = createStore(counterReducer, init)

export default store