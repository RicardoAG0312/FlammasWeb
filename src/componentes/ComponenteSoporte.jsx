import React, { useEffect, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/componenteSoporte.css";
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";
import { useTranslation } from 'react-i18next';

function onChange(value) {
    //     console.log("Captcha value:", value);
}
function ComponentetxtIzquierdaSoluciones({ titulo, texto, texto1, texto2, imagen }) {
    return (
        <section className="container contenedorAZJIzquierda">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="Imagen" />
                </div>
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2 className="text-start"> {titulo} </h2>
                    <p className="text-start"> {texto} </p>
                    <p className="text-start"> {texto1} </p>
                    <p className="text-start"> {texto2} </p>
                </div>
            </div>
        </section>
    )
}
function ComponenteViñetaAnimada({ nombreImagen, titulo, texto }) {
    return (
        <>
            <div className="viñeta-animada" id="viñeta-animada">
                <img src={require(`../images/${nombreImagen}.png`)} alt="nombreImagen" />
                <h1> {titulo} </h1>
                <p> {texto} </p>
            </div>
        </>
    )
}
function ComponenteInfojhoanIzquierdaSoluciones({ titulo, texto, imagen, imagen2 }) {
    const { t } = useTranslation();
    return (
        <section className="container contenedorCartaInfojhoanIzquierda">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-6 info">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
                <div className="col-12 col-sm-6 col-xl-6 imagen">
                    <div>
                        <img src={require(`../images/${imagen}.png`)} alt="Imagen" className="imagen" />
                        <div className='correo'>
                            <h3>{t("seccionEncabezado1.titulo.ventas")}</h3>
                            <p>ventas@flammas.com</p>
                        </div>
                    </div>
                    <div>
                        <img src={require(`../images/${imagen2}.png`)} alt="Imagen" className="imagen" />
                        <div className='telefono'>
                            <h3>{t("seccionEncabezado1.titulo.contacto")}</h3>
                            <p> +57 3228396554 </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

//Componentes a renderizar
export function ComponenteSoporteProfesional() {
      const { t } = useTranslation();
    return (
        <>
            <section className='container-fluid seccion-encabezado-soporte'>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xxl-6 primera-columna">
                        <div>
                            <h1>{t("seccionEncabezado1.titulo.titulo1")}</h1>
                            <h2>{t("seccionEncabezado1.titulo.subtitulo")} </h2>
                            <p>{t("seccionEncabezado1.titulo.texto")} </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl-6 seccion-contac-soporte ">
                        <form action="https://formsubmit.co/ventas@flammas.com" method="POST">
                            <div>
                                <label for="fname">{t("seccionEncabezado1.seccionFormulario.campos.nombres")}: </label>
                                <input type="text" id="fname" name="nombres" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.nombres")} required="true" />
                            </div>
                            <div>
                                <label for="lname">{t("seccionEncabezado1.seccionFormulario.campos.apellidos")} </label>
                                <input type="text" id="lname" name="apellidos" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.apellidos")} required="true" />
                            </div>
                            <div>
                                <label for="email">{t("seccionEncabezado1.seccionFormulario.campos.email")} </label>
                                <input type="email" id="email" name="email" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.email")} required="true" />
                            </div>
                            <div>
                                <label for="company">{t("seccionEncabezado1.seccionFormulario.campos.empresa")}</label>
                                <input type="text" id="company" name="empresa" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.empresa")} required="true" />
                            </div>
                            <div>
                                <label for="country">{t("seccionEncabezado1.seccionFormulario.campos.pais")}</label>
                                <input type="text" id="country" name="país" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.pais")}required="true" />
                            </div>
                            <div>
                                <label for="message" className='mt-3'>{t("seccionEncabezado1.seccionFormulario.campos.mensaje")} </label>
                                <input type="text" id="message" name="mensaje" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.mensaje")} required="true" />
                            </div>
                            <div>
                                <p>{t("seccionEncabezado1.seccionFormulario.aviso")}</p>
                                <div className="recaptcha">
                                    <ReCAPTCHA
                                        ref={ReCAPTCHA}
                                        sitekey="6Lc1HwoqAAAAABkcsPIudTn2uCqLIOIMGxS37ysm"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value={t("seccionEncabezado1.seccionFormulario.submit")} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className='container-fluid seccion-49'>
                <div>
                    <h2>{t("seccionEncabezado1.seccionClienteFinal.titulo1")}</h2>
                </div>
                <section className="container-fluid seccion-viñetas-mart">
                    <ComponenteViñetaAnimada
                        nombreImagen="96.png"
                        texto={t("seccionEncabezado1.seccionClienteFinal.items1.texto1")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="97.png"
                        texto={t("seccionEncabezado1.seccionClienteFinal.items1.texto2")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="98.png"
                        texto={t("seccionEncabezado1.seccionClienteFinal.items1.texto3")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="99.png"
                        texto={t("seccionEncabezado1.seccionClienteFinal.items1.texto4")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="100.png"
                        texto={t("seccionEncabezado1.seccionClienteFinal.items1.texto5")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="102.png"
                        texto={t("seccionEncabezado1.seccionClienteFinal.items1.texto6")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="103.png"
                        texto={t("seccionEncabezado1.seccionClienteFinal.items1.texto7")}
                    />
                </section>
            </section>
            <section className='container-fluid seccion-jhoan'>
                <div>
                    <h2>{t("seccionEncabezado1.seccionMSP.titulo2")}</h2>
                </div>
                <section className="container-fluid seccion-viñetas-urquia">
                    <ComponenteViñetaAnimada
                        nombreImagen="88.png"
                        texto={t("seccionEncabezado1.seccionMSP.items2.texto1")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="89.png"
                        texto={t("seccionEncabezado1.seccionMSP.items2.texto2")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="90.png"
                        texto={t("seccionEncabezado1.seccionMSP.items2.texto3")}                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="91.png"
                        texto={t("seccionEncabezado1.seccionMSP.items2.texto4")}                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="92.png"
                        texto={t("seccionEncabezado1.seccionMSP.items2.texto5")}                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="93.png"
                        texto={t("seccionEncabezado1.seccionMSP.items2.texto6")}                    />
                </section>
            </section>
            <ComponenteInfojhoanIzquierdaSoluciones
                titulo={t("seccionEncabezado1.contacto.titulo")}
                texto={t("seccionEncabezado1.contacto.texto")}
                imagen="94.png"
                imagen2="95.png"
            />
            <MiniComponenteQuintaSeccion
                titulo={t("seccionEncabezado1.quintaSeccion.titulo")}
                subtitulo={t("seccionEncabezado1.quintaSeccion.subtitulo")}
                texto1={t("seccionEncabezado1.quintaSeccion.texto1")}
                texto2={t("seccionEncabezado1.quintaSeccion.texto2")}
            />
        </>
    )
}
export function ComponenteSoporteTecnico() {
    const { t } = useTranslation(); 
    return (
        <>
            <section className='container-fluid seccion-encabezado-soporte'>
                <div className="row">
                    <div className="col-12 col-sm-6 col-xxl-6 primera-columna">
                        <div>
                            <h1>{t("seccionEncabezado1.tituloSoporte.titulo")}</h1>
                            <h2>{t("seccionEncabezado1.tituloSoporte.subtitulo")}</h2>
                            <p>{t("seccionEncabezado1.tituloSoporte.texto")}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xxl-6 seccion-contac-soporte ">
                        <form action="https://formsubmit.co/ventas@flammas.com" method="POST">
                            <div>
                                <label for="fname">{t("seccionEncabezado1.seccionFormulario.campos.nombres")} </label>
                                <input type="text" id="fname" name="nombres" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.nombres")} required="true" />
                            </div>
                            <div>
                                <label for="lname">{t("seccionEncabezado1.seccionFormulario.campos.apellidos")} </label>
                                <input type="text" id="lname" name="apellidos" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.apellidos")} required="true" />
                            </div>
                            <div>
                                <label for="email">{t("seccionEncabezado1.seccionFormulario.campos.email")} </label>
                                <input type="email" id="email" name="email" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.email")} required="true" />
                            </div>
                            <div>
                                <label for="company">{t("seccionEncabezado1.seccionFormulario.campos.empresa")}</label>
                                <input type="text" id="company" name="empresa" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.empresa")} required="true" />
                            </div>
                            <div>
                                <label for="country">{t("seccionEncabezado1.seccionFormulario.campos.pais")}</label>
                                <input type="text" id="country" name="país" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.pais")} required="true" />
                            </div>
                            <div>
                                <label for="message" className='mt-3'>{t("seccionEncabezado1.seccionFormulario.campos.mensaje")}</label>
                                <input type="text" id="message" name="mensaje" placeholder={t("seccionEncabezado1.seccionFormulario.placeholder.mensaje")} required="true" />
                            </div>
                            <div>
                                <p> {t("seccionEncabezado1.seccionFormulario.aviso")}</p>
                                <div className="recaptcha" id="recap">
                                    <ReCAPTCHA
                                        ref={ReCAPTCHA}
                                        sitekey="6Lc1HwoqAAAAABkcsPIudTn2uCqLIOIMGxS37ysm"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value={t("seccionEncabezado1.seccionFormulario.submit")} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <ComponentetxtIzquierdaSoluciones
                texto={t("seccionEncabezado1.seccionSoporteTexto.texto")}
                texto1={t("seccionEncabezado1.seccionSoporteTexto.texto1")}
                texto2={t("seccionEncabezado1.seccionSoporteTexto.texto2")}
                imagen="83.png"
            />
            <section className='container-fluid seccion-jhoan'>
                <div>
                    <h2>{t("seccionEncabezado1.seccionViñetas.tituloGlobal")}</h2>
                </div>
                <section className="container-fluid seccion-viñetas-jhoan">
                    <ComponenteViñetaAnimada
                        nombreImagen="84.png"
                        titulo={t("seccionEncabezado1.seccionViñetas.items.titulos.titulo1")}
                        texto={t("seccionEncabezado1.seccionViñetas.items.textos.texto1")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="85.png"
                        titulo={t("seccionEncabezado1.seccionViñetas.items.titulos.titulo2")}
                        texto={t("seccionEncabezado1.seccionViñetas.items.textos.texto2")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="86.png"
                        titulo={t("seccionEncabezado1.seccionViñetas.items.titulos.titulo3")}
                        texto={t("seccionEncabezado1.seccionViñetas.items.textos.texto3")}
                    />
                    <ComponenteViñetaAnimada
                        nombreImagen="87.png"
                        titulo={t("seccionEncabezado1.seccionViñetas.items.titulos.titulo4")}
                        texto={t("seccionEncabezado1.seccionViñetas.items.textos.texto4")}
                    />
                </section>
            </section>
            <MiniComponenteQuintaSeccion
                titulo={t("seccionEncabezado1.seccionIntegraciones.titulo")}
                subtitulo={t("seccionEncabezado1.seccionIntegraciones.subtitulo")}
                texto1={t("seccionEncabezado1.seccionIntegraciones.texto1")}
                texto2={t("seccionEncabezado1.seccionIntegraciones.texto2")}
            />
        </>
    )
}
