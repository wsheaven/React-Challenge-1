import React from 'react'

const textColor = ({textColor, setTextColor}) => {

    function changeText(textColor) {
        if(textColor === 'black') {
            setTextColor('white')
        } else {
            setTextColor("black")
        }
    }

  return (
    <div>
        <button 
        type='button'
        onClick={() => changeText(textColor)}
        >Change Text Color</button>
    </div>
  )
}

export default textColor