// src/Stack.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Header from './components/Header';
import Footer from './components/Footer';

// Datos de las capas tecnológicas
const stackData = [
    {
        id: 'frontend',
        layer: 'Frontend',
        subtitle: 'Interfaces y experiencia',
        description: 'Creamos experiencias web modernas, accesibles y performantes.',
        color: '#ff69b4',
        textColor: '#1a1a1a',
        technologies: [
            { name: 'HTML', category: 'markup' },
            { name: 'CSS', category: 'styling' },
            { name: 'JavaScript', category: 'language' },
            { name: 'React', category: 'framework' },
            { name: 'TypeScript', category: 'language' },
            { name: 'JSX/TSX', category: 'syntax' },
            { name: 'Tailwind', category: 'styling' },
            { name: 'Bootstrap', category: 'framework' }
        ],
    },
    {
        id: 'backend',
        layer: 'Backend & BBDD',
        subtitle: 'Lógica, datos y escalabilidad',
        description: 'Arquitecturas robustas que crecen con tu negocio.',
        color: '#5bc0de',
        textColor: '#1a1a1a',
        technologies: [
            { name: 'Java', category: 'language' },
            { name: 'Python', category: 'language' },
            { name: 'Node.js', category: 'runtime' },
            { name: 'SQL', category: 'database' },
            { name: 'NoSQL', category: 'database' },
            { name: 'REST APIs', category: 'api' },
            { name: 'GraphQL', category: 'api' },
            { name: 'Microservicios', category: 'architecture' }
        ],
    },
    {
        id: 'infrastructure',
        layer: 'Infraestructura',
        subtitle: 'Cloud Computing',
        description: 'Infraestructura escalable, segura y eficiente.',
        color: '#f0ad4e',
        textColor: '#1a1a1a',
        technologies: [
            { name: 'AWS', category: 'cloud' },
            { name: 'Azure', category: 'cloud' },
            { name: 'GCP', category: 'cloud' },
            { name: 'Docker', category: 'container' },
            { name: 'Kubernetes', category: 'orchestration' },
            { name: 'Terraform', category: 'iac' }
        ],
        features: [
            'Autoscaling',
            'Observabilidad',
            'CI/CD',
            'Monitoreo 24/7'
        ],
        note: 'Preferimos proveedores multi-cloud y herramientas con buen soporte para IaC y observabilidad.'
    },
];

// Componente para tarjetas de tecnología individuales
const TechCard = ({ tech }) => (
    <Col xs={6} sm={4} md={3} lg={2} className="mb-3">
        <Card className="bg-card-kiru border border-secondary border-opacity-25 h-100">
            <Card.Body className="p-3 d-flex flex-column align-items-center justify-content-center text-center">
                <span className="text-white fw-bold small">{tech.name}</span>
                {tech.category && (
                    <small className="text-secondary text-uppercase mt-1" style={{ fontSize: '0.65rem' }}>
                        {tech.category}
                    </small>
                )}
            </Card.Body>
        </Card>
    </Col>
);

// Componente para el badge de capa
const LayerBadge = ({ layer, color, textColor }) => (
    <Badge 
        className="text-uppercase fw-bold py-2 px-4 me-3"
        style={{ 
            backgroundColor: color,
            color: textColor,
            fontSize: '0.75rem',
            letterSpacing: '0.05em'
        }}
    >
        {layer}
    </Badge>
);

// Componente para CTA de infraestructura
const InfrastructureCTA = ({ features, onContactClick }) => (
    <Col xs={12} lg={6} className="mb-3">
        <Card className="bg-card-kiru border-0 h-100">
            <Card.Body className="p-4">
                <Row className="align-items-center g-3">
                    <Col md={7}>
                        <h5 className="text-white fw-bold mb-3">Servicios Cloud Avanzados</h5>
                        <div className="d-flex flex-wrap gap-2">
                            {features.map((feature, index) => (
                                <Badge 
                                    key={index}
                                    bg="dark"
                                    className="px-3 py-2"
                                    style={{ fontSize: '0.75rem' }}
                                >
                                    {feature}
                                </Badge>
                            ))}
                        </div>
                    </Col>
                    <Col md={5} className="text-md-end">
                        <Button 
                            variant="primary" 
                            className="btn-kiru-primary"
                            onClick={onContactClick}
                        >
                            Solicitar Asesoría
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>
);

