import React, { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import CardProductos from "./CardProductos";
import burg_all from "../../assets/Images/Category/burg_All1-removebg-preview.png";
import burgercarne1 from "../../assets/Images/Category/burg_carne1-removebg-preview.png";
import burgerchicken1 from "../../assets/Images/Category/burg_chicken1-removebg-preview.png";
import burgervegie1 from "../../assets/Images/Category/burg_veggie1-removebg-preview.png";


const Burgers = ({ getProductos, producto, buscador }) => {
  const API = import.meta.env.VITE_API;
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  useEffect(() => {
    getProductos(buscador);
  }, [buscador]);

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const productosFiltrados = producto.filter((producto) => {
    if (categoriaSeleccionada === "Todas") return true;
    return producto.category === categoriaSeleccionada;
  });

  const mensajeSinProductos = (
    <p className="text-center text-warning fs-4 mt-3">
      Lo sentimos esta burger no se encuentra en esta categoría.
    </p>
  );

  return (
    <>
      <Container fluid className="burgers_bg pt-0 pb-3">
        <h2 className="text-center pt-4 pb-1 title_burger">Burgers</h2>
        <Row className="text-center">
          <Col lg={6} md={6} sm={6} xs={6} className="text-end pt-1">
            <Dropdown>
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="fs-2 category_text text-white"
              >
                CATEGORÍAS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => handleCategoriaChange("Todas")}
                  className="category_text fs-4 dropdown_bg"
                >
                  <img
                    src={burg_all}
                    alt="Hamburguesa categoría Todas"
                    className="img_category me-2"
                  />{" "}
                  TODAS
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleCategoriaChange("Carne")}
                  className="category_text fs-4 dropdown_bg"
                >
                  <img
                    src={burgercarne1}
                    alt="Hamburguesa categoría Carne"
                    className="img_category me-2"
                  />{" "}
                  CARNE
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleCategoriaChange("Pollo")}
                  className="category_text fs-4 dropdown_bg"
                >
                  <img
                    src={burgerchicken1}
                    alt="Hamburguesa categoría Pollo"
                    className="img_category me-2"
                  />{" "}
                  POLLO
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleCategoriaChange("Vegetarianas")}
                  className="category_text fs-4 dropdown_bg"
                >
                  <img
                    src={burgervegie1}
                    alt="Hamburguesa categoría Vegetariana"
                    className="img_category me-2"
                  />{" "}
                  VEGETARIANAS
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6} className="text-center pt-1">
            <h3 className="text-start text-warning fs-1 pt-1 ps-4">{categoriaSeleccionada}</h3>
            {productosFiltrados.length === 0 && mensajeSinProductos} 
          </Col>
        </Row>
        <Row xs={2} sm={2} md={3} lg={5} xl={5} className="pt-2">
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
