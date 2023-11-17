import React, { useState, useEffect } from 'react';
//import vape1IMG from '../home/img/vape1.png'

// Define una interfaz para el tipo de datos esperados en popularProducts
interface Product {
  id: number;
  image_url: string;
  description: string;
  price: number;
}

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch popular products from your Flask backend
    fetch('http://localhost:5000/products') // Puedes ajustar la URL según tu configuración
      .then((response) => response.json())
      .then((data) => setPopularProducts(data))
      .catch((error) => console.error('Error fetching popular products:', error));
  }, []);
  return (
    <div className='popular-products'>
      <h1>Popular Products</h1>
      <div className='product-items'>
        {popularProducts.map((item) => (
          <div className='product-item' key={item.id}>
            <img src={item.image_url} alt={item.description} />
            <p>{item.description}</p>
            <h6>
              <strong>{item.price}</strong>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
