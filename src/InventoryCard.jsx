const InventoryCard = ({ products, onClick }) => {
  return (
    <div className="Inventory-Container">
      {products.map((product) => (
        <div key={product.id} className="Inventory-Card">
          <img src={product.image} />
          <h2>{product.productName}</h2>
          <h3>{product.brand}</h3>
          <p>{product.quantity}</p>
          <p>
            <strong>{product.price}</strong>
          </p>
          {}
          <button onClick={() => onClick(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};
export default InventoryCard;