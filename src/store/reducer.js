import { CLEAR_DATA, RELOAD_DATA } from './actions'
import fakeData from '../fakeData'

export const init  ={
    data:fakeData,
    isLoaded: false
}

//console.log(init.data)
function counterReducer(state, action) {
    //console.log({state, action})
     
    if(action.type === CLEAR_DATA){
     // state.count = state.count -1
   return{...state, data: []}
     
    }
    if(action.type === RELOAD_DATA){
      return{...state, data: fakeData}
   
     }
    //  if(action.type === ADD_DATA){
    //   return{...state, data: data.push(action.payload)}
   
    //  }
    return state
  }

export default counterReducer