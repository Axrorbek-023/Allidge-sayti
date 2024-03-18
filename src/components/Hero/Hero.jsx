import React from 'react'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import noutbuk from '../img/noutbuk.png'
import './Hero.css'

function Hero() {
  return (
    <section className='section'>
        <div className='container two__body'>
          <h1 className='h1'>Our <span>Expertise</span></h1>
        <div>
          <ul className="list">
            <li className="List__item">
              <img src={img1} alt="" className="img1"/>
              <h1 className='titlee'>Quality Assurance</h1>
              <p className='comitet'>Our commitment to 
                quality enables us to
                deliver software solution
                that are only functional,
                but also user-friendly,
                reliable, secure, provides
                expectational customer
                satisfaction</p>
            </li>
            <li className="List__item">
            <img src={img2} alt="" className="img2"/>
              <h1 className='titlee'>On time delivery</h1>
              <p className='comitet'>Our commitment to 
                quality enables us to
                deliver software solution
                that are only functional,
                but also user-friendly,
                reliable, secure, provides
                expectational customer
                satisfaction</p>
            </li>
            <li className="List__item">
            <img src={img3} alt="" className="img3"/>
              <h1 className='titlee'>Advanced technical skilled team</h1>
              <p className='comitet'>Our commitment to 
                quality enables us to
                deliver software solution
                that are only functional,
                but also user-friendly,
                reliable, secure, provides
                expectational customer
                satisfaction</p>
            </li>
            <li className="List__item">
            <img src={img4} alt="" className="img4"/>
              <h1 className='titlee'>Budget friendly</h1>
              <p className='comitet'>Our commitment to 
                quality enables us to
                deliver software solution
                that are only functional,
                but also user-friendly,
                reliable, secure, provides
                expectational customer
                satisfaction</p>
            </li>
          </ul>
          <img src={noutbuk} alt="" className='noutbuk' />
          
        </div>
        </div>
    </section>
  )
}

export default Hero