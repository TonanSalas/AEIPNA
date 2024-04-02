import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: "#6c132b"}}>
        <div className='container px-5'>
            <a className="navbar-brand" href="#!">AEIPNA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#proyectos" asp-area="" asp-controller="Home" asp-action="Index">
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#tproyectosop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Quienes Somos
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#proyectos">Proyectos</a>
                            <a className="dropdown-item" href="#mision">Misión</a>
                            <a className="dropdown-item" href="#vision">Visión</a>
                            <a className="dropdown-item" href="#mesadirectiva">Mesa Directiva</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#asociaciones" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Aliados
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <a className="dropdown-item" href="#asociaciones">Asociaciones Relacionadas</a>
                            <a className="dropdown-item" href="#patrocinadores">Patrocinadores</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#sesiones" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Actividades
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                            <a className="dropdown-item" href="#sesiones">Sesiones</a>
                            <a className="dropdown-item" href="#eventos">Eventos</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#redes">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
      <header className="py-5" style={{backgroundColor: "#6c132b"}}>
    <div className="container px-5">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-12 mb-0 p-0">
                <img className="img-fluid rounded mb-0 p-0" 
                    src="/assets/Plantilla-Collage.jpg" 
                    alt="Collage" />
            </div>
        </div>
        <div className="row gx-5 align-items-center">
            <div className="col-lg-12 justify-content-center">
                <div className="text-center my-5">
                    <h1 className="display-5 fw-bolder text-white mb-2">
                        Asociación de Egresados del Instituto Politécnico Nacional en el Estado de Aguascalientes
                    </h1>
                    <p className="lead text-white-50 mb-4">
                        La Asociación de Egresados del Instituto Politécnico Nacional en el Estado de Aguascalientes tiene como objetivo principal integrar a los ex alumnos de esta Casa de estudios radicados en el estado de Aguascalientes con la finalidad de ser el vínculo entre las autoridades del IPN y las del Estado para el impulso de Centros de Investigación y estudios de posgrado en la entidad, así como emprender acciones altruistas en beneficio de la población más necesitada en donde la contribución de los politécnicos en pro de un mejor país quede de manifiesto.
                    </p>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#proyectos">Conocenos</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<section className="py-5 bg-light" id="mision">
    <div className="container px-5 my-5">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
                <img className="img-fluid rounded mb-5 mb-lg-0" 
                    src="/assets/Mision.png" 
                    alt="Misión" />
                </div>
            <div className="col-lg-6">
                <h2 className="fw-bolder">Misión</h2>
                <p className="lead fw-normal text-muted mb-0">
                    Promover el liderazgo y prestigio del Instituto Politécnico Nacional en el estado de Aguascalientes a través de acciones que mejoren el nivel educativo en la Entidad y de actividades altruistas a favor de la población más desprotegida.
                </p>
            </div>
        </div>
    </div>
</section>
<section className="py-5" id="vision">
    <div className="container px-5 my-5">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-first order-lg-last">
                <img className="img-fluid rounded mb-5 mb-lg-0" 
                    src="/assets/Vision.png" 
                    alt="Visión" />
            </div>
            <div className="col-lg-6">
                <h2 className="fw-bolder">Visión</h2>
                <p className="lead fw-normal text-muted mb-0">
                    Ser la agrupación líder en el Estado que ofrece los conocimientos y experiencia de sus agremiados en acciones a favor de la educación y de la población más desprotegida.
                </p>
            </div>
        </div>
    </div>
