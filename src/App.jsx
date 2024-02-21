/* eslint-disable no-unused-vars */
import "./App.css";
import ProductCardContainer from "./components/ProductCardContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {user} from "./constant/User"

function App() {

  return (
    <main className="store">
      <NavBar user={user} />
      <ProductCardContainer />
      <Footer />
    </main>
  );
}

export default App;
