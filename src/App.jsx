import "./App.css";
import ProductCardContainer from "./components/ProductCardContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { user } from "./constant/User";
import StyleWrapper from "./components/StyleWrapper";

const styles = {
  backgroundColor: "#f8f9fa",
  padding: "20px",
  textAlign: "center",
  borderTop: "1px solid #dee2e6",
  boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
};

function App() {
  return (
    <main className="store">
      <NavBar user={user} />
      <ProductCardContainer />
      <StyleWrapper styles={styles} section={<Footer />} />
    </main>
  );
}

export default App;
