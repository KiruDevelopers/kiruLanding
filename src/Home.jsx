// src/Home.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Header from './components/Header';
import Footer from './components/Footer';
import imagenHome from './assets/imagenhome.jpg';

// Datos de servicios
const serviciosData = [
    {
        id: 'captura-requerimientos',
        title: 'Captura de Requerimientos',
        description: 'Análisis Simple y Preciso: Alcance, entregables y criterios de adaptación claros. Mapa de riesgos transparente.',
        icon: '📋',
        color: 'primary'
    },
    {
        id: 'maquetado',
        title: 'Maquetado',
        description: 'Interfaces simples y funcionales: Pasando de wireframes a una entrega de calidad lista para producción.',
        icon: '🎨',
        color: 'info'
    },
    {
        id: 'asesoria',
        title: 'Asesoría',
        description: 'Optimización precisa de procesos para alcanzar la máxima eficiencia y performance.',
        icon: '💡',
        color: 'primary'
    },
    {
        id: 'diseno-web',
        title: 'Diseño Web',
        description: 'Diseño geométrico y legible. Creación de interfaces con simplicidad funcional y accesibilidad inclusiva.',
        icon: '✨',
        color: 'info'
    },
];

// Datos del stack
const stackTags = [
    { name: 'React', category: 'Frontend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Cloud', category: 'Infrastructure' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'SQL', category: 'Backend' },
    { name: 'Docker', category: 'Infrastructure' },
    { name: 'APIs', category: 'Backend' }
];

// Datos del manifiesto
const manifestoItems = [
    {
        title: 'Simple, precisa, real.',
        description: 'Diseño Simple y Preciso. Contraste, espaciado generoso y accesibilidad Real.',
        highlight: true
    },
    {
        title: 'Trato humano.',
        description: 'Fomentamos la confianza con una comunicación directa y sin jerga. Soluciones funcionales y claras con resultados medibles y reales.',
        highlight: true
    }
];

// Componente Hero Section
// Componente Hero Section
const HeroSection = ({ onContactClick, onServicesClick }) => (
    <section className="py-5 py-lg-6">
        <Row className="align-items-center g-4 g-lg-5">
            <Col lg={7}>
                <div className="hero-content">
                    <Badge 
                        bg="dark" 
                        className="mb-3 px-3 py-2 text-uppercase fw-bold"
                        style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}
                    >
                        Eficiencia y calidad sin rigidez
                    </Badge>
                    <h1 className="display-3 fw-bold mb-4 text-white lh-sm">
                        Webs precisas.<br />
                        Funcionales. Eficientes.
                    </h1>
                    <p className="lead text-secondary mb-4 lh-lg" style={{ maxWidth: '600px' }}>
                       Diseñamos y entregamos experiencias web de alta calidad y accesibilidad. <br /> Cero ruido visual para una Simplicidad Funcional. Simple, precisa, real."
                    </p>
                    <div className="hero-actions d-flex flex-column flex-sm-row gap-3">
                        <Button 
                            variant="primary" 
                            size="lg"
                            className="btn-kiru-primary"
                            onClick={onContactClick}
                        >
                            Solicitar Asesoría
                        </Button>
                        <Button 
                            variant="outline-light" 
                            size="lg"
                            className="btn-kiru-outline"
                            onClick={onServicesClick}
                        >
                            Ver Servicios
                        </Button>
                    </div>
                </div>
            </Col>
            <Col lg={5} className="mt-5 mt-lg-0">
                <img 
                    src={imagenHome} 
                    alt="Geometría & Precisión" 
                    className="img-fluid w-100"
                    style={{ objectFit: 'cover' }}
                />
            </Col>
        </Row>
    </section>
);

// Componente para items del manifiesto
const ManifestoCard = ({ item }) => (
    <Col md={6} className="mb-4">
        <Card 
            className="bg-card-kiru border-0 h-100"
            style={{ borderLeft: item.highlight ? '4px solid var(--color-primary)' : 'none' }}
        >
            <Card.Body className="p-4 p-md-5">
                <h3 className="text-white fw-bold mb-3 fs-4">{item.title}</h3>
                <p className="text-secondary mb-0 lh-lg">{item.description}</p>
            </Card.Body>
        </Card>
    </Col>
);

