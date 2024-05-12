import React from 'react';
import { useNavigate } from "react-router-dom";
import EliminarUsuario from './EliminarUsuario';

const Usuario = ({ usuario, index, getUsuarios }) => {
    const isAdmin = usuario.role === 'Admin';

    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{usuario.name}</td>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
                <td>{usuario.role}</td>
                <td className="d-flex justify-content-around">
                    <EliminarUsuario id={usuario._id} isAdmin={isAdmin} getUsuarios={getUsuarios} />
                </td>
            </tr>
        </>
    );
};

export default Usuario;
