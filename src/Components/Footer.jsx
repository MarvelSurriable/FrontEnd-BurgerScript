import './footer.css';
import {Facebook, Instagram, TwitterX, TelephoneFill, Envelope} from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
         <Container fluid className="back ">
          <div className='d-none d-md-block p-0'>
          <Row>
         <Col xs={12} md={4} className='grid'>
          <Row className=' px-4 pt-2'>
            <div>
             <Image
                     src="/src/assets/Logo/logoBurgerScript.png"
                     width="80"
                     height="80"
                     alt="Logo BurgerScript"
                   />
            </div>
          </Row>
          <Row className='pt-2 ' >
          <div >
           <Link to="/" className="Link footer_font ms-1 fs-5">Inicio</Link>
          <Link to="/error" className="Link ps-5 footer_font pe-3 fs-5">Sucursales</Link>
             </div>
            <div>
             <Link to="/contacto" className="Link footer_font ms-1 fs-5">Contacto</Link>
             <Link to="" className="Link ps-4 footer_font  fs-5">Nosotros</Link>
             </div>
             <div>
             <Link to="/Burgers" className="Link footer_font ms-1 fs-5">Burgers</Link>
             </div>
          </Row>

         </Col>
          <Col>
         <p className='text-center footer_font mt-5 pt-5 d-none d-sm-block'>Todos los derechos reservados</p>
         </Col> 
         <Col xs={12} md={4} >
             <div className=' grid text-center '>
             <Row className=' py-2 px-5 '>
           <Link> <Facebook className="footer_font grid fs-5"/></Link>
           </Row>
           <Row className=' py-2 pe-5'>
          <Link> <Instagram className="footer_font grid fs-5"/></Link>
           </Row>
           <Row  className='py-2 '>
          <Link> <TwitterX className="footer_font grid fs-5"/></Link>
          </Row>
            </div>

           <Row className=' footer_font pt-2 '>
           <Col>
            <a > <TelephoneFill className='fs-7 ' /> 3816778899</a>
             <p > <Envelope className='fs-7 '/> BurgerScript@gmail.com </p>

            </Col>
            <Col>
            <div >
              <Image
                    src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png"
                     width="80"
                     height="80"
                    alt="Data Fiscal"
                  />
            </div>

            </Col>
            </Row>
        </Col>
     </Row>
          </div>
          <div className='d-block d-md-none footer_font text-center  container'>
          <Row >
            <div className='pb-3'>
              <Image
                     src="/src/assets/Logo/logoBurgerScript.png"
                     width="80"
                     height="80"
                     alt="Logo BurgerScript"
                   />
            </div>
           </Row>
           <Row >
            <Col><Link> <Facebook className="footer_font grid fs-5"/></Link></Col>
            <Col><Link> <Instagram className="footer_font grid fs-5"/></Link></Col>
            <Col><Link> <TwitterX className="footer_font grid fs-5"/></Link></Col>
            </Row>
            <Row >
           <p className='pt-5'>Todos los derechos reservados</p>
           </Row>
          </div>

   </Container>

    );
};

export default Footer;