</section>
<section className="py-5 bg-light" id="mesadirectiva">
    <div className="container px-5 my-5">
        <div className="text-center mb-5">
            <h2 className="fw-bolder">Mesa Directiva</h2>
        </div>
        <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/PabloMedina.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">Pablo de Jesús Medina Llamas</h5>
                    <div className="fst-italic text-muted">Presidente</div>
                </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/GabrielSuarez.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">José Gabriel Suárez Delgado</h5>
                    <div className="fst-italic text-muted">Asesor de la Presidencia &amp; Presidente anterior</div>
                </div>
            </div>
            <div className="col mb-5 mb-5 mb-sm-0">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/AntonioEscobar.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">José Antonio Escobar Escobar</h5>
                    <div className="fst-italic text-muted">Secretario Técnico</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/MiguelLicon.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">Miguel Licón Dávila</h5>
                    <div className="fst-italic text-muted">Secretario de Administración</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/AlfonsoZarco.png" 
                    alt="Mesa Directiva" />
                    <img src="/assets/blackribbon.jpg" alt="pesame" style={{position: "absolute", width: "40px", height: "40px"}} />
                    <h5 className="fw-bolder">Alfonso Zarco Muñoz</h5>
                    <div className="fst-italic text-muted">Comité de Afiliación y Servicios a Agremiados</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/MarySalud.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">María Salud Rangel Martínez</h5>
                    <div className="fst-italic text-muted">Comité de Comunicación</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/EnriqueGiles.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">Enrique Giles Algara</h5>
                    <div className="fst-italic text-muted">Comité de Relaciones con el IPN</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/FernandoMorett.jpg" 
                    alt="Mesa Directiva" />
                    <img src="/assets/blackribbon.jpg" alt="pesame" style={{position: "absolute", width: "40px", height: "40px"}} />
                    <h5 className="fw-bolder">Fernando Morett</h5>
                    <div className="fst-italic text-muted">Comité de Relaciones con Gobierno del Estado</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/VirginiaMichel.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">Virginia Michel Navarro</h5>
                    <div className="fst-italic text-muted">Comité de Responsabilidad Social</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/JorgeRodriguez.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">Jorge Rodríguez Calderón</h5>
                    <div className="fst-italic text-muted">Comité de Servicio a la Juventud y Apoyo Empresarial</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/hernadezToriz.jpg" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">Héctor Hernández Toriz</h5>
                    <div className="fst-italic text-muted">Comité de Proyectos Especiales</div>
                </div>
            </div>
            <div className="col mb-5">
                <div className="text-center">
                    <img className="img-fluid rounded-circle mb-4 px-4" 
                    src="/assets/MartinRojas.png" 
                    alt="Mesa Directiva" />
                    <h5 className="fw-bolder">Martín Rojas Preciat</h5>
                    <div className="fst-italic text-muted">Tesorero</div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-5" id="asociaciones">
    <div className="container px-5 my-5">
        <div className="text-center mb-5">
            <h2 className="fw-bolder">Asociaciones Relacionadas</h2>
        </div>
        <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <a href="https://www.ipn.mx/">
                        <img className="card-img-top img-fluid mb-4 px-4"  
                        style={{minHeight: "150px"}}
                        src="/assets/IPN.png" 
                        alt="IPN" />
                    </a>
                    <h5 className="fw-bolder"><a href="https://www.ipn.mx/">Instituto Politécnico Nacional</a></h5>
                </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <a href="http://www.iea.gob.mx/">
                        <img className="card-img-top img-fluid mb-4 px-4" 
                        style={{minHeight: "150px"}}
                        src="/assets/IEA.png" 
                        alt="IEA" />
                    </a>
                    <h5 className="fw-bolder"><a href="http://www.iea.gob.mx/">Instituto de Educación de Aguascalientes</a></h5>
                </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <a href="https://upa.edu.mx/">
                        <img className="card-img-top img-fluid mb-4 px-4" 
                        style={{minHeight: "150px"}}
                        src="/assets/UPA.png" 
                        alt="UPA" />
                    </a>
                    <h5 className="fw-bolder"><a href="https://upa.edu.mx/">Universidad Politécnica de Aguascalientes</a></h5>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-5 bg-light" id="patrocinadores">
    <div className="container px-5 my-5">
        <div className="text-center mb-5">
            <h2 className="fw-bolder">Patrocinadores</h2>
        </div>
        <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <a href="http://www.sia-automation.com.mx/">
                    <img className="img-fluid mb-4 px-4" 
                    src="/assets/SIN.png" 
                    alt="Mesa Directiva" />
                    </a>
                    <h5 className="fw-bolder"><a href="http://www.sia-automation.com.mx/">
                    Soluciones de Automatización</a></h5>
                    <div className="fst-italic text-muted">
                        Somos una empresa especialista en la construcción, montaje, y automatización de cualquier proceso o equipos especiales de alta tecnología para la industria
                    </div>
                </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <a href="https://www.integra-consultoria.com.mx/">
                    <img className="img-fluid mb-4 px-4" 
                    src="/assets/LogoIntegra.jpg" 
                    alt="Mesa Directiva" />
                    </a>
                    <h5 className="fw-bolder"><a href="https://www.integra-consultoria.com.mx/">
                    Mejora de Procesos y Sistemas Integrales de Información</a></h5>
                    <div className="fst-italic text-muted">
                        Somos una empresa comprometida con entender la cultura y retos de su empresa para transformar sus procesos de negocio a Operaciones Esbeltas y la implantación de soluciones informáticas
                    </div>
                </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <a href="https://www.electrominero.com/">
                    <img className="img-fluid mb-4 px-4" 
                    src="/assets/LogoEM.jpg" 
                    alt="Mesa Directiva" />
                    </a>
                    <h5 className="fw-bolder"><a href="https://www.electrominero.com/">
                    Instalaciones Eléctricas Industriales</a></h5>
                    <div className="fst-italic text-muted">
                        Empresa especializada en instalaciones eléctricas industriales, así como proyectos llave en mano, con un  servicio personalizado para cumplir con las expectativas de nuestros clientes
                    </div>
                </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <a href="http://cervezatriana.com/">
                    <img className="img-fluid mb-4 px-4" 
                    src="/assets/LogoTriana.jpg" 
                    alt="Mesa Directiva" />
                    </a>
                    <h5 className="fw-bolder"><a href="http://cervezatriana.com/">
                    Cerveza Triana</a></h5>
                    <div className="fst-italic text-muted">
                        Empresa hidrocálida, fundada por José Luis Quiroz, egresado Politécnico, con una trayectoria en el mundo cervecero, tomando lo mejor de su experiencia laboral en una de las empresas cerveceras más grandes México y de talla Internacional
                    </div>
                </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                    <a href="https://maindsteel.com.mx/index">
                    <img className="img-fluid mb-4 px-4" 
                    src="/assets/Maindsteel.jpg" 
                    alt="Mesa Directiva" />
                    </a>
                    <h5 className="fw-bolder"><a href="https://maindsteel.com.mx/index">
                    Maindsteel</a></h5>
                    <div className="fst-italic text-muted">
                        Somos una empresa orgullosamente mexicana que cuenta con más de 12 años de trayectoria siendo líder en manufactura y comercialización de productos metálicos de la más alta calidad
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-5" id="sesiones">
    <div className="container px-5">
        <div className="rounded-3 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="fw-bolder">Sesiones</h1>
            </div>
        </div>
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div>
                    <img className="rounded img-fluid" 
                        src="/assets/SesionNoviembre.jpeg" 
                        alt="Convivio" />
                </div>
                <h2 className="h4 fw-bolder">Noviembre 2022</h2>
                <p>Interesante plática de nuestro compañero el Ing. Rigoberto Castañón Nava, ingeniero Químico Industrial, generación 68 - 72 de la ESIQIE, con el tema "S&C ELECTRIC CO. UNA EMPRESA GLOBAL, UNA EXPERIENCIA DE VIDA" dando paso a una serie de preguntas por parte de los asistentes que fueron respondidas de manera amplia por el ponente.
