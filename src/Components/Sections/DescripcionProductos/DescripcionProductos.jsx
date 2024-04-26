import React, {useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../DescripcionProductos/DescripcionProductos.css"

function DescriptionProduct () {
    const [quantity, setQuantity] = useState(1);
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(prevCount => prevCount - 1);
      }
    };
    const handleIncrement = () => {
      if (quantity < 10) {
        setQuantity(prevCount => prevCount + 1);
      }
    };
  
    return (
      <>
        <Container>
          <Row className="justify-content-center align-items-start">
            <Col lg={6} md={12} sm={12}>
              <img
                className="w-100 my-3 img-fluid"
                src="https://i.ibb.co/zP78h1n/Formika.jpg"              
                alt="First slide"
              />
            </Col>
            <Col lg={6} md={12}sm={12} >
              <div className="mt-lg-5 ms-lg-4">
              <h4 className="subtitle_burger fs-4">Hamburguesa de Carne</h4>
              <h2 className="text-start title_card fs-1">Formika Burger</h2>
              <h4 className="subtitle_burger fs-3 mb-3 mt-3">$ 4100</h4>
              <p className="subtitle_burger fs-5">Medallón de carne, lechuga fresca y rodajas de tomate, todo coronado con queso cheddar derretido. Acompañado de un delicioso aderezo de cebolla que realza los sabores.</p>
              </div>
              <div className="ps-4 pt-3 mb-4">
                <div className="d-flex col">
                  <button type="button" onClick={handleDecrement} className="btn_description">-</button>
                  <div className="align-content-center btn_quantity px-3">{quantity}</div>
                  <button type="button" onClick={handleIncrement} className="btn_description me-4" >+</button>  
                  <button className="subtitle_burger btn_burger px-4">Comprar ahora</button>              
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
                    src="/src/assets/images/SectionPromotion/appstore.png"
                    alt="IOS"
                    className="img-fluid store me-3"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="/src/assets/images/SectionPromotion/googleplay.png"
                    alt="Android"
                    className="img-fluid store me-3"
                  />
                </Link>
              </Col>
              <Col lg={6}>
                <img
                  src="/src/assets/images/SectionPromotion/e-shop.png"
                  alt="e-shop"
                  className="img-fluid w-100 pt-lg-4"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
  
  export default DescriptionProduct;
  
