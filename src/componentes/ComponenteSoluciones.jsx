import React, { useState } from "react";
import "../estilos/componenteSoluciones.css";
import "../estilos/componenteInicio.css"
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";
import { MiniComponenteProductos } from "./ComponenteProductos";
import ImagenOne from "../images/ultimg.png.png";
import ImagenMarcus from "../images/marcus.webp";

export function ComponenteEncabezadoSoluciones({ titulo, subtitulo, texto }) {
    return (
        <section className="container-fluid seccionEncabezadoSoluciones">
            <h3> {subtitulo} </h3>
            <h1> {titulo} </h1>
            <p> <b> {texto} </b> </p>
        </section>
    )
}

export function ComponenteEncabezadoSolucionesOne({ titulo, subtitulo, texto, boton }) {
    return (
        <section className="container-fluid seccionEncabezadoSoluciones">
            <h3> {subtitulo} </h3>
            <h1> {titulo} </h1>
            <p> <b> {texto} </b> </p>
            <div style={{ background: "#CF0F09" }} className='btn btn-danger'>
                <a className='botonInfoFlammas' href={process.env.PUBLIC_URL + "/Datasheet_OneSecurity.pdf"} download={"Flammas-OneSecurity-Series"} rel="noopener noreferrer"> {boton} </a>
            </div>
        </section>
    )
}

export function ComponenteEncabezadoSolucionesMarcus({ titulo, subtitulo, texto, boton }) {
    return (
        <section className="container-fluid seccionEncabezadoSoluciones">
            <h3> {subtitulo} </h3>
            <h1> {titulo} </h1>
            <p> <b> {texto} </b> </p>
            <div style={{ background: "#CF0F09" }} className='btn btn-danger'>
                <a className='botonInfoFlammas' href={process.env.PUBLIC_URL + "/Datasheet_Flammas.pdf"} download={"Flammas-Marcus-Series.pdf"} rel="noopener noreferrer"> {boton} </a>
            </div>
        </section>
    )
}
function ComponenteInfoIzquierdaSoluciones({ titulo, texto, imagen, id }) {
    return (
        <section className="container contenedorCartaInfoIzquierda" id={id}>
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
            </div>
        </section>
    )
}
function ComponenteInfoDerechoSoluciones({ titulo, texto, imagen }) {
    return (
        <section className="container contenedorCartaInfoIzquierda">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
            </div>
        </section>
    )
}
function ComponentetxtDerechoSoluciones({ titulo, texto, texto1, imagen }) {
    return (
        <section className="container contenedorAZJIzquierda">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2 className="text-end"> {titulo} </h2>
                    <p className="text-end"> {texto} </p>
                    <p className="text-end"> {texto1} </p>
                </div>
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
            </div>
        </section>
    )
}
function ComponentetxtIzquierdaSoluciones({ titulo, texto, imagen }) {
    return (
        <section className="container contenedorAZJIzquierda">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2 className="text-start"> {titulo} </h2>
                    <p className="text-start"> {texto} </p>
                </div>
            </div>
        </section>
    )
}
function ComponenteInfoCentral({ titulo, texto1, texto2 }) {
    return (
        <section className="container contenedorInfoCentral">
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center align-items-center derecha">

                </div>
                <div className="col-md-6 info">
                    <h2 className="text-center">{titulo}</h2>
                    <p className="text-justify">{texto1}</p>
                    <p className="text-justify">{texto2}</p>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center izquierda">

                </div>
            </div>
        </section>
    )
}
function ComponenteFuncionalidadAvanzada({ imagen, titulo, texto }) {
    return (
        <div className="funcionalidades">
            <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
            <h2> {titulo} </h2>
            <p> {texto} </p>
        </div>
    )
}
function ComponenteMinisLogs({ nombreIcono, texto }) {
    return (
        <div className="carta-log carta-infra">
            <i className={`bi bi-${nombreIcono}`}> </i>
            <p>  {texto} </p>
        </div>
    )
}
function ComponenteMiniInfra({ nombreIcono, texto }) {
    return (
        <div className="carta-infra">
            <i className={`bi bi-${nombreIcono}`}> </i>
            <p>  {texto} </p>
        </div>
    )
}
function ComponenteCartaAnimable({ nombreIcono, titulo, subtitulo, texto }) {
    return (
        <div className="maincontainer">
            <div className="card">
                <div className="thefront">
                    <i className={`bi ${nombreIcono}`}></i>
                    <h6> {titulo} </h6>
                </div>
                <div className="theback">
                    <h6> {subtitulo} </h6>
                    <p> {texto} </p>
                </div>
            </div>
        </div>
    )
}
function ComponenteViñetaAnimada({ nombreImagen, titulo, texto }) {
    return (
        <>
            <div className="viñeta-animada">
                <img src={require(`../images/${nombreImagen}.png`)} alt="Imagen" />
                <h2> {titulo} </h2>
                <p> {texto} </p>
            </div>
        </>
    )
}
function MiniComponentesSegundaSeccion({ imagen, titulo, texto }) {
    return (
        <div className='carta'>
            <img src={require(`../images/${imagen}.svg`)} alt="Imagen" />
            <h1> {titulo} </h1>
            <p> {texto} </p>
        </div>
    )
}
function EndVIñetas({ titulo, texto }) {
    return (
        <div className="card d-flex justify-content-center align-content-center p-5">
            <h2 className="text-black w-75"> {titulo} </h2>
            <p style={{ fontSize: "18px", fontFamily: "Montserrat" }}> {texto} </p>
        </div>
    )
}





