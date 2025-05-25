import React from 'react'
import "../estilos/componenteProductos.css";
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";

export function MiniComponenteProductos({ titulo, texto }) {
    return (
        <div className='cartita'>
            <h3> {titulo} </h3>
            <p> {texto} </p>
        </div>
    )
}
function MiniComponenteProductosConImagenes({ imagen, titulo, texto }) {
    return (
        <div className='cartitaConImagen'>
            <h3> {titulo} </h3>
            <p> {texto} </p>
            <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
        </div>
    )
}

//Componente a renderizar
function ComponenteProductos() {
    return (
        <>
            <header className='tituloProductos'> MONITORIZACIÓN </header>
            <h1 className='subTituloProductos'> Funcionalidades: </h1>
            <section className='container-fluid contenedor-cartitas'>
                <MiniComponenteProductos
                    titulo="API"
                    texto="Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductos
                    titulo="Multitenant / MSP"
                    texto="Múltiples clientes con diferentes vistas, compartiendo una única plataforma, sin límite. Plantillas de informes comunes para que tengan solo que aplicarlo a aquellos activos que ven. Un sistema de cuadros de mando que permite ofrecer al cliente información en tiempo real, o programar informes en PDF para su envío periódico por eMail. Flammas te permite dar servicio a tus clientes (o incluso autoservicio) en una solución todo en uno."
                />
                <MiniComponenteProductos
                    titulo="Alertas y notificaciones"
                    texto="Las alertas de Flammas están pensadas para integrarse en los ciclos de trabajo existentes, de lo más básico como un email a lo más moderno como Slack o Telegram. Las notificaciones sirven también para programar acciones automáticas como encendido/apagado de sistemas remotos, activación de actuadores o creación de incidencias en Remedy, Zendesk, JIRA, OTRS, etc. Las alertas incluyen escalados, excepciones por días especiales, paradas planificadas, fines de semana y muchas otras opciones de personalización."
                />
                <MiniComponenteProductos
                    titulo="Políticas"
                    texto="Permiten homogeneizar la monitorización y conseguir desplegar una monitorización estándar por tecnologías. Permiten gestionar la configuración de cientos de sistemas de manera sencilla, con un par de clicks. Sin las políticas, gestionar miles de equipos de forma coherente es muy difícil y requiere tiempo. Las políticas permiten reutilizar y distribuir cambios sobre grupos grandes de sistemas."
                />
                <MiniComponenteProductos
                    titulo="Monitorización distribuida"
                    texto="En entornos complejos, existen redes poco accesibles difíciles de supervisar mediante un descubrimiento centralizado. Nuestros Servidores Satélite son capaces de obtener información de la red y de los sistemas de manera autónoma, distribuida e integrada. Perfecto para redes de clientes remotas."
                />
                <MiniComponenteProductos
                    titulo="Omnishell"
                    texto="Automatización IT: ejecución de comandos remotos de manera centralizada. Para la gestión y configuración de servidores y estaciones de trabajo. Aprovechando el despliegue de agentes de monitorización podrás además ejecutar avanzadas secuencias de comandos remotamente."
                />
                <MiniComponenteProductos
                    titulo="Alta escalabilidad"
                    texto="El diseño federado de Flammas permite distribuir toda la carga entre diferentes nodos, de manera que la carga de procesamiento se reparte y se procesa en paralelo. Nuestro Command Center permite visualizar y gestionar toda la información en conjunto. Tenemos licencias de varios cientos de miles de agentes en funcionamiento."
                />
                <MiniComponenteProductos
                    titulo="Monitorización de causa raíz"
                    texto="Ayudamos a encontrar la aguja en el pajar. Es mucho más eficiente mostrar visualmente el origen del fallo que limitarse a recibir cientos de eventos por segundo. Flammas ofrece el valor de su monitorización de servicios, que permite filtrar toda la información y mostrar solo lo crítico para cada departamento."
                />
                <MiniComponenteProductosConImagenes
                    titulo="Dashboards"
                    texto="Cada usuario puede crear su propio cuadro de mando que destaque las métricas críticas más importantes para tu equipo y tus operaciones. Mantén a todos los miembros del equipo informados de los niveles de rendimiento del sistema. Estas pantallas pueden ser visualizadas a pantalla completa, compartidas con usuarios externos a través de una URL, que cambien automáticamente una tras otra con un temporizador o enlacen entre sí para crear drilldowns personalizados. Las pantallas permiten extender al infinito la manera de mostrar información, adaptándola a cada organización."
                    imagen="dashboard.png"
                />
                <MiniComponenteProductosConImagenes
                    titulo="Informes"
                    texto="El constructor de informes te permite diseñar tus propios informes, personalizados con portadas, cabeceras y diferentes contenidos. Se pueden definir layouts a medida, similares a los cuadros de mando, para visualizar datos en tiempo real y contando con un histórico de varios años. Existen informes predefinidos para el cálculo de la disponibilidad, Top-N, SLA (mensuales, semanales o diarios), histogramas, gráficas, informes de capacity planning, eventos de informes, inventario, configuración y más. Además con el sistema de plantillas puedes ofrecer a tus clientes informes prediseñados por usted."
                    imagen="report.png"
                />
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

export default ComponenteProductos;
