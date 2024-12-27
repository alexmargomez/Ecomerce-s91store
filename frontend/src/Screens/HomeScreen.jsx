import React from 'react'
import Imgslider from '../Components/Imgslider';
import logo from '../assets/img/logo.svg';

const HomeScreen = () => {
  return(
    <div >
      {/* Slider Home */}
      <section ide="publicidad" className="h-[calc(100vh-50px)] mt-[50px]">
        <Imgslider />
      </section>
      {/* Acerca de productos y tienda */}
      <section id="acerca-de" className="flex h-screen p-4"> 
        <div className="w-1/2 flex items-center justify-center p-20">
          <div className="px-5 py-20 bg-stone-900">
            <h2 className="text-4xl text-fuchsia-300 font-bold ">S91 Store</h2>
            <br/>
            <p className='  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam officia nihil quo unde laboriosam aperiam quam illo molestias modi ut laborum voluptas dignissimos animi soluta, eveniet nulla. Temporibus, odit!</p>
          </div>
        </div>
        <div className="w-1/2 p-20">
          <img src={logo} alt="Logo" className="max-w-full max-h-full"/>
        </div>
      </section>
      {/* Quienes somos nosotros */}
      <section id="nosotros" >
        <div className=" flex flex-col h-screen p-20 bg-slate-100">
          <h2 className=' text-4xl font-semibold text-center' > Nosotros somos</h2>
          <div className='flex flex-grow p-4'> 
            <div className='w-1/3 flex items-center justify-center'>
              <p>Hola 1</p>
            </div>
            <div className='w-1/3 flex items-center justify-center'>
              <p>hola 2</p>
            </div>
            <div className='w-1/3 flex items-center justify-center'>
              <p>hola 3</p>
            </div>
          </div>
        </div>
        <h2 className='text-2xl text-white font-semibold bg-green-500 p-2 text-center' >Contactenos en nustras redes sociales</h2>
      </section>
    </div>
  ); 
};

export default HomeScreen