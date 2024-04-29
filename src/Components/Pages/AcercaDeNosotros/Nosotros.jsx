import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <Container fluid className="bg_Container">
      <h1 className="text-center pt-4 title_burger">Sobre Nosotros</h1>
      <div className="container">
        <h4 fluid className="text-center py-3 mx-3  text-white subtitle_burger">
      Somos el equipo detrás de Burger Script, dedicados a fusionar nuestra pasión por las hamburguesas y la programación. 
      Nuestro objetivo es ofrecer una experiencia gastrónomica inolvidable en una página dinámica y vibrante.
      </h4>
      </div>
      
      <Row className="justify-content-center text-center py-3">
        <Col lg={4} md={6} sm={12}>
          <Card className="avatar_card">
            <Card.Img variant="top" src="/src/assets/Images/Nosotros/Marvel.jpeg" className="img-fluid avatar_img" alt="foto de Marvel"/>
            <Card.Body className="description">
              <Card.Title className="title_cardUs fs-2 pt-4">Marvel Surriable</Card.Title>
              <Card.Text className="description_cardUs fs-5 pt-4 px-3">Tengo 37 años y soy de Jujuy. Estudio programación Full Stack en Rolling Code. Me gustan los juegos de mesa, ver series y películas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="avatar_card">
            <Card.Img variant="top" src="/src/assets/Images/Nosotros/Andrea.jpeg" className="img-fluid avatar_img" alt="foto de Marvel"/>
            <Card.Body className="description"> 
              <Card.Title className="title_cardUs fs-2 pt-4"> Andrea Saraza</Card.Title>
              <Card.Text className="description_cardUs fs-5 pt-4 px-3"> Tengo 27 años. Soy Ingeniera Biomédica y estudiante de programación Full Stack. En mi tiempo libre voy a clases de baile y me gusta estar al aire libre.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="avatar_card">
            <Card.Img variant="top" src="/src/assets/Images/Nosotros/Leandro.jpeg" className="img-fluid avatar_img" alt="foto de Marvel"/>
            <Card.Body className="description">
              <Card.Title className="title_cardUs fs-2 pt-4">Leandro Bader</Card.Title>
              <Card.Text className="description_cardUs fs-5 pt-4 px-3">Tengo 33 años. Soy estudiante de programación Full Stack en Rolling Code. Me gusta jugar al futbol, tenis, padel y hacer actividades al aire libre.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="avatar_card">
            <Card.Img variant="top" src="/src/assets/Images/Nosotros/Javier.jpg" className="img-fluid avatar_img" alt="foto de Marvel"/>
            <Card.Body className="description">
              <Card.Title className="title_cardUs fs-2 pt-4">Javier Aguilar</Card.Title>
              <Card.Text className="description_cardUs fs-5 pt-4 px-3">Tengo 32 años, soy Técnico en Higiene y Seguridad y estudiante de programación Fullstack. Amante de las películas de Terror, Ciencia Ficción, libros y videojuegos.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="avatar_card">
            <Card.Img variant="top" src="/src/assets/Images/Nosotros/Kelvin.png" className="img-fluid avatar_img" alt="foto de Marvel"/>
            <Card.Body className="description">
              <Card.Title className="title_cardUs fs-2 pt-4">Kelvin Pucho</Card.Title>
              <Card.Text className="description_cardUs fs-5 pt-4 px-3">Soy de Perú y soy estudiante de programación Full Stack. Soy una persona de pocas palabras apasionado por la tecnología.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Nosotros;
