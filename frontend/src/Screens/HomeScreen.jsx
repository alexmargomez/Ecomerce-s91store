import React from 'react'
import Imgslider from '../Components/Imgslider';
import logo from '../assets/img/logo.svg';
import { FiActivity, FiAlertCircle } from "react-icons/fi";
import { Ri24HoursFill } from "react-icons/ri";

const HomeScreen = () => {
  return(
    <>
      {/* Slider Home */}
      <section className="h-[calc(100vh-50px)]">
        <Imgslider />
      </section>
      {/* Acerca de productos y tienda */}
      <section id="nosotros" className="flex flex-col p-4 max-h-screen"> 
        <h2 className=' text-4xl font-semibold text-center py-10' > Nosotros somos</h2>
        <div className='flex flex-grow h-full overflow-hidden'>
          <div className=" flex-1 flex items-center justify-center p-20 ">
            <div className="px-5 p-20 bg-stone-900">
              <h2 className="text-4xl text-fuchsia-300 font-bold ">S91 Store</h2>
              <br/>
              <p className='  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam officia nihil quo unde laboriosam aperiam quam illo molestias modi ut laborum voluptas dignissimos animi soluta, eveniet nulla. Temporibus, odit!</p>
            </div>
          </div>
          <div className="flex-1 p-10 flex justify-center items-center">
            <img src={logo} alt="Logo" className="max-w-full max-h-full object-contain"/>
          </div>
        </div>
        
      </section>
      {/* Quienes somos nosotros */}
      <section id="acerca-de" className='h-screen flex flex-col'>
        <div className=" flex flex-col h-screen p-20 bg-slate-100">
          <h2 className=' text-4xl font-semibold text-center' > Acerca de</h2>
          <div className='flex flex-grow p-4'> 
            <div className='w-1/3 flex flex-col items-center justify-center p-5'>
              <div className='h-1/4 flex justify-center items-center '>
                <FiActivity size={50}/>
              </div>
              <div className='h-1/2'>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci in esse accusantium placeat, officiis corrupti hic, sint perspiciatis, molestiae ea eos nesciunt praesentium laborum quod earum fugiat dolorem rem iusto.</p>
              </div>
            </div>
            <div className='w-1/3 flex flex-col items-center justify-center p-5'>
              <div className='h-1/4 flex justify-center items-center'>
                <FiAlertCircle size={50}/>
              </div>
              <div className='h-1/2'> 
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis porro, culpa assumenda quibusdam reiciendis incidunt id dolore repellat aliquam delectus ea a amet voluptatibus nobis hic? Tenetur labore ab et.</p>
              </div>
            </div>
            <div className='w-1/3 flex flex-col items-center justify-center p-5 '>
              <div className='h-1/4 flex justify-center items-center '>
                <Ri24HoursFill size={50}/>
              </div>
              <div className='h-1/2 '>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi reiciendis nemo porro veniam sit fuga tempora cupiditate vitae aspernatur magnam error repellendus natus repellat, eaque molestias provident nobis quo.</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className='text-2xl text-white font-semibold bg-green-500 p-2 text-center' >Contactenos en nustras redes sociales</h2>
      </section>
    </>
  ); 
};

export default HomeScreen