import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
    Nav,
    Navbar,
    NavDropdown
} from 'react-bootstrap';
import imgLogo from '../../assets/img/logo-tecsup.png'
const Header = props => {
    return (
        <Navbar bg="dark" expand="ig" variant="dark" id="header">
            <div className="container">
                <Link className="container">
                    <img src={imgLogo} alt="Tecsup Logo" />
                    Tecsup App
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink to="/" exact className="nav-link">Inicio</NavLink>
                        <NavLink to="/login" className="nav-link">Iniciar sesion</NavLink>
                        <NavLink to="/logout" className="nav-link">Cerrar sesion</NavLink>
                        <NavDropdown title="Usuario" id="basic-nav-dropdown">
                        <NavLink to="/profile" className="dropdown-item">Mi Perfil</NavLink>
                        <NavLink to="/chat" className="dropdown-item">Chat</NavLink>
                        <NavLink to="/logout" className="dropdown-item">Cerrar sesion</NavLink>    
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};
export default Header;