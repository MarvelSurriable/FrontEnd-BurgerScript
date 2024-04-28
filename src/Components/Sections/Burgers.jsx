
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import axios from "axios";
import CardProductos from "./CardProductos";
import UserContext from "../../Context/UserContext";

const Burgers = () => {
    const API = import.meta.env.VITE_API;
  const { currentUser } = useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    try {
      const response = await axios.get(`${API}/products/get-products`);
      setProductos(response.data);
    } catch (error) {
      console.log("ERROR ==> ", error);
    }
  };

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const productosFiltrados = productos.filter((producto) => {
    const categoriaMatch =
      !categoriaSeleccionada || producto.category === categoriaSeleccionada;
    const busquedaMatch = producto.title
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return categoriaMatch && busquedaMatch;
  });

   const renderProductosCards = () => {
     return productosFiltrados.map((producto, index) => (
       <Col
         key={index}
         xs={12}
         sm={6}
         md={4}
         lg={3}
         className="text-center mb-3"
       >
         <CardProductos producto={producto} />
       </Col>
     ));
};

  return (
    <>
      <Container fluid className="burgers_bg pt-0">
        <h2 className="text-center p-4 title_burger">Burgers</h2>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <Dropdown onSelect={handleCategoriaChange}>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="fs-2 category_text text-white"
              >
                CATEGORÍAS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="" className="category_text fs-4 bg-warning"><img
                  src="/src/assets/Images/Category/burg_All1-removebg-preview.png"
                  alt="Hamburguesa categoría Todas"
                  className="img_category me-2"
                /> TODAS</Dropdown.Item>
                <Dropdown.Item eventKey="carne" className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_carne1-removebg-preview.png"
                  alt="Hamburguesa categoría Carne"
                  className="img_category me-2"
                /> CARNE</Dropdown.Item>
                <Dropdown.Item eventKey="pollo" className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_chicken1-removebg-preview.png"
                  alt="Hamburguesa categoría Pollo"
                  className="img_category me-2"
                /> POLLO</Dropdown.Item>
                <Dropdown.Item eventKey="vegetariana" className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_veggie1-removebg-preview.png"
                  alt="Hamburguesa categoría Vegetariana"
                  className="img_category me-2"
                />
                  VEGETARIANA
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>         
        </Row>
      </Container>
      <Container fluid className="bg_aboutUs">
        <Row className="justify-content-center">{renderProductosCards()}</Row>
      </Container>
    </>
  );
};

export default Burgers;
