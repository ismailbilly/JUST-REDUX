import { useState } from 'react'
import { createStore } from 'redux'
import './App.css'
import Navbar from './components/Navbar'
import { DECREASE,INCREASE } from './store/actions'
import counterReducer from './store/reducer'
import fakeData from './fakeData'
import Text from './components/text'
//setup initial state
// const initialState = {
//   count:19,
//   age:'local'
// }

// //REDUCER
// function reducer(state, action) {
//   //console.log({state, action})
   
//   if(action.type === DECREASE){
//    state.count -= 1
// //  return{...state, count: state.count-1}
   
//   }
//   if(action.type === INCREASE){
//     return{...state, count: state.count + 1}
 
//    }

//  return state
// }

// // //STORE
// let store = createStore(reducer, initialState)
// store.subscribe(()=>console.log(store.getState()))
// //DISPATCH ACTIONS--INTERACTING WITH OUR STORE
// store.dispatch({type:DECREASE})
// store.dispatch({type:DECREASE})
// store.dispatch({type:INCREASE})

//console.log(store.getState())

function App() {
  return (
    <>
     {/* <Navbar counter={store.getState()}/>  */}
    <Text/> 
    </>
  )
}

export default App
