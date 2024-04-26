import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Home/home.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext, useEffect, useState } from "react";
import CardProductos from "../../Sections/CardProductos";
import axios from "axios";
import UserContext from "../../../Context/UserContext";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  const {currentUser}=useContext(UserContext);
  const [productos, setProductos] = useState([]);
  const [totalCards, setTotalCards] = useState(15);
  const API = import.meta.env.VITE_API;

  const getProductos = async () => {
    try {
      const response = await axios.get(`${API}/products/get-products`);
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },       
      ]
    };

  

  return (
    <>
      <Carousel>
        <Carousel.Item className="bg_slider">
          <Container>
            <Row className="justify-content-center align-items-center pt-5">
              <Col lg={6} md={12} className="pb-2">
                <img
                  className="d-block w-100 h-auto mt-3 img-fluid"
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
        <Carousel.Item className="bg_slider">
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
        <Carousel.Item className="bg_slider">
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
      <section id="destacados" fluid className="burgers_bg">
        <h2 className="text-center p-4 title_burger">Destacados</h2>
        <Container>
          <Slider {...settings} className="text-center pb-4">
            <div className="pe-2">
              <Link className="text_carousel">
              <h4>Bcrypt</h4>               
                <img
                  src="/src/assets/Images/Destacados/Bcrypt.jpg"
                  alt="Bcrypt Burger"
                  className="img-fluid border_img rounded-5 w-100"
                />                
              </Link>
            </div>
            <div className="pe-2">
              <Link className="text_carousel">
              <h4>BigJson</h4>
                <img
                  src="/src/assets/Images/Destacados/Big Json.jpg"
                  alt="BigJson Burger"
                  className="img-fluid border_img rounded-5 w-100"
                />
              </Link>
            </div>
            <div className="pe-2">
              <Link className="text_carousel">
              <h4>BlackApi</h4>
                <img
                  src="/src/assets/Images/Destacados/BlackApi .jpg"
                  alt="BlackApi Burger"
                  className="img-fluid border_img rounded-5 w-100"
                />
              </Link>
            </div>
            <div className="pe-2">
              <Link className="text_carousel">
              <h4>MongoCheese</h4>
                <img
                  src="/src/assets/Images/Destacados/MongoCheese.jpg"
                  alt="MongoCheese Burger"
                  className="img-fluid border_img rounded-5 w-100"
                />
              </Link>
            </div>
            <div className="pe-2">
              <Link className="text_carousel">
              <h4>Nodemon</h4>
                <img
                  src="/src/assets/Images/Destacados/Nodemon Burger.jpeg"
                  alt="Nodemon Burger"
                  className="img-fluid border_img rounded-5 w-100"
                />
              </Link>
            </div>
            <div className="pe-2">
              <Link className="text_carousel">
              <h4>ChickeNode</h4>
                <img
                  src="/src/assets/Images/Destacados/ChickeNode.jpg"
                  alt="ChickeNode Burger"
                  className="img-fluid border_img rounded-5 w-100"
                />
              </Link>
            </div>
          </Slider>
        </Container>
      </section>
      <section>
      <Container fluid>
          <Row className="category">
            <Col sm={12} md={4} lg={4} className="text-center">
              <h2 className="title_burger pt-4">NUESTRO MENÚ</h2>
              <p className="px-3 pt-2 category_text">
                Nuestras Burgers están hechas con carne 100% vacuna; con pan
                casero que horneamos todos los días y una selección de
                ingredientes que las hacen únicas. Tambien ofrecemos variedades
                de Pollo y Vegetarianas.
              </p>
              <Dropdown className="pt-2 ps-4 text-start">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="fs-2 category_text">
                  CATEGORÍAS
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" active className="category_text fs-4 bg-warning"><img
                  src="/src/assets/Images/Category/burg_All1-removebg-preview.png"
                  alt="Hamburguesa categoría Todas"
                  className="img_category me-2"
                /> TODAS</Dropdown.Item>
                  <Dropdown.Item href="#/action-1" className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_carne1-removebg-preview.png"
                  alt="Hamburguesa categoría Carne"
                  className="img_category me-2"
                /> CARNE</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_chicken1-removebg-preview.png"
                  alt="Hamburguesa categoría Pollo"
                  className="img_category me-2"
                /> POLLO</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"className="category_text fs-4"><img
                  src="/src/assets/Images/Category/burg_veggie1-removebg-preview.png"
                  alt="Hamburguesa categoría Vegetariana"
                  className="img_category me-2"
                /> VEGETARIANAS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>             
            </Col>
            <Col md={8} lg={8} className="px-0">
              <img
                src="/src/assets/Images/Promotion/promocionBurgerScript.jpeg"
                alt="Imagen publicidad BurgerScript"
                className="img_promotion w-100 img-fluid"
              />
            </Col>
          </Row>
        </Container>        
      </section>
      <section id="burgers" className="burgers_bg pt-0">
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
                Promoción válida para la República Argentina, desde el 23/04/24 hasta el 23/06/24 o hasta agotar stock de 500 unidades. Aplica para Burgers de todas las categorías.
              </p>
              <Link to="/error">
                <img
                  src="/src/assets/Images/Promotion/appstore.png"
                  alt="appstore"
                  className="img-fluid store me-3"
                />
              </Link>
              <Link to="/error">
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
