// src/App.js
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown,Dropdown } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTranslation } from "react-i18next";

// Estilos e imágenes
import "./App.css";
import LogoFlammas from './images/Recurso 7.png.png';

// Componentes
import {
  ComponenteCertified,
  ComponenteLogin,
  ComponentePartner,
  ComponenteProductos,
  ComponenteSolucionesMonitorizacion,
  ComponenteSolucionesInfraestructura,
  ComponenteSolucionesOneSecurity,
  ComponenteSolucionesCloud,
  ComponenteSoporteProfesional,
  ComponenteSoporteTecnico,
  ComponenteInicio,
  ComponenteNosotrosFlammas,
  ComponenteSolucionesMarcus,
  ComponenteSolucionesZeroSpam,
  ComponenteSolucionesSecureDomain,
} from "./componentes";

// Evitar menú contextual y pantalla de carga
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").remove();
    document.getElementById("content").style.display = "block";
  }, 4000);
});

// Scroll to top en cada cambio de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { t, i18n } = useTranslation();

  const cambiarIdioma = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <div id="loading-screen">
        <img src={LogoFlammas} alt="Logo Flammas" />
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>

      <div id="content">
        <Router>
          <ScrollToTop />
          <Navbar expand="md" id="navbar">
            <Navbar.Brand as={Link} to="/inicio">
              <img className="h-100" src={LogoFlammas} alt="Logo Flammas" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="botonBarra" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="barra-nav">
                <Nav.Link as={Link} to="/inicio">
                  {t("iniciocomp")}
                </Nav.Link>
                <Nav.Link as={Link} to="/productos">
                  {t("productos")}
                </Nav.Link>

                <NavDropdown title={t("soluciones")} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} id="drop-item" to="/soluciones/monitorizacion">
                    {t("monitorizacion")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} id="drop-item" to="/soluciones/infraestructura">
                    {t("infraestructura")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} id="drop-item" to="/soluciones/cloud">
                    {t("cloud")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} id="drop-item" to="/soluciones/onesecurity">
                    {t("onesecurity")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} id="drop-item" to="/soluciones/marcus">
                    {t("marcus")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} id="drop-item" to="/soluciones/zero-spam">
                    {t("zeroSpam")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} id="drop-item" to="/soluciones/secure-domain">
                    {t("secureDomain")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/nosotros">
                  {t("porQueFlammas")}
                </Nav.Link>

                <NavDropdown title={t("soporte")} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} id="drop-item" to="/soporte/profesional">
                    {t("serviciosProfesionales")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} id="drop-item" to="/soporte/tecnico">
                    {t("soporteTecnico")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link}   to="/partners">
                  {t("partners")}
                </Nav.Link>
                <Nav.Link as={Link} id="contacto" to="/login">
                  {t("contacto")}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Routes>
            <Route index path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<ComponenteInicio />} />
            <Route path="/partners" element={<ComponentePartner />} />
            <Route path="/productos" element={<ComponenteProductos />} />
            <Route path="/nosotros" element={<ComponenteNosotrosFlammas />} />
            <Route
              path="/soluciones/monitorizacion"
              element={<ComponenteSolucionesMonitorizacion />}
            />
            <Route
              path="/soluciones/infraestructura"
              element={<ComponenteSolucionesInfraestructura />}
            />
            <Route
              path="/soluciones/cloud"
              element={<ComponenteSolucionesCloud />}
            />
            <Route
              path="/soluciones/onesecurity"
              element={<ComponenteSolucionesOneSecurity />}
            />
            <Route
              path="/soluciones/marcus"
              element={<ComponenteSolucionesMarcus />}
            />
            <Route
              path="/soluciones/zero-spam"
              element={<ComponenteSolucionesZeroSpam />}
            />
            <Route
              path="/soluciones/secure-domain"
              element={<ComponenteSolucionesSecureDomain />}
            />
            <Route
              path="/soporte/profesional"
              element={<ComponenteSoporteProfesional />}
            />
            <Route
              path="/soporte/tecnico"
              element={<ComponenteSoporteTecnico />}
            />
            <Route path="/certified" element={<ComponenteCertified />} />
            <Route path="/login" element={<ComponenteLogin />} />
          </Routes>

          <footer className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-3 col-xl-3 info">
                <img src={LogoFlammas} alt="Logo Flammas" />
                <p>{t("direccion")}</p>
                <div>
                  <a
                    href="https://www.linkedin.com/company/flammas/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="https://wa.me/573228396554"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>
                  <a
                    href="mailto:ventas@flammas.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-envelope"></i>
                  </a>
                  <div className="ms-auto">
                    <select
                      className="form-select"
                      value={i18n.language}
                      onChange={cambiarIdioma}
                    >
                      <option value="es">ESPANISH</option>
                      <option value="en">ENGLISH</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-9 col-xl-9 links">
                <div>
                  <h3>{t("solucionesTitle")}</h3>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/soluciones/marcus"
                  >
                    {t("marcus")}
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/soluciones/onesecurity"
                  >
                    {t("onesecurity")}
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/soluciones/zero-spam"
                  >
                    {t("zeroSpam")}
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/soluciones/secure-domain"
                  >
                    {t("secureDomain")}
                  </a>
                </div>
                <div>
                  <h3>{t("monitorizacionTitle")}</h3>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/soluciones/monitorizacion"
                  >
                    {t("monitorizacion")}
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/soluciones/infraestructura"
                  >
                    {t("infraestructura")}
                  </a>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="/soluciones/cloud"
                  >
                    {t("cloud")}
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
