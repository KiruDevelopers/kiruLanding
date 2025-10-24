// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import kiruLogo from '../assets/kiruLogo.png';

// Datos de navegación
const navLinks = [
    { id: 'home', label: 'Inicio', href: '/' },
    { id: 'servicios', label: 'Servicios', href: '/servicios' },
    { id: 'stack', label: 'Stack', href: '/stack' },
    { id: 'manifiesto', label: 'Manifiesto', href: '/manifiesto' },
    { id: 'quienes-somos', label: 'Quiénes Somos', href: '/quienes-somos' }
];

// Componente para el logo
const Logo = ({ onClick }) => (
    <div 
        className="logo d-flex align-items-center gap-3 cursor-pointer"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
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
    </div>
);

// Componente para enlaces de navegación
const NavLink = ({ link, isActive, onClick }) => (
    <Nav.Link 
        href={link.href}
        onClick={(e) => {
            e.preventDefault();
            onClick(link.href);
        }}
        className={`text-white px-3 position-relative ${isActive ? 'fw-bold' : ''}`}
        style={{
            transition: 'color 0.2s ease',
            textDecoration: 'none'
        }}
    >
        {link.label}
        {isActive && (
            <span 
                className="position-absolute bottom-0 start-50 translate-middle-x bg-primary"
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
const Header = ({ activeLink = 'Home' }) => {
    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    const handleLogoClick = () => {
        window.location.href = '/';
    };

    const handleNavClick = (href) => {
        window.location.href = href;
        handleClose();
    };

    const handleCTAClick = () => {
        console.log('Abrir modal de asesoría');
        // Aquí puedes abrir un modal o redirigir
        handleClose();
    };

    // Normalizar activeLink
    const normalizedActiveLink = activeLink.toLowerCase();

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
                    <Logo onClick={handleLogoClick} />

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
                            {navLinks.map((link) => {
                                const isActive = normalizedActiveLink === link.id || 
                                               (link.id === 'home' && normalizedActiveLink === 'home');
                                return (
                                    <NavLink
                                        key={link.id}
                                        link={link}
                                        isActive={isActive}
                                        onClick={handleNavClick}
                                    />
                                );
                            })}
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
                                <Logo onClick={() => {
                                    handleLogoClick();
                                    handleClose();
                                }} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column gap-3">
                                {navLinks.map((link) => {
                                    const isActive = normalizedActiveLink === link.id || 
                                                   (link.id === 'home' && normalizedActiveLink === 'home');
                                    return (
                                        <Nav.Link
                                            key={link.id}
                                            href={link.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(link.href);
                                            }}
                                            className={`text-white py-2 px-3 rounded ${isActive ? 'bg-card-kiru fw-bold' : ''}`}
                                            style={{
                                                transition: 'background-color 0.2s ease'
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
                .cursor-pointer {
                    cursor: pointer;
                }
                
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
            `}</style>
        </header>
    );
};

export default Header;