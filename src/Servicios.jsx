// src/Servicios.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './components/Header';
import Footer from './components/Footer';

// Datos de los servicios
const serviciosData = [
    {
        id: 'captura-requerimientos',
        title: 'Captura de Requerimientos',
        description: 'Descubrimiento estructurado para reducir incertidumbre y alinear expectativas desde el día uno.',
        details: [
            'Entrevistas con stakeholders',
            'Riesgos y supuestos',
            'Historias de usuario + criterios',
            'Roadmap inicial'
        ],
        primary: true,
        icon: '📋'
    },
    {
        id: 'maquetado',
        title: 'Maquetado (Prototipado)',
        description: 'De wireframes a interfaces precisas, listas para implementación y testeadas con usuarios.',
        details: [
            'Flujos clave y arquitectura',
            'Prototipos navegables',
            'UI de alta fidelidad',
            'Especificaciones listas'
        ],
        primary: false,
        icon: '🎨'
    },
    {
        id: 'asesoria',
        title: 'Asesoría',
        description: 'Auditorías técnicas, performance y procesos. Recomendaciones prácticas, priorizadas y accionables.',
        details: [
            'Auditoría frontend/full-stack',
            'Plan de mejoras',
            'Accesibilidad y DX',
            'Acompañamiento'
        ],
        primary: true,
        icon: '💡'
    },
    {
        id: 'diseno-web',
        title: 'Diseño Web',
        description: 'Lenguaje visual geométrico, accesible y de alto contraste. Sistemas de diseño que escalan.',
        details: [
            'Guía de estilos y tokens',
            'Accesibilidad WCAG',
            'Componentes reutilizables',
            'Hand-off a devs'
        ],
        primary: false,
        icon: '✨'
    },
];

// Componente para el indicador circular de servicio
const ServiceIndicator = ({ isPrimary }) => (
    <div 
        className={`rounded-circle ${isPrimary ? 'bg-primary' : 'bg-info'}`}
        style={{ 
            minWidth: '12px', 
            width: '12px',
            height: '12px',
            flexShrink: 0
        }}
        aria-hidden="true"
    />
);

