import React from 'react';
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Usuario from './Usuario';
import axios from "axios";

const ListarUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const API = import.meta.env.VITE_API;

    const getUsuarios= async()=>{
        try {
            const response = await axios.get(`${API}/users/get-users`);
            setUsuarios(response.data);
        } catch (error) {
            console.log("ERROR ==> ", error);
        }
    };

    useEffect(()=>{
        getUsuarios();
        return ()=>{
            setUsuarios([]);
        }
    },[])


    return (
        <div>
      <div className="text-center my-3">
        <h1>Listado de Usuarios</h1>
      </div>
      <div>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
            <th>#</th>
              <th>Nombre</th>
              <th>Nombre de Usuario</th>
              <th>Email</th>
              <th>Contraseña</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((element, index)=>{
                return(
                    <Usuario usuario={element} key={index} index={index +1} getUsuarios={getUsuarios}/>
                )
            })}
          </tbody>
        </Table>
      </div>
    </div>
    );
};

export default ListarUsuarios;