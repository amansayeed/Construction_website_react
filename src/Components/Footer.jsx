import React from 'react'

function Footer() {
    return (
       <>
       <footer className="text-white bg-cover bg-center" style={{background: 'url(assets/img/hero-banner-1.jpg)'}}>
  <div className="dark-overlay">
    <div className="overlay-content">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-4 col-md-6"><img className="mb-4" src="assets/img/logo-white.png" alt width={120} />
            <p className="text-light text-small mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <p className="mb-1"><i className="fas fa-envelope mr-3 text-primary fa-fw" /><span className="text-small">Construction@example.com</span></p>
            <p className="mb-1"><i className="fas fa-mobile mr-3 text-primary fa-fw" /><span className="text-small">+535 421 895 6523</span></p>
            <p className="mb-1"><i className="fas fa-map-marker-alt mr-3 text-primary fa-fw" /><span className="text-small">1798 Pretty View Lane, California</span></p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="text-uppercase text-primary mt-3 mb-4">Quick <span className="text-white">links</span></h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a className="footer-link" href="#">Home</a></li>
              <li className="mb-2"><a className="footer-link" href="#">About</a></li>
              <li className="mb-2"><a className="footer-link" href="#">Services</a></li>
              <li className="mb-2"><a className="footer-link" href="#">Contacts</a></li>
              <li className="mb-2"><a className="footer-link" href="#">Pages</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="text-uppercase text-primary mt-3 mb-4">Our <span className="text-white">services</span></h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a className="footer-link" href="#">Kitchen Remodel</a></li>
              <li className="mb-2"><a className="footer-link" href="#">Home Renovation</a></li>
              <li className="mb-2"><a className="footer-link" href="#">Home Repair</a></li>
              <li className="mb-2"><a className="footer-link" href="#">Windows &amp; Doors</a></li>
              <li className="mb-2"><a className="footer-link" href="#">Bathroom Remodel</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h6 className="text-uppercase text-primary mt-3 mb-4">Opening <span className="text-white">hours</span></h6>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center justify-content-between pb-2">
                <p className="text-small mb-0">Monday </p><span className="text-small mb-0">9:00 am - 06:00 pm</span>
              </li>
              <li className="d-flex align-items-center justify-content-between py-1">
                <p className="text-small mb-0">Tuesday </p><span className="text-small mb-0">9:00 am - 06:00 pm</span>
              </li>
              <li className="d-flex align-items-center justify-content-between py-1">
                <p className="text-small mb-0">Wednesday </p><span className="text-small mb-0">9:00 am - 06:00 pm</span>
              </li>
              <li className="d-flex align-items-center justify-content-between py-1">
                <p className="text-small mb-0">Friday</p><span className="text-small mb-0">9:00 am - 06:00 pm</span>
              </li>
              <li className="d-flex align-items-center justify-content-between py-1">
                <p className="text-small mb-0">Saturday</p>
                <p className="text-small mb-0 text-uppercase text-primary">Closed</p>
              </li>
              <li className="d-flex align-items-center justify-content-between py-1">
                <p className="text-small mb-0">Sunday</p>
                <p className="text-small mb-0 text-uppercase text-primary">Closed</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="border-top py-4">
          {/* You are completely free to use this template for your personal use or as a work for your client as long as you keep the link at the template footer pointing to our partner and us.*/}
          {/* If you would prefer removing the backlink from the theme footer, please purchase the attribution-free license at the theme page at https://bootstraptemple.com.*/}
          <p className="mb-0 text-white text-small">© All rights reserved. Template designed by <a href="https://bootstraptemple.com/p/bootstrap-contruction-template">Bootstrap Temple</a>. </p>
        </div>
      </div>
    </div>
  </div>
</footer>

       </>
    )
}

export default Footer
