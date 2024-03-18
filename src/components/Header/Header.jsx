import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="container">
      <div className='box'>
      <a href="#" >
        <img width={200} src="https://alliedge.in/images/AlliedgeLogo_SVG.svg" alt="" />
        <h1 className='allidge'>Allidge  <br/> <span>technology</span></h1>
      </a>
        <ul className='List'>
          <li className='list__item'>
            <a href="#">Home</a>
          </li>
          <li className='list__item'>
            <a href="#">Services</a>
          </li>
          <li className='list__item'>
            <a href="#">Technology</a>
          </li>
          <li className='list__item'>
            <a href="#">Group Compnies</a>
          </li>
          <li className='list__item'>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
      <div className='title'>
        <h1>Expand your <br/> coverage with <span>Allidge</span></h1>
        <p>Customer satisfaction is at the heart of everything we do.We are committed to  providing exceptional IT services 
                           that exceed your expectations and help you  achieve your business goals.</p>
        <button>Let's connect</button>
      </div>
    </div>
  )
}

export default Header