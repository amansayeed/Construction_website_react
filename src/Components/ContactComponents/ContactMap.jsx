import React from 'react'
import '../../../src/App.css';


function ContactMap() {
  return (
    <>
     <section classname="py-5 bg-dark">
  <div classname="container py-5">
    <div className="mapouter"><div className="gmap_canvas"><iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://embedgooglemap.net/maps/78" /><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:500px;width:600px;}" }} /><a href="https://www.embedgooglemap.net">google map for website</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}" }} /></div></div>
  </div>
</section>




    </>

  )
}

export default ContactMap
