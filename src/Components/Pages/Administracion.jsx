import React from 'react';
import CrearProductos from '../Sections/CrearProductos';
import ListarProductos from '../Sections/ListarProductos';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Administracion = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='text-center pt-5'><h1>Administracion de productos y usuarios</h1></div>
            <Button variant="primary" onClick={()=>{navigate("/crear-producto")}}>Crear Nuevo Producto</Button>
            <ListarProductos></ListarProductos>
        </div>
    );
};

export default Administracion;