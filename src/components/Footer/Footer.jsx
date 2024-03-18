import React from 'react'
import './Footer.css'
import footer from '../img/footer.png'

function Footer() {
  return (
    <section className='footer'>
        <div className="container">
            <div className='second'>
            <div className='first'>
            <a href="#" >
                <img width={200} src="https://alliedge.in/images/AlliedgeLogo_SVG.svg" alt="" />
                <h1 className='allidge2'>Allidge  <br/> technology </h1> <br/>
            </a>
                <img className='img' src={footer} alt="" />
            </div>
            <div className='two'>
                <h1>Company</h1>
                <p>Home</p>
                <p>Services</p>
                <p>Technologies</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className='three'>
                <h1>Services</h1>
                <p>Software Development</p>
                <p>E-Commerce</p>
                <p>Artificial Intelligence</p>
                <p>Cloud Computing</p>
            </div>
            <div className='four'>
                <h1>Contact Us</h1>
                <p>Navrangpura, Ahmedabad
                Gujarat</p>
                <p>Deep Paanchal</p>
                <p>+91 9913204659</p>
                <p>Gaurang Patel</p>
                <p>+91 6355380254</p>
                <p>alliedge.technology@gmail.com</p>
            </div>
            </div>
            <h1 className='h'>© Copyright 2023, alliedge. All Rights Reserved</h1>
        </div>
    </section>
  )
}

export default Footer