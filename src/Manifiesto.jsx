// src/Manifiesto.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './components/Header';
import Footer from './components/Footer';

// Datos de principios
const principiosData = [
    {
        id: 'simple',
        title: "Simple",
        content: "Lo simple es resultado de pensar mejor, no de hacer menos. Diseñamos flujos que cualquier persona del equipo puede entender en minutos. Menos fricción, más entrega.",
        isPrimary: false
    },
    {
        id: 'precisa',
        title: "Precisa",
        content: "La precisión se mide en decisiones. Priorizamos métricas, definimos criterios de aceptación y documentamos lo mínimo indispensable. Cada sprint cierra con claridad.",
        isPrimary: false
    },
    {
        id: 'real',
        title: "Real",
        content: "Productos reales resuelven problemas reales. Validamos temprano, cortamos lo que no suma y evitamos dogmas. Tecnología al servicio del contexto.",
        isPrimary: false
    },
    {
        id: 'eficiencia',
        title: "Eficiencia y calidad sin rigidez",
        content: "Trabajamos con un enfoque ágil y adaptable. La excelencia no es pesada, es una combinación de buenas prácticas, automatización y comunicación honesta. Nos movemos rápido sin romper lo importante.",
        isPrimary: false
    }
];

// Datos de citas tipográficas
const typographyQuotes = [
    "Construimos entregables que hablan por sí mismos.",
    "Documentación mínima, comunicación efectiva."
];

// Componente Hero Section
const HeroSection = () => (
    <section className="mb-5 pb-4">
        <p className="text-secondary fw-bold text-uppercase small mb-2" style={{ letterSpacing: '0.1em' }}>
            Manifiesto
        </p>
        <h1 className="display-5 fw-bold mb-4 text-white">
            Kiru: Web Developers con Trato Humano
        </h1>
        <p className="lead text-secondary lh-lg" style={{ maxWidth: '800px' }}>
            Creemos en procesos claros y en resultados medibles. Nuestra guía: 
            Simple, precisa, real. Promesa de valor: Eficiencia y calidad sin rigidez.
        </p>
    </section>
);

// Componente para el principio principal destacado
const MainPrinciple = () => (
    <Card 
        className="bg-card-kiru border-0 mb-4" 
        style={{ borderLeft: '4px solid var(--color-primary)' }}
    >
        <Card.Body className="p-4 p-md-5">
            <h2 className="text-white mb-3 fw-bold">
                Hacer menos, lograr más: claridad que acelera productos.
            </h2>
            <p className="text-secondary mb-0 fs-6 lh-lg">
                Usamos lo esencial y lo llevamos al máximo. Nada de ruido, solo valor.
            </p>
        </Card.Body>
    </Card>
);

// Componente para items del manifiesto
const ManifestoItem = ({ principio }) => (
    <Card 
        className={`border-0 mb-4 h-100 ${principio.isPrimary ? 'bg-card-kiru' : 'bg-dark-kiru'}`}
        style={principio.isPrimary ? { borderLeft: '4px solid var(--color-primary)' } : {}}
    >
        <Card.Body className="p-4">
            <h4 className="text-white mb-3 fw-bold">{principio.title}</h4>
            <p className="text-secondary mb-0 lh-lg">{principio.content}</p>
        </Card.Body>
    </Card>
);

// Componente para la visualización de marca
const BrandVisualization = () => (
    <div className="mb-4">
        <h3 className="text-white fs-5 mb-3 fw-bold">Visualización de Marca</h3>
        <Card className="bg-card-kiru border-0">
            <Card.Body className="p-4">
                <p className="text-secondary small mb-4">
                    Logo, proporciones y geometría que inspiran nuestro sistema.
                </p>
                <div 
                    className="p-5 text-center bg-dark rounded-3 d-flex flex-column justify-content-center align-items-center" 
                    style={{ minHeight: '240px', border: '1px solid var(--color-border)' }}
                >
                    <h2 className="text-white fw-bold mb-2" style={{ fontSize: '2.5rem' }}>Kiru</h2>
                    <p className="small text-secondary text-uppercase mb-4" style={{ letterSpacing: '0.1em' }}>
                        Web Developers
                    </p>
                    <div className="mt-3 pt-3 border-top border-secondary border-opacity-25 w-75">
                        <p className="small text-secondary mb-0">
                            Relación modular 1:2:3 – espacio, ritmo y lectura
                        </p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
);

