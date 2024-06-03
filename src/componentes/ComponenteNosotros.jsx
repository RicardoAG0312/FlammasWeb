import "../estilos/componenteNosotros.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ComponenteEncabezadoNosotros ({titulo, subtitulo}) {
    return (
        <section className="container-fluid seccionEncabezadoNosotros">
            <div>
                <h3> {subtitulo} </h3>
                <h1> {titulo} </h1>
            </div>
        </section>
    )
}
function ComponenteMiniTerceraSeccion ({titulo, subtitulo}) {
    return (
        <section className="mini-terceraseccion">
            <div>
                <h1> {titulo} </h1>
                <p> {subtitulo} </p>
            </div>
        </section>
    )
}
function ComponenteSobreFlammas ({imagen, titulo, texto}) {
    return (
        <section className="container seccion-sobre-flammas">
            <div className="row">
                <div className="col-12 col-sm-5 col-xl-5 imagen">
                    <img src={require(`../images/${imagen}.jpeg`)} alt="imagen" />
                </div>
                <div className="col-12 col-sm-5 col-xl-5 texto">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
            </div>
        </section>
    )
}
function ComponenteMision({imagen, texto}){
    return(
        <div className="carta">
            <div className="imagen-contenedor">
                <img src={require(`../images/${imagen}.png`)} alt="imagen" />
            </div>
            <p> {texto} </p>
        </div>
    )
}
function ComponenteVision({imagen, texto, texto2}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 imagenVision">
                    <img src={require(`../images/${imagen}.png`)} alt="imagen" />
                </div>
                <div className="col-md-8 text-content">
                    <p> {texto} </p>
                    <p> {texto2} </p>
                </div>
            </div>
        </div>
    )
}


function ComponenteNosotrosFlammas () {
    return (
        <>
            <ComponenteEncabezadoNosotros 
                subtitulo = "DESDE 2004 DESARROLLANDO SOFTWARE CON PASIÓN Y TALENTO"
                titulo = "SOMOS UN EQUIPO DE EXPERTOS VOLCADO EN AYUDAR A LÍDERES Y PERSONAL TI A CONSEGUIR LA TOTAL OBSERVABILIDAD DE SU ORGANIZACIÓN"
            />
            <ComponenteSobreFlammas 
                imagen = "IMAGEN-FONDO-PRINCIPAL"
                titulo = "SOBRE FLAMMAS:"
                texto = "Comenzamos en el año 2004 primero con el nombre de Artica. Nuestra primera oficina era aproximadamente del mismo tamaño que un garaje californiano. El proyecto original se publicó bajo licencia de código abierto (GPL2), ya que originalmente surgió como un proyecto personal de su CEO y fundador, Sancho Lerena; a partir de entonces ha evolucionado, transformándose en una suite de monitorización para empresas, traspasando fronteras e idiomas y ofreciendo una de las soluciones más completas del mercado."
            />
            <section className="container-fluid seccion-mision">
                <div className="mt-5">
                    <h2>NUESTRA MISION</h2>
                </div>
                <div className="container contenedor-cartas">
                    <ComponenteMision
                        imagen="25"
                        texto="Nuestra misión es ofrecer un sistema de monitorización integrado y horizontal para medianas y grandes empresas, capaz de proveer información de distintas fuentes a diferentes departamentos, todo a través de una única consola."
                    />
                    <ComponenteMision
                        imagen="26"
                        texto="Creemos en el enorme potencial de la monitorización para mejorar cualquier organización que apoye su negocio en tecnología."
                    />
                    <ComponenteMision
                        imagen="25"
                        texto="Queremos ser una alerta temprana, queremos ser aquellos que avisan en el momento exacto antes de que suceda algo imprevisto, queremos ser ese compañero de viaje imprescindible para cualquier aventura y caminar juntos hasta la siguiente meta."
                    />
                </div>
            </section>
            <section className="container-fluid seccion-vision">
                <div className="mt-5">
                    <h2 className="text-center">NUESTRA VISION</h2>
                </div>
                <ComponenteVision
                    imagen="24"
                    texto="Creemos en el crecimiento sostenido. No tenemos prisa, hemos venido para quedarnos. Nuestra relación con clientes y empleados siempre es a largo plazo. Sabemos que el mercado actual está maduro y se renueva constantemente, cambiando las reglas del juego."
                    texto2="Aprendemos, nos adaptamos y crecemos conforme lo hacen nuestros clientes. Nuestra visión es ser los proveedores de tecnología de servicios clave y estar presentes en empresas de todos los sectores a nivel mundial."
                />
            </section>
            <section className="container-fluid contenedor-tercera-seccion">
                <h2> FLAMMAS EN NÚMEROS EN LA ACTUALIDAD </h2>
                <p> Desde 2004, Flammas no ha parado de crecer, posibilitando la evolución constante de este proyecto que hace que nos adaptemos a la realidad cambiante de hoy. </p>
                <div className="container-fluid contenedor-cartas-terceraS">
                    <ComponenteMiniTerceraSeccion 
                        titulo = "+1M"
                        subtitulo = "Métricas en la mayor de las instalaciones en un cliente real."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "24/7"
                        subtitulo = "Soporte técnico disponible a nivel mundial."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "+60"
                        subtitulo = "Presentes en más de 60 países de todo el mundo en los cinco continentes."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "96%"
                        subtitulo = "De nuestros clientes se quedan con nosotros y renuevan cada año sus suscripciones."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "+100K"
                        subtitulo = "Usuarios en todo el mundo que utilizan Flammas en todo tipo de organizaciones."
                    />
                    <ComponenteMiniTerceraSeccion 
                        titulo = "1 HORA"
                        subtitulo = "Es el tiempo que necesitas para instalarlo y cubrir tus sistemas."
                    />
                </div>
            </section>
        </>
    ) 
}

export default ComponenteNosotrosFlammas;




