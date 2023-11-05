import "./App.css";
import Slider from "./components/slider/slider";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import Footer from "./components/footer/footer";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={"/"} />
          <Route path="/category/:categoryId" element={"/"} />
          <Route path="products/:productId" element={"/"} />
          <Route path="/category/:category/products/:productId" element={"/"} />
          <Route path="*/products/:productId" element={"/"} />
          <Route path="/cart" element={"/"} />
          <Route path="/nosotros" element={"/"} />
          <Route path="*" element={"/"} />
        </Routes>
        <Slider>
        
        </Slider>
        <Cards />
        <Register/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;