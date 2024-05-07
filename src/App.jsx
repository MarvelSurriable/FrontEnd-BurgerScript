import CrearProductos from "./Components/Sections/CrearProductos";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Administracion from "./Components/Pages/AdministracionBS";
import Contacto from "./Components/Pages/Contacto/Contacto";
import Nosotros from "./Components/Pages/AcercaDeNosotros/Nosotros";
import Footer from "./Components/Footer";
import Error404 from "./Components/Pages/Error404/Error404";
import Editar from "./Components/Sections/Editar";
import UserContext from "./Context/UserContext";
import { useEffect, useState } from "react";
import axios from "axios";
import DescripcionProductos from "./Components/Sections/DescripcionProductos/DescripcionProductos";
import Burgers from "./Components/Sections/Burgers";
import CrearUsuarioAdmin from "./Components/Sections/CrearUsuarioAdmin";
import Carrito from "./Components/Sections/Carrito/Carrito";

function App() {
  const API = import.meta.env.VITE_API;
  const [currentUser, setCurrentUser] = useState(undefined);//aqui guardamos lo que recibimos del back (email, username, password, role)
  const [productos, setProductos] = useState([]);
  const [buscador, setBuscador] = useState("")
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

  const getProductos = async (busqueda) => {
    try {
      setBuscador(busqueda)
      
      let URL = ""
      if (busqueda !== "") {
        URL = `${API}/products/get-products?search=${busqueda}`
        
      }else{
        URL = `${API}/products/get-products`
      }
      const response = await axios.get(URL);
      setProductos(response.data);
    } catch (error) {
      console.log("ERROR ==> ", error);
    }
  };

  return (
    <>
    <UserContext.Provider value={{currentUser, setCurrentUser, SaveAuth, GetAuth, RemoveAuth}}>
      <BrowserRouter>      
        <header className="sticky-top">
          <Navbar getProductos={getProductos} producto={productos}  />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home getProductos={getProductos} producto={productos} buscador={buscador} />} />
            {(currentUser !== undefined && currentUser.role === "Admin") && <Route path="/administracion" element={<Administracion />} />}            
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/nosotros" element={<Nosotros />}></Route>
            {(currentUser !== undefined && currentUser.role === "Admin") && <Route path="/crear-producto" element={<CrearProductos></CrearProductos>}></Route>}
            <Route path="/error" element={<Error404/>}></Route>
            {(currentUser !== undefined && currentUser === "Admin")&& <Route path="/editar/:id" element={<Editar></Editar>}></Route>}
            <Route path="/*" element={<Error404></Error404>}></Route>
            <Route path="/editar/:id" element={<Editar></Editar>}></Route>
            <Route path="/descripcion/:id" element={<DescripcionProductos></DescripcionProductos>}></Route>
            <Route path="/burgers" element={<Burgers getProductos={getProductos} producto={productos} buscador={buscador}></Burgers>}></Route>
            {(currentUser !== undefined && currentUser.role === "Admin") && <Route path="/crear-usuarioadm" element={<CrearUsuarioAdmin></CrearUsuarioAdmin>}></Route>}
            {(currentUser !== undefined && currentUser.role === "Admin") && <Route path="/carrito" element={<Carrito />}></Route>}
            {(currentUser !== undefined && currentUser.role === "User") && <Route path="/carrito" element={<Carrito />}></Route>}
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
