// Importaciones de bibliotecas
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Importaciones de estilos
import './App.css';
// Importaciones de imágenes
import LogoFlammas from './images/Recurso 6.png';
// Importaciones Componentes
import { ComponenteLogin, ComponenteNosotros, ComponenteProductos, ComponenteSolucionesMonitorizacion, ComponenteSolucionesInfraestructura, ComponenteSolucionesCloud, ComponenteSoporte, ComponenteInicio } from './componentes';

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function() {
        document.getElementById('loading-screen').remove();
        document.getElementById('content').style.display = 'block';
    }, 3000);
});


function App() {
    return (
        <div className="App">
            <div id="loading-screen">
                <img src={LogoFlammas} alt="Logo Flammas" /> 
                <div className="spinner-border" role="status">
                    <span className="sr-only"> </span>
                </div>
            </div>
            <div id="content">
                <Router>
                    <nav className="navbar navbar-expand-md bg-body-tertiary" id="navbar">
                        <div className="container-fluid barra-nav">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <img className="h-100" src={LogoFlammas} alt="Logo Flammas" />
                            <div className="container-fluid collapse navbar-collapse" id="navbar-toggler">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/inicio"> Inicio </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/productos"> Productos </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Soluciones
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu id="dropdown-menu">
                                                <Dropdown.Item id="drop-item">
                                                    <Link className="nav-link" to="/soluciones/monitorizacion"> Monitorización de Redes </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item id="drop-item">
                                                    <Link className="nav-link" to="/soluciones/infraestructura"> Infraestructura Integral </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item id="drop-item">
                                                    <Link className="nav-link" to="/soluciones/cloud"> Cloud y Virtualización </Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/nosotros"> ¿Por qué Flammas? </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/soporte"> Soporte </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login"> Login </Link> 
                                        {/* Jhoan cambio */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route index path="/flammas" element={<Navigate to="/inicio" />} />
                        <Route path="/inicio" element={<ComponenteInicio />} />
                        <Route path="/productos" element={<ComponenteProductos />} />
                        <Route path="/soluciones/monitorizacion" element={<ComponenteSolucionesMonitorizacion />} />
                        <Route path="/soluciones/infraestructura" element={<ComponenteSolucionesInfraestructura />} />
                        <Route path="/soluciones/cloud" element={<ComponenteSolucionesCloud />} />
                        <Route path="/nosotros" element={<ComponenteNosotros />} />
                        <Route path="/soporte" element={<ComponenteSoporte />} />
                        <Route path="/login" element={<ComponenteLogin />} />
                    </Routes>
                </Router>
                <footer className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-3 col-xl-3 info">
                            <img src={LogoFlammas} alt="Logo Flammas" />
                            <p> Calle 122 7 A 18 Oficina 104, Bogota, Colombia </p>
                            <div>
                                <i class="bi bi-linkedin"></i>
                                <i class="bi bi-whatsapp"></i>
                                <i class="bi bi-envelope"></i>
                            </div>
                        </div>
                        <div className="col-12 col-9 col-xl-9 links">
                            <div>
                                <h3> SOLUCIONES </h3>
                                <span> Monitorización de redes </span>
                                <span> Gestión de logs </span>
                                <span> Infraestructura integral </span>
                                <span> Experiencia de Usuario </span>
                                <span> Cloud y Virtualización </span>
                            </div>
                            <div>
                                <h3> MONITORIZACIÓN </h3>
                                <span> Monitorización de redes </span>
                                <span> Gestión de logs </span>
                                <span> Infraestructura integral </span>
                                <span> Experiencia de Usuario </span>
                                <span> Cloud y Virtualización </span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
