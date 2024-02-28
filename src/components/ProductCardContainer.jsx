import ProductCard from "./ProductCard";

export default function ProductCardContainer({ product }) {
  return (
    <>
      <h1>Discover Your Favorites</h1>
      {product.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </>
  );
}