// Componente para tarjetas de servicio
const ServiceCard = ({ service, onLearnMore }) => (
    <Col md={6} className="mb-4">
        <Card 
            className="bg-card-kiru border-0 h-100 service-card-hover"
            style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
            onClick={() => onLearnMore(service.id)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <Card.Body className="p-4 position-relative">
                {/* Indicador de color */}
                <div 
                    className={`position-absolute top-0 start-0 h-100 ${service.color === 'primary' ? 'bg-primary' : 'bg-info'}`}
                    style={{ width: '4px' }}
                />
                
                <div className="ps-3">
                    <div className="d-flex align-items-start gap-3 mb-3">
                        <span style={{ fontSize: '1.5rem' }}>{service.icon}</span>
                        <h4 className="text-white fw-bold mb-0">{service.title}</h4>
                    </div>
                    <p className="text-secondary mb-0 lh-lg">{service.description}</p>
                </div>
            </Card.Body>
        </Card>
    </Col>
);

// Componente para preview del stack
const StackPreview = ({ onViewStack }) => (
    <section className="py-5" id="stack">
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-end mb-4 gap-3">
            <div>
                <h2 className="text-white fw-bold mb-2">Stack Tecnológico</h2>
                <p className="text-secondary mb-0">Tecnologías modernas y probadas</p>
            </div>
            <Button 
                variant="outline-light" 
                className="btn-kiru-outline"
                size="sm"
                onClick={onViewStack}
            >
                Ver Stack Completo
            </Button>
        </div>
        
        <Card className="bg-card-kiru border-0">
            <Card.Body className="p-4">
                <div className="d-flex flex-wrap gap-2">
                    {stackTags.map((tag, index) => (
                        <Badge 
                            key={index}
                            bg="dark"
                            className="px-3 py-2 d-flex flex-column align-items-start"
                            style={{ fontSize: '0.85rem' }}
                        >
                            <span className="fw-bold">{tag.name}</span>
                            <small className="text-secondary" style={{ fontSize: '0.7rem' }}>
                                {tag.category}
                            </small>
                        </Badge>
                    ))}
                </div>
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
                        <h2 className="text-white fw-bold mb-3 display-6">
                            ¿Listos para empezar?
                        </h2>
                        <p className="lead text-secondary mb-0 lh-lg">
                            Agenda una asesoría y define el camino más corto a producción.
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
const Home = () => {
    // Handlers de navegación usando window.location
    const handleContactClick = () => {
        console.log('Abrir formulario de contacto');
        // Aquí puedes abrir un modal o redirigir
        // window.location.href = '/contacto';
    };

    const handleServicesClick = () => {
        window.location.href = '/servicios';
    };

    const handleStackClick = () => {
        window.location.href = '/stack';
    };

    const handleServiceLearnMore = (serviceId) => {
        window.location.href = `/servicios#${serviceId}`;
    };

    const handleWriteClick = () => {
        console.log('Abrir formulario de escritura');
        // Lógica para contacto
        // window.location.href = 'mailto:contacto@kiru.com';
    };

    return (
        <div className="bg-dark-kiru min-vh-100">
            <Header activeLink="Home" />

            <Container className="py-4">
                {/* Hero Section */}
                <HeroSection 
                    onContactClick={handleContactClick}
                    onServicesClick={handleServicesClick}
                />

                {/* Manifiesto de Marca */}
                <section className="py-5">
                    <div className="mb-4">
                        <h2 className="text-white fw-bold mb-2">Manifiesto de Marca</h2>
                        <p className="text-secondary mb-0">Nuestros principios y valores</p>
                    </div>
                    <Row>
                        {manifestoItems.map((item, index) => (
                            <ManifestoCard key={index} item={item} />
                        ))}
                    </Row>
                </section>

                {/* Servicios - Resumen */}
                <section id="servicios" className="py-5">
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-end mb-4 gap-3">
                        <div>
                            <h2 className="text-white fw-bold mb-2">Servicios</h2>
                            <p className="text-secondary mb-0">Soluciones completas para tu proyecto</p>
                        </div>
                        <Button 
                            variant="outline-light" 
                            className="btn-kiru-outline"
                            size="sm"
                            onClick={handleServicesClick}
                        >
                            Ver Todos los Servicios
                        </Button>
                    </div>
                    <Row>
                        {serviciosData.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                onLearnMore={handleServiceLearnMore}
                            />
                        ))}
                    </Row>
                </section>

                {/* Stack Preview */}
                <StackPreview onViewStack={handleStackClick} />

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

export default Home;