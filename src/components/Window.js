import React from 'react'

function Window () {
  return (
    <div className='window-container is-visible'>
      <div className='window-controls'>
        <button className='window-controls-btn close-btn' />
        <button className='window-controls-btn minimize-btn' />
        <button className='window-controls-btn expand-btn' />
      </div>
      <div id='preview' className='window-content preview'>
        Lorem Ipsum
      </div>
    </div>
  )
}

export default Window
