/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function NavBar({ User }) {
  let txt = "";
  if (User) {
    txt = ` Welcome ${User.firstname} ${User.lastname}`;
  } else {
    txt = "Please Login!";
  }
  return (
    <>
      <h3>{txt}</h3>
      <h4>
        {User && User.itemsInCart != 0 && `${User.itemsInCart} in your cart.`}
      </h4>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
    </>
  );
}
