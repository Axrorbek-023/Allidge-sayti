import React from 'react'
import './Group.css'

function Group() {
  return (
    <section className='Group'>
        <div className='container'>
          <div className='Group__box'>
          <h1 className='Group__title'>Meet <span className='Group__span'>Alliedge Group</span> </h1>
            <span className='Group__span2'></span>
          </div>
          <div className='Group__box2'>
            <div className='box1'>
              <h1 className='box1__title'>Alliedge Tech</h1>
              <p className='box1__p1'>visit site</p>
              <p className='box1__p2'>Software Based Company </p>
              <p className='box1__p3'>Powered by Alliedge</p>
            </div>
            <div className='box2'>
              <h1 className='box1__title'>Vision Softronics</h1>
              <p className='box1__p1'>visit site</p>
              <p className='box1__p2'>Hardware Based Company</p>
              <p className='box1__p3'>Powered by Alliedge</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Group
// rfce 