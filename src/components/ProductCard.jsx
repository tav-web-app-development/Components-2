export default function ProductCard(props) {
  
  return (

    <div className="Product-card" style={{border: '2px solid #ccc'}}> 
      <img src={props.imageUrl || 'https://placehold.co/400x200.jpg?text=Product'} alt={props.name}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className="price">${props.price}</div>
      {props.isInStock && <p>Available</p>}
      {!props.isInStock && <p>Unavailable</p>}
      <button>Add to Cart</button>
    </div>
  );
}