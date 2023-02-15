import React from 'react'

function Alert(props) {
  return (
    <div style={{height: '60px '}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}: </strong>{props.alert.msg}
        </div>} 
    </div>
  )
}

export default Alert
