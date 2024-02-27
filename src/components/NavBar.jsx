export default function NavBar({ user }) {
  let txt = "";
  if (user) {
    txt = `Welcome ${user.firstName} ${user.LastName}`;
  } else {
    txt = "Please Login!!";
  }

  return (
    <>
      <h3>{txt}</h3>
      <h3>
        {user && user.itemsInCart !== 0 && `${user.itemsInCart} in your cart`}
      </h3>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
    </>
  );
}
