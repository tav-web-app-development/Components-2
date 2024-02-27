export default function ProductCard({ product }) {
  return (
    <>
      <div style={{ border: "2px solid red" }}>
        <img src={product.imageUrl} alt="hp 15" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price">${product.price}</div>
        <h4>{product.isInStock ? "In Stock" : "Unavailable"}</h4>
        <button>Add to Cart</button>
        <br />
      </div>
    </>
  );
}
