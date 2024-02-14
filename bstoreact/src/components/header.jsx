import React from 'react'
import Logo  from './img/logo.png';

const Header = () => {
  return (
    <>
      <header className="header">
            <div className="container-fluid">
                <div className="header-logo">
                    <a href="#">
                        <img src={Logo} />
                    </a>
                </div>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-nav" aria-expanded="false" >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                {/* mobile button */}
                <div className="collapse navbar-collapse pull-right" id="header-nav" >
                    <nav className="header-nav">
                        <a href="#">home</a>
                        <a href="#">about</a>
                        <a href="#">services</a>
                        <a href="#">works</a>
                        <a href="#">contact</a>
                    </nav>   
                </div>
            </div>
        </header>
    </>
  )
}

export default Header