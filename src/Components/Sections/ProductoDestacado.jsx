import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductoDestacado = ({producto, index}) => {
    const navigate = useNavigate();
    return (
        <>
        <div className='mx-2'>
              <Link className="text_carousel" to={`/descripcion/${producto._id}`}>
                <h4>{producto.title}</h4>
                <img
                  src={producto.image}
                  alt={producto.title}
                  className="img-fluid border_img rounded-5 w-100"
                />
              </Link>
              </div>
        
        </>
    );
};

export default ProductoDestacado;