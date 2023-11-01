const Vapes = () => {
  return (
    <div className="vapes-container">
      <h1 className="vapes-title">¡Explora nuestra colección de Vapes!</h1>
      <p className="vapes-description">
        Encuentra los mejores vapes para disfrutar de tu experiencia de vaping. Tenemos una amplia variedad de modelos y sabores disponibles.
      </p>
      <div className="vapes-list">
        <div className="vape-item">
          <img src="vape1.jpg"/>
          <h2>Vape Modelo 1</h2>
          <p>Precio: $49.99</p>
          <button className="add-to-cart-button">Añadir al carrito</button>
        </div>
        <div className="vape-item">
          <img src="vape2.jpg" alt="Vape 2" />
          <h2>Vape Modelo 2</h2>
          <p>Precio: $59.99</p>
          <button className="add-to-cart-button">Añadir al carrito</button>
        </div>
        {/* Agrega más productos aquí */}
      </div>
    </div>
  );
};

export default Vapes;
