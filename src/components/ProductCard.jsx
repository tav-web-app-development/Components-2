import React from 'react';

export default function ProductCard(props) {
  const handleMouseOver = () => {
    console.log('Price:', props.price);
  };
  return (
    <>
      <img src={props.imageUrl} alt={props.name} style={{ border: '3px solid blue' }} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className="price" onMouseOver={handleMouseOver}>${props.price}</div>
      {props.isInStock && <p style={{ color: 'green', fontWeight: 'bold' }}>Available</p>}
      {!props.isInStock && <p style={{ color: 'red', fontWeight: 'bold' }}>Unavailable</p>}
      <button>Add to Cart</button>
    </>
  );
}

