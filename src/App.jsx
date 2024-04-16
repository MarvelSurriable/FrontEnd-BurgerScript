import { BrowserRouter, Routes, Route } from "react-router-dom"
import Administracion from "./Components/Pages/Administracion"
import CrearProductos from "./Components/Sections/CrearProductos"

function App() {

  return (
    <>
      <BrowserRouter>
      <header></header>
      <main>
        <Routes>
          <Route path="/administracion" element={<Administracion></Administracion>}></Route>
          <Route path="/crear-producto" element={<CrearProductos></CrearProductos>}></Route>
        </Routes>
      </main>
      <footer></footer>
      </BrowserRouter>
    </>
  )
}

export default App
