import React, { useState, useEffect } from 'react';

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    // Fetch popular products from your Flask backend
    fetch('/app.py') // You may need to adjust the URL depending on your setup
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
