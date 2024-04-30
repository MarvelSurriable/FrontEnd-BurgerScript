import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

const CardProductos = ({ producto }) => {
  const navigate = useNavigate()

  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Agregar "..." al final si se corta el texto
    } else {
      return text;
    }
  };

  const maxChars = isSmallScreen ? 28 : 50;

  return (
    <div>
      <Col className="my-2">
        <Card className="img_fluid">

          <Button variant="link" className="btn-img b-0 p-0" onClick={()=>{
              navigate(`/descripcion/${producto._id}`)
            }}><Card.Img variant="top" src={producto.image} /></Button>
          <Card.Body>
            <Card.Title className="title_card text-center fs-4">
              {producto.title}
            </Card.Title>
            <Card.Text className="description_card text-center" >
            {truncateText(producto.description, maxChars)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CardProductos;
