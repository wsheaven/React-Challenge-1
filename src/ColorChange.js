import React from 'react'

const ColorChange = ({color, setColor}) => {
  return (
    <form className='input-field' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="Color"></label>
        <input 
        autoFocus
        type="text" 
        id="color"
        role='colorsearch'
        placeholder='Set Color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
        />
        
    </form>
  )
}

export default ColorChange