// Componente para cada capa tecnológica
const TechLayer = ({ layerData, onContactClick }) => (
    <section className="mb-5">
        <Card className="bg-dark-kiru border-0">
            <Card.Body className="p-4 p-md-5">
                {/* Encabezado de la capa */}
                <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
                        <LayerBadge 
                            layer={layerData.layer}
                            color={layerData.color}
                            textColor={layerData.textColor}
                        />
                        <h3 className="text-white mb-0 fs-4 mt-2 mt-sm-0">
                            {layerData.subtitle}
                        </h3>
                    </div>
                    {layerData.description && (
                        <p className="text-secondary mb-0 lh-lg ps-sm-2">
                            {layerData.description}
                        </p>
                    )}
                </div>

                {/* Grid de Tecnologías */}
                <Row className="g-3">
                    {layerData.technologies.map((tech, index) => (
                        <TechCard key={`${layerData.id}-${index}`} tech={tech} />
                    ))}
                    
                    {/* CTA especial para Infraestructura */}
                    {layerData.features && (
                        <InfrastructureCTA 
                            features={layerData.features}
                            onContactClick={onContactClick}
                        />
                    )}
                </Row>
                
                {/* Nota adicional */}
                {layerData.note && (
                    <div className="mt-4 pt-3 border-top border-secondary border-opacity-25">
                        <p className="text-secondary small mb-0 lh-lg">
                            <span className="text-primary fw-bold">Nota:</span> {layerData.note}
                        </p>
                    </div>
                )}
            </Card.Body>
        </Card>
    </section>
);

// Componente para estadísticas rápidas (opcional)
const QuickStats = () => (
    <section className="mb-5">
        <Row className="g-4">
            <Col md={4}>
                <Card className="bg-card-kiru border-0 h-100">
                    <Card.Body className="p-4 text-center">
                        <h2 className="text-primary fw-bold mb-2" style={{ fontSize: '2.5rem' }}>3</h2>
                        <p className="text-white fw-bold mb-1">Capas Tecnológicas</p>
                        <p className="text-secondary small mb-0">Cobertura completa del stack</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="bg-card-kiru border-0 h-100">
                    <Card.Body className="p-4 text-center">
                        <h2 className="text-primary fw-bold mb-2" style={{ fontSize: '2.5rem' }}>20+</h2>
                        <p className="text-white fw-bold mb-1">Tecnologías</p>
                        <p className="text-secondary small mb-0">Herramientas modernas y probadas</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="bg-card-kiru border-0 h-100">
                    <Card.Body className="p-4 text-center">
                        <h2 className="text-primary fw-bold mb-2" style={{ fontSize: '2.5rem' }}>∞</h2>
                        <p className="text-white fw-bold mb-1">Escalabilidad</p>
                        <p className="text-secondary small mb-0">Cloud-native desde el inicio</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
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
const Stack = () => {
    // Handlers para las acciones
    const handleContactClick = () => {
        console.log('Solicitar asesoría desde Stack');
        // Lógica para abrir modal o redirigir
    };

    const handleWriteClick = () => {
        console.log('Escribir a Kiru desde Stack');
        // Lógica para contacto
    };

    return (
        <div className="bg-dark-kiru min-vh-100">
            <Header activeLink="Stack" />

            <Container className="py-5">
                {/* Hero Section */}
                <section className="mb-5 pb-4">
                    <p className="text-secondary fw-bold text-uppercase small mb-2 tracking-wider">
                        Stack Tecnológico
                    </p>
                    <h1 className="display-5 fw-bold mb-4 text-white">
                        Nuestro Stack: La Tecnología que Potencia tus Proyectos
                    </h1>
                    <p className="lead text-secondary lh-lg" style={{ maxWidth: '900px' }}>
                        Una selección enfocada en calidad, rendimiento y mantenibilidad. 
                        Visualmente organizada por capas para una lectura clara en desktop y móvil.
                    </p>
                </section>

                {/* Estadísticas rápidas */}
                <QuickStats />

                {/* Capas Tecnológicas */}
                {stackData.map((layerData) => (
                    <TechLayer
                        key={layerData.id}
                        layerData={layerData}
                        onContactClick={handleContactClick}
                    />
                ))}

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

export default Stack;