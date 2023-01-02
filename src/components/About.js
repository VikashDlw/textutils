import React from 'react'

export default function About(props) {
  return (
    <div className='Container' style={{ color: props.mode==='dark'?'white':'black'}}>
        <h2>About Us</h2>
        <div className="accordion" >
            <h5>This is About Section Of Our Website</h5>
        </div>
    </div>
  )
}
