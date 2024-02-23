import ProductCard from "./ProductCard";

export default function ProductCardContainer(props) {
  return (
    <>
      <h1>Discover Your Favorites</h1>
      {props.products.map(product => (
      <ProductCard
        key={product.name}
        name={product.name}
        description={product.description}
        price={product.price}
        imageUrl={product.imageUrl}
        isInStock={product.isInStock}
        style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}
      />
      ))}  
    </>
  );
}
