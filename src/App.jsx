import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'




// function bhitra html xa vani component ho 

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About/>}/>



    </Routes>
    </BrowserRouter>
  )
}



export default App