// Componentes a renderizar
export function ComponenteSolucionesMonitorizacion() {
    return (
        <>
            <ComponenteEncabezadoSoluciones
                subtitulo="Soluciones de Flammas"
                titulo="Monitorización de red"
                texto="Flammas te permite descubrir todos tus equipos de red y representar su topología en mapas que conectan interfaces y visualizan la estructura de su red al detalle. Ve más allá, unificando la gestión de tus dispositivos con una completa observabilidad en tu red."
            />
            <section className="container-fluid seccionEscrituraPrincipalSoluciones">
                <h2> ¿Qué aporta la monitorización de redes a tu compañía? </h2>
                <p> En la actualidad, las redes son esenciales para el negocio de muchas empresas y organizaciones. Las interrupciones o pérdidas de rendimiento de estas pueden conllevar graves consecuencias, como paradas en el servicio o caídas en la productividad. Tu sistema debe ser capaz de supervisar en todo momento el estado de tus redes y los diferentes componentes que forman parte de esta. </p>
                <p> Por ello, el monitoreo de redes será fundamental para prevenir incidencias o ayudar a resolverlas lo antes posible, cuando estas sean inevitables. </p>
            </section>
            <ComponenteInfoIzquierdaSoluciones
                titulo="Desde lo más básico a lo inimaginable"
                texto="Ancho de banda, pérdida de paquetes, latencia, disponibilidad, número de conexiones. Da igual el origen: routers, AP, switches, firewalls, servidores, estaciones de trabajo, IoT. Si tiene IP, Flammas puede coger el dato. No estamos limitados sólo a SNMP o a recogida de datos con agentes."
                imagen="41.png"
                id="none"
            />
            <ComponenteInfoDerechoSoluciones
                titulo="Gestión de IPs"
                texto="Nuestro sistema IPAM permite gestionar redes, superedes y hacer subnetting. Podrás gestionar ubicaciones físicas, realizar reservas de IP y disponer de un mapa de IP así como informes de uso de IP, y alertas cuando te quedes sin IP disponibles. Se puede integrar con un servidor DHCP de Microsoft."
                imagen="42.png"
                id="none"
            />
            <ComponenteInfoIzquierdaSoluciones
                titulo="Análisis de red en tiempo real"
                texto="Netflow sirve para obtener estadísticas en tiempo real de tus equipos de red (routers, switches, firewalls) y ofrecer informes de uso, cuellos de botella o ayudar a hacer diagnósticos de problemas."
                imagen="43.png"
            />
            <ComponenteInfoDerechoSoluciones
                titulo="Alta escalabilidad"
                texto="Escalabilidad prácticamente ilimitada gracias a Command Center, y nuestros Servidores Satélite que permiten escalar horizontalmente y generar decenas de miles de consultas de red por segundo de forma distribuida. Contamos con clientes con más 100.000 dispositivos de red en una única instancia."
                imagen="44.png"
                id="none"
            />
            <ComponenteInfoIzquierdaSoluciones
                titulo="Informes y cuadros de mando"
                texto="Flammas recoge todo tipo de datos y te ofrece un editor de informes para que puedas generarlos de manera personalizada: top N, gráficas detalladas a cualquier escala de tiempo, informes SLA, informes de disponibilidad, cronogramas y decenas más."
                imagen="45.png"
            />
            <ComponenteInfoDerechoSoluciones
                titulo="Gestión de configuraciones"
                texto="Flammas puede recoger la configuraciones de tus equipos, detectar cuando cambian (y donde) y recuperar backup de dichas configuraciones. También podrá desplegar cambios masivamente en decenas de equipos (como por ejemplo añadir una VLAN)."
                imagen="46.png"
            />
            <header className="funcionalidades"> Funcionalidades Avanzadas </header>
            <section className="container-fluid seccionFuncionAvanzadas">
                <ComponenteFuncionalidadAvanzada
                    imagen="25.png"
                    titulo="Entornos distribuidos"
                    texto="Descubre y monitoriza equipos remotos en redes de clientes de manera autónoma y desplegando una sencilla sonda instalable en Windows, Raspberrys o pequeñas máquinas virtuales. Nuestros servidores satélites funcionan de manera autónoma y silenciosa y son capaces de gestionar cientos de dispositivos."
                />
                <ComponenteFuncionalidadAvanzada
                    imagen="26.png"
                    titulo="Licenciamiento sin sorpresas"
                    texto="Conoce exactamente lo que te va a costar, sin sorpresas, sin ampliaciones, sin módulos adicionales. Planifica el crecimiento de su entorno con exactitud desde el día uno. En Flammas todo incluido, significa eso, todo incluido en el coste inicial de la licencia."
                />
                <ComponenteFuncionalidadAvanzada
                    imagen="27.png"
                    titulo="Monitorización de seguridad"
                    texto="Controla en todo momento de qué versiones, modelos e IP dispones. No sólo de equipos de red como switches, routers, también firewalls. Establece alertas si se usan modelos con vulnerabilidades. Envía los logs de todos tus sistemas a nuestra consola de logs y crea alertas de correlación."
                />
                <ComponenteFuncionalidadAvanzada
                    imagen="28.png"
                    titulo="Inteligencia artificial"
                    texto="Deja que se configuren solo los umbrales de fallo de manera automática, en base al uso cotidiano. Crea alertas en base al uso proyectado de tus recursos. Genera informes útiles para planificar el uso de tu red."
                />
            </section>
            <ComponenteEncabezadoSoluciones
                subtitulo="Soluciones de Flammas"
                titulo="Gestión de Logs"
                texto="Imagina poder buscar información en los logs a lo largo de todos tus sistemas monitorizados con un solo click de ratón. Si ya tienes actualmente instalado un agente de Flammas en esas máquinas, ¿por qué no recoger también logs?"
            />
            <ComponenteInfoIzquierdaSoluciones
                titulo="Auditoría y seguridad (HIPAA, RGPD, ISO 27001)"
                texto="Lo último que quieres es fallar en una auditoría o tener que revelar una posible violación de datos porque no has recogido los datos necesarios para una investigación o no dispones de los datos requeridos para averiguar lo que ha pasado. Si ya monitorizas esos sistemas, guarda sus logs."
                imagen="23.png"
                id="log"
            />
            <section className="container-fluid contenedor-cartitas">
                <MiniComponenteProductos
                    titulo="Almacenamiento económico para sus logs"
                    texto="El tipo de almacenamiento para guardar logs en Flammas es muy asequible con respecto a otras herramientas similares. Con Flammas ahorrarás dinero en almacenamiento a largo plazo. La licencia Enterprise ya cubre esta funcionalidad, sólo tendrás que asignar más almacenamiento en tus servidores."
                />
                <MiniComponenteProductos
                    titulo="Búsqueda de la información simple y sencilla"
                    texto="No necesitarás ser un científico de datos ni normalizar la información en un complicado juego de plantillas. Busca cadenas o patrones mediante expresiones regulares, y guarda tus búsquedas. Tan simple como suena."
                />
            </section>
            <section className="container-fluid contenedor-cartas-logs">
                <ComponenteMinisLogs
                    nombreIcono="diagram-3"
                    texto="Olvídate de formatos, parseos o definiciones estrictas."
                />
                <ComponenteMinisLogs
                    nombreIcono="terminal"
                    texto="Compatible con Linux, Windows y Unix por igual."
                />
                <ComponenteMinisLogs
                    nombreIcono="chat"
                    texto="Compatible con cualquier log en formato texto plano de cualquier aplicación."
                />
                <ComponenteMinisLogs
                    nombreIcono="search"
                    texto="Investiga entre tu historial de logs con búsquedas intuitivas y sencillas."
                />
                <ComponenteMinisLogs
                    nombreIcono="filetype-csv"
                    texto="Sencillo de extraer. No requiere instalar software intermedio ni redirigir logs a través de la red."
                />
                <ComponenteMinisLogs
                    nombreIcono="lock"
                    texto="Investiga los registros con filtros de búsqueda intuitivos y un veloz rendimiento, visualízalos en bonitos paneles de Kibana."
                />
                <ComponenteMinisLogs
                    nombreIcono="database"
                    texto="Tus datos seguirán siendo tuyos. Almacenamiento local 100% on-premise."
                />
                <ComponenteMinisLogs
                    nombreIcono="pie-chart"
                    texto="Escala según tus necesidades. Puedes ampliar la capacidad de almacenamiento según lo necesites."
                />
            </section>
            <section className="container-fluid contenedor-animables">
                <header> La solución de supervisión total para la observabilidad total </header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable
                        nombreIcono="bi-person-lines-fill"
                        titulo="Experiencia de usuario"
                        subtitulo="Experencia de usuario"
                        texto="Comprueba si tu aplicación como se espera. Detecta el fallo antes que lo hagan tus clientes."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-graph-up"
                        titulo="Monitorización de aplicaciones (APM)"
                        subtitulo="Monitorización de aplicaciones (APM)"
                        texto="Supervisa tus aplicaciones empresariales a todo nivel y obten todos los datos APM que necesites."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-display"
                        titulo="Monitorización de entornos virtuales"
                        subtitulo="Monitorización de entornos virtuales"
                        texto="Optimiza tu infraestructura ya sea en instalaciones hibridas, virtuales o cloud."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-exclamation-diamond-fill"
                        titulo="Gestión de incidencias"
                        subtitulo="Gestión de incidencias"
                        texto="Integra el sistema de ticketing de tu infraestructura en Flammas."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-joystick"
                        titulo="Control Remoto"
                        subtitulo="Control Remoto"
                        texto="Todos tus dispositivos controlados por una herramienta accesible con solo un navegador web."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-headset"
                        titulo="Gestión de servicio y asistencia"
                        subtitulo="Gestión de servicio y asistencia"
                        texto="Mida y supervise su pila de TI para detectar resolver problemas en tu infraestructura de TI."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-cpu-fill"
                        titulo="Monitorización mainframe"
                        subtitulo="Monitorización mainframe"
                        texto="Dispón de una única plataforma para recoger y mostrar la información venga de donde venga."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-ethernet"
                        titulo="Monitorización de redes"
                        subtitulo="Monitorización de redes"
                        texto="Observa toda tu información en conjunto, incluso cuando tengas miles de dispositivos que supervisar."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-card-checklist"
                        titulo="Inventario TI"
                        subtitulo="Inventario TI"
                        texto="Recoge y supervisa el estado de todos los datos de tu infraestructura informática en una sola herramienta."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-file-earmark-text"
                        titulo="Recolección de logs"
                        subtitulo="Recolección de logs"
                        texto="Recoge, visualiza y centraliza todos tus registros en un único punto."
                    />
                </div>
            </section>
            <MiniComponenteQuintaSeccion
                titulo="+500 INTEGRACIONES:"
                subtitulo="EXPANDE EL PODER DE TU MONITORIZACIÓN"
                texto1="Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo."
                texto2="Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados."
            />
        </>
    )
}
export function ComponenteSolucionesInfraestructura() {
    return (
        <>
            <ComponenteEncabezadoSoluciones
                titulo="MONITORIZACIÓN DE INFRAESTRUCTURA"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Flammas no es un puzzle de distintas soluciones integradas de forma superficial, cubrimos desde el hardware hasta las aplicaciones de usuario."
            />
            <section className="container-fluid contenedor-cartas-infra">
                <ComponenteMinisLogs
                    nombreIcono="alarm-fill"
                    texto="Gracias a que todos los datos empleados se integran en tiempo real y su potente capacidad de histórico para ver gráficas de varios meses."
                />
                <ComponenteMinisLogs
                    nombreIcono="arrow-down-circle"
                    texto="Dashboard en tiempo real, informes personalizables al milímetro y un sistema de notificaciones flexible que proporcionan una visión de 360º."
                />
                <ComponenteMinisLogs
                    nombreIcono="bag-check"
                    texto="Sistema operativo base, aplicaciones, bases de datos, logs, almacenamiento, redes, experiencia de usuario. Todo en una única plataforma."
                />
                <ComponenteMinisLogs
                    nombreIcono="calendar2-week-fill"
                    texto="integradas en nuestra librería de tecnología."
                />
                <ComponenteMinisLogs
                    nombreIcono="camera-video-fill"
                    texto="100% multitenant, podrá dar servicio a diferentes empresas con la misma instancia."
                />
                <ComponenteMinisLogs
                    nombreIcono="cloud-arrow-down-fill"
                    texto="Mediante plantillas, despliegue de plugins y una configuración remota integrada en la interfaz gráfica."
                />
            </section>
            <section className="container-fluid contenedor-tercero-infra">
                <header> CARACTERÍSTICAS ESPECIALES </header>
                <div className="row">
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2> MONITORIZACIÓN SIN AGENTES </h2>
                        <p> Aunque te recomendamos instalar un agente local, también podrás descubrir tus servidores y obtener información remotamente de ellos, sin necesidad de instalar agentes. </p>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2> MONITORIZACIÓN A BAJO NIVEL </h2>
                        <p> Los agentes de Flammas, como el resto de nuestra tecnología, son un desarrollo propio, no derivado de terceros. Pueden obtener la información directamente de la fuente, usando llamadas nativas al sistema operativo, sin conectores de terceros o artefactos pesados. Su huella en el sistema es mínima. </p>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2> PERSONALIZACIÓN TOTAL </h2>
                        <p> Flammas te permitirá personalizar tu monitorización de servidores y cualquier proceso, servicio o aplicación, reutilizando scripts propios o facilitando el despliegue de nuevos. </p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-cuarta-infra">
                <header> CARACTERÍSTICAS TÉCNICAS </header>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-6 primera-col">
                        <ComponenteMiniInfra
                            nombreIcono="building"
                            texto="Alta escalabilidad, para gestionar miles de servidores por medio de una única consola, nuestro Command Center™"
                        />
                        <ComponenteMiniInfra
                            nombreIcono="box"
                            texto="Agentes paquetizados para instalación desatendida"
                        />
                        <ComponenteMiniInfra
                            nombreIcono="arrow-repeat"
                            texto="Sistema de provisión automática y centralizada basada en reglas"
                        />
                        <ComponenteMiniInfra
                            nombreIcono="graph-up"
                            texto="API/CLI para automatización en provisión y configuración posterior"
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6 segunda-col">
                        <ComponenteMiniInfra
                            nombreIcono="cloud"
                            texto="Monitorización integrada de Kubernetes, Vmware, AWS, Azure y Google Cloud"
                        />
                        <ComponenteMiniInfra
                            nombreIcono="pencil"
                            texto="Personalización OEM en instaladores e interfaz"
                        />
                        <ComponenteMiniInfra
                            nombreIcono="diagram-2"
                            texto="Proxys directos e inversos en el caso de que su topología sea compleja"
                        />
                        <ComponenteMiniInfra
                            nombreIcono="cloud-arrow-up"
                            texto="HA en toda la plataforma"
                        />
                    </div>
                </div>
            </section>
            <ComponenteEncabezadoSoluciones
                titulo="MONITORIZACIÓN DE EXPERIENCIA DE USUARIO"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Detecta y analiza problemas que afectan al usuario en cualquier punto de tu stack tecnológico."
            />
            <section className="container-fluid contenedor-cartas-infra">
                <ComponenteMinisLogs
                    nombreIcono="geo-alt"
                    texto="Ubicaciones múltiples, podrá lanzar diferentes pruebas desde diferentes lugares geográficos."
                />
                <ComponenteMinisLogs
                    nombreIcono="clipboard-check"
                    texto="Podrás crear la prueba de experiencia de usuario a través de un grabador, sin tener que codificar nada."
                />
                <ComponenteMinisLogs
                    nombreIcono="eye"
                    texto="Visibilidad end-to-end, reduciendo MTTR y asegurando una SLA del 100%."
                />
                <ComponenteMinisLogs
                    nombreIcono="bar-chart-line"
                    texto="Capturas de pantalla, al encontrar un fallo en la transacción para saber exactamente cómo lo ve el usuario, independientemente del código."
                />
                <ComponenteMinisLogs
                    nombreIcono="pencil"
                    texto="Mejora el rendimiento, identificando las métricas clave de rendimiento para la carga de páginas, interacción de usuario y descarga de elementos. Detecta cuellos de botella y problemas de latencia."
                />
                <ComponenteMinisLogs
                    nombreIcono="arrow-repeat"
                    texto="Compatible con cualquier tecnología, al realizar toda la monitorización utilizando navegadores estandarizados. Como un usuario más."
                />
            </section >
            <section className="container-fluid contenedor-segunda-usu">
                <header> ¿POR QUÉ ELEGIR FLAMMAS TU MONITORIZACIÓN DE EXPERIENCIA DE USUARIO? </header>
                <div className="container sub-contenedor-usu">
                    <div>
                        <i className="bi bi-broadcast"></i>
                        <h2> ¿Utilizas Selenium u otros programas de monitorización UX? </h2>
                        <p> Flammas es flexible y se adapta a cualquier tecnología del mercado, pudiendo integrar toda la monitorización en un solo punto, podemos reutilizar tus scrips actuales e integrarlos. </p>
                    </div>
                    <div>
                        <i className="bi bi-robot"></i>
                        <h2> Automatización todo-en-uno </h2>
                        <p> Si dispones de un sistema de automatización de tareas, Flammas UX te permitirá ejecutar los scripts que hayas desarrollado e implementado, para monitorizar su ejecución. </p>
                    </div>
                    <div>
                        <i className="bi bi-person-circle"></i>
                        <h2> End User Experience controlado </h2>
                        <p> Podrá monitorizar el rendimiento de tráfico de datos, así como los tiempos de respuesta de su aplicación, además de solventar cualquier problema antes que tus clientes. </p>
                    </div>
                    <div>
                        <i className="bi bi-lightbulb"></i>
                        <h2> Licencia sencilla de entender </h2>
                        <p> La monitorización de experiencia de usuario está incluida de serie en la licencia estándar Enterprise. No hagas cábalas, y disfruta sin límites de la monitorización extremo a extremo que ofrecemos. </p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-animables">
                <header> La solución de supervisión total para la observabilidad total </header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable
                        nombreIcono="bi-person-lines-fill"
                        titulo="Experiencia de usuario"
                        subtitulo="Experencia de usuario"
                        texto="Comprueba si tu aplicación como se espera. Detecta el fallo antes que lo hagan tus clientes."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-graph-up"
                        titulo="Monitorización de aplicaciones (APM)"
                        subtitulo="Monitorización de aplicaciones (APM)"
                        texto="Supervisa tus aplicaciones empresariales a todo nivel y obten todos los datos APM que necesites."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-display"
                        titulo="Monitorización de entornos virtuales"
                        subtitulo="Monitorización de entornos virtuales"
                        texto="Optimiza tu infraestructura ya sea en instalaciones hibridas, virtuales o cloud."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-exclamation-diamond-fill"
                        titulo="Gestión de incidencias"
                        subtitulo="Gestión de incidencias"
                        texto="Integra el sistema de ticketing de tu infraestructura en Flammas."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-joystick"
                        titulo="Control Remoto"
                        subtitulo="Control Remoto"
                        texto="Todos tus dispositivos controlados por una herramienta accesible con solo un navegador web."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-headset"
                        titulo="Gestión de servicio y asistencia"
                        subtitulo="Gestión de servicio y asistencia"
                        texto="Mida y supervise su pila de TI para detectar resolver problemas en tu infraestructura de TI."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-cpu-fill"
                        titulo="Monitorización mainframe"
                        subtitulo="Monitorización mainframe"
                        texto="Dispón de una única plataforma para recoger y mostrar la información venga de donde venga."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-ethernet"
                        titulo="Monitorización de redes"
                        subtitulo="Monitorización de redes"
                        texto="Observa toda tu información en conjunto, incluso cuando tengas miles de dispositivos que supervisar."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-card-checklist"
                        titulo="Inventario TI"
                        subtitulo="Inventario TI"
                        texto="Recoge y supervisa el estado de todos los datos de tu infraestructura informática en una sola herramienta."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-file-earmark-text"
                        titulo="Recolección de logs"
                        subtitulo="Recolección de logs"
                        texto="Recoge, visualiza y centraliza todos tus registros en un único punto."
                    />
                </div>
            </section>
            <MiniComponenteQuintaSeccion
                titulo="+500 INTEGRACIONES:"
                subtitulo="EXPANDE EL PODER DE TU MONITORIZACIÓN"
                texto1="Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo."
                texto2="Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados."
            />
        </>
    )
}
export function ComponenteSolucionesCloud() {
    return (
        <>
            <ComponenteEncabezadoSoluciones
                titulo="MONITORIZACIÓN CLOUD Y VIRTUAL"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Es la solución todo-en-uno que te ayudará a supervisar tu infraestructura, sin importar si es on-premise, virtualizada, híbrida o en cloud."
            />
            <ComponentetxtDerechoSoluciones
                titulo="Monitorización centralizada de entornos híbridos"
                texto="Supervisa todos los detalles de tus entornos allí donde estén, sin importar el proveedor de servicios, tecnología de virtualización o API de abstracción."
                texto1="Unifica todo el control de tus activos en un único lugar: la consola de Flammas. Podrás gestionar desde cien elementos a varios cientos de miles desde múltiples orígenes, escalando de forma progresiva y dinámica."
                imagen="40.png"
            />
            <ComponentetxtIzquierdaSoluciones
                titulo="Entornos Cloud"
                texto="Haciendo uso de APIs remotas y de manera centralizada somos capaces de unificar los datos de diferentes proveedores ofreciendo un paraguas de unificación de información (incluyendo costes) que permiten comparar y reportar datos de cualquier tipo de proveedor."
                imagen="47.png"
            />
            <ComponentetxtDerechoSoluciones
                titulo="Toma el control de los datos de tus sistemas"
                texto="Hace años, era mucho más sencillo obtener información de tu infraestructura. Hoy en día, es mucho más complicado ante la variedad de arquitecturas on-premise de contenedores dinámicos, mezclada con entornos cloud y SaaS externos de todo tipo."
                texto1="Controla el crecimiento y uso de todos tus sistemas. Gracias a nuestros agentes, sondas remotas o uso de APIs de acceso a la infraestructura cloud, podrá sacar el máximo partido a sus recursos, ahorrar y estimar futuras inversiones."
                imagen="48.png"
            />
            <section className="container-fluid bg-white contenedorFondoBlanco">
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-6 info text-white">
                        <h2 className="text-start"> <span className="text-white">INTEGRACIÓN</span> LAAS </h2>
                        <p> En el caso de que no tengas acceso a los servidores de infraestructura, podrás instalar agentes en tus máquinas o monitorizarlas desde fuera.</p>
                        <p>Además, podrás dar de alta dinámicamente sistemas de manera sencilla, utilizando los mecanismos de provisión de tu proveedor de IaaS y las APIs de Flammas.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6 imagen">
                        <img src={require(`../images/49.png.png`)} alt="Imagen" />
                    </div>
                </div>
            </section>
            <ComponenteInfoCentral
                titulo="INFRAESTRUCTURA DE VIRTUALIZACIÓN"
                texto1="Andora FMS monitoriza automáticamente servidores ESX, DataStores, máquinas virtuales y VirtualCenter de su arquitectura VMware. Además, la monitorización de entornos virtuales no afecta al rendimiento del sistema VMware. Nuestro software utiliza la API oficial para recopilar toda la información."
                texto2="También puede ser utilizada con virtualización Kubernetes, Docker Swarm, OpenStack, Nutanix, XEN, RHEV, HyperV siguiendo los mismos principios (con acceso a las APIs externas)."
            />
            <ComponenteEncabezadoSoluciones
                titulo="Monitorización Continua de la Seguridad del Sistema"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="En Flammas, entendemos la importancia de mantener la integridad y la seguridad de tus sistemas en un mundo digital en constante evolución. Nuestra plataforma está diseñada para proporcionarte las herramientas necesarias para auditar y asegurar tus sistemas con confianza."
            />
            <section className="container-fluid seccion-segunda">
                <div className='container contenedor-cartas'>
                    <MiniComponentesSegundaSeccion
                        imagen="1"
                        titulo="MONITORIZACIÓN DEL HARDENING"
                        texto="Hemos fusionado las recomendaciones del CIS con nuestra tecnología de monitorización para ofrecerte un sistema de auditoría de securización integrado con más de 1500 comprobaciones individuales. Esto te permite rastrear y evaluar en tiempo real la evolución de tus medidas de hardening en todos tus entornos."
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="2"
                        titulo="MONITORIZACIÓN DE VULNERABILIDADES PERMANENTE"
                        texto="Integramos toda la base de datos de vulnerabilidades de Mitre (CVE) y NIST para poder realizar auditorías de software vulnerable en toda su organización de manera continuada. Se utilizarán tanto los agentes como el componente remoto Discovery para determinar cuáles de sus sistemas tienen software con vulnerabilidades."
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="3"
                        titulo="FLEXIBILIDAD EN EL INVENTARIO"
                        texto="Ya sea que utilices sistemas Linux de varias distribuciones o cualquier versión de Windows, nos adaptamos a todo. No importa la complejidad de tu infraestructura, con Flammas puedes realizar un inventario detallado de todo tipo de sistemas y personalizarlo a tu gusto."
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="4"
                        titulo="MONITORIZACIÓN DE LA INFRAESTRUCTURA DE SEGURIDAD"
                        texto="Monitoriza el estado de infraestructuras de seguridad: Backups, antivirus, VPN, firewalls, IDS/IPS, SIEM, honeypots, sistemas de autenticación, sistemas de almacenamiento, recogida de logs, etc."
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="5"
                        titulo="MONITORIZACIÓN DE LA SEGURIDAD EN SERVIDORES"
                        texto="Verificamos en tiempo real la seguridad del acceso remoto, de las contraseñas, de los puertos abiertos y del cambio sobre ficheros clave del sistema. Si algo se mueve, serás avisado casi en tiempo real."
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="6"
                        titulo="ALERTAS PROACTIVAS"
                        texto="No solo te ayudamos a detectar posibles brechas de seguridad, sino que también te brindamos alertas proactivas y recomendaciones para abordar cualquier problema antes de que se convierta en una amenaza real."
                    />
                </div>
            </section>
            <section className="container-fluid seccion-viñetas-animadas">
                <ComponenteViñetaAnimada
                    nombreImagen="58.png"
                    titulo="INVENTARIO Y CONTROL DE ACTIVOS HARDWARE Y SOFTWARE"
                    texto="Supervisa y gestiona todos los dispositivos y software en tu red. Lleva un inventario actualizado de tus activos tecnológicos y usa la autenticación para bloquear lo no autorizado. Además, supervisa y gestiona el software en tu red, solo permite lo autorizado y bloquea lo que no lo es. Tu seguridad lo requiere."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="59.png"
                    titulo="Inventario y Control de Dispositivos"
                    texto="En Flammas, cuidamos la seguridad de tus sistemas desde la base, esto significa identificar y gestionar tus dispositivos de hardware para que solo los autorizados tengan acceso, bloqueando los no deseados. Mantener un inventario adecuado minimiza riesgos internos, organiza tu entorno y brinda claridad a tu red."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="60.png"
                    titulo="Gestión de Vulnerabilidades"
                    texto="Analiza tus activos de forma continua para detectar vulnerabilidades potenciales y soluciónalas antes de que se conviertan en un problema. Refuerza la seguridad de tu red asegurándote de que el software y los sistemas operativos en tu organización estén siempre actualizados con las últimas medidas de seguridad."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="61.png"
                    titulo="Uso Controlado de Privilegios Administrativos"
                    texto="Supervisa de cerca los controles de acceso y el comportamiento de los usuarios con cuentas privilegiadas para evitar cualquier acceso no autorizado a sistemas críticos. Asegúrate de que solo las personas autorizadas tengan privilegios elevados para evitar cualquier mal uso de los privilegios administrativos."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="62.png"
                    titulo="Configuración Segura de Hardware y Software"
                    texto="Establece y mantiene configuraciones de seguridad basadas en los estándares aprobados por tu organización. Crea un sistema de gestión de configuraciones riguroso que detecte y alerte sobre cualquier configuración incorrecta, y establece un proceso de control de cambios para evitar que los atacantes se aprovechen de servicios y configuraciones vulnerables."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="63.png"
                    titulo="Mantenimiento, Supervisión y Análisis de Logs de Auditoría"
                    texto="Recopila, administra y analiza los logs de auditoría de eventos para identificar posibles anomalías. Mantén registros detallados para comprender a fondo los ataques y poder responder de manera eficaz a los incidentes de seguridad."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="64.png"
                    titulo="Defensas contra Malware"
                    texto="Supervisa y controla la instalación y ejecución de código malicioso en varios puntos de tu empresa para prevenir ataques. Configura y utiliza software antimalware y aprovecha la automatización para garantizar actualizaciones rápidas de defensas y una acción correctiva ágil en caso de ataques."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="65.png"
                    titulo="Protección del Correo Electrónico y los Navegadores Web"
                    texto="Protege y administra tus navegadores web y sistemas de correo electrónico contra amenazas en línea para reducir tu superficie de ataque. Desactiva navegadores y complementos de correo electrónico no autorizados y asegura que los usuarios solo accedan a sitios web de confianza mediante filtros de URL basados en la red."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="66.png"
                    titulo="Capacidades de Recuperación de Datos"
                    texto="Establece procesos y herramientas para asegurar que la información crítica de tu organización esté respaldada adecuadamente. Asegúrate de contar con un sistema de recuperación de datos confiable para restaurar la información en caso de ataques que pongan en peligro los datos críticos."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="67.png"
                    titulo="Defensa de Límites y Protección de Datos"
                    texto="Identifica y separa los datos sensibles, y establece una serie de procesos que incluyan la codificación, planes de protección contra la infiltración de datos y técnicas de prevención de pérdida de datos."
                />
                <ComponenteViñetaAnimada
                    nombreImagen="68.png"
                    titulo="Supervisión y Control de Cuentas"
                    texto="Supervisa de cerca todo el ciclo de vida de tus sistemas y cuentas de aplicaciones, desde su creación hasta su eliminación, pasando por su uso e inactividad. Esta gestión activa previene que los atacantes aprovechen cuentas de usuarios legítimos pero inactivos para fines maliciosos."
                />
            </section>
            <section className="container-fluid seccionImg">
                <div></div>
            </section>
            <ComponentetxtDerechoSoluciones
                titulo="LA BASE DE DATOS DE VULNERABILIDADES MÁS COMPLETA"
                texto="Tengas el número de sistemas que tengas, estén donde estén, buscaremos cada pieza de software instalada contrastaremos con la mayor base de datos pública del mundo (CVE, NVD, VulnDB, NVR, MSUG, RHSD) y la contrastaremos con la mayor base de datos del mundo de vulnerabilidades para decirte dónde tienes que actuar."
                texto1="Establece alertas, crea dashboards e informes técnicos para filtrar por grupos de máquina, tipos de ataque, vector de intrusión, uso de privilegios y otros muchos campos."
                imagen="70.png"
            />
            <section className="container-fluid bg-white contenedorIMGTopBot">
                <div className="row">
                    <div className="col-12 imagen">
                        <img src={require(`../images/71.png.png`)} alt="Imagen" />
                    </div>
                    <div className=" container-fluid info text-dark">
                        <h2 className="text-center"> <span className="text-dark">NUESTRO</span> ROADMAP <span className="text-dark">DE SEGURIDAD</span></h2>
                        <p className="p-orange fw-bold">Estamos construyendo una herramienta para controlarlo todo.</p>
                        <p> Flammas es la base para monitorizar, auditar, obtener logs, generar alertas, gestionar configuraciones (NCM), ejecutar tareas de manera distribuida (RMM) y mucho más.</p>
                        <p>Con la monitorización de seguridad, el análisis de hardening y la detección de vulnerabilidades hemos dado el primer paso pero nuestro roadmap es mucho más ambicioso.</p>
                    </div>
                    <div className="col-12 container-fluid imagen-fullwidth">

                    </div>
                    <div className="container-fluid info text-dark">
                        <p className="p-orange fw-bold">Flammas será verdaderamente, la herramienta única para controlarlo todo.</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedorIMGTopBot">
                <div className="row">
                    <div className="col-12 imagen">
                        <img src={require(`../images/73.png.png`)} alt="Imagen" />
                    </div>
                    <div className=" container-fluid info2 text-black">
                        <h2 className="text-center"> <span className="text-black">SEGURIDAD QUE PUEDES</span> VER Y VERIFICAR</h2>
                        <p>Estamos comprometidos a brindarte transparencia en todo momento. Nuestra plataforma te permite verificar fácilmente la implementación de cada control y realizar un seguimiento constante del estado de tu seguridad. No todas las categorías son aplicables a todos los sistemas, pero hemos desarrollado controles que te ayudarán a determinar si son relevantes para tu entorno.</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-animables">
                <header> La solución de supervisión total para la observabilidad total </header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable
                        nombreIcono="bi-person-lines-fill"
                        titulo="Experiencia de usuario"
                        subtitulo="Experencia de usuario"
                        texto="Comprueba si tu aplicación como se espera. Detecta el fallo antes que lo hagan tus clientes."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-graph-up"
                        titulo="Monitorización de aplicaciones (APM)"
                        subtitulo="Monitorización de aplicaciones (APM)"
                        texto="Supervisa tus aplicaciones empresariales a todo nivel y obten todos los datos APM que necesites."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-display"
                        titulo="Monitorización de entornos virtuales"
                        subtitulo="Monitorización de entornos virtuales"
                        texto="Optimiza tu infraestructura ya sea en instalaciones hibridas, virtuales o cloud."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-exclamation-diamond-fill"
                        titulo="Gestión de incidencias"
                        subtitulo="Gestión de incidencias"
                        texto="Integra el sistema de ticketing de tu infraestructura en Flammas."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-joystick"
                        titulo="Control Remoto"
                        subtitulo="Control Remoto"
                        texto="Todos tus dispositivos controlados por una herramienta accesible con solo un navegador web."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-headset"
                        titulo="Gestión de servicio y asistencia"
                        subtitulo="Gestión de servicio y asistencia"
                        texto="Mida y supervise su pila de TI para detectar resolver problemas en tu infraestructura de TI."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-cpu-fill"
                        titulo="Monitorización mainframe"
                        subtitulo="Monitorización mainframe"
                        texto="Dispón de una única plataforma para recoger y mostrar la información venga de donde venga."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-ethernet"
                        titulo="Monitorización de redes"
                        subtitulo="Monitorización de redes"
                        texto="Observa toda tu información en conjunto, incluso cuando tengas miles de dispositivos que supervisar."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-card-checklist"
                        titulo="Inventario TI"
                        subtitulo="Inventario TI"
                        texto="Recoge y supervisa el estado de todos los datos de tu infraestructura informática en una sola herramienta."
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-file-earmark-text"
                        titulo="Recolección de logs"
                        subtitulo="Recolección de logs"
                        texto="Recoge, visualiza y centraliza todos tus registros en un único punto."
                    />
                </div>
            </section>
            <MiniComponenteQuintaSeccion
                titulo="+500 INTEGRACIONES:"
                subtitulo="EXPANDE EL PODER DE TU MONITORIZACIÓN"
                texto1="Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo."
                texto2="Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados."
            />
        </>
    )
}