Con el calor del día, se abrió el área del asador para que un maravilloso equipo de parrilleros preparara una deliciosa carne asada, unos chiles rellenos de queso y salchichas envueltos en tocino, unos magistrales frijoles zacatecanos preparados por nuestro excelente anfitrión Juan Manuel Nájera, que acompañamos con una cervezas bien frías.
Después de haber satisfecho nuestro apetito, entre risas y anécdotas de juventud jajaja, dimos por concluida nuestro evento con el clásico Huelum, huelum, gloria.</p>
                <a className="text-decoration-none" href="#redes">
                    Conoce mas en nuestras redes
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div>
                    <img className="rounded img-fluid" 
                        src="/assets/SesionOctubre.jpeg" 
                        alt="Convivio" />
                </div>
                <h2 className="h4 fw-bolder">Octubre 2022</h2>
                <p>
                    Como cada mes, hoy sábado 8 de octubre realizamos nuestra sesión - desayuno en la Cueva del Burro, en la cual nuestro compañero Jaime Benítez Portillo, Director General de SIA Automation, nos dió un excelente plática sobre el desarrollo del proyecto realizado en la empresa Horizontec, de la cual es socio, para diseñar y construir el Halcón II, un avión diseñado por ingenieros aereonauticos de la ESIME - IPN, que surcará los cielos del país a partir de éste año. 
