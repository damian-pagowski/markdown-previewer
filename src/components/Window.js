import React from 'react'
import Editor from './Editor'
import Preview from './Preview'

function Window (props) {
  return (
    <div className='window-container is-visible'>
      <div className='window-controls'>
        <div className='window-title'>
          {props.role}
        </div>
      </div>
      {props.role === 'editor'
        ? <Editor callback={props.callback} data={props.data} />
        : <Preview data={props.data} />}
    </div>
  )
}

export default Window
