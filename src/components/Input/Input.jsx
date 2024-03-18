import React from 'react'
import './Input.css'

function Input() {
  return (
    <section className='Inp'>
        <div className="container">
            <div className='Inp__box'>
                <form action="#">
                <h1 className='Inp__title'>Let us plan your dream <br/>
                    project together.</h1>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email' />
                    <input type="text" placeholder='Mobile No' />
                    <input type="text" placeholder='Select Services' />
                    <input className='inp5' type="text" placeholder='Project Discription' />
                    <button className='Inp__btn'>Let's connect</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Input