export default function ProductCard({name, description, price, imageUrl, isInStock}) {
  return (
    <>
      <img src={imageUrl} alt={name} style={{border: '3px solid blue'}}/>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>
      <button>Add to Cart</button>
      {!isInStock && <p style={{color:'red', fontWeight:'bold'}}>Unavailable</p>}
    </>
  );
}
