import {opcionesMenu} from'../data/menu.js'
function Sidebar({usuario}){
    return(
        <aside className="Sidebar">
            
            <h3 className="sidebar-titulo"> menu </h3>

            <nav>
                <ul className="sidebar-menu">
                   {opcionesMenu.map((opcion)=>(
                    <li key={opcion.id}>
                        <a href={opcion.url}>
                            {opcion.icono}{opcion.texto}
                        </a>
                    </li>
          ))}
                </ul>
            </nav>
            <p className="sidebar-pie"> 3312943 - ADSO</p>

        </aside>
    )
}
export default Sidebar
