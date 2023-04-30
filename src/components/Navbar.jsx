import React from 'react'

const Navbar = ({counter}) => {
  
  return (
    <div className="nav">
      <h1>Navbar</h1>  
      <p>{counter.count}</p>
      <p>{counter.age}</p>
    </div>
    
  )
}

export default Navbar