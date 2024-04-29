
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import axios from "axios";
import CardProductos from "./CardProductos";

const Burgers = () => {
    const API = import.meta.env.VITE_API
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

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

  const productosFiltrados = productos.filter((producto) => {
    if (categoriaSeleccionada === "Todas") return true;
    return producto.category === categoriaSeleccionada;
  });

  return (
    <>
      <Container fluid className="burgers_bg pt-0">
        <h2 className="text-center p-4 title_burger">Burgers</h2>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <Dropdown>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="fs-2 category_text text-white"
              >
                CATEGORÍAS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleCategoriaChange("Todas")}  className="category_text fs-4 bg-warning"><img
                  src="/src/assets/Images/Category/burg_All1-removebg-preview.png"
                  alt="Hamburguesa categoría Todas"
                  className="img_category me-2"
                /> TODAS</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoriaChange("Carne")}  className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_carne1-removebg-preview.png"
                  alt="Hamburguesa categoría Carne"
                  className="img_category me-2"
                /> CARNE</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoriaChange("Pollo")} className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_chicken1-removebg-preview.png"
                  alt="Hamburguesa categoría Pollo"
                  className="img_category me-2"
                /> POLLO</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleCategoriaChange("Vegetarianas")} className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_veggie1-removebg-preview.png"
                  alt="Hamburguesa categoría Vegetariana"
                  className="img_category me-2"
                /> VEGETARIANAS</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Col>         
        </Row>
      </Container>
      <Container fluid className="pb-4 burgers_bg">
            <Row xs={2} sm={2} md={3} lg={5} xl={5}>
              {productosFiltrados.map((element, index) => {
                return (
                  <CardProductos producto={element} key={index}></CardProductos>
                );
              })}
            </Row>
          </Container>
    </>
  );
};

export default Burgers;
