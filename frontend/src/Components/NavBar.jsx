import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const links = [
  {
    name: 'Acerca de',
    link: '#acerca-de',
    type: 'internal'
  },
  {
    name: 'Comprar',
    link: '/shop',
    type: 'external'
  },
  {
    name: 'Nosotros',
    link: '#nosotros',
    type: 'internal'
  },
];

const NavBar = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Función para hacer scroll a la sección
  const handleScrollToSection = (e, link) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del <a>

    // Si el link es interno, primero navegar a la página raíz
    if (link.startsWith("#")) {
      navigate('/'); // Redirigir a la página principal
      setTimeout(() => {
        const section = document.querySelector(link); // Seleccionar la sección
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' }); // Hacer scroll a la sección
        }
      }, 100); // Esperamos un poco para que la navegación se complete
    }

    setMenuOpen(false); // Cerrar el menú cuando se haga click
  };

  return (

    <>
    <div id="navbar" className='pt-[50px] '/>
    <div className="fixed top-0 left-0 z-10 flex items-center justify-between h-[50px] w-full shadow-md bg-gradient-to-r from-slate-50">
      <div className="flex-1 flex justify-center">
        <Link to="/cart">
          <AiOutlineShoppingCart cursor="pointer" size={30} />
        </Link>
      </div>
      <div className="flex-1 flex justify-center">
        {!MenuOpen ? (
          <h1>
            <Link 
              className="text-3xl font-bold text-stroke" 
              to="/"
              onClick={(e) => handleScrollToSection(e, "#navbar")}
            >
              S91 STORE
            </Link>
          </h1>
        ) : (
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 ">
            {links.map((l, index) =>
              l.type === 'internal' ? (
                <a
                  key={index}
                  href={l.link} // Usamos el link sin el '/'
                  onClick={(e) => handleScrollToSection(e, l.link)} // Llamamos a la función de scroll
                  className="outline-2 px-2 py-1 hover:bg-slate-200"
                >
                  {l.name}
                </a>
              ) : (
                <Link
                  key={index}
                  to={l.link}
                  onClick={() => setMenuOpen(false)}
                  className="outline outline-2 px-2 py-1 hover:bg-slate-200"
                >
                  {l.name}
                </Link>
              )
            )}
          </div>
        )}
      </div>
      <div className="flex-1 flex justify-center">
        {/* Cambiar entre menú y "X" */}
        {!MenuOpen ? (
          <AiOutlineMenu onClick={() => setMenuOpen(!MenuOpen)} cursor="pointer" size={30} />
        ) : (
          <AiOutlineClose onClick={() => setMenuOpen(!MenuOpen)} cursor="pointer" size={30} />
        )}
      </div>
    </div>
    </>
    
  );
};

export default NavBar;
