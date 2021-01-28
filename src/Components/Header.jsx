import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <><header className="header">
        <div className="bg-primary text-white py-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-none d-lg-block">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3"><a className="reset-anchor" href="#"><i className="fas fa-mobile mr-2" /><span className="font-weight-normal text-small">+535 421 895 6523</span></a></li>
                  <li className="list-inline-item"><a className="reset-anchor" href="#"><i className="fas fa-envelope mr-2" /><span className="font-weight-normal text-small">Construction@example.com</span></a></li>
                </ul>
              </div>
              <div className="col-lg-5 text-right">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"><a className="font-weight-bold text-small reset-anchor" href="#">FAQ</a></li>
                  <li className="list-inline-item">|</li>
                  <li className="list-inline-item"><a className="font-weight-bold text-small reset-anchor" href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light py-3 bg-white">
          <div className="container"><a className="navbar-brand" href="index.html"><img src="/assets/img/logo.png" alt width={150} /></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-2">
                  <Link  to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link   to="/services" className="nav-link" >Services</Link>
                </li>
                <li className="nav-item mx-2">
                 <Link to="/contact"   className="nav-link" href="contact.html">Contact</Link>
                </li>
                <li className="nav-item ml-2 dropdown"><a className="nav-link dropdown-toggle pr-0" id="navbarDropdownMenuLink" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Pages</a>
                  <div className="dropdown-menu dropdown-menu-right mt-lg-4" aria-labelledby="navbarDropdownMenuLink">
                    <Link  to="/" className="dropdown-item text-small" href="index.html">Home</Link>
                    
                    <Link to="/services" className="dropdown-item text-small" href="services.html">Services</Link>
                    <Link to="/contact" className="dropdown-item text-small" href="contact.html">Contact   </Link>
                    
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
        </>
    )
}

export default Header
