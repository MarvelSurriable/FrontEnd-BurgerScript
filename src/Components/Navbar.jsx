import {
  Navbar,
  Container,
  Image,
  Nav,
  Form,
  Button,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Facebook,
  Instagram,
  TwitterX,
  Search,
  QuestionCircle,
  PersonCircle,
  BoxArrowDownRight, 
} from "react-bootstrap-icons";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "./navbar.css";
import Login from "./Sections/Login/Login";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen]= useState(false);
  const handleShow=()=>{
    setIsOpen(true)
  };
  const handleClose=()=>{
    setIsOpen(false)
  };
  return (
    <>
    <Login isOpen={isOpen} handleClose={handleClose}/>
      <div className="w-100">
        <Row className="w-100 mx-0">
          {["lg"].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              className="sticky py-0"
              data-bs-theme="dark"
              sticky="top"
            >
              <Container fluid className="header_bg">
                <Navbar.Brand href="#" className="ps-lg-4 ps-sm-2">
                  <Image
                    src="/src/assets/Logo/logoBurgerScript.png"
                    width="60"
                    height="60"
                    alt="Logo BurgerScript"
                    className="logo_nav"
                  />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header
                    closeButton
                    className="navbar_bg navbar_toggle"
                    data-bs-theme="dark"
                  >
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <Image
                        src="/src/assets/Logo/logoBurgerScript.png"
                        width="50"
                        height="50"
                        alt="Logo BurgerScript"
                      />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="navbar_bg navbar_toggle">
                    <Nav className="justify-content-end flex-grow-1 pe-4 nav_toggle">
                      <NavLink to="/" className="navbar_link pe-4 pt-1">
                        Inicio
                      </NavLink>
                      <NavLink
                        to="/destacados"
                        className="navbar_link pe-4 pt-1"
                      >
                        Destacados
                      </NavLink>
                      <NavLink to="/burgers" className="navbar_link pe-4 pt-1">
                        Burgers
                      </NavLink>
                      <NavLink to="/contacto" className="navbar_link pe-4 pt-1">
                        Contacto
                      </NavLink>
                      <NavLink
                        to="/administracion"
                        className="navbar_link pe-4 pt-1"
                      >
                        Administración
                      </NavLink>                      
                      <Nav.Link href="#" className="pe-2 py-1 login_nav">
                        <PersonCircle className="icon_link fs-3" />
                      </Nav.Link>
                    </Nav>
                    <Nav className="col justify-content-end">
                      <Form
                        data-bs-theme="dark"
                        className="d-flex  pe-3 search_pd"
                      >
                        <Form.Control
                          type="search"
                          placeholder="Buscar"
                          className="search_nav"
                          aria-label="Search"
                        />
                        <Button className="bg-transparent border_button py-0 rounded-5">
                          <Search className="text-white fs-2 ps-1" />
                        </Button>
                      </Form>
                      <Nav.Link href="#home" className="py-0 question_nav">
                        <Facebook className="text-white fs-4" />
                      </Nav.Link>
                      <Nav.Link href="#features" className="py-0 question_nav">
                        <Instagram className="text-white fs-4" />
                      </Nav.Link>
                      <Nav.Link
                        href="#pricing"
                        className="py-0 pe-4 question_nav"
                      >
                        <TwitterX className="text-white fs-4" />
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </Row>      
        <Navbar expand="lg" className="nav_bg py-0">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="navbar_link ps-4 fs-5">Inicio</Nav.Link>
              <Nav.Link className="navbar_link ps-4 fs-5">Destacados</Nav.Link>
              <Nav.Link className="navbar_link ps-4 fs-5">Burgers</Nav.Link>
              <Nav.Link className="navbar_link ps-4 fs-5">Contacto</Nav.Link>
              <Nav.Link className="navbar_link ps-4 fs-5">
                Administración
              </Nav.Link>
            </Nav>
            <Nav>
              <OverlayTrigger
               placement="top"
               overlay={<Tooltip id="tooltip" > Iniciar Sesión</Tooltip>}>
                <Nav.Link 
               onClick={handleShow} className="py-1 login_nav">
                  <PersonCircle className="icon_link fs-3" />
                </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
               placement="top"
               overlay={<Tooltip id="tooltip">Cerrar Sesión</Tooltip>}>
                <Nav.Link href="#" className="py-1 login_nav">
                <BoxArrowDownRight className="icon_link fs-3" />
              </Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
               placement="top"                             
               overlay={<Tooltip id="tooltip">Ayuda</Tooltip>}>
                <Nav.Link href="#" className="me-4 py-1 question_nav">
                <QuestionCircle className="icon_link fs-3" />
              </Nav.Link>
              </OverlayTrigger>            
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default App;


  