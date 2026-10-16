
import foto from '../imagenes/jesus.jpg'
function Presentacion(){

    return(
        <article className="presentacion">
            <img src={foto} alt='Mi foto'/>
            <h1> Mi perfil </h1>
            <h2> Nombre: CRISTIAN EDUARDO HURTADO </h2>
            <h2> Barrio: LOS SAUCES </h2>
            <h4> medios de contacto </h4>
                <h2> Correo: cristiancorporativo09@gmail.com </h2>
                <h2> Telefono: +57 3105242498 </h2>
            <h1> Soy aprendiz  del SENA completando el año   </h1>
        </article>
    )

}

export default Presentacion