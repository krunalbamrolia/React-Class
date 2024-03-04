import React from 'react'
import  { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={'/'} class="navbar-brand" >Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to={'/'} class="nav-item nav-link" >Simple</Link>
      <Link to={'/stopwatch'} class="nav-item nav-link" >StopWatch</Link>
      <Link to={'/buttonclick'} class="nav-item nav-link" >ButtonClick</Link>
      <Link to={'/click'} class="nav-item nav-link" >Click</Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar