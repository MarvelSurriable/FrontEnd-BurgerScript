import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/pages/Inicio";
import Administracion from "./Components/pages/Administracion";
import Contacto from "./Components/pages/Contacto";


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
          </Routes>
        </main>
        <footer>          
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
