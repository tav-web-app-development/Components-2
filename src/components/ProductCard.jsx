export default function ProductCard({ product, handleClick }) {
  function handleMouseOver() {
    console.log(product.price);
  }
  return (
    <div style={{ border: "6px solid orange" }}>
      <img src={product.imageUrl} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price" onMouseOver={handleMouseOver}>
        {product.price}
      </div>
      {!product.isInStock && <h2>"Unavailable"</h2>}
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
