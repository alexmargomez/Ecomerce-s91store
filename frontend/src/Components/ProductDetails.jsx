import React, { useState, useEffect } from 'react';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);  // Estado para los productos
  const [loading, setLoading] = useState(true);   // Estado para manejar la carga de datos

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/product');  // Llama a la API
        const data = await response.json();  // Convierte la respuesta en JSON
        setProducts(data.products);  // Guarda los productos en el estado
        setLoading(false);  // Cambia el estado de carga a false
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // Si está cargando, muestra un mensaje
  if (loading) {
    return <div>Cargando productos...</div>;
  }

  // Si no hay productos, muestra un mensaje
  if (products.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <div className="flex flex-wrap justify-between gap-4">
      {/* Recorremos los productos y los mostramos en tarjetas */}
      {products.map((product) => (
        <div key={product.id} className="flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 border p-4">
          <img src={product.imagen_link} alt={product.name} className="w-full h-auto" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p>{product.description}</p>
          <p className="text-green-500">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
