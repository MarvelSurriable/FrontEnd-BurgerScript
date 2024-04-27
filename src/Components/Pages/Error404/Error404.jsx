import { Container, Button,Image} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './Error404.css'

const Error404 = () => {
    return (        
        <Container fluid className='back404 text-center error_font pt-5'>  
        <h1 className='container py-5 title' >Oops! Parece que una hamburguesa se escapó de la parrilla!</h1>    
             <div className='container d-flex justify-content-center align-items-center '>
             <Image src="/src/assets/Images/Error404/404Burger.jpg" alt="Error BurgerScript" className="d-none d-md-block" height="400vh"  />    
             <Image src="/src/assets/Images/Error404/404Burger.jpg" alt="Error BurgerScript" className="d-block d-md-none img-fluid pb-3"  />                               
            </div> 
           

            <div className=' container py-5'> 
           
                <Link to="/"><Button variant="warning" size="lg"  >Inicio</Button></Link>
                    
                
            </div>
          
                    
        </Container>
        
    );
};

export default Error404;