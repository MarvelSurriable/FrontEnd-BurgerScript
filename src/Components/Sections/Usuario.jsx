import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EliminarUsuario from './EliminarUsuario';

const Usuario = ({usuario, index, getUsuarios}) => {
    const navigate = useNavigate();
    return (
        <>
      <tr>
        <td>{index}</td>
        <td>{usuario.name}</td>
        <td>{usuario.username}</td>
        <td>{usuario.email}</td>
        <td>{usuario.password}</td>
        <td>{usuario.role}</td>
        <td className="d-flex justify-content-araund">
            <EliminarUsuario id={usuario._id} getUsuarios={getUsuarios}></EliminarUsuario>
        </td>
      </tr>
    </>
    );
};

export default Usuario;