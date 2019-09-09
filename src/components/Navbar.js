import React from 'react'

function Navbar () {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light window-controls  px-1 px-sm-5'>
      <a class='navbar-brand' href='#'>
        Markdown Previewer
      </a>

      <div>
        <ul class='navbar-nav'>
          <li class='nav-item active'>
            <a class='btn btn-outline-success my-2 my-sm-0' href='#'>
              Run <i class='fa fa-play' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
