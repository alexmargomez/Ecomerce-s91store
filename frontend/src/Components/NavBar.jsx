import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const links=[
    {
      name: 'Acerca de',
      link: '/',
    },
    {
      name: 'Comprar',
      link: '/shop',
    },
    {
      name: 'Nosotros',
      link: '/',
    },
];
const NavBar = () => {

  const[MenuOpen, setMenuOpen] =   useState(false);

  return (
    <div className= "flex items-center justify-between h-[50px] w-full shadow-md ">
      <div className='flex-1 flex justify-center'>
        <Link to="/cart">
          <AiOutlineShoppingCart cursor="pointer" size={30} />
        </Link>
      </div>
      <div className=" flex-1 flex justify-center">
        {!MenuOpen ? (
          <h1 >
            <Link className="text-3xl font-bold text-stroke" to="/">S91 STORE</Link>
          </h1>
        ) : (
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-10 ">
            {links.map((l, index) => (
              <Link
                key={index}
                to={l.link}
                onClick={() => setMenuOpen(false)}
                className={`${
                  l.name === "Comprar" ? " outline outline-2 px-2 py-1 hover:bg-slate-200" : "outline-2 px-2 py-1 hover:bg-slate-200"
                }`}
              >
                {l.name}

              </Link>
            ))}
          </div>
        )}
      </div>

      <div className='flex-1 flex justify-center'>
        <AiOutlineMenu
          onClick={() => setMenuOpen(!MenuOpen)}
          cursor="pointer"
          size={30}
        />
      </div>
    </div>
  )
};

export default NavBar;