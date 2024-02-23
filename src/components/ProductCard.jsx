export default function ProductCard({name, description, price, imageUrl, isInStock}) {
  return (
    <>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>
      <button>Add to Cart</button>
      {!isInStock && <p>Unavailable</p>}
    </>
  );
}
