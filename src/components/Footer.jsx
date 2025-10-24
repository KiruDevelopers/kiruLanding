// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import kiruLogo from '../assets/kiruLogo.png';

// Datos de enlaces del footer
const footerLinks = {
    legal: [
        { label: 'Privacidad', href: '/privacidad' },
        { label: 'Términos', href: '/terminos' },
        { label: 'Contacto', href: '/contacto' }
    ],
    social: [
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
        { label: 'GitHub', href: 'https://github.com', icon: 'gh' },
        { label: 'Email', href: 'mailto:kiru.webdev@gmail.com', icon: '@' }
    ]
};

// Componente para el logo en el footer
const FooterLogo = () => (
    <Link 
        to="/"
        className="d-inline-flex align-items-center gap-2 text-decoration-none"
    >
        <img 
            src={kiruLogo} 
            alt="Kiru Logo" 
            height="32"
            className="footer-logo-image"
            style={{ 
                objectFit: 'contain',
                transition: 'transform 0.2s ease',
                filter: 'brightness(0.9)'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.filter = 'brightness(1)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.filter = 'brightness(0.9)';
            }}
        />
        <span className="text-white fw-bold small">Kiru</span>
    </Link>
);

// Componente para enlaces legales
const LegalLinks = ({ links }) => (
    <div className="d-flex flex-wrap gap-3 gap-md-4 justify-content-center justify-content-md-start">
        {links.map((link, index) => (
            <a
                key={index}
                href={link.href}
                className="text-secondary small text-decoration-none"
                style={{ transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
            >
                {link.label}
            </a>
        ))}
    </div>
);

// Componente para enlaces sociales
const SocialLinks = ({ links }) => (
    <div className="d-flex gap-3 justify-content-center justify-content-md-end">
        {links.map((link, index) => (
            <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none d-flex align-items-center justify-content-center rounded-circle"
                style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s ease',
                    fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
                title={link.label}
            >
                {link.icon}
            </a>
        ))}
    </div>
);

// Componente Footer principal
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-kiru border-top border-secondary border-opacity-25 mt-5">
            <Container className="py-5">
                {/* Sección principal del footer */}
                <Row className="g-4 pb-4 border-bottom border-secondary border-opacity-25">
                    {/* Columna izquierda: Logo y descripción */}
                    <Col md={6} lg={4}>
                        <FooterLogo />
                        <p className="text-secondary small mt-3 mb-0 lh-lg">
                            Desarrollo web preciso, rápido y real. Soluciones digitales con trato humano.
                        </p>
                    </Col>

                    {/* Columna central: Enlaces */}
                    <Col md={6} lg={4}>
                        <h6 className="text-white fw-bold mb-3 text-uppercase small">Enlaces</h6>
                        <div className="d-flex flex-column gap-2">
                            <Link to="/servicios" className="text-secondary small text-decoration-none footer-link">
                                Servicios
                            </Link>
                            <Link to="/stack" className="text-secondary small text-decoration-none footer-link">
                                Stack
                            </Link>
                            <Link to="/manifiesto" className="text-secondary small text-decoration-none footer-link">
                                Manifiesto
                            </Link>
                            <Link to="/quienes-somos" className="text-secondary small text-decoration-none footer-link">
                                Quiénes Somos
                            </Link>
                        </div>
                    </Col>

                    {/* Columna derecha: Redes sociales */}
                    <Col md={12} lg={4}>
                        <h6 className="text-white fw-bold mb-3 text-uppercase small text-center text-lg-start">
                            Síguenos
                        </h6>
                        <SocialLinks links={footerLinks.social} />
                    </Col>
                </Row>

                {/* Sección inferior: Copyright y legal */}
                <Row className="pt-4 g-3">
                    <Col md={6} className="text-center text-md-start">
                        <div className="d-flex flex-column flex-sm-row align-items-center gap-2">
                            <p className="text-secondary small mb-0">
                                Una herramienta pensada por
                            </p>
                            <FooterLogo />
                        </div>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <LegalLinks links={footerLinks.legal} />
                    </Col>
                </Row>

                {/* Copyright */}
                <Row className="pt-3">
                    <Col className="text-center">
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.75rem' }}>
                            © {currentYear} Kiru. Todos los derechos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .footer-link {
                    transition: color 0.2s ease;
                }
                
                .footer-link:hover {
                    color: var(--color-primary) !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;