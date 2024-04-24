import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <Container fluid className="bg_Container">
      <h1 className="text-center pt-4 title_burger">Sobre Nosotros</h1>
      <h4 fluid className="text-center py-3 mx-3 text-white subtitle_burger">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur atque
        in fugit nihil obcaecati doloremque eum iusto totam quo laboriosam!
      </h4>
      <Row className="justify-content-center text-center pt-4">
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
            <Card.Img variant="top" src="/src/assets/Images/Nosotros/Marvel.jpeg" className="img-fluid avatar_img" alt="foto de Marvel"/>
            <Card.Body className="description"> 
              <Card.Title className="title_cardUs fs-2 pt-4">Marvel Surriable</Card.Title>
              <Card.Text className="description_cardUs fs-5 pt-4 px-3">Tengo 37 años y soy de Jujuy. Estudio programación Full Stack en Rolling Code. Me gustan los juegos de mesa, ver series y películas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
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
            <Card.Img variant="top" src="/src/assets/Images/Nosotros/Marvel.jpeg" className="img-fluid avatar_img" alt="foto de Marvel"/>
            <Card.Body className="description">
              <Card.Title className="title_cardUs fs-2 pt-4">Marvel Surriable</Card.Title>
              <Card.Text className="description_cardUs fs-5 pt-4 px-3">Tengo 37 años y soy de Jujuy. Estudio programación Full Stack en Rolling Code. Me gustan los juegos de mesa, ver series y películas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="avatar_card">
            <Card.Img variant="top" src="/src/assets/Images/Nosotros/Marvel.jpeg" className="img-fluid avatar_img" alt="foto de Marvel"/>
            <Card.Body className="description">
              <Card.Title className="title_cardUs fs-2 pt-4">Marvel Surriable</Card.Title>
              <Card.Text className="description_cardUs fs-5 pt-4 px-3">Tengo 37 años y soy de Jujuy. Estudio programación Full Stack en Rolling Code. Me gustan los juegos de mesa, ver series y películas.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Nosotros;