export function ComponenteSolucionesOneSecurity() {
    const [componenteActivo, setComponenteActivo] = useState("maxima");

    const infoTecnicas = [
        "Machine learning en pre-ejecución y en runtime",
        "Detección más precisa de malware avanzado, como el tipo de fileless y las amenazas de ransomware",
        "Técnicas de noise-cancelling como el censo y el safelisting a lo largo de cada capa de detección para reducir de forma dramática los falsos positivos",
        "Protección efectiva contra scripts, injection, ransomware y ataques contra navegadores y memoria a través de un innovador análisis de comportamiento.",
    ]

    const infoDeteccionRespuesta = [
        "Reciba alertas procesables",
        "Descubra el impacto e inicie una respuesta directa",
        "Consiga detección, investigación y respuesta correlacionadas y mejoradas en email, redes, nubes y workloads",
        "Identifique amenazas y valide actividad sospechosa",
        "Integre mediante API con plataformas SIEM y herramientas SOAR",
        "Utilice las 24 horas, los 7 días de la semana, los 365 días del año"
    ]

    const componenteRenderData = () => {
        switch (componenteActivo) {
            case 'maxima':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> La seguridad de endpoints redefinida </h1>
                        <p>
                            One Security utiliza un sistema de prevención de intrusiones basado en host (HIPS) para aplicar parches de forma virtual vulnerabilidades conocidas y desconocidas antes de que el parche esté disponible o pueda desplegarse.
                        </p>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Eliminar la exposición al riesgo </li>
                            <li className="mb-2"> Extender la protección hasta las plataformas críticas y los dispositivos físicos o virtuales </li>
                            <li className="mb-2"> Reducir el tiempo de inactividad durante la recuperación y la aplicación de parches de emergencia </li>
                            <li className="mb-2"> Identificar vulnerabilidades basadas en CVE, MS-ID y gravedad </li>
                            <li className="mb-2"> Detectar más vulnerabilidades que cualquier otro proveedor gracias a nuestra investigación líder en el sector </li>
                        </ul>
                    </section>
                )
            case 'proteccion':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Seguridad efectiva para sus datos sensibles </h1>
                        <p>
                            Proteja sus datos sensibles, dentro y fuera de la red, para lograr la máxima visibilidad y el máximo control. Endpoint encryption, DLP integrado y control de dispositivos.
                        </p>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Proteja el más amplio rango de dispositivos, aplicaciones y tipos de archivos </li>
                            <li className="mb-2"> Cumple con la mayoria de las regulaciones, incluyendo GDPR </li>
                            <li className="mb-2"> Protege sus datos con encripción completa del disco, folders y archivos, y encripción de dispositivos externos </li>
                            <li className="mb-2"> Activa políticas granulares para el control de dispositivos y la gestión de datos </li>
                            <li className="mb-2"> Utiliza llaves de encripción de Microsoft BitLocker y Apple FileVault </li>
                        </ul>
                    </section>
                )
            case 'control':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Control mejorado de aplicaciones frente a software malicioso </h1>
                        <p>
                            Evite que se ejecuten aplicaciones no deseadas y desconocidas en sus endpoints. Te permite:
                        </p>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Usa politícas personalizables de lockdown, safelisting y blocklisting para bloquear software malicioso </li>
                            <li className="mb-2"> Cree politícas dinámicas a través de la categorización de aplicaciones e inteligencia de la reputación para reducir la gestión de gastos generales </li>
                            <li className="mb-2"> Correlacionar datos de millones de eventos de aplicaciones para identificar amenazas y mantener una base de datos actualizada de aplicaciones validadas </li>
                        </ul>
                    </section>
                )
            case 'insights':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Manténgase al día con One Security </h1>
                        <p>
                            La aplicación proporciona alertas de producto e información de amenazas en tiempo real, permitiéndole:
                        </p>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Ver de forma instantánea el estatus de sus despliegues para evitar correr versiones desactualizadas </li>
                            <li className="mb-2"> Alinear despligues con las mejores prácticas de asegurar una protección óptima </li>
                            <li className="mb-2"> Mantenerse un paso adelante con asesorías en tiempo real de nuevas vulnerabilidades / amenazas y notificaciones de nuevos y esenciales parches </li>
                        </ul>
                    </section>
                )
            default:
                return 'No hay info';
        }
    };

    return (
        <>
            <ComponenteEncabezadoSolucionesOne
                titulo="ONE SECURITY CON FLAMMAS"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Máxima protección con seguridad de endpoint por capas."
                boton="Hoja de Datos"
            />
            <section className="deteccionOne">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-content-center flex-row">
                        <img src={ImagenOne} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-8 info d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09", marginBottom: "30px" }}> Técnicas de detección avanzadas </h1>
                        <p style={{ color: "black", marginBottom: "30px" }}> Utiliza una mezcla de técnicas intergeneracionales de amenazas para ofrecerle la protección más amplia frente a todos los tipos de amenazas. </p>
                        <ul>
                            {
                                infoTecnicas.map((info, key) => (
                                    <div key={key} >
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#CF0F09" }}> </i> {info}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="endpointOne">
                <div className="titus" style={{ padding: "10px 50px" }}>
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> La seguridad de endpoints redefinida </h1>
                </div>
                <div style={{ padding: "10px 50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-5 links">
                            <h3 className={componenteActivo === 'maxima' ? 'active' : ''} onClick={() => setComponenteActivo('maxima')}> Máxima Protección </h3>
                            <h3 className={componenteActivo === 'proteccion' ? 'active' : ''} onClick={() => setComponenteActivo('proteccion')}> Protección Datos Sensibles </h3>
                            <h3 className={componenteActivo === 'control' ? 'active' : ''} onClick={() => setComponenteActivo('control')}> Control Mejorado de Aplicaciones </h3>
                            <h3 className={componenteActivo === 'insights' ? 'active' : ''} onClick={() => setComponenteActivo('insights')}> Insights en tiempo real </h3>
                        </div>
                        <div className="col-12 col-md-7 info">
                            {componenteRenderData()}
                        </div>
                    </div>
                </div>
            </section>
            <section className="endviñetas">
                <EndVIñetas
                    titulo="Automatizado"
                    texto="Reciba detección y respuesta frente amenazas automatizadas y avanzadas, así como protección contra una variedad de amenazas en continuo crecimiento como ataques sin archivos y ransomware. Nuestra combinación de técnicas avanzadas de distintas generaciones ofrece una protección de endpoints que maximiza el rendimiento y la eficacia."
                />
                <EndVIñetas
                    titulo="Integrada"
                    texto="Obtenga información práctica, funciones de investigación ampliadas y visibilidad centralizada con un conjunto de herramientas EDR & XDR unificado, integración SIEM consolidada y un juego de API abierto. Realice investigaciones de amenazas correlacionadas y extendidas que van más allá del endpoint y de reforzar sus equipos de seguridad con un servicio de detección y respuesta gestionadas."
                />
                <EndVIñetas
                    titulo="Integración"
                    texto="En un panorama tecnológica y de amenazas que no para de evolucionar, usted necesita una seguridad que vaya más allá del antivirus tradicional. One Security ofrece detección de amenazas, investigación y respuestas con un único agente. Consolide capacidades y consolas y obtenga flexibilidad de implementación a través de las opciones: on premise y SaaS."
                />
            </section>
            <section className="deteccionOne op d-flex justify-content-center align-content-center">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09" }}> Detección y respuesta integradas </h1>
                        <p> Al usar One Security con Flammas, obtendrá capacidades de EDR & XDR líderes del mercado. Potencie las capacidades de detección, investigación y respuesta en múltiples capas de seguridad para obtener una visibilidad completa de las amenazas que afectan a toda la organización. </p>
                    </div>
                    <div className="col-12 col-md-6 info">
                        <ul>
                            {
                                infoDeteccionRespuesta.map((info, key) => (
                                    <div key={key} >
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#CF0F09" }}> </i> {info}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export function ComponenteSolucionesMarcus() {
    const [componenteActivo, setComponenteActivo] = useState("bitacoras");

    const infoTecnicas = [
        "Detección, mitigación y prevención de Vulnerabilidades",
        "Monitoreo de integridad",
        "Monitoreo de bitácoras",
        "Monitoreo de aplicaciones multiplataforma",
    ]

    const infoDeteccionRespuesta = [
        "Administración centralizada de eventos, alarmas, logs, tickets, etc. ",
        "Dashboard intuitivo para eventos de seguridad.",
        "Control de acceso basado en roles. ",
        "Generación automatizada de informes. ",
        "Consola gráfica basada en HTML5 para administración local y remota.",
    ]

    const componenteRenderData = () => {
        switch (componenteActivo) {
            case 'bitacoras':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Monitoreo de bitácoras </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Inspección de bitácoras del sistema operativo y aplicaciones para identificar eventos de seguridad relevantes o críticos.  </li>
                            <li className="mb-2"> Permite la inspección de eventos generados en el visor de eventos para servidores Windows y en syslog messages para servidores con sistema operativo Linux.  </li>
                            <li className="mb-2"> Permite la inspección de eventos generados por aplicaciones, almacenados en archivos de bitácoras.  </li>
                            <li className="mb-2"> Capacidad de alertar en tiempo real cuando se genera un evento crítico o relevante, con envío de alertas por correo electrónico o syslog. </li>
                            <li className="mb-2"> Creación de reglas personalizadas para el monitoreo de bitácoras.</li>
                            <li className="mb-2"> Ejecución de tareas programadas y asignación automatizada de reglas de monitoreo de bitácoras recomendadas por la solución. </li>
                        </ul>
                    </section>
                )
            case 'integridad':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Monitoreo de integridad </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Identificación de cambios en archivos críticos, configuraciones, carpetas, servicios y claves del registro tanto del sistema operativo como de las aplicaciones, a través de reglas de monitoreo de integridad automatizadas.  </li>
                            <li className="mb-2"> Capacidad de alertar en tiempo real cuando se detecte una modificación en carpetas, archivos o claves del registro del sistema operativo y aplicaciones. Las alertas pueden ser enviadas por correo electrónico o syslog.  </li>
                            <li className="mb-2"> Creación de reglas personalizadas para el monitoreo de modificaciones en archivos críticos, carpetas y claves del registro.  </li>
                            <li className="mb-2"> Capacidad para ejecutar tareas programadas y asignar automáticamente las reglas de monitoreo de integridad recomendadas por la solución. </li>
                        </ul>
                    </section>
                )
            case 'aplicaciones':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Monitoreo de aplicaciones multiplataforma </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Capacidad para detectar y bloquear software no autorizado de forma automática, sin limitaciones del sistema operativo, de acuerdo con la lista de sistemas operativos indicados en las características principales. </li>
                            <li className="mb-2"> Escaneo del servidor para determinar qué aplicaciones están actualmente en ejecución.  </li>
                            <li className="mb-2"> Bloqueo del sistema una vez creado el inventario, evitando la ejecución de nuevas aplicaciones que no estén en la lista blanca definida por el administrador. </li>
                            <li className="mb-2"> Integración en un entorno DevOps para permitir cambios continuos en las listas de aplicaciones, manteniendo al mismo tiempo la protección mediante APIs. </li>
                            <li className="mb-2"> Capacidad para capturar amenazas que aún no tienen firma, incluidas las amenazas zero-day.  </li>
                        </ul>
                    </section>
                )
            case 'tecnicas':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Especificaciones Técnicas </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Soporte para interfaces de cobre y varios tipos de fibra.  </li>
                            <li className="mb-2"> Soporte para velocidades mínimas de 1G/10G.  </li>
                            <li className="mb-2"> Capacidad para soportar un mínimo de 100 dispositivos concurrentes con todas las funcionalidades activas.  </li>
                            <li className="mb-2"> Capacidad de almacenamiento histórico de datos con granularidad de visualización adaptable. </li>
                        </ul>
                    </section>
                )
            default:
                return 'No hay info';
        }
    };

    return (
        <>
            <ComponenteEncabezadoSolucionesMarcus
                titulo="MARCUS CON FLAMMAS"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Protección integral mediante un enfoque de seguridad por capas en los endpoints."
                boton="Hoja de Datos"
            />
            <section className="deteccionOne">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-content-center flex-row">
                        <img src={ImagenMarcus} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-8 info d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09", marginBottom: "30px" }}> Seguridad completa para entornos físicos, virtuales, híbridos y en la nube. </h1>
                        <p style={{ color: "black", marginBottom: "30px" }}> Marcus tiene el propósito de garantizar la seguridad, detectar, analizar, y responder a amenazas especializadas y de prevenir proactivamente una administración en tiempo real. </p>
                        <ul>
                            {
                                infoTecnicas.map((info, key) => (
                                    <div key={key} >
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#CF0F09" }}> </i> {info}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="endpointOne">
                <div className="titus" style={{ padding: "10px 50px" }}>
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> FUNCIONES DE MARCUS </h1>
                </div>
                <div style={{ padding: "10px 50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-5 links">
                            <h3 className={componenteActivo === 'bitacoras' ? 'active' : ''} onClick={() => setComponenteActivo('bitacoras')}> Monitoreo de bitácoras </h3>
                            <h3 className={componenteActivo === 'integridad' ? 'active' : ''} onClick={() => setComponenteActivo('integridad')}> Monitoreo de integridad </h3>
                            <h3 className={componenteActivo === 'aplicaciones' ? 'active' : ''} onClick={() => setComponenteActivo('aplicaciones')}> Monitoreo de aplicaciones multiplataforma </h3>
                            <h3 className={componenteActivo === 'tecnicas' ? 'active' : ''} onClick={() => setComponenteActivo('tecnicas')}> Especificaciones Técnicas </h3>
                        </div>
                        <div className="col-12 col-md-7 info">
                            {componenteRenderData()}
                        </div>
                    </div>
                </div>
            </section>
            <section className="endviñetas">
                <EndVIñetas
                    titulo="Caracteristicas de seguridad"
                    texto="El sistema ofrece inspección profunda de paquetes (DPI) y monitoreo bidireccional del tráfico, permitiendo detectar y prevenir vulnerabilidades zero-day. Además, aplica parches virtuales sin afectar la operación y bloquea el tráfico entre interfaces de red de servidores para evitar movimientos laterales."
                />
                <EndVIñetas
                    titulo="Control de aplicaciones"
                    texto="El sistema permite la detección y bloqueo de software no autorizado, así como el inventario detallado y control efectivo de las aplicaciones instaladas en los servidores. Además, ofrece integración con entornos DevOps para una gestión automatizada y continua de la seguridad en todo el ciclo de vida del desarrollo."
                />
                <EndVIñetas
                    titulo="Monitoreo"
                    texto="El sistema permite el monitoreo de integridad de archivos, configuraciones, servicios y claves del registro, con alertas en tiempo real vía correo electrónico o syslog. Ofrece la creación de reglas personalizadas para supervisar la integridad y las bitácoras, además de ejecutar tareas programadas para facilitar acciones automatizadas y mantener la seguridad del entorno."
                />
            </section>
            <section className="deteccionOne op d-flex justify-content-center align-content-center">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09" }}> GESTIÓN </h1>
                        <p> Marcus es un dispositivo de propósito específico de protección frente a amenazas avanzadas que proporciona visibilidad e inteligencia de toda la red, Es la mejor solución de detección y respuesta de red (NDR) de su clase diseñada para ayudar a las organizaciones con incidentes. </p>
                    </div>
                    <div className="col-12 col-md-6 info">
                        <ul>
                            {
                                infoDeteccionRespuesta.map((info, key) => (
                                    <div key={key} >
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#CF0F09" }}> </i> {info}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export function ComponenteSolucionesZeroSpam() {
    const [componenteActivo, setComponenteActivo] = useState("cliente");

    const infoTecnicas = [
        "Autenticación de correos con políticas DMARC, SPF y DKIM.",
        "Bloqueo proactivo de suplantaciones y correos no autorizados.",
        "Supervisión centralizada con reportes detallados y en tiempo real.",
        "Configuración y administración simplificadas desde una consola web.",
    ];

    const infoDeteccionRespuesta = [
        "Protección completa contra suplantación de identidad y correos fraudulentos.",
        "Supervisión y alertas en tiempo real para detectar y mitigar amenazas.",
        "Gestión sencilla de registros SPF, DKIM y DMARC desde una única plataforma.",
        "Mejora la reputación de tu dominio asegurando la entrega de correos legítimos.",
        "Incrementa la confianza del cliente al garantizar que tus emails sean auténticos.",
    ];


    const componenteRenderData = () => {
        switch (componenteActivo) {
            case 'cliente':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Atención al cliente </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Con una entrega fiable del correo electrónico, los equipos de atención al cliente pueden responder rápidamente a las consultas y resolver los problemas. Esto mejora la satisfacción del cliente y aumenta su fidelidad.  </li>
                            <li className="mb-2"> DMARC garantiza la entrega de los mensajes de correo electrónico, lo que te permite llegar de forma proactiva a los clientes con información útil, actualizaciones de soporte u ofertas personalizadas. Esto refuerza el compromiso del cliente e impulsa el éxito.  </li>
                            <li className="mb-2"> DMARC Proporciona una ubicación privilegiada de tu comunicaciones en las bandejas de entrada, evitando que los correos electrónicos lleguen a las carpetas de Spam o Correo no deseado o que sean rechazados por completo.  </li>
                        </ul>
                    </section>
                )
            case 'tecnologia':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Tecnología de la información (TI) </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> Accede a reportes DMARC que recopilan datos de servidores de todo el mundo para ofrecer información procesable y desvelar quién envía correos electrónicos desde tu dominio. Esto acelera las investigaciones de amenazas y la gestión de las quejas por spam. Nuestra plataforma también ofrece alertas personalizables para la visibilidad de amenazas en tiempo real, lo que permite una mitigación más rápida.  </li>
                            <li className="mb-2"> Impide el uso no autorizado de tu dominio para enviar correos electrónicos falsos, de modo que los mensajes de phishing y spoofing no lleguen a las bandejas de entrada de los grupos de interés internos y externos.  </li>
                            <li className="mb-2"> DMARC Permite a los equipos de TI implementar políticas de gobernanza del correo electrónico y mejores prácticas en toda la organización. Esto garantiza la coherencia de las políticas de autenticación y la integridad de las comunicaciones por correo electrónico, lo que en última instancia fomenta la confianza. </li>
                        </ul>
                    </section>
                )
            case 'directivos':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Directivos (C-level) </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> La rentable solución DMARC de Flammas te permite evitar las consecuencias de un ataque vía correo electrónico, que podría implicar pérdidas directas, responsabilidades legales y daños a tu reputación. Su política transparente de precios, despliegue flexible y escalabilidad se adapta a empresas de cualquier tamaño. </li>
                            <li className="mb-2"> Bloquea amenazas perturbadoras como el spear-phishing o BEC, mientras garantizas un funcionamiento sin problemas con nuestras soluciones automatizadas, que se integran perfectamente en la infraestructura de correo electrónico existente, sin interrupciones en tu flujo de correo electrónico. </li>
                            <li className="mb-2"> Nuestra solución DMARC proporciona supervisión y alertas en tiempo real para una rápida detección y mitigación de amenazas. Una vez configurada, pone en cuarentena o rechaza automáticamente los correos sospechosos y ofrece informes detallados para las auditorías de cumplimiento de reglas y estándares. </li>
                        </ul>
                    </section>
                )
            case 'empresarios':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Empresarios </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> DMARC cierra la puerta a las amenazas basadas en el correo electrónico que podrían provocar daños financieros y de reputación potencialmente irreparables, garantizando la continuidad de tu negocio y protegiendo tu cuenta de resultados. </li>
                            <li className="mb-2"> Aunque la protección perimetral y antispam existentes pueden proteger a tus grupos de interés internos, no protegen a tus clientes, proveedores y al resto del mundo de los correos electrónicos fraudulentos enviados utilizando tu dominio. DMARC resuelve este problema al proteger a todos los grupos de interés.   </li>
                            <li className="mb-2"> Es más probable que los clientes hagan negocios con organizaciones en las que confían. Garantizar la máxima seguridad del correo electrónico para tu negocios con DMARC significa que los clientes pueden confiar en que cada correo electrónico que lleva tu El nombre es el verdadero.  </li>
                        </ul>
                    </section>
                )
            default:
                return 'No hay info';
        }
    };

    return (
        <>
            {/* <ComponenteEncabezadoSolucionesMarcus
                titulo="ZERO SPAM CON FLAMMAS"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Protección integral mediante un enfoque de seguridad por capas en la infraestructura de correo electrónico."
                boton="Hoja de Datos"
            /> */}
            <ComponenteEncabezadoSoluciones
                titulo="ZERO SPAM CON FLAMMAS"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Protección integral mediante un enfoque de seguridad por capas en la infraestructura de correo electrónico."
            />
            <section className="deteccionOne">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-content-center flex-row">
                        <img src={ImagenMarcus} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-8 info d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09", marginBottom: "30px" }}> Seguridad avanzada en tus comunicaciones por correo electrónico. </h1>
                        <p style={{ color: "black", marginBottom: "30px" }}> Nuestra solución permite implementar estándares como DMARC, SPF y DKIM, protegiendo tu dominio contra ataques de suplantación y asegurando la confianza de tus usuarios. </p>
                        <ul>
                            {
                                infoTecnicas.map((info, key) => (
                                    <div key={key} >
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#CF0F09" }}> </i> {info}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="endpointOne">
                <div className="titus" style={{ padding: "10px 50px" }}>
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> FUNCIONES DE ZERO SPAM </h1>
                </div>
                <div style={{ padding: "10px 50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-5 links">
                            <h3 className={componenteActivo === 'cliente' ? 'active' : ''} onClick={() => setComponenteActivo('cliente')}> Atención al cliente </h3>
                            <h3 className={componenteActivo === 'tecnologia' ? 'active' : ''} onClick={() => setComponenteActivo('tecnologia')}> Tecnología de la información (TI) </h3>
                            <h3 className={componenteActivo === 'directivos' ? 'active' : ''} onClick={() => setComponenteActivo('directivos')}> Directivos (C-level) </h3>
                            <h3 className={componenteActivo === 'empresarios' ? 'active' : ''} onClick={() => setComponenteActivo('empresarios')}> Empresarios </h3>
                        </div>
                        <div className="col-12 col-md-7 info">
                            {componenteRenderData()}
                        </div>
                    </div>
                </div>
            </section>
            <section className="endviñetas">
                <EndVIñetas
                    titulo="Filtrado inteligente en la nube"
                    texto="El sistema de pre-filtrado basado en la nube puede bloquear hasta el 90 % del tráfico total de mensajes, incluyendo spam y correos maliciosos, antes de que lleguen a tu red. Esto reduce significativamente la carga sobre los servidores internos y mejora la eficiencia del análisis de seguridad."
                />
                <EndVIñetas
                    titulo="Protección de datos con cifrado de correo"
                    texto="El Cifrado de Correo Electrónico permite asegurar todos los mensajes salientes, evitando la filtración de información confidencial. Esta capa de seguridad es esencial para mantener la integridad de los datos en tránsito y cumplir con normativas de privacidad."
                />
                <EndVIñetas
                    titulo="Defensa contra amenazas avanzadas"
                    texto="La tecnología ATSE identifica tanto amenazas conocidas como desconocidas, ofreciendo protección contra ataques emergentes que aún no han sido catalogados. Esto garantiza una defensa proactiva frente a malware sofisticado y vulnerabilidades de día cero."
                />
            </section>
            <section className="deteccionOne op d-flex justify-content-center align-content-center">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09" }}> GESTIÓN </h1>
                        <p> DMARC se encarga de asegurar tu empresa contra estas amenazas e incrementa la protección ante daños empresariales potencialmente irreparables. </p>
                    </div>
                    <div className="col-12 col-md-6 info">
                        <ul>
                            {
                                infoDeteccionRespuesta.map((info, key) => (
                                    <div key={key} >
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#CF0F09" }}> </i> {info}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export function ComponenteSolucionesSecureDomain() {
    const [componenteActivo, setComponenteActivo] = useState("cliente");

    const infoTecnicas = [
        "Monitoreo continuo en dark web y múltiples fuentes para detectar filtraciones.",
        "Revelación de credenciales y datos personales expuestos o comprometidos.",
        "Alertas en tiempo real para actuar rápidamente ante una brecha.",
        "Visibilidad clara sobre exposiciones internas o de proveedores para cumplir normativas.",
    ];

    const infoDeteccionRespuesta = [
        "Protección completa contra suplantación de identidad y correos fraudulentos.",
        "Supervisión y alertas en tiempo real para detectar y mitigar amenazas.",
        "Gestión sencilla de registros SPF, DKIM y DMARC desde una única plataforma.",
        "Mejora la reputación de tu dominio asegurando la entrega de correos legítimos.",
        "Incrementa la confianza del cliente al garantizar que tus emails sean auténticos.",
    ];


    const componenteRenderData = () => {
        switch (componenteActivo) {
            case 'cliente':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Compromiso del sistema </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li>Distribución de malware o ransomware a través de sitios web falsificados.</li>
                            <li>Acceso no autorizado a sistemas internos por parte de atacantes.</li>
                            <li>Riesgo de interrupción operativa y pérdida de información crítica.</li>
                        </ul>
                    </section>
                );
            case 'amenazas':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Pérdidas financieras </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li>Venta engañosa de productos o servicios falsificados por parte de atacantes.</li>
                            <li>Pérdida de ingresos debido a la desconfianza de clientes legítimos.</li>
                            <li>Reducción de la productividad por incidentes derivados del fraude de dominios.</li>

                        </ul>
                    </section>
                );
            case 'riesgos':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Daños a la reputación </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li>Pérdida de credibilidad frente a clientes, socios y proveedores.</li>
                            <li>Asociación negativa de la marca con actividades fraudulentas.</li>
                            <li>Dificultad para recuperar la confianza del público tras un incidente.</li>
                        </ul>
                    </section>
                );
            case 'marca':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> Robo de datos</h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li>Exposición de información confidencial como DNI, direcciones o teléfonos.</li>
                            <li>Riesgo de fraude por el robo de credenciales bancarias y tarjetas.</li>
                            <li>Acceso no autorizado a cuentas personales o empresariales.</li>

                        </ul>
                    </section>
                );
            default:
                return <div>No hay info</div>;
        }
    };


    return (
        <>
            {/* <ComponenteEncabezadoSolucionesMarcus
                titulo="SECURE DOMAIN INTELLIGENCE CON FLAMMAS"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Protección integral mediante un enfoque de seguridad por capas en la infraestructura de correo electrónico."
                boton="Hoja de Datos"
            /> */}
            <ComponenteEncabezadoSoluciones
                titulo="SECURE DOMAIN INTELLIGENCE CON FLAMMAS"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Defiende tu marca y a tus usuarios de dominios falsificados con tecnología de detección avanzada que identifica y bloquea amenazas antes de que causen daño."
            />
            <section className="deteccionOne">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-content-center flex-row">
                        <img src={ImagenMarcus} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-8 info d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09", marginBottom: "30px" }}> Detección avanzada de brechas y exposición de datos corporativos. </h1>
                        <p style={{ color: "black", marginBottom: "30px" }}> Secure Domain Intelligence supervisa múltiples fuentes, incluida la dark web, para descubrir datos robados o filtrados de tu empresa o proveedores terceros — como credenciales, contraseñas o información personal expuesta — y envía alertas inmediatas si se detecta alguna brecha. </p>
                        <ul>
                            {
                                infoTecnicas.map((info, key) => (
                                    <div key={key} >
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#CF0F09" }}> </i> {info}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="endpointOne">
                <div className="titus" style={{ padding: "10px 50px" }}>
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> FUNCIONES DE SECURE DOMAIN INTELLIGENCE </h1>
                </div>
                <div style={{ padding: "10px 50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-5 links">
                            <h3 className={componenteActivo === 'cliente' ? 'active' : ''} onClick={() => setComponenteActivo('cliente')}> Compromiso del sistema </h3>
                            <h3 className={componenteActivo === 'amenazas' ? 'active' : ''} onClick={() => setComponenteActivo('amenazas')}> Pérdidas financieras </h3>
                            <h3 className={componenteActivo === 'riesgos' ? 'active' : ''} onClick={() => setComponenteActivo('riesgos')}> Daños a la reputación </h3>
                            <h3 className={componenteActivo === 'marca' ? 'active' : ''} onClick={() => setComponenteActivo('marca')}> Robo de datos </h3>
                        </div>
                        <div className="col-12 col-md-7 info">
                            {componenteRenderData()}
                        </div>
                    </div>
                </div>
            </section>

            <section className="deteccionOne op d-flex justify-content-center align-content-center">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09" }}> GESTIÓN </h1>
                        <p> DMARC se encarga de asegurar tu empresa contra estas amenazas e incrementa la protección ante daños empresariales potencialmente irreparables. </p>
                    </div>
                    <div className="col-12 col-md-6 info">
                        <ul>
                            {
                                infoDeteccionRespuesta.map((info, key) => (
                                    <div key={key} >
                                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#CF0F09" }}> </i> {info}
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}