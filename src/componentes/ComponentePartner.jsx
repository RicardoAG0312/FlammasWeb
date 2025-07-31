import React from 'react'
import "../estilos/componentePartner.css"
import { ComponenteEncabezadoSoluciones } from './ComponenteSoluciones'
import LogoEsctec from "../images/estecs.png"

export function Partner() {
    return (
        <div className="partner-container">
            <div className="partner-image">
                <img src={LogoEsctec} alt="Logo de Esctec" />
            </div>
            <div className="partner-content">
                <h1> ESPACIO TECNOLOGICA,CONSULTORIA Y SERVICIOS A&F S.A.C. - ESTECS S.A.C. - <span style={{color: "#CF0F09"}}> PARTNER GOLD </span></h1>
                <p> ESTECS S.A.C. es una empresa peruana especializada en la provisión de soluciones tecnológicas, consultoría y servicios IT para el sector público y privado. Desde su fundación en 2015, ha consolidado alianzas con marcas líderes del mercado, ofreciendo equipos, software y soporte técnico especializado. Su enfoque se basa en la innovación, la eficiencia operativa y la atención personalizada. Con visión de futuro, acompaña a sus clientes en sus procesos de transformación digital. </p>
                <div className="contact-info">
                    <p><strong>Teléfono:</strong>  ‪(+51) 992427681 </p>
                    <p><strong>Email:</strong> <a href="mailto:ventas2@estecs.net ">  ventas2@estecs.net  </a></p>
                    <p><strong>Web:</strong> <a href="https://estecs.net/" target="_blank" rel="noopener noreferrer"> https://estecs.net/</a></p>
                    <p><strong>Dirección:</strong> Av. Tingo María Nro. 927 Urb. Chacra Colorada, Lima - Lima - Breña </p>
                </div>
            </div>
        </div>
    );
}


function ComponentePartner() {
    return (
        <>
            <ComponenteEncabezadoSoluciones
                subtitulo="Partners de Flammas"
                titulo="Encuentra a nuestros partners"
                texto="Flammas cuenta con una red de partners que te ayudarán a encontrar la solución perfecta para tu negocio. Explora nuestra lista de partners y descubre cómo pueden ayudarte a alcanzar tus objetivos."
            />
            <div className="container text-black">
                <Partner />
            </div>
        </>
    )
}

export default ComponentePartner