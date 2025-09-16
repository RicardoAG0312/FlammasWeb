import React from 'react'
import "../estilos/componenteInicio.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import imagen7 from "../images/7.png.png";
import { useTranslation } from 'react-i18next'; 

export function MiniComponentesSegundaSeccion({ imagen, titulo, texto }) {
    return (
        <div className='carta'>
            <img src={require(`../images/${imagen}.jpeg`)} alt="Imagen" id="imagenInicio" />
            <h1> {titulo} </h1>
            <p> {texto} </p>
        </div>
    )
}
function MiniVideos({ imagen, titulo, texto }) {
    return (
        <div className='carta-video'>
            <video autoPlay preload='auto' loop muted>
                <source src={require(`../images/${imagen}.mp4`)} type='video/mp4' />
            </video>
            <h1> {titulo} </h1>
            <p> {texto} </p>
        </div>
    )
}
function MiniComponentesCuartaSeccion({ imagen, titulo, texto }) {
    return (
        <div>
            <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
            <h1> {titulo} </h1>
            <p> {texto} </p>
        </div>
    )
}
export function MiniComponenteQuintaSeccion({ titulo, subtitulo, texto1, texto2 }) {
    return (
        <section className='container-fluid seccion-quinta'>
            <div className="row">
                <div className="col-12 col-sm-8 col-xxl-8">
                    <h1> <i className="bi bi-gear-wide-connected"> </i> {titulo} </h1>
                    <h2> {subtitulo} </h2>
                    <p> {texto1} </p>
                    <p> {texto2} </p>
                </div>
                <div className="col-12 col-sm-4 col-xxl-4">
                    <img src={imagen7} alt="Imagen" />
                </div>
            </div>
        </section>
    )
}

//Componente a renderizar 
function ComponenteInicio() {
    const { t } = useTranslation();
    return (
        <>
            <section className='container-fluid seccion-encabezado'>
                <div className="row">
                    <div className="col-12 col-sm-8 col-xxl-8 primera-columna">
                        <div>
                            <h6>{t("inicio.encabezado.texto1")}</h6>
                            <h1>{t("inicio.encabezado.texto2")}</h1>
                            <h2>{t("inicio.encabezado.texto3")}</h2>
                            <p>{t("inicio.encabezado.parrafo")}</p>                        </div>
                        <div className='btn btn-danger'>
                            <a className='botonInfoFlammas' href={process.env.PUBLIC_URL + "/Datasheet_Flammas.pdf"} download={"Flammas-Marcus-Series.pdf"} rel="noopener noreferrer">{t("inicio.encabezado.boton")}</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xxl-4 segunda-columna">
                        <div className='container-fluid'>
                            <video autoPlay preload='auto' loop muted>
                                <source src={require("../images/flammas web.mp4")} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid seccion-segunda'>
                <div>
                    <h1>{t("inicio.segundaSeccion.titulo")}</h1>
                    <h2>{t("inicio.segundaSeccion.subtitulo")}</h2>
                </div>
                <div className='container contenedor-cartas'>
                    <MiniVideos
                        imagen="1"
                        titulo={t("inicio.segundaSeccion.videos.video1.titulo")}
                        texto={t("inicio.segundaSeccion.videos.video1.texto")}
                    />
                    <MiniVideos
                        imagen="2"
                        titulo={t("inicio.segundaSeccion.videos.video2.titulo")}
                        texto={t("inicio.segundaSeccion.videos.video2.texto")}
                    />
                    <MiniVideos
                        imagen="3"
                        titulo={t("inicio.segundaSeccion.videos.video3.titulo")}
                        texto={t("inicio.segundaSeccion.videos.video3.texto")}
                    />
                </div>
            </section>
            <section className='container-fluid seccion-tercera'>
                <div className='contenedor-info'>
                    <div>
                        <span>{t("inicio.terceraSeccion.titulo")}</span>
                        <h1>{t("inicio.terceraSeccion.subtitulo")}</h1>
                    </div>
                    <div>
                         <p>{t("inicio.terceraSeccion.parrafo")}</p>
                        <div> <a style={{ color: "black" }} className='botonInfoFlammas' href={process.env.PUBLIC_URL + "/Datasheet_Flammas.pdf"} download={"Datasheet_Flammas.pdf"} rel="noopener noreferrer">{t("inicio.terceraSeccion.boton")}</a> </div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            <section className='container-fluid seccion-cuarta'>
                <div className='row'>
                    <div className='col-12 col-sm-4 col-xxl-4 info'>
                        <div>
                            <span>{t("inicio.cuartaSeccion.titulo")}</span>
                            <h3>{t("inicio.cuartaSeccion.subtitulo")}</h3>
                        </div>
                    </div>
                    <div className='col-12 col-sm-8 col-xxl-8 contenedor-cards'>
                        <MiniComponentesCuartaSeccion
                            imagen="8.png"
                            titulo={t("inicio.cuartaSeccion.items.item1.titulo")}
                            texto={t("inicio.cuartaSeccion.items.item1.texto")}
                        />
                        <MiniComponentesCuartaSeccion
                            imagen="9.png"
                            titulo={t("inicio.cuartaSeccion.items.item2.titulo")}
                            texto={t("inicio.cuartaSeccion.items.item2.texto")}
                        />
                        <MiniComponentesCuartaSeccion
                            imagen="10.png"
                             titulo={t("inicio.cuartaSeccion.items.item3.titulo")}
                             texto={t("inicio.cuartaSeccion.items.item3.texto")}
                        />
                        <MiniComponentesCuartaSeccion
                            imagen="11.png"
                            titulo={t("inicio.cuartaSeccion.items.item4.titulo")}
                            texto={t("inicio.cuartaSeccion.items.item4.texto")}
                        />
                        <MiniComponentesCuartaSeccion
                            imagen="12.png"
                            titulo={t("inicio.cuartaSeccion.items.item5.titulo")}
                            texto={t("inicio.cuartaSeccion.items.item5.texto")}
                        />
                        <MiniComponentesCuartaSeccion
                            imagen="13.png"
                            titulo={t("inicio.cuartaSeccion.items.item6.titulo")}
                            texto={t("inicio.cuartaSeccion.items.item6.texto")}
                        />
                    </div>
                </div>
            </section>
            <MiniComponenteQuintaSeccion
                titulo={t("inicio.quintaSeccion.titulo")}
                subtitulo={t("inicio.quintaSeccion.subtitulo")}
                texto1={t("inicio.quintaSeccion.texto1")}
                texto2={t("inicio.quintaSeccion.texto2")}
            />
            <section className='container seccion-sexta'>
                <h1 className='texting'>{t("inicio.sextaSeccion.titulo")}</h1>
            </section>
        </>
    )
}

export default ComponenteInicio;



