import React from 'react'

const ProductScreen = () => {
  return (
    <div className='flex flex-col h-screen'>
    <section className='p-4'>
        Buscar
    </section>
    <section className='flex flex-grow'>
        <aside className='w-1/5 bg-red-500'>
          filtros
        </aside>
        <div className='w-full bg-violet-500'>
          contenido
        </div>
    </section>
  </div>   
  )
}

export default ProductScreen