import React from 'react'
import './experience.css'

import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {CgFigma} from 'react-icons/cg'
import {IoLogoNodejs} from 'react-icons/io'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import 'animate.css';

const experience = () => {
  return (
    <section id="experience">

      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend " >

            <h3>Frontend Development</h3>

            <div className="experience__content">
              <article className="experience__details">
                <FaHtml5 className='experience__details-icons' />
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCss3Alt className='experience__details-icons'/>
               <div>
               <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
               </div>
              </article>
              <article className="experience__details">
                <TbBrandJavascript className='experience__details-icons'/>
                <div>
                <h4>Java Script</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaReact className='experience__details-icons'/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaBootstrap className='experience__details-icons'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <CgFigma className='experience__details-icons'/>
                <div>
                <h4>Figma</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>

        </div>

        <div className="experience__backend">

          <div className="experience__content"></div>

          <h3>Backend Development</h3>

<div className="experience__content">
  <article className="experience__details">
    <IoLogoNodejs className='experience__details-icons'/>
<div>
<h4>Node JS</h4>
    <small className='text-light'>Intermediate</small>
</div>
  </article>
  <article className="experience__details">
    <SiPhp className='experience__details-icons'/>
    <div>
    <h4>PHP</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>
  <article className="experience__details">
    <SiMysql className='experience__details-icons'/>
    <div>
    <h4>MySQL</h4>
    <small className='text-light'>Experienced</small>
    </div>
  </article>
  <article className="experience__details">
    <FaPython className='experience__details-icons'/>
    <div>
    <h4>Python</h4>
    <small className='text-light'>Intermediate</small>
    </div>
  </article>
  
</div>

        </div>

      </div>

    </section>
  )
}

export default experience