Después de responder de manera amplia a las inquietudes expresadas por los asistentes, se dió por terminada la sesión entonando nuestra clásica porra  Huelum, huelum, gloria....
Graduación del Halcón II. A la mitad del vídeo aparece Jaime Benítez con su familia, momento en el cual el Director General de Horizontec le agradece su participación en el proyecto.
                </p>
                <a className="text-decoration-none" href="#redes">
                    Conoce mas en nuestras redes
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div>
                    <img className="rounded img-fluid" 
                        src="/assets/SesionSeptiembre.jpeg" 
                        alt="Convivio" />
                </div>
                <h2 className="h4 fw-bolder">Septiembre 2022</h2>
                <p>
                    El concepto del alma en el pensamiento del Dr. Jesús Díaz de León Ávila, polímata aguascalentense del siglo XIX, fue el nombre de la interesante plática que nuestro compañero el Dr.  Xavier López nos impartió, donde analizó un hombre atormentado entre la fe y la razón, para dar respuesta a algunas preguntas, como: ¿qué objeto tiene su trabajo?, ¿cómo aborda el tema?, ¿bajo qué circunstancias lo escribió?, ¿qué argumentos utiliza?, ¿qué fuentes utilizó como referencia?, ¿qué aportaciones nos ofrece?, y otras. Bien pronto reconoció que la idea del alma está basada en un concepto filosófico que contrapone el materialismo con el idealismo y sus argumentos siguen entonces la vía del racionalismo especulativo.
                </p>
                <a className="text-decoration-none" href="#redes">
                    Conoce mas en nuestras redes
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div>
                    <img className="rounded img-fluid" 
                        src="/assets/SesionAgosto.jpeg" 
                        alt="Convivio" />
                </div>
                <h2 className="h4 fw-bolder">Agosto 2022</h2>
                <p>
                    Sesión a cargo de nuestro compañero Ing. Jaime Benitez Portillo, Director general en SIA AUTOMATION S DE R L DE C V.
