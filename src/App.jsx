import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Contact/>
            <Footer/>

        </>
      
    </div>

  )
}

export default App
