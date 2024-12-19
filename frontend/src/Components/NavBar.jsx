import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const links=[
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Shop',
      link: '/shop',
    },
    {
      name: 'Orders',
      link: '/orders',
    },
    {
      name: 'Logout',
      link: '/logout',
    },
];
const NavBar = () => {

  const[MenuOpen, setMenuOpen] =   useState(false);

  return (
    <div className={
      MenuOpen
      ? "  md:flex-row  md:justify-evenly   md:h-[50px] md:w-[100%] md:bg-none flex absolute  flex-col items-center justify-around h-screen w-screen bg-gradient-to-t from-[#FFB8B8] to-[#1E1E1E]"
      : "flex  absolute items-center justify-around  h-[50px] w-[100%] "
      }
    >
      {!MenuOpen && 
        <>
          <AiOutlineMenu 
            onClick={() => setMenuOpen(true)}
            cursor={"pointer"}
            color="#f1f1f1" 
            size={30}
          />
          <p className="text-cl text-gray-100 font-semibold">Ecomerce Shop</p>
          <AiOutlineShoppingCart
            cursor={"pointer"} 
            color="#f1f1f1" 
            size={30} 
          />
        </>
      }
      
      {MenuOpen && (
        <>
          <div>
            
          </div>
          {links.map((l) => (
              <Link 
                className="flex pl-10 pr-10 text-2x1 font-semibold w-15 text-[#f1f1f1]"
                to={l.link}
                onClick={()=>setMenuOpen(false)}
              >
                {l.name}
              </Link>
            ))}
          <div>
            <AiOutlineClose 
              cursor={"pointer"}
              color="#f1f1f1" 
              size={30} 
              onClick={()=>setMenuOpen(false)}
            />
          </div>
        </>
      )}
    </div>
  )
};

export default NavBar;