import CrearProductos from "./Components/Sections/CrearProductos"
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home"
import Administracion from "./Components/pages/Administracion";
import Contacto from "./Components/pages/Contacto/Contacto";
import Nosotros from "./Components/pages/AcercaDeNosotros/Nosotros";
import Footer from "./Components/Footer";
import Error404 from "./Components/pages/Error404/Error404";
import Editar from "./Components/Sections/Editar";

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
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
            <Route path="/crear-producto" element={<CrearProductos></CrearProductos>}></Route>
            <Route path="/error" element={<Error404/>}></Route>
            <Route path="/editar/:id" element={<Editar></Editar>}></Route>
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
