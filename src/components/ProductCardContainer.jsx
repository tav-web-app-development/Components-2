import ProductCard from "./ProductCard";

export default function ProductCardContainer(props) {
  return (
    <>
      <h1>Discover Your Favorites</h1>
      <div className="product-list">
        {props.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
