import {
  Navbar,
  Container,
  Image,
  Nav,
  Form,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Search, QuestionCircle, PersonCircle } from "react-bootstrap-icons";

function App() {
  return (
    <>
      <div>
        {["lg"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="sticky mb-3 py-0"
            data-bs-theme="dark"
            fixed="top"
          >
            <Container fluid className="navbar_bg">
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
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Image
                      src="/src/assets/Logo/logoBurgerScript.png"
                      width="50"
                      height="50"
                      alt="Logo BurgerScript"
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="navbar_bg navbar_toggle">
                  <Nav className="justify-content-end flex-grow-1 pe-4">
                    <NavLink to="/" className="navbar_link pe-4 pt-1">
                      Inicio
                    </NavLink>
                    <NavLink to="/destacados" className="navbar_link pe-4 pt-1">
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
                  </Nav>
                  <Form data-bs-theme="dark" className="d-flex pe-3 search_pd">
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
                  <Nav>
                    <Nav.Link className="pe-2 py-1 login_nav">
                      <PersonCircle className="icon_link fs-3" />
                    </Nav.Link>
                    <Nav.Link href="#" className="pe-2 py-1 question_nav">
                      <QuestionCircle className="icon_link fs-3" />
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default App;
