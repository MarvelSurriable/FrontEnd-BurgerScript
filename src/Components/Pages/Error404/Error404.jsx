import { Container, Button,Image} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Error404.css'

const Error404 = () => {
    return (        
        <Container fluid className='back404 text-center error_font'>  
        <h1 className='container pt-5 title' >Oops! Parece que una hamburguesa se escapó de la parrilla!</h1>    
             <div className='container py-5'>
            <Image
                     src="/src/assets/Images/Error404/404Burguer.jpg"
                     width="90%"
                     height="90%"
                     alt="Logo BurgerScript"
                   />
            </div> 
            <div className=' container pb-5 '> 
                <a href="/">
                    <Button variant="warning" size="lg" >Inicio</Button>
                </a>
            </div>
                    
        </Container>
        
    );
};

export default Error404;