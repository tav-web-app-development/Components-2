/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  console.log(product.description.length);

  return (
    <>
      <div style={{ border: "2px solid red" }}>
        <img src={product.imageUrl} alt="hp 15" />
        <h3>{product.name}</h3>
        <p>
          {product.description.length > 70
            ? product.description.slice(0, 69) + "..."
            : product.description}
        </p>
        <div className="price">${product.price}</div>
        <h4>{product.isInStock ? "In Stock" : "Unavailable"}</h4>

        <button>Add to Cart</button>
        <br />
      </div>
    </>
  );
}
