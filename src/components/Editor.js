import React from 'react'

function Editor (props) {
  const handleOnChange = event => {
    props.callback(event.target.value)
  }

  return (
    <textarea
      className='window-content'
      id='editor'
      onChange={event => handleOnChange(event)}
      value={props.data}
    />
  )
}

export default Editor
