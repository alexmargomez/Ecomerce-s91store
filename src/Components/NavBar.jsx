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
      MenuOpen? "flex adsolute flex-col items-center justify-around h-screen w-screen bg-gradient-to-t from-[#FFB8B8] to-[#1E1E1E]"
      :
      "flex adsolute items-center justify-around h-[50px] w-screen"
      }
    >
      {!MenuOpen && 
        <AiOutlineMenu 
          onClick={() => setMenuOpen(true)}
          cursor={"pointer"}
          color="#f1f1f1" 
          size={30}
        />
      }
      
      {MenuOpen && (
        <>
          <div>
            <AiOutlineShoppingCart
              cursor={"pointer"} 
              color="#f1f1f1" 
              size={30} 
            />
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