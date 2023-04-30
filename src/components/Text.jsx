import {connect} from 'react-redux'
import {CLEAR_DATA, RELOAD_DATA} from '../store/actions'
const Text = ({myInfo, dispatch}) => {
   
    if(myInfo.length === 0){
        return (
            <div className='container'>
               <p>Your array is empty</p> 
               <button className="btn" onClick={()=>dispatch({type:RELOAD_DATA})}>RELOAD</button>
            </div>
        )
    }
  return (
    
    <div className='container'>
         <div>
       {myInfo.map((item)=>{
        return <div key={item.id} className='card'>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </div>
       })}
       </div>
       <button className="btn" onClick={()=>dispatch({type:CLEAR_DATA})}>CLEAR</button>
       
    </div>
  )
}
const mapStateToProps = (state)=>{
  // console.log(`our state is ${state}`)
    return {myInfo: state.data}
}
export default connect(mapStateToProps)(Text)