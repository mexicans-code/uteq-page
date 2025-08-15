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

const Target = ({ size = 24 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const Users = ({ size = 24 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const App = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = './build/UTEQ-Map.apk';
      link.download = 'UTEQ-Map.apk';
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
      
      <style>
        {`
          .gradient-bg {
            background: linear-gradient(135deg, #1a202c 0%, #2c5aa0 50%, #1a202c 100%);
            min-height: 100vh;
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .icon-circle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(45deg, #2563eb, #60a5fa);
            color: white;
          }
          
          .hover-transform:hover {
            transform: translateY(-5px);
            transition: all 0.3s ease;
          }
          
          .btn-download {
            background: linear-gradient(45deg, #2563eb, #3b82f6);
            border: none;
            padding: 12px 30px;
            font-weight: 600;
            border-radius: 50px;
            transition: all 0.3s ease;
          }
          
          .btn-download:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          }
          
          .objective-card {
            background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(30, 58, 138, 0.15));
            backdrop-filter: blur(10px);
            border: 1px solid rgba(96, 165, 250, 0.3);
            border-radius: 15px;
            transition: transform 0.3s ease;
          }
          
          .objective-card:hover {
            transform: translateY(-5px);
          }
          
          .list-dot {
            width: 8px;
            height: 8px;
            background: #60a5fa;
            border-radius: 50%;
            display: inline-block;
            margin-right: 15px;
          }
        `}
      </style>

      <div className="gradient-bg">
        {/* Header */}
        <nav className="glass-effect">
          <div className="container py-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdCNoJzxfIu28gWJwjfk0-dpR8jV7bb402Q&s" 
                  alt="UTEQ Logo" 
                  width="48" height="48"
                  className="rounded me-3"
                />
                <div>
                  <h1 className="h4 text-white mb-0">UTEQ Map</h1>
                  <small className="text-info">Campus Interactivo</small>
                </div>
              </div>
              <div className="d-none d-md-flex">
                <a href="#intro" className="nav-link text-white me-4">Introducción</a>
                <a href="#objectives" className="nav-link text-white me-4">Objetivos</a>
                <a href="#download" className="nav-link text-white">Descargar</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container py-5">
          <div className="row justify-content-center text-center py-5">
            <div className="col-lg-10">
              <h2 className="display-2 fw-bold text-white mb-4">
                Navega por la <span className="text-info">UTEQ</span>
              </h2>
              <p className="lead text-white mb-5 fs-4 opacity-75">
                Sistema de navegación interactivo para el campus universitario que optimiza 
                la experiencia de visitantes y personal académico.
              </p>
              
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="btn btn-download text-white btn-lg"
              >
                <Download size={20} />
                <span className="ms-2">
                  {isDownloading ? 'Descargando...' : 'Descargar UTEQ Map'}
                </span>
              </button>
              
              <p className="text-info mt-4">
                <small>Android 7.0+ • 55 MB • Gratis</small>
              </p>
            </div>
          </div>
        </section>

        

        <section id="intro" className="container py-5">
          <div className="glass-effect rounded p-5">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle me-3">
                    <Map size={28} />
                  </div>
                  <h3 className="h2 text-white mb-0">Introducción</h3>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <p className="text-white fs-5 mb-4">
                  El proyecto UTEQ Map surge como respuesta a la necesidad de modernizar 
                  la experiencia de navegación dentro del campus universitario de la 
                  Universidad Tecnológica de Querétaro.
                </p>
                <p className="text-white-50">
                  Esta herramienta digital integra tecnologías de geolocalización, mapas 
                  interactivos y gestión de eventos para crear una plataforma unificada 
                  que facilite la orientación y mejore la eficiencia en el campus.
                </p>
              </div>
              
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="glass-effect p-4 rounded hover-transform">
                      <Navigation size={24} className="text-info mb-3" />
                      <h6 className="text-white mb-2">Navegación GPS</h6>
                      <small className="text-white-50">Rutas optimizadas en tiempo real</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="glass-effect p-4 rounded hover-transform">
                      <Calendar size={24} className="text-info mb-3" />
                      <h6 className="text-white mb-2">Gestión de Eventos</h6>
                      <small className="text-white-50">Eventos académicos y culturales</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Objetivos */}
        <section id="objectives" className="container py-5">
          <div className="text-center mb-5">
            <h3 className="display-4 fw-bold text-white mb-3">Objetivos del Proyecto</h3>
            <p className="text-white-50 fs-5">Metas claras para transformar la experiencia universitaria</p>
          </div>

          <div className="row g-4">
            {/* Objetivo General */}
            <div className="col-lg-6">
              <div className="objective-card p-5 h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle me-3">
                    <Target size={28} />
                  </div>
                  <h4 className="h3 text-white mb-0">Objetivo General</h4>
                </div>
                <p className="text-white fs-5 mb-0">
                  Desarrollar un sistema de navegación digital interactivo que facilite 
                  la ubicación de espacios, servicios y eventos dentro del campus de la UTEQ, 
                  mejorando significativamente la experiencia de orientación para toda la 
                  comunidad universitaria.
                </p>
              </div>
            </div>
            

            {/* Objetivos Específicos */}
            <div className="col-lg-6">
              <div className="objective-card p-5 h-100">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-circle me-3">
                    <Users size={28} />
                  </div>
                  <h4 className="h3 text-white mb-0">Objetivos Específicos</h4>
                </div>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-3">
                    <span className="list-dot mt-2"></span>
                    <span className="text-white">Implementar geolocalización en tiempo real para navegación precisa</span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="list-dot mt-2"></span>
                    <span className="text-white">Crear un sistema de gestión de eventos académicos y culturales</span>
                  </li>
                  <li className="d-flex align-items-start mb-3">
                    <span className="list-dot mt-2"></span>
                    <span className="text-white">Desarrollar funcionalidades administrativas para personal autorizado</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="list-dot mt-2"></span>
                    <span className="text-white">Garantizar accesibilidad universal y diseño responsivo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="container py-5">
          <div className="objective-card p-5 text-center">
            <h3 className="h2 fw-bold text-white mb-4">¿Listo para explorar el campus?</h3>
            <p className="text-white fs-5 mb-4 col-lg-8 mx-auto">
              Únete a la nueva era de navegación universitaria. Descarga UTEQ Map 
              y descubre lo fácil que puede ser encontrar tu camino.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="btn btn-download text-white btn-lg"
              >
                <Download size={20} />
                <span className="ms-2">
                  {isDownloading ? 'Descargando...' : 'Descargar para Android'}
                </span>
              </button>
              <div className="text-info">
                <div>Próximamente en iOS</div>
                <small>Versión 1.0.0 • Última actualización: Agosto 2025</small>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-top border-secondary mt-5">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdCNoJzxfIu28gWJwjfk0-dpR8jV7bb402Q&s" 
                  alt="UTEQ Logo" 
                  width="32" height="32"
                  className="rounded me-3"
                />
                <div className="text-white-50">
                  <div>&copy; 2025 UTEQ Map - Universidad Tecnológica de Querétaro</div>
                </div>
              </div>
              <div className="col-md-6 text-md-end text-white-50">
                <small>Desarrollado para mejorar la experiencia universitaria</small>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;