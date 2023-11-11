import "./App.css";
import Slider from "./components/slider/slider";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import Footer from "./components/footer/footer";
import Cards from "./components/Card/Cards";
import Categoria1 from "./components/Categoria/categoria1";
import Categoria2 from "./components/Categoria/categoria2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route  path='/' element={<Slider/> } /> 
          <Route  path='/slider' element={<Slider/>} />
          <Route path='/categoria1' element={<Categoria1/>} />
          <Route path='/categoria2' element={<Categoria2/>} />
        </Routes>
        <Cards />
        <Register/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;