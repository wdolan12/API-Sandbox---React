import React from 'react'

const Form = ({color, text}) => {
  return <form className='entry'>
      <label style={{backgroundColor: color}} className='frm'>{text} 
          <input className='input' type="text" />
      </label>
  </form>

}

export default Form
