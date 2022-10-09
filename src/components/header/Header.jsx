import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const header = () => {
  return (
    <header>

      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1 data-aos="fade-up">Mukundraj Irkal</h1>
        <h5 className="text-light">Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll down</a>

        <headerSocials/>

      </div>

    </header>
  )
}

export default header
