import ProductCard from "./ProductCard";

export default function ProductCardContainer({ product }) {
  function handleClick(product) {
    alert(`You added ${product.name}`);
    // console.log(product.name);
  }
  return (
    <>
      <h1>Discover Your Favorites</h1>
      {product.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          handleClick={() => handleClick(product)}
        />
      ))}
    </>
  );
}
