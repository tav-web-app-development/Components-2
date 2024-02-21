import "./App.css";
import ProductCardContainer from "./components/ProductCardContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { User } from "./constant/User";

function App() {
  return (
    <main className="store">
      <NavBar User={User} />
      <ProductCardContainer />
      <Footer />
    </main>
  );
}

export default App;
