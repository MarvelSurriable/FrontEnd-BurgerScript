
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";
import EliminarProducto from "./EliminarProducto";

const Producto = ({producto, getProductos}) => {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.title}</td>
        <td>{producto.category}</td>
        <td>{producto.stock}</td>
        {/* <td><img src={producto.urlImg} alt="imagen" width="50px"/></td> */}
        <td>{producto.controlStock}</td>
        <td className="d-flex justify-content-araund">
            <Button type="button" variant="warning" className="mx-3" onClick={()=>{
              navigate(`/editar/${producto.id}`)
            }}>Editar</Button>
            <EliminarProducto id={producto.id} getProductos={getProductos}></EliminarProducto>
        </td>
      </tr>
    </>
  );
};

export default Producto;
