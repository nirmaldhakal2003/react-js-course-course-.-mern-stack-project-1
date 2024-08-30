import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function bhitra html xa vani component ho 

function App() {
  const [count, setCount] = useState(0)
  const name = "Nirmal"

  return (
    <>
    <h1 style={{color : "green"}}>Hello {name} !!!</h1>
    <h2>Arun Neupane </h2>
    <h3>hello guys welcome back to my channel</h3>
    </>
    
  )
}



export default App