SIA Automation es una empresa dedicada a la creación de avionetas para uso empresarial. La compañía ha ganado reconocimiento por su enfoque en la innovación y la eficiencia en la producción de aviones de alta calidad. Con un equipo de ingenieros altamente capacitados y una filosofía de mejora continua, SIA Automation ha logrado establecerse como líder en el mercado de aviación empresarial. Además, la compañía se esfuerza por minimizar su impacto ambiental y utiliza tecnologías sostenibles en su producción. Con una amplia gama de productos y servicios, SIA Automation ofrece soluciones personalizadas para satisfacer las necesidades específicas de cada cliente. En resumen, SIA Automation es una empresa dedicada a brindar avionetas de alta calidad y eficientes para el uso empresarial.
                </p>
                <a className="text-decoration-none" href="#redes">
                    Conoce mas en nuestras redes
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div>
                    <img className="rounded img-fluid" 
                        src="/assets/SesionJunio.jpeg" 
                        alt="Convivio" />
                </div>
                <h2 className="h4 fw-bolder">Junio 2022</h2>
                <p>
                    Juan Manuel Nájera Pérez es un Ing. Electricista que ha dedicado gran parte de su vida profesional a la construcción de transformadores y al trabajo en la Comisión Federal de Electricidad (CFE). Durante su tiempo en Nissan, se especializó en la fabricación de transformadores de alta calidad y en el desarrollo de tecnologías innovadoras para mejorar su eficiencia y rendimiento. Más tarde, en la CFE, utilizó sus conocimientos y habilidades para mejorar la infraestructura eléctrica y garantizar un suministro estable de energía a comunidades de todo México. Su historia demuestra su pasión por la ingeniería y su dedicación a hacer una diferencia positiva en la vida de las personas.
                </p>
                <a className="text-decoration-none" href="#redes">
                    Conoce mas en nuestras redes
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</section>
<section className="py-5 bg-light" id="eventos">
    <div className="container px-5">
        <div className="bg-light rounded-3 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="fw-bolder">Eventos</h1>
            </div>
        </div>
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div>
                    <img className="rounded img-fluid" 
                        src="/assets/ApoyoAsilo.jpeg" 
                        alt="Convivio" />
                </div>
                <h2 className="h4 fw-bolder">Apoyo Asilo Sagrada Familia</h2>
                <p>
                    El evento de apoyo al asilo La Sagrada Familia fue un éxito en septiembre de 2022, donde la comunidad se unió para donar suministros y equipo médico esencial. Se recaudaron productos de limpieza, artículos de higiene y alimentos, así como camas un glucómetro y un baumanometro. Los residentes quedaron agradecidos y el personal expresó su gratitud. El evento fue un testimonio del poder de la unidad y la generosidad de la comunidad y se espera que continúe en el futuro.
                </p>
                <a className="text-decoration-none" href="#redes">
                    Conoce mas en nuestras redes
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div>
                    <img className="rounded img-fluid" 
                        src="/assets/ConvivioJulio.jpeg" 
                        alt="Convivio" />
                </div>
                <h2 className="h4 fw-bolder">Convivio Quinta Bugambilias Julio 2022</h2>
                <p>
                    Con la asistencia entusiasta de un gran número de egresados, éste sábado 9 de julio celebramos el 39 aniversario de la fundación de la Asociación de Egresados del Instituto Politécnico Nacional en Aguascalientes AC.
A partir del medio día fuimos llegando a la casa de campo de nuestro compañero Juan Manuel Nájera, varios de ellos en compañía de  esposas, hijos y nietos, para compartir una deliciosa comida y unas cervezas bien frías.
La reunión transcurrió en un ambiente festivo, con un gran número de historias y anécdotas de los asistentes, al final de la cual concluyó con nuestro clásico Huelum y la foto grupal.
                </p>
                <a className="text-decoration-none" href="#redes">
                    Conoce mas en nuestras redes
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
                <div>
                    <img className="rounded img-fluid" 
                        src="/assets/Convivio03072021.png" 
                        alt="Convivio" />
                </div>
                <h2 className="h4 fw-bolder">Convivio Quinta Bugambilias Julio 2021</h2>
                <p>
                    Tomamos el camino que lleva al poblado GRACIAS A DIOS, los caballos bien alimentados y perfectamente enganchados a la Calesa para el viaje. Varias leguas después de la Tomatina, trepando la cuesta y con los pies del muerto a la izquierda, coronamos, no sin antes apreciar el verde del campo circundante, obra de los fenómenos metrológicos que han traído vida a la campiña. En esta tierra semiárida damos gracias a la Deidad por las gotas del cielo, no muy frecuentes por estos lares.
                </p>
                <a className="text-decoration-none" href="#redes">
                    Conoce mas en nuestras redes
                    <i className="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</section>
