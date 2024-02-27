/* eslint-disable no-unused-vars */
import "./App.css";
import ProductCardContainer from "./components/ProductCardContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { user } from "./constant/User";
import Stylewrapper from "./components/stylewrapper";

const style = {
  backgroundColor: "#f8f9fa" /* Light gray background */,
  padding: "20px" /* Padding around the content */,
  textAlign: "center" /* Center-align the text */,
  borderTop: "1px solid #dee2e6" /* Optional border at the top */,
  boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
};

function App() {
  return (
    <main className="store">
      <NavBar user={user} />
      <ProductCardContainer />
      <Stylewrapper styles={style} section={<Footer />} />
    </main>
  );
}

export default App;
