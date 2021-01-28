import React from 'react'
import Divider from '../Components/Divider'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Testimonials from '../Components/testimonials'
import Work from '../Components/Work'


function Home() {
    return (

        <>
        <Hero/>
    
        <Services/>
        <Divider/>
        <Work/>
        <Testimonials/>
        </>
        
    )
}

export default Home
