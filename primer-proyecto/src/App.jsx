
import './App.css'
import Encabezado from './componentes/Encabezado'
import Sidebar from './componentes/Sidebar'
import Tarjeta from './componentes/Tarjeta'
import PiePagina from './componentes/PiePagina'
import Presentacion from './componentes/Presentacion'

function App() {

  const programa= 'Analisis y Desarrollo de Software'

  return(
    <>
     <div  className='layaut'>
    <Encabezado/>

    <Sidebar/>
    <main className='contenido'>
      <h2> Bienvenidos al programa {programa}</h2>
      <Presentacion/>
      <section className='tarjetas'>
        <Tarjeta
        icono="⚛️"
        titulo="React"
        descripcion="biblioteca de JavaScript de código abierto que se utiliza para construir interfaces de usuario (UI), principalmente en aplicaciones de una sola página (SPA)"
        horas={120}
        destacada={true}/>
        <Tarjeta
        icono="⚡"
        titulo="Vite"
        descripcion="Vite es una herramienta de compilación y desarrollo frontend herramienta de compilación y desarrollo frontend de nueva generación, creada por Evan You (autor de Vue.js), cuyo objetivo es ofrecer un entorno mucho más rápido y ligero que las herramientas tradicionales como Webpack o Parcel"
        horas={60}
        destacada={false}
        />
        <Tarjeta
        icono="💻"
        titulo="EsLint"
        descripcion="ESLint es una herramienta de análisis estático de código para JavaScript (y JSX) que examina el código fuente sin ejecutarlo para detectar errores, malas prácticas y problemas de estilo."
        horas={20}
        destacada={false}
        />
      </section>
    </main>
    <PiePagina/>
    </div>
    </>
  )
}

export default App
