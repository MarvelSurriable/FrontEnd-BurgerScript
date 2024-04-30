import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../DescripcionProductos/DescripcionProductos.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

const DescripcionProductos = () => {
  const navigate = useNavigate();

  const [producto, setProducto] = useState(undefined);
  const API = import.meta.env.VITE_API;
  const { id } = useParams();
  useEffect(() => {
    const getProducto = async () => {
      try {
        const { data } = await axios.get(`${API}/products/get-product/${id}`);
        setProducto(data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.log("ERROR => ", error);
      }
    };

    getProducto();
    return () => {
      setProducto(undefined);
    };
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < producto.stock) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-start">
          <Col lg={6} md={12} sm={12}>
            <img
              className="w-100 my-3 img-fluid"
              src={producto?.image}
              alt="First slide"
            />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="mt-lg-5 ms-lg-4">
              <h4 className="subtitle_burger fs-4">
                Categoría: {producto?.category}
              </h4>
              <h2 className="text-start title_card fs-1">{producto?.title}</h2>
              <h4 className="fs-5 mb-3 mt-3">{producto?.description}</h4>
              <p className="fs-2">$ {producto?.price}</p>
            </div>
            <div className="ps-4 pt-3 mb-4">
              <div className="d-flex col">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="btn_description"
                >
                  -
                </button>
                <div className="align-content-center btn_quantity px-3">
                  {quantity}
                </div>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="btn_description me-4"
                >
                  +
                </button>
                <button
                  onClick={() => {
                    navigate("/error");
                  }}
                  className="subtitle_burger btn_burger px-4 fs-5"
                >
                  Comprar
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="bg_promotion">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-3 mb-lg-0 mt-4">
              <h2 className="promotion_text">
                DESCARGÁ NUESTRA APP Y OBTENÉ UN 20% DE DESCUENTO.
              </h2>
              <p className="promotion_text py-lg-3">
                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
              </p>
              <Link to="/">
                <img
                  src="/src/assets/Images/Promotion/appstore.png"
                  alt="IOS"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src="/src/assets/Images/Promotion/googleplay.png"
                  alt="Android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>
            <Col lg={6}>
              <img
                src="/src/assets/Images/Promotion/e-shop.png"
                alt="e-shop"
                className="img-fluid w-100 pt-lg-4"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DescripcionProductos;