// Componente para bloques tipográficos
const TypographyBlocks = ({ quotes }) => (
    <div className="mb-4">
        <h3 className="text-white fs-5 mb-3 fw-bold">Bloques Neotech</h3>
        <Card className="bg-card-kiru border-0">
            <Card.Body className="p-4">
                <p className="text-secondary small mb-4">
                    Usamos la tipografía Neotech de forma destacada para énfasis y cifras.
                </p>
                {quotes.map((quote, index) => (
                    <blockquote 
                        key={index}
                        className={`mb-0 ${index < quotes.length - 1 ? 'mb-4 pb-3 border-bottom border-secondary border-opacity-25' : ''}`}
                    >
                        <h5 className="text-white fw-bold lh-base">
                            "{quote}"
                        </h5>
                    </blockquote>
                ))}
            </Card.Body>
        </Card>
    </div>
);

// Componente para sección de principios (columna izquierda)
const PrinciplesSection = ({ principios, onCTAClick }) => (
    <Col lg={7} className="mb-4">
        {/* Principio Principal */}
        <MainPrinciple />

        {/* Principios Secundarios */}
        {principios.map((principio) => (
            <ManifestoItem 
                key={principio.id}
                principio={principio}
            />
        ))}

        {/* CTA de Principios */}
        <div className="mt-4">
            <Button 
                variant="outline-light" 
                className="btn-kiru-outline"
                size="sm"
                onClick={onCTAClick}
            >
                Principios que guían cada entrega
            </Button>
        </div>
    </Col>
);

// Componente para sección de visualización (columna derecha)
const VisualizationSection = ({ quotes }) => (
    <Col lg={5} className="mb-4">
        <BrandVisualization />
        <TypographyBlocks quotes={quotes} />
    </Col>
);

// Componente para el CTA intermedio
const CTASection = ({ onContactClick }) => (
    <section className="my-5">
        <Card className="bg-dark-kiru border-0 border-top border-bottom border-secondary border-opacity-25">
            <Card.Body className="p-4">
                <Row className="align-items-center g-3">
                    <Col xs={12} md={6}>
                        <div className="d-flex align-items-center gap-3">
                            <span className="fs-1 fw-bold text-primary">K</span>
                            <div>
                                <p className="mb-0 text-secondary small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                                    Web Developers
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-md-end">
                        <Button 
                            variant="primary" 
                            size="lg"
                            className="btn-kiru-primary px-4"
                            onClick={onContactClick}
                        >
                            Solicitar Asesoría
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </section>
);

// Componente para el resumen final del manifiesto
const ManifestoSummary = () => {
    const summaryPoints = [
        "Simple, precisa, real. Eficiencia y calidad sin rigidez.",
        "Hacer menos, lograr más: claridad que acelera productos.",
        "Logo y geometrías refuerzan una identidad funcional."
    ];

    return (
        <section className="mb-5">
            <Card className="bg-card-kiru border-0">
                <Card.Body className="p-4 p-md-5">
                    <Row className="g-4">
                        <Col md={5}>
                            <h3 className="text-white fw-bold mb-2">Manifiesto</h3>
                            <h5 className="text-secondary fw-normal">
                                Kiru: Web Developers con Trato Humano
                            </h5>
                        </Col>
                        <Col md={7}>
                            <div className="d-flex flex-column gap-2">
                                {summaryPoints.map((point, index) => (
                                    <p key={index} className="text-secondary small mb-0 lh-lg">
                                        {point}
                                    </p>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </section>
    );
};

// Componente principal
const Manifiesto = () => {
    // Handlers
    const handlePrinciplesClick = () => {
        console.log('Ver más sobre principios');
        // Aquí puedes agregar lógica para scroll o navegación
    };

    const handleContactClick = () => {
        console.log('Solicitar asesoría desde Manifiesto');
        // Lógica para abrir modal o formulario
    };

    return (
        <div className="bg-dark-kiru min-vh-100">
            <Header />

            <Container className="py-5">
                {/* Hero Section */}
                <HeroSection />

                {/* Contenido principal en dos columnas */}
                <Row>
                    {/* Columna Izquierda: Principios */}
                    <PrinciplesSection 
                        principios={principiosData}
                        onCTAClick={handlePrinciplesClick}
                    />

                    {/* Columna Derecha: Visualización */}
                    <VisualizationSection quotes={typographyQuotes} />
                </Row>
                
                {/* CTA Intermedio */}
                <CTASection onContactClick={handleContactClick} />
                
                {/* Resumen del Manifiesto */}
                <ManifestoSummary />
            </Container>

            <Footer />
        </div>
    );
};

export default Manifiesto;