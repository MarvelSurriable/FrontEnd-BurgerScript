import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Home/home.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useContext, useEffect, useState } from "react";
import CardProductos from "../../Sections/CardProductos";
import axios from "axios";
import UserContext from "../../../Context/UserContext";

function Home() {
  const {currentUser}=useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [totalCards, setTotalCards] = useState(15);
  const API = import.meta.env.VITE_API;

  const getProductos = async () => {
    try {
      const response = await axios.get(`${API}/productos`);
      setProductos(response.data);
    } catch (error) {
      console.log("ERROR ==> ", error);
    }
  };

  useEffect(() => {
    getProductos();
    return () => {
      setProductos([]);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 992) {
        setTotalCards(15);
      } else if (window.innerWidth < 992 && window.innerWidth >= 768) {
        setTotalCards(12);
      } else if (window.innerWidth < 968) {
        setTotalCards(10);
      } else {
        setTotalCards(10);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log("CURRENT USER ==> ", currentUser);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // };
  };

  return (
    <>
      <Carousel>
        <Carousel.Item className="bg_slider home_slider">
          <Container>
            <Row className="justify-content-center align-items-center pt-5">
              <Col lg={6} md={12}>
                <img
                  className="d-block w-100 h-auto mt-2 img-fluid"
                  src="/src/assets/Images/Slider/burgerbeef.png"
                  alt="Hamburguesa de carne"
                />
              </Col>
              <Col lg={6} md={12}>
                <div className="titles_sm">
                  <h2 className="display-1 text-center slider_title">
                    # CLASIC
                  </h2>
                  <h4 className="display-6 text-center slider_subtitle">
                    MAINBEEF BURGER
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item className="bg_slider home_slider">
          <Container>
            <Row className="justify-content-center align-items-center pt-5">
              <Col lg={6} md={12}>
                <img
                  className="d-block w-100 h-auto mt-2 img-fluid"
                  src="/src/assets/Images/Slider/burgerchicken.png"
                  alt="Hamburguesa de pollo"
                />
              </Col>
              <Col lg={6} md={12}>
                <div className="titles_sm">
                  <h2 className="display-1 text-center slider_title">
                    # CHICKEN
                  </h2>
                  <h4 className="display-6 text-center slider_subtitle">
                    BOOTSWAL BURGER
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item className="bg_slider home_slider">
          <Container>
            <Row className="justify-content-center align-items-center pt-5">
              <Col lg={6} md={12}>
                <img
                  className="d-block w-100 h-auto mt-2 img-fluid"
                  src="/src/assets/Images/Slider/burgerveggie.png"
                  alt="Hamburguesa vegetariana"
                />
              </Col>
              <Col lg={6} md={12}>
                <div className="titles_sm">
                  <h2 className="display-1 text-center slider_title">
                    # VEGGIE
                  </h2>
                  <h4 className="display-6 text-center slider_subtitle">
                    REVEGEX BURGER
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2 className="text_section2 pb-5 mt-3 pt-4">
                SOMOS BURGER SCRIPT Y OFRECEMOS LAS MÁS RICAS HAMBURGUESAS AL
                MEJOR PRECIO.
              </h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center pt-4">
            <Col xs={12} sm={12} md={12} lg={12} className="mb-md-0">
              <div className="text-center">
                <div>
                  <img
                    src="/src/assets/Images/About/about-burger.jpg"
                    className="img-fluid"
                    alt="imagen de hamburguesas"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="bg_aboutUs">
          <Row className="justify-content-center">
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <img
                src="/src/assets/Images/About/Burguer1.png"
                className="img-fluid img_aboutUs pt-2"
                alt="imagen de hamburguesa"
              />
              <h4 class="aboutUs_h4">PRECIO</h4>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <img
                src="/src/assets/Images/About/salad.png"
                className="img-fluid img_aboutUs pt-2"
                alt="imagen de verduras"
              />
              <h4 class="aboutUs_h4">CALIDAD</h4>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} className="text-center">
              <img
                src="/src/assets/Images/About/delivery-bike.png"
                className="img-fluid img_aboutUs pt-2"
                alt="imagen de delivery"
              />
              <h4 class="aboutUs_h4">ENVÍOS</h4>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row className="align-items-center category">
            <Col sm={4} md={4} lg={4} className="ps-5">
              <h2 className="text-center title_burger pb-3 pt-3">Categorías</h2>
              <div className="d-flex">
                <img
                  src="/src/assets/Images/Category/burg_All1-removebg-preview.png"
                  alt="hamburgesa categoría Todas"
                  className="img_category"
                />
                <div className="ps-2 pt-2">
                  <Button className="button_category" variant="warning">
                    TODAS
                  </Button>
                </div>
              </div>
              <div className="d-flex">
                <img
                  src="/src/assets/Images/Category/burg_carne1-removebg-preview.png"
                  alt="Hamburgesa categoría Carne"
                  className="img_category"
                />
                <div className="pt-2 ps-2">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="CARNE"
                    className="button_category"
                    variant="dark"
                  >
                    <Dropdown.Item href="#/action-1">Simple</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Doble</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              <div className="d-flex">
                <img
                  src="/src/assets/Images/Category/burg_chicken1-removebg-preview.png"
                  alt="Hamburguesa categoría Pollo"
                  className="img_category"
                />
                <div className="pt-2 ps-2">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="POLLO"
                    className="button_category"
                    variant="dark"
                  >
                    <Dropdown.Item href="#/action-1">Simple</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Doble</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              <div className="d-flex">
                <img
                  src="/src/assets/Images/Category/burg_veggie1-removebg-preview.png"
                  alt="Hamburguesa categoría Vegetarianas"
                  className="img_category"
                />
                <div className="pt-2 ps-2 pb-4">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="VEGETARIANAS"
                    className="button_category"
                    variant="dark"
                  >
                    <Dropdown.Item href="#/action-1">Simple</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Doble</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </Col>
            <Col md={8} lg={8} className="px-0">
              <img
                src="/src/assets/Images/Promotion/promocionBurgerScript.jpeg"
                alt="Promoción BurgerScript"
                className="img_promotion w-100 img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="burgers_bg pt-0">
        <h2 className="text-center p-4 title_burger">Burgers</h2>
        <div className="d-flex justify-content-center">
          <Container fluid className="pb-4">
            <Row xs={2} sm={2} md={3} lg={5} xl={5}>
              {productos.slice(0, totalCards).map((element, index) => {
                return (
                  <CardProductos producto={element} key={index}></CardProductos>
                );
              })}
            </Row>
          </Container>
        </div>
      </section>
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
                  alt="appstore"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/">
                <img
                  src="/src/assets/Images/Promotion/googleplay.png"
                  alt="googleplay"
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
}

export default Home;
