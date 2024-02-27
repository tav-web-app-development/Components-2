/* eslint-disable react/prop-types */
export default function NavBar({user}) {
let txt ="";

  if (user ){
    txt = `Welcome ${user.firstname} ${user.lastname}`;
  }else{
 txt =" please login!!";
  }
    return (
    <>
    <h3>
      {txt}
    </h3>
    <h3>
      {
      user 
      ? user.itemsInCart 
      ? `${user.itemsInCart} in your cart`
      :""
      :""}{""}
    </h3>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
    </>
  );
}
