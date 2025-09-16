import React from 'react'
import "../estilos/componentePartner.css"
import { ComponenteEncabezadoSoluciones } from './ComponenteSoluciones'
import LogoEsctec from "../images/estecs.png"
import { useTranslation } from 'react-i18next';

export function Partner() {
    const { t } = useTranslation();
    return (
        <div className="partner-container">
            <div className="partner-image">
                <img src={LogoEsctec} alt="Logo de Esctec" />
            </div>
            <div className="partner-content">
                <h1> {t("partner.partnerInfo.titulo")}<span style={{color: "#CF0F09"}}>{t("partner.partnerInfo.gold")}</span></h1>
                <p>{t("partner.partnerInfo.descripcion")}</p>
                <div className="contact-info">
                    <p><strong>{t("partner.partnerInfo.telefono")}:</strong>  ‪(+51) 992427681 </p>
                    <p><strong>{t("partner.partnerInfo.email")}:</strong> <a href="mailto:ventas2@estecs.net ">  ventas2@estecs.net  </a></p>
                    <p><strong>{t("partner.partnerInfo.web")}:</strong> <a href="https://estecs.net/" target="_blank" rel="noopener noreferrer"> https://estecs.net/</a></p>
                    <p><strong>{t("partner.partnerInfo.direccion")}:</strong> Av. Tingo María Nro. 927 Urb. Chacra Colorada, Lima - Lima - Breña </p>
                </div>
            </div>
        </div>
    );
}


function ComponentePartner() {
    const { t } = useTranslation();
    return (
        <>
            <ComponenteEncabezadoSoluciones
                subtitulo={t("partner.encabezado.subtitulo")}
                titulo={t("partner.encabezado.titulo")}
                texto={t("partner.encabezado.texto")}
            />
            <div className="container text-black">
                <Partner />
            </div>
        </>
    )
}

export default ComponentePartner