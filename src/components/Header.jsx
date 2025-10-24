// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import kiruLogo from '../assets/kiruLogo.png';

// Datos de navegación
const navLinks = [
    { id: 'home', label: 'Inicio', path: '/' },
    { id: 'servicios', label: 'Servicios', path: '/servicios' },
    { id: 'stack', label: 'Stack', path: '/stack' },
    { id: 'manifiesto', label: 'Manifiesto', path: '/manifiesto' },
    { id: 'quienes-somos', label: 'Quiénes Somos', path: '/quienes-somos' }
];

// Componente para el logo
const Logo = () => (
    <Link 
        to="/"
        className="logo d-flex align-items-center gap-3 text-decoration-none"
    >
        <img 
            src={kiruLogo} 
            alt="Kiru Logo" 
            height="40"
            className="logo-image"
            style={{ 
                objectFit: 'contain',
                transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div className="d-none d-md-flex flex-column">
            <span className="text-white fw-bold small lh-1">Kinetic Rules</span>
            <span className="text-secondary text-uppercase lh-1" style={{ fontSize: '0.65rem' }}>
                Web Developers
            </span>
        </div>
    </Link>
);

// Componente para enlaces de navegación
const NavLinkItem = ({ link, isActive }) => (
    <Nav.Link 
        as={Link}
        to={link.path}
        className={`nav-link-kiru text-white px-3 position-relative ${isActive ? 'fw-bold active' : ''}`}
        style={{
            transition: 'all 0.2s ease',
            textDecoration: 'none',
            borderRadius: '4px'
        }}
    >
        {link.label}
        {isActive && (
            <span 
                className="position-absolute bottom-0 start-50 translate-middle-x bg-primary active-indicator"
                style={{ 
                    width: '30px', 
                    height: '2px',
                    borderRadius: '2px'
                }}
            />
        )}
    </Nav.Link>
);

// Componente para el botón CTA
const CTAButton = ({ onClick, className = "" }) => (
    <Button 
        variant="primary" 
        className={`btn-kiru-primary ${className}`}
        onClick={onClick}
        size="sm"
    >
        Solicitar Asesoría
    </Button>
);

// Componente Header principal
const Header = () => {
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Efecto para detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handlers
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCTAClick = () => {
        console.log('Abrir modal de asesoría');
        handleClose();
    };

    // Determinar página activa basada en la ruta actual
    const getActiveLink = () => {
        const path = location.pathname;
        if (path === '/') return 'home';
        if (path.startsWith('/servicios')) return 'servicios';
        if (path.startsWith('/stack')) return 'stack';
        if (path.startsWith('/manifiesto')) return 'manifiesto';
        if (path.startsWith('/quienes-somos')) return 'quienes-somos';
        return '';
    };

    const activeLink = getActiveLink();

    return (
        <header 
            className={`sticky-top bg-dark-kiru-header border-bottom border-secondary border-opacity-25 ${scrolled ? 'header-scrolled' : ''}`}
            style={{
                transition: 'all 0.3s ease',
                boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none'
            }}
        >
            <Container>
                <Navbar expand="lg" className="py-3">
                    {/* Logo */}
                    <Logo />

                    {/* Toggle para móvil */}
                    <Navbar.Toggle 
                        onClick={handleShow}
                        className="border-0 text-white"
                        aria-controls="offcanvasNavbar"
                    >
                        <span className="navbar-toggler-icon" style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.85)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`
                        }} />
                    </Navbar.Toggle>

                    {/* Navegación Desktop */}
                    <Navbar.Collapse className="d-none d-lg-flex justify-content-end">
                        <Nav className="gap-2 align-items-center">
                            {navLinks.map((link) => (
                                <NavLinkItem
                                    key={link.id}
                                    link={link}
                                    isActive={activeLink === link.id}
                                />
                            ))}
                            <CTAButton onClick={handleCTAClick} className="ms-2" />
                        </Nav>
                    </Navbar.Collapse>

                    {/* Offcanvas para móvil */}
                    <Offcanvas 
                        show={show} 
                        onHide={handleClose}
                        placement="end"
                        className="d-lg-none bg-dark-kiru"
                        style={{ width: '280px' }}
                    >
                        <Offcanvas.Header 
                            closeButton 
                            className="border-bottom border-secondary border-opacity-25"
                            closeVariant="white"
                        >
                            <Offcanvas.Title>
                                <Logo />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column gap-3">
                                {navLinks.map((link) => {
                                    const isActive = activeLink === link.id;
                                    return (
                                        <Nav.Link
                                            key={link.id}
                                            as={Link}
                                            to={link.path}
                                            onClick={handleClose}
                                            className={`nav-link-kiru-mobile text-white py-2 px-3 rounded ${isActive ? 'bg-card-kiru fw-bold' : ''}`}
                                            style={{
                                                transition: 'all 0.2s ease',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <span className="ms-2 text-primary">•</span>
                                            )}
                                        </Nav.Link>
                                    );
                                })}
                                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                                    <CTAButton onClick={handleCTAClick} className="w-100" />
                                </div>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar>
            </Container>

            <style jsx>{`
                .header-scrolled {
                    backdrop-filter: blur(10px);
                    background-color: rgba(26, 26, 26, 0.95) !important;
                }
                
                .navbar-toggler:focus {
                    box-shadow: none;
                    outline: 2px solid var(--color-primary);
                }
                
                .offcanvas {
                    border-left: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .logo-image {
                    filter: brightness(1);
                }
                
                .logo-image:hover {
                    filter: brightness(1.1);
                }

                /* Estilos para los enlaces de navegación - Desktop */
                .nav-link-kiru {
                    position: relative;
                    padding: 0.5rem 1rem !important;
                    color: white !important;
                    transition: all 0.2s ease;
                }

                .nav-link-kiru:hover {
                    background-color: #FF0081 !important;
                    color: #1a1a1a !important;
                }

                .nav-link-kiru.active {
                    color: white !important;
                }

                .nav-link-kiru.active:hover {
                    background-color: #FF0081 !important;
                    color: #1a1a1a !important;
                }

                /* Ocultar el indicador activo en hover */
                .nav-link-kiru:hover .active-indicator {
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }

                /* Estilos para enlaces de navegación - Mobile */
                .nav-link-kiru-mobile {
                    border-radius: 8px;
                }

                .nav-link-kiru-mobile:hover {
                    background-color: #ff0081 !important;
                    color: #1a1a1a !important;
                }

                .nav-link-kiru-mobile.bg-card-kiru:hover {
                    background-color: #ff0081 !important;
                }

                .active-indicator {
                   background-color: #ff0081 !important;
                }

                /* Ocultar el punto activo en hover mobile */
                .nav-link-kiru-mobile:hover .text-primary {
                    color: #1a1a1a !important;
                }
            `}</style>
        </header>
    );
};

export default Header;