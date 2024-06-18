import React from 'react'


const Content = ({color, textColor}) => {
  return (
    <div className='colorBox' style={{backgroundColor: color || '' }}> 
    <p style={{color: textColor}}>
    {color ? color : 'Please Type Color'}
    </p>
    </div>
    
  )
}

export default Content