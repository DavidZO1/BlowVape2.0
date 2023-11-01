const Accessories = () => {
    return (
      <div className="accessories-container">
        <h1 className="accessories-title">Descubre Nuestra Colección de Accesorios para Vapes</h1>
        <p className="accessories-description">
          Encuentra los mejores accesorios para vapes que mejorarán tu experiencia de vapeo. Ofrecemos una amplia variedad de productos de calidad.
        </p>
        <div className="accessories-list">
          <div className="accessory-item">
            <img src="accessory1.jpg" alt="Accesorio 1" />
            <h2>Estuche de Viaje para Vape</h2>
            <p>Precio: $19.99</p>
            <button className="add-to-cart-button">Añadir al carrito</button>
          </div>
          <div className="accessory-item">
            <img src="accessory2.jpg" alt="Accesorio 2" />
            <h2>Boquillas de Repuesto</h2>
            <p>Precio: $7.99</p>
            <button className="add-to-cart-button">Añadir al carrito</button>
          </div>
          {/* Agrega más productos y accesorios aquí */}
        </div>
      </div>
    );
  };
  
  export default Accessories;