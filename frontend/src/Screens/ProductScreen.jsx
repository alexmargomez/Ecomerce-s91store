import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const ProductScreen = () => {
  return (
    <div className='flex flex-col h-screen'>
    <section className='p-2 flex items-center justify-center '>
        <div className=' flex w-full max-w-4xl'>
          <div className='flex-grow p-1'>
            <input 
              type="text"
              placeholder='Buscar...'  
              className='border-b focus:outline-none w-full'
            />
          </div>
          <div className='flex items-center justify-center p-1'>
            <FaMagnifyingGlass />
          </div>
        </div>
    </section>
    <section className='flex flex-grow'>
        <aside className='w-1/5 bg-red-500'>
          {/*espacio para los filtros de busqueda*/}
        </aside>
        <div className='w-full bg-violet-500'>
          {/*espacio para la api*/}
        </div>
    </section>
  </div>   
  )
}

export default ProductScreen