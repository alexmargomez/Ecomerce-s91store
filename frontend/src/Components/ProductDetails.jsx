import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  const [products, setProducts] = useState([]); // Estado para los productos
  const [loading, setLoading] = useState(true); // Estado para mostrar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/product'); // Cambia por tu endpoint real
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json(); // Asegúrate de que tu API devuelve JSON
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Oculta el loading al finalizar
      }
    };

    fetchProducts();
  }, []); // Solo se ejecuta cuando se monta el componente

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>Precio: ${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
