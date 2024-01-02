import React from 'react'
import './Model.css';

const Model = ({children}) => {
  return (
    <div className='model-overlay'>
        <div className='model'>
        {children}
        </div>
    </div>
  )
}

export default Model