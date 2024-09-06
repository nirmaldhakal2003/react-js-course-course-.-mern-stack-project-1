
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Test from './test'







// function bhitra html xa vani component ho 

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/test' element={<Test />}/>




    </Routes>
    </BrowserRouter>
  )
}



export default App
