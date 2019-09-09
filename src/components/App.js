import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import Window from './Window'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <Window role='editor' />
          </div>
          <div className='col-sm-6'>
            <Window role='preview' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
