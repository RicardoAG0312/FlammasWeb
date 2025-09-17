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
                        <h2 className="text-center"> <span className="text-black">{t("solucionesCloud.seguridadVerificable.titulo")}</span> {t("solucionesCloud.seguridadVerificable.titulo2")}</h2>
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
            <ComponenteEncabezadoSolucionesZeroSpam
                titulo="ZEROSPAM CON FLAMMAS"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Protección integral mediante un enfoque de seguridad por capas en la infraestructura de correo electrónico."
                boton="Hoja de Datos"
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
                    <h1 className="fw-bold" style={{ color: "#CF0F09" }}> FUNCIONES DE ZEROSPAM </h1>
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
            <ComponenteEncabezadoSolucionesDomain
                titulo="SECURE DOMAIN INTELLIGENCE CON FLAMMAS"
                subtitulo="SOLUCIONES DE FLAMMAS"
                texto="Defiende tu marca y a tus usuarios de dominios falsificados con tecnología de detección avanzada que identifica y bloquea amenazas antes de que causen daño."
                boton="Hoja de Datos"
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