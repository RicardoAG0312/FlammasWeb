import React from 'react'
import "../estilos/componenteProductos.css";
import {MiniComponenteQuintaSeccion} from "./ComponenteInicio";

export function MiniComponenteProductos ({titulo, texto}) {
    return (
        <div className='cartita'>
            <h3> {titulo} </h3>
            <p> {texto} </p>
        </div>
    )
}
function MiniComponenteProductosConImagenes ({imagen, titulo, texto}) {
    return (
        <div className='cartitaConImagen'>
            <h3> {titulo} </h3>
            <p> {texto} </p>
            <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
        </div>
    )
}

//Componente a renderizar
function ComponenteProductos () {
    return (
        <>
            <header className='tituloProductos'> MONITORIZACIÓN </header>
            <h1 className='subTituloProductos'> Funcionalidades: </h1>
            <section className='container-fluid contenedor-cartitas'>
                <MiniComponenteProductos 
                    titulo = "API"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductos 
                    titulo = "Multitenant / MSP"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductos 
                    titulo = "Alertas y notificaciones"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductos 
                    titulo = "Políticas"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductos 
                    titulo = "Monitorización distribuida"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductos 
                    titulo = "Omnishell"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductos 
                    titulo = "Alta escalabilidad"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductos 
                    titulo = "Monitorización de causa raíz"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                />
                <MiniComponenteProductosConImagenes 
                    titulo = "Dashboards"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando."
                    imagen = "dashboard.png"
                />
                <MiniComponenteProductosConImagenes 
                    titulo = "Informes"
                    texto = "Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones, como notificaciones, procesos de provisión, procesos de inventariado, CMDB y otros muchos. Clientes como Rakuten utilizan nuestra API para agilizar sus procesos internos. Consulta el alcance de la API en nuestra documentación. Nuestra API está en constante evolución, pero siempre conservando la compatibilidad hacia atrás para que cualquier integración ya realizada siga funcionando. Flammas dispone de una completa API para poder integrar tus procesos de negocio, tanto en la gestión de configuraciones integrar tus procesos de negocio, tanto en la gestión de configuraciones, tanto en la gestión de configuraciones"
                    imagen = "report.png"
                />
            </section>
            <MiniComponenteQuintaSeccion 
                titulo = "+500 INTEGRACIONES:"
                subtitulo = "EXPANDE EL PODER DE TU MONITORIZACIÓN"
                texto1 = "Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo. Proveemos soluciones prácticas a problemas cotidianos a través de plugins de aplicaciones empresariales en colaboración con nuestros clientes. Contamos con integraciones con tecnologías actuales, utilizadas en entornos de producción en todo el mundo."
                texto2 = "Apoyamos tecnologías emergentes, establecidas e incluso sistemas heredados."
            />
        </>
    )
}

export default ComponenteProductos;
