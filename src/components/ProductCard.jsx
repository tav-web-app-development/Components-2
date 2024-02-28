export default function ProductCard({ product }) {
  return (
    <div style={{ border: "6px solid orange" }}>
      <img src={product.imageUrl} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">{product.price}</div>
      {!product.isInStock && <h2>"Unavailable"</h2>}
      <button>Add to Cart</button>
    </div>
  );
}
