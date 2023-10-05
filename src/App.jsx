import { Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Project from './Project/Project'
import Acerca from './Acerca/Acerca'
import Contactame from './Contactame/Contactame'
import NavBar from './NavBar/NavBar'
import './App.module.css'
function App() {
  
  
  return (
    <div>
     <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Project' element={<Project/>}/>
    
    <Route path='/Acerca' element={<Acerca/>}/>
    <Route path='/Contactame' element={<Contactame/>}/>
    </Routes>
   </div>
  )
}

export default App
