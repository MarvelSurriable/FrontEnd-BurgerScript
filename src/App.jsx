import CrearProductos from "./Components/Sections/CrearProductos"
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Pages/Home/Home";
import Administracion from "./Components/Pages/Administracion";
import Contacto from "./Components/Pages/Contacto";
import Footer from "./Components/Footer";
import Error404 from "./Components/Pages/Error404/Error404";

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
