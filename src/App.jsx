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
import UserContext from "./Context/UserContext";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);//aqui guardamos lo que recibimos del back (email, username, password, role)
  const SaveAuth=(auth)=>{
    sessionStorage.setItem("auth", JSON.stringify(auth));
  }
  const GetAuth=()=>{
    return JSON.parse(sessionStorage.getItem("auth"));
  }
  const RemoveAuth=()=>{
    sessionStorage.removeItem("auth");
  }

  useEffect(()=>{
    const session = GetAuth();
    if (session) {
      setCurrentUser(session);
    }
    return ()=>{
      setCurrentUser(undefined)
    }
  },[])

  return (
    <>
    <UserContext.Provider value={{currentUser, setCurrentUser, SaveAuth, GetAuth, RemoveAuth}}>
      <BrowserRouter>      
        <header className="sticky-top">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {(currentUser !== undefined && currentUser.role === "Admin") && <Route path="/administracion" element={<Administracion />} />}            
                       
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
      </UserContext.Provider>
    </>
  );
}

export default App;
