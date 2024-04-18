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
  import './navbar.css';
  import {Facebook, Instagram, TwitterX, Search, QuestionCircle, PersonCircle, SearchHeart, SearchHeartFill} from 'react-bootstrap-icons';
  
  
  function App() {
    return (
      <div>
        <header>
          <Container fluid className="header_icons bg-warning py-0">
            <Nav className="justify-content-end">
              <Nav.Link href="#home" className="py-0"><Facebook className="text-black"/></Nav.Link>
              <Nav.Link href="#features" className="py-0"><Instagram className="text-black instagram"/></Nav.Link>
              <Nav.Link href="#pricing" className="py-0"><TwitterX className="text-black"/></Nav.Link>            
              <Nav.Link href="#" className="py-0"><QuestionCircle className="text-black"/></Nav.Link>          
            </Nav>
            
          </Container>
          {["md"].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              className="sticky mb-3 py-0"                  
              data-bs-theme="dark"
              sticky="top"                 
            >
              <Container fluid className="navbar_bg">
                <Navbar.Brand href="#" className="ps-lg-4 ps-sm-2">
                  <Image
                    src="/src/assets/Logo/logoBurgerScript.png"
                    width="60"
                    height="60"                  
                    alt="Logo BurgerScript"
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
                  <Offcanvas.Header closeButton className="navbar_bg" data-bs-theme="dark">
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Image
                    src="/src/assets/Logo/logoBurgerScript.png"
                    width="60"
                    height="60"                  
                    alt="Logo BurgerScript"
                  />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="navbar_bg">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      {/* <Nav.Link href="/" className="navbar_link text-white fs-5 pe-3">INICIO</Nav.Link>
                      <Nav.Link href="#action2" className="navbar_link text-white fs-5 pe-3">DESTACADOS</Nav.Link>
                      <Nav.Link href="#action2" className="navbar_link text-white fs-5 pe-3">BURGERS</Nav.Link>
                      <Nav.Link href="/contacto" className="navbar_link text-white fs-5 pe-3">CONTACTO</Nav.Link> */}
                      <NavLink to="/" className="navbar_link pe-3 fs-5">Inicio</NavLink>
                      <NavLink to="/destacados" className="navbar_link pe-3 fs-5">Destacados</NavLink>
                      <NavLink to="/burgers" className="navbar_link pe-3 fs-5">Burgers</NavLink>
                      <NavLink to="/contacto" className="navbar_link pe-3 fs-5">Contacto</NavLink>
                      <NavLink to="/administracion" className="navbar_link pe-3 fs-5">Administración</NavLink>
                    </Nav>
                    {/* <div className="d-flex">
                      <input type="text" placeholder="Buscar" className="search_nav" />
                      <Search/>                   
                    </div> */}
                    <Form className="d-flex pe-3">
                      <Form.Control
                        type="search"
                        placeholder="Buscar"
                        className=""
                        aria-label="Search"
                      />
                      <Search className="text-white fs-2 ps-1"/>
                      {/* <Button className="bg-warning rounded-5"><Search/></Button> */}
                    </Form>
                    <Nav>
                      <Nav.Link className="pe-2 py-1"><PersonCircle className="text-white fs-3"/></Nav.Link>
                    </Nav>                 
                  </Offcanvas.Body>                                
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}        
        </header>      
      </div>
    );
  }
  
  export default App;
  