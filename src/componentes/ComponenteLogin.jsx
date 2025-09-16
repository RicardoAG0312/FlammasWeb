// src/componentes/ComponenteLogin.jsx
import React from "react";
import "../estilos/componenteLogin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ComponenteEncabezadoSoluciones } from "./ComponenteSoluciones";
import { useTranslation } from "react-i18next";

function MiniComponenteLogin({ titulo, texto, nombreBoton }) {
  return (
    <div className="minilogin">
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <button>{nombreBoton}</button>
    </div>
  );
}

//Componente a renderizar
function ComponenteLogin() {
  const { t } = useTranslation();

  return (
    <>
      <ComponenteEncabezadoSoluciones
        titulo={t("login.titulo")}
        subtitulo={t("login.subtitulo")}
        texto={t("login.descripcion")}
      />

      <section className="container-fluid seccion-contac">
        <div className="row">
          <div className="col-12 col-sm-6 col-xxl-6 info">
            <form
              action="https://formsubmit.co/ventas@flammas.com"
              method="POST"
            >
              <label htmlFor="fname">{t("login.form.nombres")}</label>
              <input
                type="text"
                id="fname"
                name="nombre"
                placeholder="ingresa tu nombre"
                required
              />

              <label htmlFor="lname">{t("login.form.apellidos")}</label>
              <input
                type="text"
                id="lname"
                name="apellido"
                placeholder="ingresa tu apellido"
                required
              />

              <label htmlFor="email">{t("login.form.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ingresa tu email"
                required
              />

              <label htmlFor="phone">{t("login.form.telefono")}</label>
              <input
                type="number"
                id="phone"
                name="celular"
                placeholder="ingresa tu telefono"
                required
              />

              <label htmlFor="company">{t("login.form.empresa")}</label>
              <input
                type="text"
                id="company"
                name="empresa"
                placeholder="ingresa tu empresa"
                required
              />

              <label htmlFor="cargo">{t("login.form.cargo")}</label>
              <select id="cargo" name="cargo" required>
                <option value="">
                  {t("login.form.options.select")}
                </option>
                <option value="CTO - CIO - Director">
                  {t("login.form.options.cto")}
                </option>
                <option value="Usuario IT">
                  {t("login.form.options.usuarioIT")}
                </option>
                <option value="Partner">
                  {t("login.form.options.partner")}
                </option>
                <option value="Estudiante">
                  {t("login.form.options.estudiante")}
                </option>
                <option value="Otro">
                  {t("login.form.options.otro")}
                </option>
              </select>

              <label htmlFor="conocimiento" className="mt-3">
                {t("login.conocimiento.label")}
              </label>
              <select id="conocimiento" name="conocimiento" required>
                <option value="">
                  {t("login.conocimiento.options.select")}
                </option>
                <option value="Buscador">
                  {t("login.conocimiento.options.buscador")}
                </option>
                <option value="Redes">
                  {t("login.conocimiento.options.redes")}
                </option>
                <option value="Publicidad">
                  {t("login.conocimiento.options.publicidad")}
                </option>
                <option value="Blog">
                  {t("login.conocimiento.options.blog")}                </option>
                <option value="Plata">
                  {t("login.conocimiento.options.plataforma")}
                </option>
                <option value="Recomendacion">
                  {t("login.conocimiento.options.recomendacion")}
                </option>
                <option value="Ya utilizo">
                  {t("login.conocimiento.options.yaUso")}
                </option>
                <option value="Otro">
                  {t("login.conocimiento.options.otro")}                </option>
              </select>

              <label htmlFor="product" className="mt-3">
                {t("login.producto.label")}
              </label>
              <select id="product" name="producto" required>
                <option value="">
                  {t("login.producto.options.select")}
                </option>
                <option value="Monitorización de Redes">
                  {t("login.producto.options.monitorizacion")}
                </option>
                <option value="Infraestructura Integral">
                  {t("login.producto.options.infraestructura")}
                </option>
                <option value="Cloud y Virtualización">
                  {t("login.producto.options.cloud")}
                </option>
                <option value="Marcus">
                  {t("login.producto.options.marcus")}
                </option>
                <option value="OneSecurity">
                  {t("login.producto.options.onesecurity")}
                </option>
              </select>

              <label htmlFor="message" className="mt-3">
                {t("login.mensaje.label")}
              </label>
              <input
                type="text"
                id="message"
                name="mensaje"
                placeholder={t("login.mensaje.placeholder")}
                required
              />

              <label htmlFor="privacy" className="me-3">
                {t("login.privacidad.label")}{" "}
                <a
                  href={
                    process.env.PUBLIC_URL +
                    "/Política de Privacidad_Flammas.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("login.privacidad.linkText")}
                </a>
              </label>
              <input type="checkbox" id="privacy" required />

              <p>{t("login.privacidad.disclaimer")}</p>
              <input type="submit" value={t("login.privacidad.submit")} />
            </form>
          </div>

          <div className="col-12 col-sm-6 col-xxl-6 botones">
            <MiniComponenteLogin
              titulo={t("login.mini.cliente.titulo")}
              texto={t("login.mini.cliente.texto")}
              nombreBoton={t("login.mini.cliente.boton")}
            />
            <MiniComponenteLogin
              titulo={t("login.mini.servicios.titulo")}
              texto={t("login.mini.servicios.texto")}
              nombreBoton={t("login.mini.servicios.boton")}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ComponenteLogin;
