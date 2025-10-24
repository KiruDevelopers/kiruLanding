// src/App.jsx
import React, { useState, useEffect } from 'react';
import Home from './Home';
import Servicios from './Servicios';
import './App.css'; 
import Stack from './Stack';
import Manifiesto from './Manifiesto';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash || '#home');

  useEffect(() => {
    // Escucha los cambios en el hash de la URL (por ejemplo, al hacer clic en un link)
    const handleHashChange = () => {
      setCurrentPage(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Función para renderizar el componente correcto basado en la URL
  const renderPage = () => {
    switch (currentPage) {
      case '#servicios-page': // Usamos este hash para la página de Servicios
        return <Servicios />;
      case '#stack':
        return <Stack />;
      case '#manifiesto':
        return <Manifiesto />;
      case '#home':
      default:
        return <Home />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;