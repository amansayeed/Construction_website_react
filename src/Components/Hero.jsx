import React from 'react'

function Hero() {
    return (
       <>   <section>
  <div className="owl-carousel owl-theme-default hero-slider owl-nav-custom">
    <div className="hero-slide bg-cover bg-center py-5 with-border-image" style={{background: 'url(assets/img/hero-banner-3.jpg)'}}>
      <div className="container text-white py-5 index-forward">
        <div className="row">
          <div className="col-lg-7">
            <p className="h3 text-primary mb-0">Your renovation</p>
            <h1>Making dreams come to life</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p><a className="btn btn-primary text-white" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-slide bg-cover bg-center py-5 with-border-image" style={{background: 'url(assets/img/hero-banner-2.jpg)'}}>
      <div className="container text-white py-5 index-forward">
        <div className="row">
          <div className="col-lg-7">
            <p className="h3 text-primary mb-0">Building right</p>
            <h1>Always dedicated and devoted</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p><a className="btn btn-primary text-white" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-slide bg-cover bg-center py-5 with-border-image" style={{background: 'url(assets/img/hero-banner-1.jpg)'}}>
      <div className="container text-white py-5 index-forward">
        <div className="row">
          <div className="col-lg-7">
            <p className="h3 text-primary mb-0">Your dream</p>
            <h1>Is our responsibility</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p><a className="btn btn-primary text-white" href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       </>
    )
}

export default Hero
