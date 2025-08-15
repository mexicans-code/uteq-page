import React, { useState } from 'react';

const Download = ({ size = 24 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10,9 9,9 8,9"/>
  </svg>
);

const Map = ({ size = 24 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/>
    <line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);

const Navigation = ({ size = 24 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);

const Calendar = ({ size = 24 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const Settings = ({ size = 24 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const App = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    setTimeout(() => {
      const link = document.createElement('a');
      // OPCIONES: Cambia por tu URL real
      // GitHub Pages: 'https://tu-usuario.github.io/tu-repo/UTEQ-Map.apk'
      // Netlify: 'https://tu-app.netlify.app/UTEQ-Map.apk'  
      // Firebase: 'https://firebasestorage.googleapis.com/...'
      // Google Drive: 'https://drive.google.com/uc?export=download&id=TU_FILE_ID'
      link.href = './UTEQ-Map.apk'; // Ruta local para pruebas
      link.download = 'UTEQ-Map.apk';
      link.target = '_blank'; // Abre en nueva pestaña si es necesario
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      <div 
        className="min-vh-100"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #dbeafe 100%)'
        }}
      >
        {/* Header */}
        <nav className="navbar navbar-expand-lg navbar-dark py-4">
          <div className="container">
            <div className="navbar-brand d-flex align-items-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdCNoJzxfIu28gWJwjfk0-dpR8jV7bb402Q&s" 
                alt="UTEQ Logo" 
                width="48"
                height="48"
                className="rounded me-3"
              />
              <div>
                <h4 className="mb-0 text-white">UTEQ Map</h4>
                <small className="text-cyan-300" style={{color: '#a5f3fc'}}>Campus Interactivo</small>
              </div>
            </div>
            
            <div className="navbar-nav d-none d-md-flex flex-row">
              <a className="nav-link text-white me-4 fw-semibold" href="#features">Características</a>
              <a className="nav-link text-white me-4 fw-semibold" href="#about">Proyecto</a>
              <a className="nav-link text-white fw-semibold" href="#download">Descargar</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container py-5">
          <div className="row justify-content-center text-center py-5">
            <div className="col-lg-10">
              <h1 className="display-2 fw-bold text-white mb-4">
                Navega por la
                <span style={{color: '#60a5fa'}}> UTEQ</span>
                <br />sin perderte
              </h1>
              <p className="lead text-white mb-5 fs-4" style={{opacity: '0.95'}}>
                Mapa interactivo del campus que facilita la ubicación de espacios y eventos dentro de la universidad. 
                Con navegación en tiempo real, geolocalización y gestión de eventos para estudiantes, visitantes y personal.
              </p>
              
              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="btn btn-lg px-5 py-3 mb-4"
                style={{
                  backgroundColor: '#60a5fa',
                  borderColor: '#60a5fa',
                  color: '#1e3a8a',
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  transform: isDownloading ? 'scale(0.95)' : 'scale(1)',
                  boxShadow: '0 8px 25px rgba(96, 165, 250, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#3b82f6';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#60a5fa';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Download size={24} />
                <span className="ms-2">
                  {isDownloading ? 'Descargando...' : 'Descargar UTEQ Map'}
                </span>
              </button>
              
              <div className="text-white" style={{opacity: '0.8'}}>
                <small>
                  Compatible con Android 7.0+ • Tamaño: 25 MB • Gratis • UTEQ Oficial
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="container py-5">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold text-white mb-4">
                Funcionalidades Principales
              </h2>
            </div>
          </div>
          
          {/* Main Features Grid */}
          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3">
              <div 
                className="card h-100 border-0 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease',
                  border: '1px solid rgba(96, 165, 250, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <div className="card-body text-center p-4">
                  <div 
                    className="d-flex justify-content-center align-items-center mb-3 mx-auto text-white"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #1e3a8a, #3b82f6)'
                    }}
                  >
                    <Map size={28} />
                  </div>
                  <h5 className="card-title mb-3" style={{color: '#1e3a8a'}}>Mapa Interactivo</h5>
                  <p className="card-text" style={{color: '#374151'}}>
                    Zoom, arrastre y selección de puntos para explorar todo el campus de la UTEQ.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div 
                className="card h-100 border-0 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease',
                  border: '1px solid rgba(96, 165, 250, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <div className="card-body text-center p-4">
                  <div 
                    className="d-flex justify-content-center align-items-center mb-3 mx-auto text-white"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #2563eb, #60a5fa)'
                    }}
                  >
                    <Navigation size={28} />
                  </div>
                  <h5 className="card-title mb-3" style={{color: '#1e3a8a'}}>Navegación GPS</h5>
                  <p className="card-text" style={{color: '#374151'}}>
                    Rutas desde tu ubicación actual hacia cualquier edificio o instalación del campus.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div 
                className="card h-100 border-0 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease',
                  border: '1px solid rgba(96, 165, 250, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <div className="card-body text-center p-4">
                  <div 
                    className="d-flex justify-content-center align-items-center mb-3 mx-auto text-white"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #1d4ed8, #93c5fd)'
                    }}
                  >
                    <Calendar size={28} />
                  </div>
                  <h5 className="card-title mb-3" style={{color: '#1e3a8a'}}>Gestión de Eventos</h5>
                  <p className="card-text" style={{color: '#374151'}}>
                    Visualiza eventos académicos, culturales y administrativos directamente en el mapa.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div 
                className="card h-100 border-0 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease',
                  border: '1px solid rgba(96, 165, 250, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <div className="card-body text-center p-4">
                  <div 
                    className="d-flex justify-content-center align-items-center mb-3 mx-auto text-white"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #1e40af, #60a5fa)'
                    }}
                  >
                    <Settings size={28} />
                  </div>
                  <h5 className="card-title mb-3" style={{color: '#1e3a8a'}}>Panel Administrativo</h5>
                  <p className="card-text" style={{color: '#374151'}}>
                    Gestión de departamentos, personal, eventos y generación de reportes en PDF y Excel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="text-center">
                <div 
                  className="d-flex justify-content-center align-items-center mb-3 mx-auto"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #1e3a8a, #60a5fa)',
                    fontSize: '2rem'
                  }}
                >
                  🔍
                </div>
                <h4 className="text-white mb-3">Búsqueda Inteligente</h4>
                <p className="text-white" style={{opacity: '0.9'}}>
                  Encuentra rápidamente divisiones, biblioteca, laboratorios y cualquier instalación del campus.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center">
                <div 
                  className="d-flex justify-content-center align-items-center mb-3 mx-auto"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #2563eb, #93c5fd)',
                    fontSize: '2rem'
                  }}
                >
                  🛣️
                </div>
                <h4 className="text-white mb-3">Rutas Optimizadas</h4>
                <p className="text-white" style={{opacity: '0.9'}}>
                  Calcula automáticamente la ruta más rápida y eficiente hacia tu destino dentro del campus.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="text-center">
                <div 
                  className="d-flex justify-content-center align-items-center mb-3 mx-auto"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #1d4ed8, #dbeafe)',
                    fontSize: '2rem'
                  }}
                >
                  🛡️
                </div>
                <h4 className="text-white mb-3">Privacidad Garantizada</h4>
                <p className="text-white" style={{opacity: '0.9'}}>
                  Cumplimos con políticas de privacidad para proteger tu ubicación y datos personales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="container py-5">
          <div 
            className="card border-0 shadow-lg p-5"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(96, 165, 250, 0.3)'
            }}
          >
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-4 fw-bold" style={{color: '#1e3a8a'}}>
                  Sobre el Proyecto UTEQ Map
                </h2>
              </div>
            </div>
            
            <div className="row g-5">
              <div className="col-lg-6">
                <h3 className="h2 mb-4" style={{color: '#2563eb'}}>Propósito y Justificación</h3>
                <p className="fs-5 mb-4" style={{color: '#374151'}}>
                  El propósito de este proyecto es desarrollar un mapa interactivo del campus de la UTEQ que facilite 
                  la ubicación de espacios y eventos dentro de la universidad.
                </p>
                <p style={{color: '#4b5563'}}>
                  La herramienta busca resolver problemas comunes de desorientación, optimizar el tiempo de los usuarios 
                  y modernizar la experiencia dentro del campus con tecnologías accesibles y útiles.
                </p>
              </div>
              
              <div className="col-lg-6">
                <h3 className="h2 mb-4" style={{color: '#2563eb'}}>Objetivos del Proyecto</h3>
                <ul className="list-unstyled" style={{color: '#374151'}}>
                  <li className="d-flex align-items-start mb-3">
                    <span className="badge rounded-pill me-3 mt-1" style={{backgroundColor: '#60a5fa', color: '#1e3a8a'}}>✓</span>
                    <span>Eliminar problemas de desorientación en el campus</span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="badge rounded-pill me-3 mt-1" style={{backgroundColor: '#93c5fd', color: '#1e3a8a'}}>✓</span>
                    <span>Optimizar el tiempo de desplazamiento de visitantes</span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="badge rounded-pill me-3 mt-1" style={{backgroundColor: '#3b82f6', color: 'white'}}>✓</span>
                    <span>Modernizar la experiencia universitaria</span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="badge rounded-pill me-3 mt-1" style={{backgroundColor: '#2563eb', color: 'white'}}>✓</span>
                    <span>Fomentar mayor participación en eventos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="container py-5">
          <div 
            className="card border-0 shadow-lg p-5"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(96, 165, 250, 0.3)'
            }}
          >
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h2 className="display-5 fw-bold" style={{color: '#1e3a8a'}}>Entregables del Proyecto</h2>
              </div>
            </div>
            
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100" style={{backgroundColor: '#f8fafc', border: '2px solid #60a5fa'}}>
                  <div className="card-body">
                    <div className="fw-bold mb-2" style={{color: '#2563eb'}}>📱 Aplicación Móvil</div>
                    <p className="card-text small" style={{color: '#4b5563'}}>
                      Sitio móvil funcional con mapa interactivo de la UTEQ
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4">
                <div className="card h-100" style={{backgroundColor: '#f8fafc', border: '2px solid #93c5fd'}}>
                  <div className="card-body">
                    <div className="fw-bold mb-2" style={{color: '#1d4ed8'}}>🔍 Módulo de Búsqueda</div>
                    <p className="card-text small" style={{color: '#4b5563'}}>
                      Sistema de búsqueda y selección de destinos específicos
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4">
                <div className="card h-100" style={{backgroundColor: '#f8fafc', border: '2px solid #3b82f6'}}>
                  <div className="card-body">
                    <div className="fw-bold mb-2" style={{color: '#1e40af'}}>🗺️ Geolocalización</div>
                    <p className="card-text small" style={{color: '#4b5563'}}>
                      Sistema para trazar rutas desde la ubicación del usuario
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4">
                <div className="card h-100" style={{backgroundColor: '#f8fafc', border: '2px solid #2563eb'}}>
                  <div className="card-body">
                    <div className="fw-bold mb-2" style={{color: '#1e3a8a'}}>⚙️ Panel Admin</div>
                    <p className="card-text small" style={{color: '#4b5563'}}>
                      Administración para registrar y mostrar eventos en el mapa
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4">
                <div className="card h-100" style={{backgroundColor: '#f8fafc', border: '2px solid #1d4ed8'}}>
                  <div className="card-body">
                    <div className="fw-bold mb-2" style={{color: '#1e40af'}}>📱 Diseño Responsive</div>
                    <p className="card-text small" style={{color: '#4b5563'}}>
                      Interfaz intuitiva y adaptable a todas las pantallas
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-4">
                <div className="card h-100" style={{backgroundColor: '#f8fafc', border: '2px solid #60a5fa'}}>
                  <div className="card-body">
                    <div className="fw-bold mb-2" style={{color: '#2563eb'}}>📚 Documentación</div>
                    <p className="card-text small" style={{color: '#4b5563'}}>
                      Manual de uso y documentación técnica del sistema
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="download" className="container py-5">
          <div 
            className="card border-0 shadow-lg p-5 text-center"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(96, 165, 250, 0.3)'
            }}
          >
            <h2 className="display-4 fw-bold mb-4" style={{color: '#1e3a8a'}}>
              ¿Listo para explorar la UTEQ?
            </h2>
            <p className="fs-4 mb-5" style={{color: '#374151'}}>
              Descarga UTEQ Map ahora y nunca más te pierdas en el campus. 
              Navegación intuitiva, eventos en tiempo real y completamente gratis para toda la comunidad universitaria.
            </p>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="btn btn-lg px-5 py-3 mb-3"
              style={{
                backgroundColor: '#1e3a8a',
                borderColor: '#1e3a8a',
                color: 'white',
                borderRadius: '50px',
                fontSize: '1.3rem',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1e40af';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1e3a8a';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <Download size={28} />
              <span className="ms-2">
                {isDownloading ? 'Preparando descarga...' : 'Descargar UTEQ Map'}
              </span>
            </button>
            <div className="fw-semibold" style={{color: '#60a5fa'}}>
              ✨ Aplicación oficial de la Universidad Tecnológica de Querétaro
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container py-5 mt-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)' }}>
          <div className="row align-items-center">
            <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdCNoJzxfIu28gWJwjfk0-dpR8jV7bb402Q&s" 
                alt="UTEQ Logo" 
                width="32"
                height="32"
                className="rounded me-3"
              />
              <div className="text-white" style={{opacity: '0.9'}}>
                <div>&copy; 2025 UTEQ Map. Universidad Tecnológica de Querétaro.</div>
              </div>
            </div>
            <div className="col-md-6 text-md-end text-white" style={{opacity: '0.9'}}>
              <div>Versión 1.0.0 • Última actualización: Agosto 2025</div>
              <small className="d-block mt-1">Desarrollado para mejorar la experiencia universitaria</small>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;