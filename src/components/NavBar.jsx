export default function NavBar({ user }) {
  return (
    <>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      {user ? (
        <h2>
          Welcome {user.firstName} {user.lastName}{" "}
        </h2>
      ) : (
        <h2>Login</h2>
      )}
      {user.itemsInCart != 0 && <button>{user.itemsInCart}items in</button>}
    </>
  );
}
