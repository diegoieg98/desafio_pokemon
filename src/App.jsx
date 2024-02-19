import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Personajes from './views/Personajes'
import Detalles from './views/Detalles'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/desafio_pokemon' element={<Home/>}/>
        <Route path='/personajes' element={<Personajes/>}/>
        <Route path='/personajes/:name' element={<Detalles/>}/>
      </Routes>
    </div>
  )
}

export default App
