import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FiAward } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>2 Years Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>None yet 😐</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
          I am a student pursuing my degree in bachelor of Engineering in Computer Science and Engineering at Jain College of Engineering and Technology Hubli. I am a quick learner and can adopt to any situation quite easily. I am hardworking and can handle multiple tasks. I am eager to learn, I enjoy overcoming challenges.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
