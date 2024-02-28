import ProductCard from "./ProductCard";
import { products } from "../constant/products";

export default function ProductCardContainer() {
  return (
    <>
      <h1>Discover Your Favorites</h1>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </>
  );
}
