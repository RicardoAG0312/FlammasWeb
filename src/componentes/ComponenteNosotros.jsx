import "../estilos/componenteNosotros.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MiniComponenteQuintaSeccion } from "./ComponenteInicio";
import { useTranslation } from 'react-i18next';

function ComponenteEncabezadoNosotros() {
    const { t } = useTranslation();
    return (
        <section className="container-fluid seccionEncabezadoNosotros">
            <div>
                <h3>{t("nosotros.encabezado.subtitulo")}</h3>
                <h1>{t("nosotros.encabezado.titulo")}</h1>
            </div>
        </section>
    )
}
function ComponenteMiniTerceraSeccion({ titulo, subtitulo }) {
    return (
        <section className="mini-terceraseccion">
            <div>
                <h1> {titulo} </h1>
                <p> {subtitulo} </p>
            </div>
        </section>
    )
}
function ComponenteSobreFlammas({ imagen, titulo, texto }) {
    return (
        <section className="container seccion-sobre-flammas">
            <div className="row">
                <div className="col-12 col-sm-12 col-xl-6 imagen">
                    <img src={require(`../images/${imagen}.png`)} alt="imagen" />
                </div>
                <div className="col-12 col-sm-12 col-xl-6 texto">
                    <h2> {titulo} </h2>
                    <p> {texto} </p>
                </div>
            </div>
        </section>
    )
}
function ComponenteMision({ imagen, texto }) {
    return (
        <div className="carta">
            <div className="imagen-contenedor">
                <img src={require(`../images/${imagen}.png`)} alt="imagen" />
            </div>
            <p> {texto} </p>
        </div>
    )
}
function ComponenteVision({ imagen, texto, texto2 }) {
    return (
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
function ComponenteImagenCentral({ texto1, texto2, texto3, texto4, imagen }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 pe-5">
                    <div className="card mb-3">
                        <div className="card-body text-white">
                            <p className="t1">{texto1}</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="d-flex card-body text-white">
                            <p className="t2">{texto2}</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 middle-col">
                    <img src={require(`../images/${imagen}.png`)} alt="imagen" />
                </div>
                <div className="col-12 col-md-5 ps-5">
                    <div className="card mb-3">
                        <div className="card-body text-white">
                            <p className="t3">{texto3}</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body text-white">
                            <p className="t4">{texto4}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ComponenteValores({ imagen, texto }) {
    return (
        <div className="col-md-4 col-lg-4 d-flex justify-content-center mb-5">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-4 imagen-contenido">
                        <img className="imagen-puesta" src={require(`../images/${imagen}.png`)} alt="imagen" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{texto}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ComponenteTSTI({ titulo, subtitulo, texto, imagen }) {
    return (
        <section className="container-fluid seccion-TSTI">
            <div className="container">
                <div className="mt-3">
                    <h2 className="text-center">{titulo}</h2>
                </div>
                <div className="mt-5">
                    <p className="text-center text-black subti">{subtitulo}</p>
                </div>
                <div className="row">
                    <div className="col-md-5 text-content">
                        <p className="parrafo text-black"> {texto} </p>
                    </div>
                    <div className="col-md-5 imagenTSTI">
                        <img src={require(`../images/${imagen}.png`)} alt="imagen" />
                    </div>
                </div>
            </div>
        </section>
    )
}

//Componente a renderizar
function ComponenteNosotrosFlammas() {
    const {t} = useTranslation();
    return (
        <>
            <ComponenteEncabezadoNosotros
                subtitulo="DESDE 2004 DESARROLLANDO SOFTWARE CON PASIÓN Y TALENTO"
                titulo="SOMOS UN EQUIPO DE EXPERTOS VOLCADO EN AYUDAR A LÍDERES Y PERSONAL TI A CONSEGUIR LA TOTAL OBSERVABILIDAD DE SU ORGANIZACIÓN"
            />
            <section className="container-fluid seccion-HMV">
                <div className="container">
                    <button className="btn boton-oscuro btn-lg btn-full-width"><h2 className="txt-menu">{t("nosotros.historia.tituloBoton")}</h2></button>
                    <div className="content mt-3">
                        <ComponenteSobreFlammas
                            imagen="82.png"
                            titulo={t("nosotros.historia.sobreTitulo")}
                            texto={t("nosotros.historia.sobreTexto")}
                        />
                    </div>
                    <button className="btn boton-oscuro btn-lg btn-full-width mt-3"><h2 className="txt-menu">{t("nosotros.mision.tituloBoton")}</h2></button>
                    <div className="content mt-3">
                        <section className="container-fluid seccion-mision">
                            <div className="mt-3">
                                <h2 className="text-center">{t("nosotros.mision.titulo")}</h2>
                            </div>
                            <div className="container contenedor-cartas">
                                <ComponenteMision
                                    imagen="25.png"
                                    texto={t("nosotros.mision.carta1")}
                                />
                                <ComponenteMision
                                    imagen="26.png"
                                    texto={t("nosotros.mision.carta2")}
                                />
                                <ComponenteMision
                                    imagen="25.png"
                                    texto={t("nosotros.mision.carta3")}
                                />
                            </div>
                        </section>
                    </div>
                    <button className="btn boton-oscuro btn-lg btn-full-width mt-3"><h2 className="txt-menu">{t("nosotros.vision.tituloBoton")}</h2></button>
                    <div className="content mt-3">
                        <section className="container-fluid seccion-vision">
                            <div className="mt-3">
                                <h2 className="text-center">{t("nosotros.vision.titulo")}</h2>
                            </div>
                            <ComponenteVision
                                imagen="75.png"
                                texto={t("nosotros.vision.parrafo1")}
                                texto2={t("nosotros.vision.parrafo2")}
                            />
                        </section>
                    </div>
                </div>
            </section>
            <section className="container-fluid contenedor-tercera-seccion">
                <h2>{t("nosotros.numeros.titulo")}</h2>
                <p>{t("nosotros.numeros.subtitulo")}</p>
                <div className="container-fluid contenedor-cartas-terceraS">
                    {t("nosotros.numeros.items", { returnObjects: true }).map((item, i) => (
                        <ComponenteMiniTerceraSeccion key={i} titulo={item.titulo} subtitulo={item.subtitulo} />
                    ))}
                </div>
            </section>
            <section className="container-fluid seccion-Img-Central">
                <div className="mt-3 titulo">
                    <h2 className="text-center mb-5">{t("nosotros.porQue.titulo")}</h2>
                </div>
                <ComponenteImagenCentral
                    texto1={t("nosotros.porQue.texto1")}
                    texto2={t("nosotros.porQue.texto2")}
                    texto3={t("nosotros.porQue.texto3")}
                    texto4={t("nosotros.porQue.texto4")}
                    imagen="74.png"
                />
            </section>
            {/* Seccion Valores */}
            <section className="container-fluid seccion-valores">
                <div className="mt-3 mb-5">
                    <h2 className="text-center">{t("nosotros.valores.titulo")}</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        {t("nosotros.valores.items", { returnObjects: true }).map((valor, i) => (
                            <ComponenteValores key={i} imagen={`${76 + i}.png`} texto={valor} />
                        ))}
                    </div>
                </div>
            </section>
            <ComponenteTSTI
                titulo={t("nosotros.tsti.titulo")}
                subtitulo={t("nosotros.tsti.subtitulo")}
                texto={t("nosotros.tsti.texto")}
                imagen="81.png"
            />
            <MiniComponenteQuintaSeccion
                titulo={t("nosotros.quintaSeccion.titulo")}
                subtitulo={t("nosotros.quintaSeccion.subtitulo")}
                texto1={t("nosotros.quintaSeccion.texto1")}
                texto2={t("nosotros.quintaSeccion.texto2")}
            />
        </>
    )
}

export default ComponenteNosotrosFlammas;




