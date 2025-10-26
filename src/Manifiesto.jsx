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
        content: "Lo simple es resultado de pensar mejor, no de hacer menos. Diseñamos flujos que eliminan la fricción, permitiendo que cualquier miembro del equipo los entienda en minutos. Menos complicaciones, más entrega de valor."
    },
    {
        id: 'precisa',
        title: "Precisa",
        content: "LLa precisión se mide en decisiones certeras. Priorizamos métricas claves, definimos criterios de aceptación exactos y documentamos lo mínimo indispensable. Cada ciclo se cierra con resultados de máxima eficiencia y sin fricciones."
    },
    {
        id: 'real',
        title: "Real",
        content: "Soluciones reales resuelven problemas reales. Nos aseguramos que funcione para ti desde el inicio, cortamos lo que no suma y evitamos dogmas. Priorizamos la transparencia radical y la tecnología al servicio del contexto."
    },
    {
        id: 'eficiencia',
        title: "Eficiencia y calidad sin rigidez",
        content: "Trabajamos con un enfoque ágil y adaptable. La calidad no es pesada, es una combinación de buenas prácticas, automatización y comunicación honesta y transparente. Nos movemos rápido sin romper lo importante, garantizando resultados óptimos con flexibilidad."
    }
];

// Datos de citas tipográficas
const typographyQuotes = [
    "Materializamos la visión con Simplicidad Funcional y una Precisión impecable.",
    "Simplicidad, Precisión y Trato Humano en cada punto de contacto"
];

// Componente Hero Section
const HeroSection = () => (
    <section className="mb-5">
        <p className="text-secondary fw-bold text-uppercase small mb-2" style={{ letterSpacing: '0.1em' }}>
            Manifiesto
        </p>
        <h1 className="display-5 fw-bold mb-4 text-white">
            Kiru: Web Developers 
        </h1>
        <p className="lead text-secondary lh-lg" style={{ maxWidth: '800px' }}>
           Materializamos su visión con procesos transparentes y resultados medibles. 
           Nuestra guía: Simple, Precisa y Real, garantizando Eficiencia y Calidad sin rigidez.
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
                Simplicidad Funcional y Precisión Absoluta: Claridad que acelera los productos.
            </h2>
            <p className="text-secondary mb-0 fs-6 lh-lg">
               Precisión Absoluta: Usamos lo esencial para entregar el máximo valor, eliminando el ruido innecesario.
            </p>
        </Card.Body>
    </Card>
);

// Componente para items del manifiesto
const ManifestoItem = ({ principio }) => (
    <Card className="bg-dark-kiru border-0 mb-4 h-100">
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
                    Geometría y proporciones precisas inspiran la Simplicidad Funcional de todo nuestro sistema.
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



// Componente para el CTA intermedio
const CTASection = ({ onContactClick }) => (
    <section className="my-5 py-4">
        <Card className="bg-dark-kiru border-0 border-top border-bottom border-secondary border-opacity-25">
            <Card.Body className="p-4">
                <Row className="align-items-center g-3">
                    <Col xs={12} md={6}>
                        <div className="d-flex align-items-center gap-3">
                            <span className="fs-1 fw-bold text-primary">KIRU</span>
                            <div>
                                <p className="mb-0 text-secondary small text-uppercase" style={{ letterSpacing: '0.05em' }}>
                                    Herramientas a tú medida, donde la tecnología se adapta a tus necesidades.
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
        "No desarrollamos software, diseñamos herramientas."
        
    ];

    return (
        <section className="mb-5 pb-4">
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
    const handleContactClick = () => {
        console.log('Solicitar asesoría desde Manifiesto');
    };

    return (
        <div className="bg-dark-kiru" style={{ minHeight: '100vh' }}>
            <Header activeLink="Manifiesto" />

            <Container className="py-5">
                {/* Hero Section */}
                <HeroSection />

                {/* Principio Principal */}
                <MainPrinciple />

                {/* Contenido principal en dos columnas */}
                <Row className="g-4 mb-5">
                    {/* Columna Izquierda: Principios */}
                    <Col lg={7}>
                        <Row>
                            {principiosData.map((principio) => (
                                <Col key={principio.id} xs={12}>
                                    <ManifestoItem principio={principio} />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    {/* Columna Derecha: Visualización */}
                    <Col lg={5}>
                        <BrandVisualization />
                        <TypographyBlocks quotes={typographyQuotes} />
                    </Col>
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