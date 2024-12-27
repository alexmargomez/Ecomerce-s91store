import React from 'react'
import logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <div>
      <div className='flex pt-10'>
        <div className='w-1/3 flex flex-col p-10 pr-0'>
          <p className='h-1/2 flex items-center justify-end'>@S91STORE</p>
          <p className='h-1/2 flex items-center justify-end '>3245022628</p>
        </div>
        <div className='w-1/3 flex items-center justify-center'>
          <img src={logo} alt="logo" className="max-w-[200px] h-auto"/>
        </div>
        <div className='w-1/3 flex flex-col p-10 pl-0'>
          <p className='h-1/2 flex items-center justify-start '>@S21STORE</p>
          <p className='h-1/2 flex items-center justify-start '>Calle 17 # 9-34</p>
        </div>
      </div>
      <div className='items-center justify-center pb-5 pt-5'>
        <p className='text-center'>&copy; 2024 S21-STORE. Todos los derechos reservados</p>
        <p className='text-center'>Desarrollado por Fabio Alexmar Gómez Sanmiguel</p>
      </div>
    </div>
  )
}

export default Footer