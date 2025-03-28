import { useState } from 'react'
import  { styled,ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import { darkTheme } from './utils/Themes'
import { BrowserRouter, Router } from 'react-router-dom'
import './App.css'
// import { Router } from '
import Hero from './components/section/Hero'
import Footer from './components/section/Footer'
import Skills from './components/section/Skills'
import Education from './components/section/Education'
// import { Projects } from './data/constants'
import Projects from "./components/section/Projects"
import Contact from './components/section/Contact'
const Body = styled.div`
background-color: ${({theme})=>theme.bg};
width:100%;
color:${({theme})=>theme.text_primary};
overflow-x:hidden;
position:relative;
height:90vh;
`;

function App() {

  return (
    <>

<ThemeProvider theme={darkTheme}>
    <BrowserRouter>
<Navbar/>
  <Body>
  
  <Hero/>
  <Skills/>
  <Education/>
  <Projects/>
  <Contact/>
  <Footer/>

   </Body>

</BrowserRouter>

</ThemeProvider>
   </>
  )
}

export default App
