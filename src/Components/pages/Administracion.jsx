import React from 'react';
import CrearProductos from '../Sections/CrearProductos';
import ListarProductos from '../Sections/ListarProductos';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ListarUsuarios from '../Sections/ListarUsuarios';

const Administracion = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='text-center'><h1>Administracion de productos y usuarios</h1></div>
            <Button variant="primary" onClick={()=>{navigate("/crear-producto")}}>Crear Nuevo Producto</Button>
            <ListarProductos></ListarProductos>
            <Button variant='primary' onClick={()=>{navigate("/crear-usuarioadm")}}>Crear Nuevo Admin</Button>
            <ListarUsuarios></ListarUsuarios>
            
        </div>
    );
};

export default Administracion;