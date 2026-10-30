
import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/sidebar'
import Tarjeta from './componentes/Tarjeta'
import {tecnologias} from "./data/tecnologias"
import PiePagina from './Componentes/PiePagina'
import fotoPerfil from './imagenes/cristian.jpeg'
import Presentacion from './componentes/Presentacion' 
import Inicio from './paginas/Inicio'
import Perfil from './paginas/Perfil'
import { Route, Routes } from 'react-router'

function App(){
  
  const usuario = {
    nombre:"Cristian Hurtado",
    rol:"Aprendiz",
    correo: "cristiancorporativo09@gmail.com",
    foto: fotoPerfil,
  };
  
  return (
    <>
    <div  className='layaut'>
      <Encabezado usuario={usuario}/>
      <Sidebar/>
      <main className='contenido'>
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>
      <PiePagina/>
    </div>
  </>
  )
}

export default App