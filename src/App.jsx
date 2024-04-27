import CrearProductos from "./Components/Sections/CrearProductos"
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/pages/Home/Home"
import Administracion from "./Components/pages/Administracion";
import Contacto from "./Components/pages/Contacto/Contacto";
import Nosotros from "./Components/pages/AcercaDeNosotros/Nosotros";
import Footer from "./Components/Footer";
import Error404 from "./Components/pages/Error404/Error404";
import Editar from "./Components/Sections/Editar";
import UserContext from "./Context/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import DescripcionProductos from "./Components/Sections/DescripcionProductos/DescripcionProductos"
import Burgers from "./Components/Sections/Burgers";
import CrearUsuarioAdmin from "./Components/Sections/CrearUsuarioAdmin";

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

  useEffect(()=>{
    if (currentUser !== undefined) {
      axios.defaults.headers.common["Authorization"]= `Bearer ${currentUser.token}`;
    }else{
      delete axios.defaults.headers.common["Authorization"];
    }
  },[currentUser])

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
            {(currentUser !== undefined && currentUser.role === "Admin") && <Route path="/crear-producto" element={<CrearProductos></CrearProductos>}></Route>}
            <Route path="/error" element={<Error404/>}></Route>
            {(currentUser !== undefined && currentUser === "Admin")&& <Route path="/editar/:id" element={<Editar></Editar>}></Route>}
            <Route path="/*" element={<Error404></Error404>}></Route>
            <Route path="/editar/:id" element={<Editar></Editar>}></Route>
            <Route path="/descripcion/:id" element={<DescripcionProductos></DescripcionProductos>}></Route>
            <Route path="/burgers" element={<Burgers></Burgers>}></Route>
            {(currentUser !== undefined && currentUser.role === "Admin") && <Route path="/crear-usuarioadm" element={<CrearUsuarioAdmin></CrearUsuarioAdmin>}></Route>}
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
