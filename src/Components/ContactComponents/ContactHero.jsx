import React from 'react'

function ContactHero() {
    return (
       <>
{/* Hero Slider */}
<section className="bg-cover bg-position" style={{background: 'url(assets/img/hero-banner-3.jpg)'}}>
  <div className="dark-overlay dark-overlay-lighter py-5">
    <div className="overlay-content">
      <div className="container text-center py-5">
        <h1 className="text-white">Contact</h1>
        <nav className="d-flex justify-content-center" aria-label="breadcrumb">
          <ol className="breadcrumb bg-none mb-0">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>


       </>

    )
}

export default ContactHero
