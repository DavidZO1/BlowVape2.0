const Liquid = () => {
    return (
      <div className="liquid-container">
        <h1 className="liquid-title">¡Explora nuestra colección de Líquidos para Vapes!</h1>
        <p className="liquid-description">
          Encuentra una amplia gama de sabores de líquidos para vapes. Disfruta de la variedad y calidad que ofrecemos en nuestra tienda.
        </p>
        <div className="liquid-list">
          <div className="liquid-item">
            <img src="liquid1.jpg" alt="Líquido 1" />
            <h2>Líquido Sabor a Fresa</h2>
            <p>Precio: $9.99</p>
            <button className="add-to-cart-button">Añadir al carrito</button>
          </div>
          <div className="liquid-item">
            <img src="liquid2.jpg" alt="Líquido 2" />
            <h2>Líquido Sabor a Menta</h2>
            <p>Precio: $12.99</p>
            <button className="add-to-cart-button">Añadir al carrito</button>
          </div>
          {/* Agrega más productos aquí */}
        </div>
      </div>
    );
  };
  
  export default Liquid;