// Componente para cada tarjeta de servicio
const ServiceCard = ({ servicio, onContactClick }) => (
    <Card className="bg-card-kiru border-0 mb-4 h-100">
        <Card.Body className="p-4 p-md-5">
            <Row className="align-items-center g-4">
                <Col lg={9}>
                    <div className="d-flex align-items-start gap-3">
                        <ServiceIndicator isPrimary={servicio.primary} />
                        <div className="flex-grow-1">
                            <h3 className="text-white fw-bold mb-3 fs-4">
                                {servicio.title}
                            </h3>
                            <p className="text-secondary mb-4 lh-lg">
                                {servicio.description}
                            </p>
                            
                            {/* Grid de detalles */}
                            <Row className="g-3">
                                {servicio.details.map((detail, index) => (
                                    <Col 
                                        key={index} 
                                        xs={12} 
                                        sm={6} 
                                        lg={3}
                                    >
                                        <div className="d-flex align-items-start gap-2">
                                            <span className="text-primary" style={{ fontSize: '0.5rem' }}>●</span>
                                            <small className="text-secondary fw-medium lh-base">
                                                {detail}
                                            </small>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </Col>
                
                <Col lg={3} className="text-lg-end text-center">
                    <Button 
                        variant={servicio.primary ? 'primary' : 'info'}
                        className={servicio.primary ? 'btn-kiru-primary' : 'btn-kiru-blue'}
                        onClick={() => onContactClick(servicio.id)}
                        size="lg"
                    >
                        Pregunta por este servicio
                    </Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

// Componente para avatares del equipo
const TeamAvatars = () => {
    const avatarColors = [
        'var(--color-primary)',
        'var(--color-secondary)',
        '#ffffff'
    ];

    return (
        <div className="d-flex gap-2">
            {avatarColors.map((color, index) => (
                <div
                    key={index}
                    className="rounded-circle"
                    style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: color,
                        border: color === '#ffffff' ? '2px solid var(--color-border)' : 'none'
                    }}
                    aria-hidden="true"
                />
            ))}
        </div>
    );
};

// Componente para CTA de comunicación
const CommunicationCTA = ({ onContactClick }) => (
    <section className="mb-5">
        <Card className="bg-card-kiru border-0">
            <Card.Body className="p-4 p-md-5">
                <Row className="align-items-center g-4">
                    <Col lg={9}>
                        <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3 gap-sm-4">
                            <TeamAvatars />
                            <div className="flex-grow-1">
                                <h3 className="text-white fw-bold mb-2 fs-4">
                                    Trato humano, comunicación directa
                                </h3>
                                <p className="text-secondary mb-0 lh-lg">
                                    Respuestas claras, tiempos reales y un equipo al otro lado.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} className="text-lg-end text-center">
                        <Button 
                            variant="primary" 
                            className="btn-kiru-primary"
                            onClick={onContactClick}
                            size="lg"
                        >
                            Solicitar Asesoría
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </section>
);

// Componente para CTA final
const FinalCTA = ({ onContactClick, onWriteClick }) => (
    <section className="py-5">
        <Card className="bg-card-kiru border-0">
            <Card.Body className="p-4 p-md-5">
                <Row className="align-items-center g-4">
                    <Col lg={8}>
                        <h2 className="text-white fw-bold mb-3 fs-2">
                            ¿Listos para empezar?
                        </h2>
                        <p className="lead text-secondary mb-0 lh-lg">
                            Agenda una asesoría y definimos el alcance ideal para tu equipo.
                        </p>
                    </Col>
                    <Col lg={4} className="text-lg-end">
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end">
                            <Button 
                                variant="primary" 
                                className="btn-kiru-primary"
                                onClick={onContactClick}
                                size="lg"
                            >
                                Solicitar Asesoría
                            </Button>
                            <Button 
                                variant="outline-primary" 
                                className="btn-kiru-secondary-outline"
                                onClick={onWriteClick}
                                size="lg"
                            >
                                Escríbenos
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </section>
);

// Componente principal
const Servicios = () => {
    // Handlers para las acciones
    const handleContactClick = (serviceId = null) => {
        console.log('Solicitar asesoría', serviceId ? `para: ${serviceId}` : '');
        // Aquí puedes agregar la lógica para abrir un modal, redirigir, etc.
    };

    const handleWriteClick = () => {
        console.log('Escribir a Kiru');
        // Aquí puedes agregar la lógica para contacto
    };

    return (
        <div className="bg-dark-kiru min-vh-100">
            <Header activeLink="Servicios" />

            <Container className="py-5">
                {/* Hero Section */}
                <section className="mb-5 pb-4">
                    <p className="text-primary fw-bold text-uppercase small mb-2 tracking-wider">
                        Servicios
                    </p>
                    <h1 className="display-5 fw-bold mb-4 text-white">
                        Nuestros Servicios: Eficiencia y Calidad sin Rigidez
                    </h1>
                    <p className="lead text-secondary lh-lg" style={{ maxWidth: '900px' }}>
                        Procesos claros, trato humano y resultados medibles. Selecciona el módulo 
                        que necesitas y te guiamos de punta a punta.
                    </p>
                </section>

                {/* Módulos de Servicios */}
                <section className="mb-5" id="servicios-modulos">
                    {serviciosData.map((servicio) => (
                        <ServiceCard
                            key={servicio.id}
                            servicio={servicio}
                            onContactClick={handleContactClick}
                        />
                    ))}
                </section>

                {/* CTA de Comunicación */}
                <CommunicationCTA onContactClick={handleContactClick} />

                {/* CTA Final */}
                <FinalCTA 
                    onContactClick={handleContactClick}
                    onWriteClick={handleWriteClick}
                />
            </Container>

            <Footer />
        </div>
    );
};

export default Servicios;