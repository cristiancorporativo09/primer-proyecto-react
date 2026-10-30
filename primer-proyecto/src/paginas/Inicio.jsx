import {Link} from  "react-router";

function Inicio() {
    const programa = 'Analisis y desarrollo de Software'


    return (
        <section>
            <h2>Bienvenido al programa {programa}</h2>
            <p> Este es el Dashboard de la competencia de fronted con React</p>
            <p>
                Empieza por conocer <Link to = "/perfil">mi perfil</Link>
                o tambien revisa las {''}
                <Link to= "/tecnologias">tecnologias</Link> que vamos a trabajar.
            </p>
        </section>
    )

}

export default Inicio