<section className="py-5" id="postumo">
    <div className="container px-5 my-5">
        <div className="rounded-3 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="fw-bolder">Roconocimiento postumo</h1>
            </div>
        </div>
        <div className="row gx-5 mt-5 align-items-center">
            <div className="col-lg-4">
                <img className="img-fluid rounded mb-5 mb-lg-0 grayscale" 
                    src="/assets/LuisGerardoHernandez.jpg" 
                    alt="Fernando Morett" />
                </div>
            <div className="card col-lg-8 bg-light">
                <h2 className="fw-bolder">Luis Gerardo Hernandez Ayala</h2>
                <p className="lead fw-normal text-muted mb-0">
                    Médico Cirujano egresado de la ENCB.
                </p>
                <p className="lead fw-normal text-muted mb-0">
                    1955-2021
                </p>
            </div>
        </div>
        <div className="row gx-5 mt-5 align-items-center">
            <div className="col-lg-4">
                <img className="img-fluid rounded mb-5 mb-lg-0 grayscale" 
                    src="/assets/FernandoMorett.jpg" 
                    alt="Fernando Morett" />
                </div>
            <div className="card col-lg-8 bg-light">
                <h2 className="fw-bolder">Fernando Morett Alatorre</h2>
                <p className="lead fw-normal text-muted mb-0">
                    Ingeniero en Comunicaiones y Electrónica egresado de ESIME.
                </p>
                <p className="lead fw-normal text-muted mb-0">
                    1950-2022
                </p>
            </div>
        </div>
        <div className="row gx-5 mt-5 align-items-center">
            <div className="col-lg-4">
                <img className="img-fluid rounded mb-5 mb-lg-0 grayscale" 
                    src="/assets/AlfonsoZarco.png" 
                    alt="Alfonso Zarco" />
                </div>
            <div className="card col-lg-8 bg-light">
                <h2 className="fw-bolder">Elias Alfonso Zarco Muñoz</h2>
                <p className="lead fw-normal text-muted mb-0">
                    Ingeniero en Comunicaiones y Electrónica egresado de ESIME.
                </p>
                <p className="lead fw-normal text-muted mb-0">
                    1950-2022
                </p>
            </div>
        </div>
    </div>
</section>
<section className="py-5 bg-light" id="redes">
    <div className="container px-5">
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
            <div className="text-center mb-5">
                <h1 className="fw-bolder">Contáctanos</h1>
                <p className="lead fw-normal text-muted mb-0">Siguenos en nuestras redes sociales</p>
            </div>
            <div className="row gx-5 row-cols-2 row-cols-lg-5 py-5">
                <div className="col mb-3">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-telephone"></i></div>
                    <div className="h5">Whatsapp</div>
                    <p className="text-muted mb-0">
                        <a href="https://web.whatsapp.com/send?phone=5214491803165">
                            (449) 180-3165
                        </a>
                    </p>
                </div>
                <div className="col mb-3">
                    <a href="https://www.instagram.com/politecnicos.ags">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-instagram"></i>
                        </div>
                    </a>
                    <div className="h5">Instagram</div>
                    <p className="text-muted mb-0">
                        <a href="https://www.instagram.com/politecnicos.ags">
                            politecnicos.ags
                        </a>
                    </p>
                </div>
                <div className="col mb-3">
                    <a href="https://www.linkedin.com/company/aeipna">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-linkedin"></i>
                        </div>
                    </a>
                    <div className="h5">Linkedin</div>
                    <p className="text-muted mb-0">
                        <a href="https://www.linkedin.com/company/aeipna">
                            aeipna
                        </a>
                    </p>
                </div>
                <div className="col mb-3">
                    <a href="https://www.youtube.com/channel/UC5zBXi0iWr7b0cq_s-FsLpw">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-youtube"></i>
                        </div>
                    </a>
                    <div className="h5">Youtube</div>
                    <p className="text-muted mb-0">
                        <a href="https://www.youtube.com/channel/UC5zBXi0iWr7b0cq_s-FsLpw">
                            AEIPNA, AC
                        </a>
                    </p>
                </div>
                <div className="col mb-3">
                    <a href="https://www.facebook.com/EgresadosIPNAguascalientes">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                            <i className="bi bi-facebook"></i>
                        </div>
                    </a>
                    <div className="h5 mb-2">Facebook</div>
                    <p className="text-muted mb-0">
                        <a href="https://www.facebook.com/EgresadosIPNAguascalientes">
                            EgresadosIPNAguascalientes
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<div id="map"></div>


    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
      defer
    ></script>
      <footer className="py-5" style={{backgroundColor: "#6c132b"}} >
        <div className="container px-5">
            <p className="m-0 text-center text-white">
                &copy; 2022 - AEIPNA
            </p>
        </div>
      </footer>
    </>
  );
}

export default App;
