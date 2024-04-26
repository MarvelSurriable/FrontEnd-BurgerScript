import { Container, Button,Image} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Error404.css'

const Error404 = () => {
    return (        
        <Container fluid className='back404 text-center error_font pt-5'>  
        <h1 className='container py-3 title' >Oops! Parece que una hamburguesa se escapó de la parrilla!</h1>    
             <div className='container  '>
             <Image
                     src="/src/assets/Images/Error404/404Burger.jpg"
                     alt="Error BurgerScript"
                     className='img-fluid' 
                   />  
                                 
            </div> 

            <div className=' container py-4'> 
                <a href="/" >
                    <Button variant="warning" size="lg"  >Inicio</Button>
                </a>
            </div>
          
                    
        </Container>
        
    );
};

export default Error404;