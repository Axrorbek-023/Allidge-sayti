import React from 'react'
import US__img1 from '../img/US__img1.png'
import US__img2 from '../img/US__img2.png'
import './Us.css'

function Us() {
  return (
    <section className='Us'> 
        <div className="container">
            <div className='Us__box'>
                <h1 className='Us__title'>About <span className='Us__span1'>Us</span></h1>
                <span className='Us__span2'></span>
            </div>
            <div className='Us__box2'>
                <h1 className='Us__title2'>Who We Are</h1>
                <ul className='List__quti'>
                  <li className='item__quti'>
                    <img src={US__img1} alt="" />
                    <p className='Us__text'>We are believers in change! A change is driven by technology and
                    innovation. We help individuals, start-ups, businesses, and 
                    enterprises adapt and adopt digital transformation. We aim to 
                    change people's lives and improve businesses with our progressive,
                    value-adding, innovative technology solutions.</p>
                  </li>
                    <h1 className='Us__title2'>What We Do</h1>
                  <li className='item__quti'>
                    <p className='Us__text'>We are believers in change! A change is driven by technology and
                    innovation. We help individuals, start-ups, businesses, and 
                    enterprises adapt and adopt digital transformation. We aim to 
                    change people's lives and improve businesses with our progressive,
                    value-adding, innovative technology solutions.</p>
                    <img src={US__img2} alt="" />
                  </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Us