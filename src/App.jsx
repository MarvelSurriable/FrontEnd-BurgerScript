import CrearProductos from "./Components/Sections/CrearProductos"
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/pages/Home/Home"
import Administracion from "./Components/pages/Administracion";
import Contacto from "./Components/pages/Contacto";
import Footer from "./Components/Footer";
import Error404 from "./Components/pages/Error404/Error404";

function App() {
  return (
    <>
      <BrowserRouter>      
        <header className="sticky-top">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/administracion" element={<Administracion />} />            
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/crear-producto" element={<CrearProductos></CrearProductos>}></Route>
            <Route path="/error" element={<Error404/>}></Route>
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
