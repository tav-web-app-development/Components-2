import "./App.css";
import ProductCardContainer from "./components/ProductCardContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { User } from "./constant/User";
import StyleWrapper from "./components/StyleWrapper";

function App() {
  return (
    <main className="store">
      <NavBar User={User} />
      <ProductCardContainer />
      <StyleWrapper styles={styles} section={<Footer />} />
    </main>
  );
}

const styles = {
  backgroundColor: "#f8f9fa" /* Light gray background */,
  padding: "20px" /* Padding around the content */,
  textAlign: "center" /* Center-align the text */,
  borderTop: "1px solid #dee2e6" /* Optional border at the top */,
  boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)" /* Subtle box shadow */,
};
export default App;
