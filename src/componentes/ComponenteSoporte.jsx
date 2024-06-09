import React, { useEffect, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/componenteSoporte.css";

function ComponenteCartasPrincipales({ titulo , texto}) {
    return(
    <div className="containCartas">
        <h1> {titulo} </h1>
        <p> {texto} </p>
    </div>
    )
}
function onChange(value) {
//     console.log("Captcha value:", value);
}
function ComponenteLogin() {
    const formRef = useRef(null);
    useEffect(() => {
        const form = formRef.current;
        if(form) {
            form.addEventListener('submit', async function(event) {
                event.preventDefault();
                const nombres = event.target.elements.fname.value;
                const apellidos = event.target.elements.lname.value;
                const email = event.target.elements.email.value;
                const empresa = event.target.elements.company.value;
                const País = event.target.elements.country.value;
                const mensaje = event.target.elements.message.value;
                const asunto = "Información sobre Flammas";
                const encodedAsunto = encodeURI(asunto);
                const emailBody = `Nombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nEmpresa: ${empresa}\nPaís: ${País}\nMensaje: ${mensaje}`;
                const encodedEmailBody = encodeURI(emailBody);
                const correo = "ventas@flammas.com"
                const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${correo}&su=${encodedAsunto}&body=${encodedEmailBody}`;
                window.open(gmailUrl, '_blank');
                setTimeout(() => form.reset(), 1000);
            });
        }
    }, []);
}
function ComponentetxtIzquierdaSoluciones({titulo,texto,texto1,texto2,imagen}){
    return(
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
/*falta corregir*/
function ComponenteViñetaAnimada ({ imagen, titulo, texto }) {
    return (
        <>
            <div className="viñeta-animada">
                <img src={require(`../images/${imagen}.png`)} alt="Imagen"/>
                <h2> {titulo} </h2>
                <p> {texto} </p>
            </div>
        </>
    )
}

//Componentes a renderizar

export function ComponenteSoporteProfesional () {
    return (
        <>
            <section className='container-fluid seccion-encabezado-soporte'>
                <div className="row">
                    <div className="col-12 col-sm-7 col-xxl-7 primera-columna">
                        <div>
                            <h1> SERVICIOS PROFESIONALES DE FLAMMAS FMS </h1>
                            <h2> NUESTRO EQUIPO DE EXPERTOS ESTÁ PARA AYUDARTE </h2>
                            <p> La experiencia acumulada de nuestros ingenieros te permitirá afrontar cualquier reto de monitorización. Para información adicional sobre nuestros servicios, por favor contacta con nosotros. </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 col-xxl-5 seccion-contac-soporte ">
                        <form action="/submit_form" method='POST'>
                            <div>
                                <label for="fname"> (*) Nombres: </label>
                                <input type="text" id="fname" name="firstname" placeholder="Ingresa tus nombres" />
                            </div>
                            <div>
                                <label for="lname"> (*) Apellidos: </label>
                                <input type="text" id="lname" name="lastname" placeholder="Ingresa tus apellidos" />
                            </div>
                            <div>
                                <label for="email"> (*) Email: </label>
                                <input type="email" id="email" name="email" placeholder="Ingresa tu email" />
                            </div>
                            <div>
                                <label for="company"> (*) Empresa - Compañia: </label>
                                <input type="text" id="company" name="company" placeholder="Ingresa tu empresa/compañia" />
                            </div>
                            <div>
                                <label for="country"> (*) País: </label>
                                <input type="text" id="country" name="country" placeholder="Ingresa tu País" />
                            </div>
                            <div>
                                <label for="message" className='mt-3'> (*) Mensaje: </label>
                                <input type="text" id="message" name="message" placeholder="Ingresa tu mensaje" />
                            </div>
                            <div>
                                <p> Flammas necesita la información de contacto que nos proporciona para ponernos en contacto contigo acerca de nuestros productos y servicios. Puedes darte de baja de estas comunicaciones en cualquier momento. Para obtener información sobre como darte de baja, asi como nuestras practicas de privacidad y el compromiso de proteger su privacidad, consulta nuestra Política de privacidad. </p>
                                <div className = "recaptcha">
                                    <ReCAPTCHA
                                        ref={ReCAPTCHA}
                                        sitekey="6Ldp0PMpAAAAAEWkyegdZWGYBaZxvOlpkeXOPEV6"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}







export function ComponenteSoporteTecnico () {
    return (
        <>
            <section className='container-fluid seccion-encabezado-soporte'>
                <div className="row">
                    <div className="col-12 col-sm-7 col-xxl-7 primera-columna">
                        <div>
                            <h1> SOPORTE TÉCNICO DE FLAMMAS </h1>
                            <h2> SOMOS EXPERTOS EN FLAMMAS </h2>
                            <p> Garantizamos la continuidad del servicio y ofrecemos soporte a los equipos técnicos que gestionan Flammas. </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 col-xxl-5 seccion-contac-soporte ">
                        <form action="/submit_form" method='POST'>
                            <div>
                                <label for="fname"> (*) Nombres: </label>
                                <input type="text" id="fname" name="firstname" placeholder="Ingresa tus nombres" />
                            </div>
                            <div>
                                <label for="lname"> (*) Apellidos: </label>
                                <input type="text" id="lname" name="lastname" placeholder="Ingresa tus apellidos" />
                            </div>
                            <div>
                                <label for="email"> (*) Email: </label>
                                <input type="email" id="email" name="email" placeholder="Ingresa tu email" />
                            </div>
                            <div>
                                <label for="company"> (*) Empresa - Compañia: </label>
                                <input type="text" id="company" name="company" placeholder="Ingresa tu empresa/compañia" />
                            </div>
                            <div>
                                <label for="country"> (*) País: </label>
                                <input type="text" id="country" name="country" placeholder="Ingresa tu País" />
                            </div>
                            <div>
                                <label for="message" className='mt-3'> (*) Mensaje: </label>
                                <input type="text" id="message" name="message" placeholder="Ingresa tu mensaje" />
                            </div>
                            <div>
                                <p> Flammas necesita la información de contacto que nos proporciona para ponernos en contacto contigo acerca de nuestros productos y servicios. Puedes darte de baja de estas comunicaciones en cualquier momento. Para obtener información sobre como darte de baja, asi como nuestras practicas de privacidad y el compromiso de proteger su privacidad, consulta nuestra Política de privacidad. </p>
                                <div className = "recaptcha">
                                    <ReCAPTCHA
                                        ref={ReCAPTCHA}
                                        sitekey="6Ldp0PMpAAAAAEWkyegdZWGYBaZxvOlpkeXOPEV6"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        <ComponentetxtIzquierdaSoluciones
        texto="El objetivo principal del servicio de soporte técnico es brindar soporte para ayudar a resolver cualquier problema relacionado con la instalación, funcionamiento y uso de Pandora FMS."
        texto1="El canal de soporte principal disponible para todos los clientes de soporte es nuestro Sistema de soporte, que garantiza la mensajería en línea para una comunicación rápida y fácil entre los clientes y nuestros especialistas técnicos. Damos soporte en inglés y español:"
        texto2="Los clientes con niveles de soporte avanzados pueden acceder a los servicios de soporte por teléfono, llamando a números dedicados. El soporte 24/7 también está disponible para niveles de soporte avanzado."
        imagen="83"
        />
        
    </>
    )
}
