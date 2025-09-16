import React from 'react'
import "../estilos/componenteProductos.css";
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";
import { useTranslation } from 'react-i18next';
import dashboard from '../images/dashboard.png.png';
import report from '../images/report.png.png';


export function MiniComponenteProductos({ titulo, texto }) {
    return (
        <div className='cartita'>
            <h3> {titulo} </h3>
            <p> {texto} </p>
        </div>
    )
}
function MiniComponenteProductosConImagenes({ imagen, titulo, texto }) {
    const imagenes = {
        dashboard: dashboard,
        report: report  
    };
    return (
        <div className='cartitaConImagen'>
            <h3> {titulo} </h3>
            <p> {texto} </p>
            {imagen && < img src={imagenes[imagen]} alt="Imagen" />}
        </div>
    )
}

//Componente a renderizar
function ComponenteProductos() {
    const { t } = useTranslation();

    const items = t("abasto.items", { returnObjects: true });
    const quintaSeccion = t("abasto.quintaSeccion", { returnObjects: true });
    return (
        <>
            <header className='tituloProductos'>{t("abasto.encabezado.titulo")}</header>
            <h1 className='subTituloProductos'>{t("abasto.encabezado.subtitulo")}</h1>
            <section className='container-fluid contenedor-cartitas'>
                {items.map((item, index) =>
                item.tipo === "texto" ? (
            <MiniComponenteProductos
                key={index}
                titulo={item.titulo}
                texto={item.texto}
            />
        ) : (
            <MiniComponenteProductosConImagenes
                key={index}
                titulo={item.titulo}
                texto={item.texto}
                imagen={item.imagen}
            />
        )
    )}
            </section>
            <MiniComponenteQuintaSeccion
                titulo={t("abasto.quintaSeccion.titulo")}
                subtitulo={t("abasto.quintaSeccion.subtitulo")}
                texto1={t("abasto.quintaSeccion.texto1")}
                texto2={t("abasto.quintaSeccion.texto2")}
            />
        </>
    )
}

export default ComponenteProductos;
