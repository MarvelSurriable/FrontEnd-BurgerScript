import CrearProductos from "./Components/Sections/CrearProductos"
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/pages/Home/Home";
import Administracion from "./Components/pages/Administracion";
import Contacto from "./Components/pages/Contacto";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>      
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />            
            <Route path="/administracion" element={<Administracion />} />            
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/crear-producto" element={<CrearProductos></CrearProductos>}></Route>
          </Routes>
        </main>
        <footer> 
          <Footer/>         
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
