import React from 'react'
import "./global.css"
import Header from './components/header/Header'
import Main from './components/main/Main'

const App = () => {
  const navBarVal = ["Home", "About", "Services", "Projects", "Content"]
  const socials = ["/Facebook.svg", "/Instagram.svg", "/Linkdin.svg", "/Twitter.svg", "/WhatsApp.svg"]
  const BtnContent = "Download CV"
  return (
    <>
    <Header  navBarVal={navBarVal} />
    <Main socials={socials} BtnContent={BtnContent}/>
    </>
  )
}

export default App
