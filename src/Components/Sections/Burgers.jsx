
import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Dropdown, Form } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <Dropdown onSelect={handleCategoriaChange}>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="fs-2 category_text"
              >
                CATEGORÍAS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="">TODAS</Dropdown.Item>
                <Dropdown.Item eventKey="carne">CARNE</Dropdown.Item>
                <Dropdown.Item eventKey="pollo">POLLO</Dropdown.Item>
                <Dropdown.Item eventKey="vegetariana">
                  VEGETARIANA
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mt-3">
            <Form.Control
              type="text"
              placeholder="Buscar por nombre..."
              value={busqueda}
              onChange={handleBusquedaChange}
            />
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
