/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  return (
    <>
      <div style={{ border: "2px solid red" }}>
        <img src={product.imageUrl} alt="hp 15" />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price" onMouseOver={() => console.log(product.price)}>
          ${product.price}
        </div>
        <h4>{product.isInStock ? "In Stock" : "Unavailable"}</h4>

        <button onClick={() => alert(`You added ${product.name}`)}>
          Add to Cart
        </button>
        <br />
      </div>
    </>
  );
}
