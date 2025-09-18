import React, { useState } from "react";
import "../estilos/componenteSoluciones.css";
import "../estilos/componenteInicio.css"
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";
import { MiniComponenteProductos } from "./ComponenteProductos";
import ImagenOne from "../images/ultimg.png.png";
import ImagenMarcus from "../images/marcus.webp";
import { useTranslation } from "react-i18next";

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
export function ComponenteEncabezadoSolucionesZeroSpam({ titulo, subtitulo, texto, boton }) {
    return (
        <section className="container-fluid seccionEncabezadoSoluciones">
            <h3> {subtitulo} </h3>
            <h1> {titulo} </h1>
            <p> <b> {texto} </b> </p>
            <div style={{ background: "#CF0F09" }} className='btn btn-danger'>
                <a className='botonInfoFlammas' href={process.env.PUBLIC_URL + "/Datasheet_ZeroSpam.pdf"} download={"Flammas-ZeroSpam-Series.pdf"} rel="noopener noreferrer"> {boton} </a>
            </div>
        </section>
    )
}
export function ComponenteEncabezadoSolucionesDomain({ titulo, subtitulo, texto, boton }) {
    return (
        <section className="container-fluid seccionEncabezadoSoluciones">
            <h3> {subtitulo} </h3>
            <h1> {titulo} </h1>
            <p> <b> {texto} </b> </p>
            <div style={{ background: "#CF0F09" }} className='btn btn-danger'>
                <a className='botonInfoFlammas' href={process.env.PUBLIC_URL + "/Datasheet_SecureDomain.pdf"} download={"Flammas-SecureDomain-Series.pdf"} rel="noopener noreferrer"> {boton} </a>
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
    const { t } = useTranslation();
    return (
        <>
            <ComponenteEncabezadoSoluciones
                subtitulo={t("soluciones1.monitorizacion1.encabezado.subtitulo")}
                titulo={t("soluciones1.monitorizacion1.encabezado.titulo")}
                texto={t("soluciones1.monitorizacion1.encabezado.texto")}
            />
            <section className="container-fluid seccionEscrituraPrincipalSoluciones">
                <h2> {t("soluciones1.monitorizacion1.seccionPrincipal.titulo")}</h2>
                <p>{t("soluciones1.monitorizacion1.seccionPrincipal.parrafo1")}</p>
                <p> {t("soluciones1.monitorizacion1.seccionPrincipal.parrafo2")}</p>
            </section>
            <ComponenteInfoIzquierdaSoluciones
                titulo={t("soluciones1.monitorizacion1.info.izquierda1_titulo")}
                texto={t("soluciones1.monitorizacion1.info.izquierda1_texto")}
                imagen="41.png"
                id="none"
            />
            <ComponenteInfoDerechoSoluciones
                titulo={t("soluciones1.monitorizacion1.info.derecha1_titulo")}
                texto={t("soluciones1.monitorizacion1.info.derecha1_texto")}
                imagen="42.png"
                id="none"
            />
            <ComponenteInfoIzquierdaSoluciones
                titulo={t("soluciones1.monitorizacion1.info.izquierda2_titulo")}
                texto={t("soluciones1.monitorizacion1.info.izquierda2_texto")}
                imagen="43.png"
            />
            <ComponenteInfoDerechoSoluciones
                titulo={t("soluciones1.monitorizacion1.info.derecha2_titulo")}
                texto={t("soluciones1.monitorizacion1.info.derecha2_texto")}
                imagen="44.png"
                id="none"
            />
            <ComponenteInfoIzquierdaSoluciones
                titulo={t("soluciones1.monitorizacion1.info.izquierda3_titulo")}
                texto={t("soluciones1.monitorizacion1.info.izquierda3_texto")}
                imagen="45.png"
            />
            <ComponenteInfoDerechoSoluciones
                titulo={t("soluciones1.monitorizacion1.info.derecha3_titulo")}
                texto={t("soluciones1.monitorizacion1.info.derecha3_texto")}
                imagen="46.png"
            />
            <header className="funcionalidades">{t("soluciones1.monitorizacion1.funcionalidades.header")}</header>
            <section className="container-fluid seccionFuncionAvanzadas">
                <ComponenteFuncionalidadAvanzada
                    imagen="25.png"
                    titulo={t("soluciones1.monitorizacion1.funcionalidades.f1_titulo")}
                    texto={t("soluciones1.monitorizacion1.funcionalidades.f1_texto")}
                />
                <ComponenteFuncionalidadAvanzada
                    imagen="26.png"
                    titulo={t("soluciones1.monitorizacion1.funcionalidades.f2_titulo")}
                    texto={t("soluciones1.monitorizacion1.funcionalidades.f2_texto")}
                />
                <ComponenteFuncionalidadAvanzada
                    imagen="27.png"
                    titulo={t("soluciones1.monitorizacion1.funcionalidades.f3_titulo")}
                    texto={t("soluciones1.monitorizacion1.funcionalidades.f3_texto")}
                />
                <ComponenteFuncionalidadAvanzada
                    imagen="28.png"
                    titulo={t("soluciones1.monitorizacion1.funcionalidades.f4_titulo")}
                    texto={t("soluciones1.monitorizacion1.funcionalidades.f4_texto")}
                />
            </section>
            <ComponenteEncabezadoSoluciones
                subtitulo={t("soluciones1.monitorizacion1.logs.encabezado.subtitulo")}
                titulo={t("soluciones1.monitorizacion1.logs.encabezado.titulo")}
                texto={t("soluciones1.monitorizacion1.logs.encabezado.texto")}
            />
            <ComponenteInfoIzquierdaSoluciones
                titulo={t("soluciones1.monitorizacion1.logs.izquierda_titulo")}
                texto={t("soluciones1.monitorizacion1.logs.izquierda_texto")}
                imagen="23.png"
                id="log"
            />
            <section className="container-fluid contenedor-cartitas">
                <MiniComponenteProductos
                    titulo={t("soluciones1.monitorizacion1.logs.cartitas1_titulo")}
                    texto={t("soluciones1.monitorizacion1.logs.cartitas1_texto")}
                />
                <MiniComponenteProductos
                    titulo={t("soluciones1.monitorizacion1.logs.cartitas2_titulo")}
                    texto={t("soluciones1.monitorizacion1.logs.cartitas2_texto")}
                />
            </section>
            <section className="container-fluid contenedor-cartas-logs">
                <ComponenteMinisLogs
                    nombreIcono="diagram-3"
                    texto={t("soluciones1.monitorizacion1.logs.minis.texto1")}
                />
                <ComponenteMinisLogs
                    nombreIcono="terminal"
                    texto={t("soluciones1.monitorizacion1.logs.minis.texto2")}
                />
                <ComponenteMinisLogs
                    nombreIcono="chat"
                    texto={t("soluciones1.monitorizacion1.logs.minis.texto3")}
                />
                <ComponenteMinisLogs
                    nombreIcono="search"
                    texto={t("soluciones1.monitorizacion1.logs.minis.texto4")}
                />
                <ComponenteMinisLogs
                    nombreIcono="filetype-csv"
                    texto={t("soluciones1.monitorizacion1.logs.minis.texto5")}
                />
                <ComponenteMinisLogs
                    nombreIcono="lock"
                    texto={t("soluciones1.monitorizacion1.logs.minis.texto6")}
                />
                <ComponenteMinisLogs
                    nombreIcono="database"
                    texto={t("soluciones1.monitorizacion1.logs.minis.texto7")}
                />
                <ComponenteMinisLogs
                    nombreIcono="pie-chart"
                    texto={t("soluciones1.monitorizacion1.logs.minis.texto8")}
                />
            </section>
            <section className="container-fluid contenedor-animables">
                <header> {t("soluciones1.monitorizacion1.observabilidad.header")} </header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable
                        nombreIcono="bi-person-lines-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c1_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c1_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-graph-up"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-display"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-exclamation-diamond-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-joystick"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-headset"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-cpu-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-ethernet"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-card-checklist"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-file-earmark-text"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_texto")}
                    />
                </div>
            </section>
            <MiniComponenteQuintaSeccion
                titulo={t("soluciones1.monitorizacion1.quintaSeccion.titulo")}
                subtitulo={t("soluciones1.monitorizacion1.quintaSeccion.subtitulo")}
                texto1={t("soluciones1.monitorizacion1.quintaSeccion.texto1")}
                texto2={t("soluciones1.monitorizacion1.quintaSeccion.texto2")}
            />
        </>
    )
}
export function ComponenteSolucionesInfraestructura() {
    const { t } = useTranslation();
    return (
        <>
            <ComponenteEncabezadoSoluciones
                titulo={t("solucionesInfraestructura.encabezado.titulo")}
                subtitulo={t("solucionesInfraestructura.encabezado.subtitulo")}
                texto={t("solucionesInfraestructura.encabezado.texto")}
            />
            <section className="container-fluid contenedor-cartas-infra">
                <ComponenteMinisLogs
                    nombreIcono="alarm-fill"
                    texto={t("solucionesInfraestructura.minis.texto1")}
                />
                <ComponenteMinisLogs
                    nombreIcono="arrow-down-circle"
                    texto={t("solucionesInfraestructura.minis.texto2")}
                />
                <ComponenteMinisLogs
                    nombreIcono="bag-check"
                    texto={t("solucionesInfraestructura.minis.texto3")}
                />
                <ComponenteMinisLogs
                    nombreIcono="calendar2-week-fill"
                    texto={t("solucionesInfraestructura.minis.texto4")}
                />
                <ComponenteMinisLogs
                    nombreIcono="camera-video-fill"
                    texto={t("solucionesInfraestructura.minis.texto5")}
                />
                <ComponenteMinisLogs
                    nombreIcono="cloud-arrow-down-fill"
                    texto={t("solucionesInfraestructura.minis.texto6")}
                />
            </section>
            <section className="container-fluid contenedor-tercero-infra">
                <header> {t("solucionesInfraestructura.caracteristicasEspeciales.header")} </header>
                <div className="row">
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2>{t("solucionesInfraestructura.caracteristicasEspeciales.c1_titulo")}</h2>
                        <p>{t("solucionesInfraestructura.caracteristicasEspeciales.c1_texto")}</p>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2>{t("solucionesInfraestructura.caracteristicasEspeciales.c2_titulo")}</h2>
                        <p>{t("solucionesInfraestructura.caracteristicasEspeciales.c2_texto")}</p>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-4">
                        <h2>{t("solucionesInfraestructura.caracteristicasEspeciales.c3_titulo")}</h2>
                        <p>{t("solucionesInfraestructura.caracteristicasEspeciales.c3_texto")}</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-cuarta-infra">
                <header> {t("solucionesInfraestructura.caracteristicasTecnicas.header")} </header>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-6 primera-col">
                        <ComponenteMiniInfra
                            nombreIcono="building"
                            texto={t("solucionesInfraestructura.caracteristicasTecnicas.izquierda.texto1")}
                        />
                        <ComponenteMiniInfra
                            nombreIcono="box"
                            texto={t("solucionesInfraestructura.caracteristicasTecnicas.izquierda.texto2")}
                        />
                        <ComponenteMiniInfra
                            nombreIcono="arrow-repeat"
                            texto={t("solucionesInfraestructura.caracteristicasTecnicas.izquierda.texto3")}
                        />
                        <ComponenteMiniInfra
                            nombreIcono="graph-up"
                            texto={t("solucionesInfraestructura.caracteristicasTecnicas.izquierda.texto4")}
                        />
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6 segunda-col">
                        <ComponenteMiniInfra
                            nombreIcono="cloud"
                            texto={t("solucionesInfraestructura.caracteristicasTecnicas.derecha.texto1")}
                        />
                        <ComponenteMiniInfra
                            nombreIcono="pencil"
                            texto={t("solucionesInfraestructura.caracteristicasTecnicas.derecha.texto2")}
                        />
                        <ComponenteMiniInfra
                            nombreIcono="diagram-2"
                            texto={t("solucionesInfraestructura.caracteristicasTecnicas.derecha.texto3")}
                        />
                        <ComponenteMiniInfra
                            nombreIcono="cloud-arrow-up"
                            texto={t("solucionesInfraestructura.caracteristicasTecnicas.derecha.texto4")}
                        />
                    </div>
                </div>
            </section>
            <ComponenteEncabezadoSoluciones
                titulo={t("solucionesInfraestructura.usuario.encabezado.titulo")}
                subtitulo={t("solucionesInfraestructura.usuario.encabezado.subtitulo")}
                texto={t("solucionesInfraestructura.usuario.encabezado.texto")}
            />
            <section className="container-fluid contenedor-cartas-infra">
                <ComponenteMinisLogs
                    nombreIcono="geo-alt"
                    texto={t("solucionesInfraestructura.usuario.minis.texto1")}
                />
                <ComponenteMinisLogs
                    nombreIcono="clipboard-check"
                    texto={t("solucionesInfraestructura.usuario.minis.texto2")}
                />
                <ComponenteMinisLogs
                    nombreIcono="eye"
                    texto={t("solucionesInfraestructura.usuario.minis.texto3")}
                />
                <ComponenteMinisLogs
                    nombreIcono="bar-chart-line"
                    texto={t("solucionesInfraestructura.usuario.minis.texto4")}
                />
                <ComponenteMinisLogs
                    nombreIcono="pencil"
                    texto={t("solucionesInfraestructura.usuario.minis.texto5")}
                />
                <ComponenteMinisLogs
                    nombreIcono="arrow-repeat"
                    texto={t("solucionesInfraestructura.usuario.minis.texto6")}
                />
            </section >
            <section className="container-fluid contenedor-segunda-usu">
                <header> {t("solucionesInfraestructura.usuario.razones.header")} </header>
                <div className="container sub-contenedor-usu">
                    <div>
                        <i className="bi bi-broadcast"></i>
                        <h2>{t("solucionesInfraestructura.usuario.razones.r1_titulo")}</h2>
                        <p>{t("solucionesInfraestructura.usuario.razones.r1_texto")}</p>
                    </div>
                    <div>
                        <i className="bi bi-robot"></i>
                        <h2>{t("solucionesInfraestructura.usuario.razones.r2_titulo")}</h2>
                        <p>{t("solucionesInfraestructura.usuario.razones.r2_texto")}</p>
                    </div>
                    <div>
                        <i className="bi bi-person-circle"></i>
                        <h2>{t("solucionesInfraestructura.usuario.razones.r3_titulo")}</h2>
                        <p>{t("solucionesInfraestructura.usuario.razones.r3_texto")}</p>
                    </div>
                    <div>
                        <i className="bi bi-lightbulb"></i>
                        <h2>{t("solucionesInfraestructura.usuario.razones.r4_titulo")}</h2>
                        <p>{t("solucionesInfraestructura.usuario.razones.r4_texto")}</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-animables">
                <header>{t("soluciones1.monitorizacion1.observabilidad.header")}</header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable
                        nombreIcono="bi-person-lines-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c1_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c1_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-graph-up"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-display"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-exclamation-diamond-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-joystick"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-headset"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_texto")}
                    />                    
                    <ComponenteCartaAnimable
                        nombreIcono="bi-cpu-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-ethernet"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-card-checklist"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-file-earmark-text"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_texto")}
                    />
                </div>
            </section>
            <MiniComponenteQuintaSeccion
                titulo={t("soluciones1.monitorizacion1.quintaSeccion.titulo")}
                subtitulo={t("soluciones1.monitorizacion1.quintaSeccion.subtitulo")}
                texto1= {t("soluciones1.monitorizacion1.quintaSeccion.texto1")}
                texto2={t("soluciones1.monitorizacion1.quintaSeccion.texto2")}
            />
        </>
    )
}
export function ComponenteSolucionesCloud() {
    const { t } = useTranslation();
    
    return (
        <>
            <ComponenteEncabezadoSoluciones
                titulo={t("solucionesCloud.encabezado1.titulo")}
                subtitulo={t("solucionesCloud.encabezado1.subtitulo")}
                texto={t("solucionesCloud.encabezado1.texto")}
            />
            <ComponentetxtDerechoSoluciones
                titulo={t("solucionesCloud.txtDerecho1.titulo")}
                texto={t("solucionesCloud.txtDerecho1.texto")}
                texto1={t("solucionesCloud.txtDerecho1.texto1")}
                imagen="40.png"
            />
            <ComponentetxtIzquierdaSoluciones
                titulo={t("solucionesCloud.txtIzquierda1.titulo")}
                texto={t("solucionesCloud.txtIzquierda1.texto")}
                imagen="47.png"
            />
            <ComponentetxtDerechoSoluciones
                titulo={t("solucionesCloud.txtDerecho2.titulo")}
                texto={t("solucionesCloud.txtDerecho2.texto")}
                texto1={t("solucionesCloud.txtDerecho2.texto1")}
                imagen="48.png"
            />
            <section className="container-fluid bg-white contenedorFondoBlanco">
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-6 info text-white">
                        <h2 className="text-start"> <span className="text-white">{t("solucionesCloud.integracion.titulo")} </span> {t("solucionesCloud.integracion.titulo2")}</h2>
                        <p> {t("solucionesCloud.integracion.texto1")}</p>
                        <p>{t("solucionesCloud.integracion.texto2")}</p>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-6 imagen">
                        <img src={require(`../images/49.png.png`)} alt="Imagen" />
                    </div>
                </div>
            </section>
            <ComponenteInfoCentral
                titulo={t("solucionesCloud.infraestructura.titulo")}
                texto1={t("solucionesCloud.infraestructura.texto1")}
                texto2={t("solucionesCloud.infraestructura.texto2")}
            />
            <ComponenteEncabezadoSoluciones
                titulo={t("solucionesCloud.encabezado2.titulo")}
                subtitulo={t("solucionesCloud.encabezado2.subtitulo")}
                texto={t("solucionesCloud.encabezado2.texto")}
            />
            <section className="container-fluid seccion-segunda">
                <div className='container contenedor-cartas'>
                    <MiniComponentesSegundaSeccion
                        imagen="1"
                        titulo={t("solucionesCloud.miniComponentes.hardening.titulo")}
                        texto={t("solucionesCloud.miniComponentes.hardening.texto")}
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="2"
                        titulo={t("solucionesCloud.miniComponentes.vulnerabilidades.titulo")}
                        texto={t("solucionesCloud.miniComponentes.vulnerabilidades.texto")}
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="3"
                        titulo={t("solucionesCloud.miniComponentes.inventario.titulo")}
                        texto={t("solucionesCloud.miniComponentes.inventario.texto")}
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="4"
                        titulo={t("solucionesCloud.miniComponentes.infraestructuraSeguridad.titulo")}
                        texto={t("solucionesCloud.miniComponentes.infraestructuraSeguridad.texto")}
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="5"
                        titulo={t("solucionesCloud.miniComponentes.servidores.titulo")}
                        texto={t("solucionesCloud.miniComponentes.servidores.texto")}
                    />
                    <MiniComponentesSegundaSeccion
                        imagen="6"
                        titulo={t("solucionesCloud.miniComponentes.alertas.titulo")}
                        texto={t("solucionesCloud.miniComponentes.alertas.texto")}
                    />
                </div>
            </section>
            <section className="container-fluid seccion-viñetas-animadas">
                <ComponenteViñetaAnimada
                    nombreImagen="58.png"
                    titulo={t("solucionesCloud.viñetas.inventario.titulo")}
                    texto={t("solucionesCloud.viñetas.inventario.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="59.png"
                    titulo={t("solucionesCloud.viñetas.dispositivos.titulo")}
                    texto={t("solucionesCloud.viñetas.dispositivos.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="60.png"
                    titulo={t("solucionesCloud.viñetas.gestionVulnerabilidades.titulo")}
                    texto={t("solucionesCloud.viñetas.gestionVulnerabilidades.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="61.png"
                    titulo={t("solucionesCloud.viñetas.privilegios.titulo")}
                    texto={t("solucionesCloud.viñetas.privilegios.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="62.png"
                    titulo={t("solucionesCloud.viñetas.configuracion.titulo")}
                    texto={t("solucionesCloud.viñetas.configuracion.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="63.png"
                    titulo={t("solucionesCloud.viñetas.logs.titulo")}
                    texto={t("solucionesCloud.viñetas.logs.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="64.png"
                    titulo={t("solucionesCloud.viñetas.malware.titulo")}
                    texto={t("solucionesCloud.viñetas.malware.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="65.png"
                    titulo={t("solucionesCloud.viñetas.correo.titulo")}
                    texto={t("solucionesCloud.viñetas.correo.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="66.png"
                    titulo={t("solucionesCloud.viñetas.recuperacion.titulo")}
                    texto={t("solucionesCloud.viñetas.recuperacion.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="67.png"
                    titulo={t("solucionesCloud.viñetas.defensa.titulo")}
                    texto={t("solucionesCloud.viñetas.defensa.texto")}
                />
                <ComponenteViñetaAnimada
                    nombreImagen="68.png"
                    titulo={t("solucionesCloud.viñetas.cuentas.titulo")}
                    texto={t("solucionesCloud.viñetas.cuentas.texto")}
                />
            </section>
            <section className="container-fluid seccionImg">
                <div></div>
            </section>
            <ComponentetxtDerechoSoluciones
                titulo={t("solucionesCloud.vulnerabilidades.titulo")}
                texto={t("solucionesCloud.vulnerabilidades.texto")}
                texto1={t("solucionesCloud.vulnerabilidades.texto1")}
                imagen="70.png"
            />
            <section className="container-fluid bg-white contenedorIMGTopBot">
                <div className="row">
                    <div className="col-12 imagen">
                        <img src={require(`../images/71.png.png`)} alt="Imagen" />
                    </div>
                    <div className=" container-fluid info text-dark">
                        <h2 className="text-center"> <span className="text-dark"> {t("solucionesCloud.roadmap.titulo1")} </span> {t("solucionesCloud.roadmap.titulo2")}  <span className="text-dark"> {t("solucionesCloud.roadmap.titulo3")} </span></h2>
                        <p className="p-orange fw-bold">{t("solucionesCloud.roadmap.texto1")}</p>
                        <p> {t("solucionesCloud.roadmap.texto2")}</p>
                        <p>{t("solucionesCloud.roadmap.texto3")}</p>
                    </div>
                    <div className="col-12 container-fluid imagen-fullwidth">

                    </div>
                    <div className="container-fluid info text-dark">
                        <p className="p-orange fw-bold">{t("solucionesCloud.roadmap.texto4")}</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedorIMGTopBot">
                <div className="row">
                    <div className="col-12 imagen">
                        <img src={require(`../images/73.png.png`)} alt="Imagen" />
                    </div>
                    <div className=" container-fluid info2 text-black">
                        <h2 className="text-center"> <span className="text-black">{t("solucionesCloud.seguridadVerificable.titulo")}</span> {t("solucionesCloud.seguridadVerificable.titulo2e")}</h2>
                        <p>{t("solucionesCloud.seguridadVerificable.texto")}</p>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-animables">
                <header>{t("soluciones1.monitorizacion1.observabilidad.header")}</header>
                <div className="container contenedor-cartas-animables">
                    <ComponenteCartaAnimable
                        nombreIcono="bi-person-lines-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c1_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c1_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-graph-up"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c2_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-display"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c3_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-exclamation-diamond-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c4_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-joystick"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c5_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-headset"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c6_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-cpu-fill"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c7_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-ethernet"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c8_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-card-checklist"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c9_texto")}
                    />
                    <ComponenteCartaAnimable
                        nombreIcono="bi-file-earmark-text"
                        titulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_titulo")}
                        subtitulo={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_subtitulo")}
                        texto={t("soluciones1.monitorizacion1.observabilidad.cartas.c10_texto")}
                    />
                </div>
            </section>
            <MiniComponenteQuintaSeccion
                titulo={t("soluciones1.monitorizacion1.quintaSeccion.titulo")}
                subtitulo={t("soluciones1.monitorizacion1.quintaSeccion.subtitulo")}
                texto1= {t("soluciones1.monitorizacion1.quintaSeccion.texto1")}
                texto2={t("soluciones1.monitorizacion1.quintaSeccion.texto2")}
            />
        </>
    )
}



export function ComponenteSolucionesOneSecurity() {
    const [componenteActivo, setComponenteActivo] = useState("maxima");
    const { t } = useTranslation();
    

    const infoTecnicas = Object.values(t("solucionesOneSecurity.deteccion.lista", { returnObjects: true }));

    const infoDeteccionRespuesta = Object.values(t("solucionesOneSecurity.deteccionRespuesta.lista", { returnObjects: true }));

    const componenteRenderData = () => {
       
        switch (componenteActivo) {
            case 'maxima':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}>{t("solucionesOneSecurity.maxima.titulo")}</h1>
                        <p>
                            {t("solucionesOneSecurity.maxima.texto")}
                        </p>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("solucionesOneSecurity.maxima.lista.texto1")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.maxima.lista.texto2")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.maxima.lista.texto3")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.maxima.lista.texto4")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.maxima.lista.texto5")} </li>
                        </ul>
                    </section>
                )
            case 'proteccion':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("solucionesOneSecurity.proteccion.titulo")} </h1>
                        <p>
                            {t("solucionesOneSecurity.proteccion.texto")}
                        </p>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("solucionesOneSecurity.proteccion.lista.texto1")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.proteccion.lista.texto2")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.proteccion.lista.texto3")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.proteccion.lista.texto4")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.proteccion.lista.texto5")} </li>
                        </ul>
                    </section>
                )
            case 'control':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("solucionesOneSecurity.control.titulo")} </h1>
                        <p>
                            {t("solucionesOneSecurity.control.texto")}
                        </p>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("solucionesOneSecurity.control.lista.texto1")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.control.lista.texto2")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.control.lista.texto3")} </li>
                        </ul>
                    </section>
                )
            case 'insights':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("solucionesOneSecurity.insights.titulo")} </h1>
                        <p>
                            {t("solucionesOneSecurity.insights.texto")}
                        </p>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("solucionesOneSecurity.insights.lista.texto1")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.insights.lista.texto2")} </li>
                            <li className="mb-2"> {t("solucionesOneSecurity.insights.lista.texto3")} </li>
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
                titulo= {t("solucionesOneSecurity.encabezado.titulo")}
                subtitulo= {t("solucionesOneSecurity.encabezado.subtitulo")}
                texto= {t("solucionesOneSecurity.encabezado.texto")}
                boton= {t("solucionesOneSecurity.encabezado.boton")}
            />
            <section className="deteccionOne">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-content-center flex-row">
                        <img src={ImagenOne} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-8 info d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09", marginBottom: "30px" }}> {t("solucionesOneSecurity.deteccion.titulo")} </h1>
                        <p style={{ color: "black", marginBottom: "30px" }}> {t("solucionesOneSecurity.deteccion.texto")} </p>
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
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> {t("solucionesOneSecurity.maxima.titulo")} </h1>
                </div>
                <div style={{ padding: "10px 50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-5 links">
                            <h3 className={componenteActivo === 'maxima' ? 'active' : ''} onClick={() => setComponenteActivo('maxima')}> {t("solucionesOneSecurity.pilares.item.titulo1")} </h3>
                            <h3 className={componenteActivo === 'proteccion' ? 'active' : ''} onClick={() => setComponenteActivo('proteccion')}> {t("solucionesOneSecurity.pilares.item.titulo2")} </h3>
                            <h3 className={componenteActivo === 'control' ? 'active' : ''} onClick={() => setComponenteActivo('control')}> {t("solucionesOneSecurity.pilares.item.titulo3")} </h3>
                            <h3 className={componenteActivo === 'insights' ? 'active' : ''} onClick={() => setComponenteActivo('insights')}> {t("solucionesOneSecurity.pilares.item.titulo4")} </h3>
                        </div>
                        <div className="col-12 col-md-7 info">
                            {componenteRenderData()}
                        </div>
                    </div>
                </div>
            </section>
            <section className="endviñetas">
                <EndVIñetas
                    titulo={t("solucionesOneSecurity.endVinetas.automatizado.titulo")}
                    texto={t("solucionesOneSecurity.endVinetas.automatizado.texto")}
                />
                <EndVIñetas
                    titulo={t("solucionesOneSecurity.endVinetas.integrada.titulo")}
                    texto={t("solucionesOneSecurity.endVinetas.integrada.texto")}
                />
                <EndVIñetas
                    titulo={t("solucionesOneSecurity.endVinetas.integracion.titulo")}
                    texto={t("solucionesOneSecurity.endVinetas.integracion.texto")}
                />
            </section>
            <section className="deteccionOne op d-flex justify-content-center align-content-center">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09" }}> {t("solucionesOneSecurity.deteccionRespuesta.titulo")} </h1>
                        <p> {t("solucionesOneSecurity.deteccionRespuesta.texto")} </p>
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
    const { t } = useTranslation();

    const infoTecnicas = Object.values(t("solucionesMarcus.infoTecnicas", { returnObjects: true }));

    const infoDeteccionRespuesta = Object.values(t("solucionesMarcus.gestion.infoDeteccionRespuesta", { returnObjects: true }));

    const componenteRenderData = () => {
        switch (componenteActivo) {
            case 'bitacoras':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("solucionesMarcus.funciones.header.bitacoras_titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.bitacoras_texto1")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.bitacoras_texto2")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.bitacoras_texto3")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.bitacoras_texto4")} </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.bitacoras_texto5")}</li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.bitacoras_texto6")} </li>
                        </ul>
                    </section>
                )
            case 'integridad':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}>{t("solucionesMarcus.funciones.header.integridad_titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.integridad_texto1")}  </li>
                            <li className="mb-2">{t("solucionesMarcus.funciones.header.integridad_texto2")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.integridad_texto3")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.integridad_texto4")} </li>
                        </ul>
                    </section>
                )
            case 'aplicaciones':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("solucionesMarcus.funciones.header.aplicaciones_titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.aplicaciones_texto1")} </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.aplicaciones_texto2")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.aplicaciones_texto3")} </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.aplicaciones_texto4")} </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.aplicaciones_texto5")}  </li>
                        </ul>
                    </section>
                )
            case 'tecnicas':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("solucionesMarcus.funciones.header.tecnicas_titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.tecnicas_texto1")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.tecnicas_texto2")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.tecnicas_texto3")}  </li>
                            <li className="mb-2"> {t("solucionesMarcus.funciones.header.tecnicas_texto4")} </li>
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
                titulo={t("solucionesMarcus.encabezado.titulo")}
                subtitulo={t("solucionesMarcus.encabezado.subtitulo")}
                texto={t("solucionesMarcus.encabezado.texto")}
                boton={t("solucionesMarcus.encabezado.boton")}
            />
            <section className="deteccionOne">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-content-center flex-row">
                        <img src={ImagenMarcus} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-8 info d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09", marginBottom: "30px" }}> {t("solucionesMarcus.encabezado.tituloPrincipal")} </h1>
                        <p style={{ color: "black", marginBottom: "30px" }}> {t("solucionesMarcus.encabezado.textoPrincipal")} </p>
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
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> {t("solucionesMarcus.funciones.header.titulo")} </h1>
                </div>
                <div style={{ padding: "10px 50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-5 links">
                            <h3 className={componenteActivo === 'bitacoras' ? 'active' : ''} onClick={() => setComponenteActivo('bitacoras')}> {t("solucionesMarcus.funciones.header.bitacoras_titulo")} </h3>
                            <h3 className={componenteActivo === 'integridad' ? 'active' : ''} onClick={() => setComponenteActivo('integridad')}> {t("solucionesMarcus.funciones.header.integridad_titulo")} </h3>
                            <h3 className={componenteActivo === 'aplicaciones' ? 'active' : ''} onClick={() => setComponenteActivo('aplicaciones')}> {t("solucionesMarcus.funciones.header.aplicaciones_titulo")} </h3>
                            <h3 className={componenteActivo === 'tecnicas' ? 'active' : ''} onClick={() => setComponenteActivo('tecnicas')}> {t("solucionesMarcus.funciones.header.tecnicas_titulo")} </h3>
                        </div>
                        <div className="col-12 col-md-7 info">
                            {componenteRenderData()}
                        </div>
                    </div>
                </div>
            </section>
            <section className="endviñetas">
                <EndVIñetas
                    titulo={t("solucionesMarcus.caracteristicas.c1_titulo")}
                    texto={t("solucionesMarcus.caracteristicas.c1_texto")}
                />
                <EndVIñetas
                    titulo={t("solucionesMarcus.caracteristicas.c2_titulo")}
                    texto={t("solucionesMarcus.caracteristicas.c2_texto")}
                />
                <EndVIñetas
                    titulo={t("solucionesMarcus.caracteristicas.c3_titulo")}
                    texto={t("solucionesMarcus.caracteristicas.c3_texto")}
                />
            </section>
            <section className="deteccionOne op d-flex justify-content-center align-content-center">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09" }}> {t("solucionesMarcus.gestion.header")}</h1>
                        <p> {t("solucionesMarcus.gestion.texto")} </p>
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
    const { t } = useTranslation();
    
    const infoTecnicas = Object.values(t("zerospam.infoTecnicas", { returnObjects: true }));

    const infoDeteccionRespuesta = Object.values(t("zerospam.infoDeteccionRespuesta", { returnObjects: true }));


    const componenteRenderData = () => {
        switch (componenteActivo) {
            case 'cliente':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("zerospam.funciones.cliente.titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("zerospam.funciones.cliente.texto1")} </li>
                            <li className="mb-2"> {t("zerospam.funciones.cliente.texto2")}  </li>
                            <li className="mb-2"> {t("zerospam.funciones.cliente.texto3")}  </li>
                        </ul>
                    </section>
                )
            case 'tecnologia':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("zerospam.funciones.tecnologia.titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("zerospam.funciones.tecnologia.texto1")}  </li>
                            <li className="mb-2"> {t("zerospam.funciones.tecnologia.texto2")}  </li>
                            <li className="mb-2"> {t("zerospam.funciones.tecnologia.texto3")} </li>
                        </ul>
                    </section>
                )
            case 'directivos':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("zerospam.funciones.directivos.titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("zerospam.funciones.directivos.texto1")} </li>
                            <li className="mb-2"> {t("zerospam.funciones.directivos.texto2")} </li>
                            <li className="mb-2"> {t("zerospam.funciones.directivos.texto3")} </li>
                        </ul>
                    </section>
                )
            case 'empresarios':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("zerospam.funciones.empresarios.titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li className="mb-2"> {t("zerospam.funciones.empresarios.texto1")} </li>
                            <li className="mb-2"> {t("zerospam.funciones.empresarios.texto2")}   </li>
                            <li className="mb-2"> {t("zerospam.funciones.empresarios.texto3")}  </li>
                        </ul>
                    </section>
                )
            default:
                return 'No hay info';
        }
    };

    return (
        <>
            <ComponenteEncabezadoSolucionesZeroSpam
                titulo={t("zerospam.encabezado.titulo")}
                subtitulo={t("zerospam.encabezado.subtitulo")}
                texto={t("zerospam.encabezado.texto")}
                boton={t("zerospam.encabezado.boton")}
            />
            <section className="deteccionOne">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-content-center flex-row">
                        <img src={ImagenMarcus} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-8 info d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09", marginBottom: "30px" }}> {t("zerospam.principal.titulo")} </h1>
                        <p style={{ color: "black", marginBottom: "30px" }}> {t("zerospam.principal.texto")} </p>
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
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> {t("zerospam.funciones.funcion")} </h1>
                </div>
                <div style={{ padding: "10px 50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-5 links">
                            <h3 className={componenteActivo === 'cliente' ? 'active' : ''} onClick={() => setComponenteActivo('cliente')}> {t("zerospam.funciones.cliente.titulo")} </h3>
                            <h3 className={componenteActivo === 'tecnologia' ? 'active' : ''} onClick={() => setComponenteActivo('tecnologia')}> {t("zerospam.funciones.tecnologia.titulo")} </h3>
                            <h3 className={componenteActivo === 'directivos' ? 'active' : ''} onClick={() => setComponenteActivo('directivos')}> {t("zerospam.funciones.directivos.titulo")} </h3>
                            <h3 className={componenteActivo === 'empresarios' ? 'active' : ''} onClick={() => setComponenteActivo('empresarios')}> {t("zerospam.funciones.empresarios.titulo")} </h3>
                        </div>
                        <div className="col-12 col-md-7 info">
                            {componenteRenderData()}
                        </div>
                    </div>
                </div>
            </section>
            <section className="endviñetas">
                <EndVIñetas
                    titulo={t("zerospam.endviñetas.viñeta1.titulo")}
                    texto={t("zerospam.endviñetas.viñeta1.texto")}
                />
                <EndVIñetas
                    titulo={t("zerospam.endviñetas.viñeta2.titulo")}
                    texto={t("zerospam.endviñetas.viñeta2.texto")}
                />
                <EndVIñetas
                    titulo={t("zerospam.endviñetas.viñeta3.titulo")}
                    texto={t("zerospam.endviñetas.viñeta3.texto")}
                />
            </section>
            <section className="deteccionOne op d-flex justify-content-center align-content-center">
                <div className="row m-0">
                    <div className="col-12 col-md-6 d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09" }}> {t("zerospam.gestion.titulo")} </h1>
                        <p> {t("zerospam.gestion.texto")} </p>
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
    const { t } = useTranslation();

    const infoTecnicas = Object.values(t("securedomain.infoTecnicas", { returnObjects: true }));

    const infoDeteccionRespuesta = Object.values(t("securedomain.infoDeteccionRespuesta", { returnObjects: true }));


    const componenteRenderData = () => {
        switch (componenteActivo) {
            case 'cliente':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("securedomain.funciones.cliente.titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li>{t("securedomain.funciones.cliente.texto1")}</li>
                            <li>{t("securedomain.funciones.cliente.texto2")}</li>
                            <li>{t("securedomain.funciones.cliente.texto3")}</li>
                        </ul>
                    </section>
                );
            case 'amenazas':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("securedomain.funciones.amenazas.titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li>{t("securedomain.funciones.amenazas.texto1")}</li>
                            <li>{t("securedomain.funciones.amenazas.texto2")}</li>
                            <li>{t("securedomain.funciones.amenazas.texto3")}</li>

                        </ul>
                    </section>
                );
            case 'riesgos':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("securedomain.funciones.riesgos.titulo")} </h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li>{t("securedomain.funciones.riesgos.texto1")}</li>
                            <li>{t("securedomain.funciones.riesgos.texto2")}</li>
                            <li>{t("securedomain.funciones.riesgos.texto3")}</li>
                        </ul>
                    </section>
                );
            case 'marca':
                return (
                    <section>
                        <h1 style={{ color: "#CF0F09" }}> {t("securedomain.funciones.marca.titulo")}</h1>
                        <ul style={{ fontSize: "18px", fontFamily: "Montserrat" }}>
                            <li>{t("securedomain.funciones.marca.texto1")}</li>
                            <li>{t("securedomain.funciones.marca.texto2")}</li>
                            <li>{t("securedomain.funciones.marca.texto3")}</li>

                        </ul>
                    </section>
                );
            default:
                return <div>No hay info</div>;
        }
    };


    return (
        <>
            <ComponenteEncabezadoSolucionesDomain
                titulo={t("securedomain.encabezado.titulo")}
                subtitulo={t("securedomain.encabezado.subtitulo")}
                texto={t("securedomain.encabezado.texto")}
                boton={t("securedomain.encabezado.boton")}
            />
            <section className="deteccionOne">
                <div className="row p-0 m-0">
                    <div className="col-12 col-md-4 d-flex justify-content-center align-content-center flex-row">
                        <img src={ImagenMarcus} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-12 col-md-8 info d-flex justify-content-evenly align-content-center flex-column">
                        <h1 className="fw-bold" style={{ color: "#CF0F09", marginBottom: "30px" }}> {t("securedomain.principal.titulo")} </h1>
                        <p style={{ color: "black", marginBottom: "30px" }}> {t("securedomain.principal.texto")} </p>
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
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> {t("securedomain.funciones.tituloPrincipal")} </h1>
                </div>
                <div style={{ padding: "10px 50px" }}>
                    <div className="row">
                        <div className="col-12 col-md-5 links">
                            <h3 className={componenteActivo === 'cliente' ? 'active' : ''} onClick={() => setComponenteActivo('cliente')}> {t("securedomain.funciones.cliente.titulo")} </h3>
                            <h3 className={componenteActivo === 'amenazas' ? 'active' : ''} onClick={() => setComponenteActivo('amenazas')}> {t("securedomain.funciones.amenazas.titulo")} </h3>
                            <h3 className={componenteActivo === 'riesgos' ? 'active' : ''} onClick={() => setComponenteActivo('riesgos')}> {t("securedomain.funciones.riesgos.titulo")} </h3>
                            <h3 className={componenteActivo === 'marca' ? 'active' : ''} onClick={() => setComponenteActivo('marca')}> {t("securedomain.funciones.marca.titulo")} </h3>
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
                        <h1 className="fw-bold" style={{ color: "#CF0F09" }}> {t("securedomain.gestion.titulo")} </h1>
                        <p> {t("securedomain.gestion.texto")} </p>
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