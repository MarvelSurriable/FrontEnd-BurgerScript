import React from "react";
import { Card, Col } from "react-bootstrap";

const CardProductos = ({ producto }) => {
  return (
    <div>
      <Col className="my-2">
        <Card className="img_fluid">
          <Card.Link href="#">
            <Card.Img variant="top" src={producto.urlImg} />
          </Card.Link>

          <Card.Body>
            <Card.Title className="title_card text-center fs-4">
              {producto.title}
            </Card.Title>
            <Card.Text className="description_card text-center">
              {producto.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CardProductos;
