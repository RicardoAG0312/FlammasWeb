// Importaciones de bibliotecas
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importaciones de estilos
import './App.css';
// Importaciones de imágenes
import LogoFlammas from './images/Recurso 7.png.png';
// Importaciones Componentes
import { ComponenteCertified, ComponenteLogin, ComponentePartner, ComponenteProductos, ComponenteSolucionesMonitorizacion, ComponenteSolucionesInfraestructura, ComponenteSolucionesOneSecurity, ComponenteSolucionesCloud, ComponenteSoporteProfesional, ComponenteSoporteTecnico, ComponenteInicio, ComponenteNosotrosFlammas, ComponenteSolucionesMarcus, ComponenteSolucionesZeroSpam, ComponenteSolucionesSecureDomain } from './componentes';

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function () {
        document.getElementById('loading-screen').remove();
        document.getElementById('content').style.display = 'block';
    }, 4000);
});
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

//Componente a renderizar
function App() {
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
                        <Navbar.Brand href="/inicio">
                            <img className="h-100" src={LogoFlammas} alt="Logo Flammas" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" id="botonBarra" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="barra-nav">
                                <Nav.Link as={Link} to="/inicio">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                                <NavDropdown title="Soluciones" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/soluciones/monitorizacion" id="drop-item">Monitorización de Redes</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soluciones/infraestructura" id="drop-item">Infraestructura Integral</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soluciones/cloud" id="drop-item">Cloud y Virtualización</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soluciones/onesecurity" id="drop-item"> One Security </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soluciones/marcus" id="drop-item"> Marcus </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soluciones/zero-spam" id="drop-item"> ZeroSpam </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soluciones/secure-domain" id="drop-item"> Secure Domain Intelligence </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/nosotros">¿Por qué Flammas?</Nav.Link>
                                <NavDropdown title="Soporte" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/soporte/profesional" id="drop-item">Servicios Profesionales</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/soporte/tecnico" id="drop-item">Soporte Técnico</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/partners"> Partners</Nav.Link>
                                <Nav.Link as={Link} to="/login" id="contacto">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Routes>
                        <Route index path="/" element={<Navigate to="/inicio" />} />
                        <Route path="/inicio" element={<ComponenteInicio />} />
                        <Route path="/partners" element={<ComponentePartner />} />
                        <Route path="/productos" element={<ComponenteProductos />} />
                        <Route path="/nosotros" element={<ComponenteNosotrosFlammas />} />
                        <Route path="/soluciones/monitorizacion" element={<ComponenteSolucionesMonitorizacion />} />
                        <Route path="/soluciones/infraestructura" element={<ComponenteSolucionesInfraestructura />} />
                        <Route path="/soluciones/cloud" element={<ComponenteSolucionesCloud />} />
                        <Route path="/soluciones/onesecurity" element={<ComponenteSolucionesOneSecurity />} />
                        <Route path="/soluciones/marcus" element={<ComponenteSolucionesMarcus />} />
                        <Route path="/soluciones/zero-spam" element={<ComponenteSolucionesZeroSpam />} />
                        <Route path="/soluciones/secure-domain" element={<ComponenteSolucionesSecureDomain />} />
                        <Route path="/soporte/profesional" element={<ComponenteSoporteProfesional />} />
                        <Route path="/soporte/tecnico" element={<ComponenteSoporteTecnico />} />
                        <Route path="/certified" element={<ComponenteCertified />} />
                        <Route path="/login" element={<ComponenteLogin />} />
                    </Routes>
                </Router>
                <footer className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-3 col-xl-3 info">
                            <img src={LogoFlammas} alt="Logo Flammas" />
                            <p> Calle 122 7 A 18 Oficina 104, Bogota, Colombia </p>
                            <div>
                                <a href="https://www.linkedin.com/company/flammas/?viewAsMember=true" target='_blank' rel='noreferrer'>
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="https://wa.me/573228396554" target='_blank' rel='noreferrer'>
                                    <i className="bi bi-whatsapp"></i>
                                </a>
                                <a href="mailto: ventas@flammas.com" target='_blank' rel='noreferrer'>
                                    <i className="bi bi-envelope"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-9 col-xl-9 links">
                            <div>
                                <h3> SOLUCIONES </h3>
                                <a style={{ textDecoration: "none", color: "black" }} href="/soluciones/marcus" rel='noreferrer'> Marcus </a>
                                <a style={{ textDecoration: "none", color: "black" }} href="/soluciones/onesecurity" rel='noreferrer'> One Security </a>
                                <a style={{ textDecoration: "none", color: "black" }} href="/soluciones/zero-spam" rel='noreferrer'> ZeroSpam </a>
                                <a style={{ textDecoration: "none", color: "black" }} href="/soluciones/secure-domain" rel='noreferrer'> Secure Domain Intelligence </a>
                            </div>
                            <div>
                                <h3> MONITORIZACIÓN </h3>
                                <a style={{ textDecoration: "none", color: "black" }} href="/soluciones/monitorizacion" rel='noreferrer'> Monitorización de redes </a >
                                <a style={{ textDecoration: "none", color: "black" }} href="/soluciones/infraestructura" rel='noreferrer'> Infraestructura integral </a>
                                <a style={{ textDecoration: "none", color: "black" }} href="/soluciones/cloud" rel='noreferrer'> Cloud y Virtualización </a >
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
