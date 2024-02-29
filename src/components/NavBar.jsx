export default function NavBar({user}) {
  return (
    <>
      {user ? (<p>Welcome, {user.firstName}</p>) : (<p>Login</p>)}
      {user && user.itemsInCart > 0 && (<p>{user.itemsInCart} in your cart</p>)}
      
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
    </>
  );
}


