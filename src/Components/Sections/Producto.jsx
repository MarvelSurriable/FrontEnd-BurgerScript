import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EliminarProducto from "./EliminarProducto";
import { PencilFill } from "react-bootstrap-icons";

const Producto = ({ producto, index, getProductos }) => {
  const navigate = useNavigate();
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };
  return (
    <>
      <tr>
        <td>{index}</td>
        <td>{producto.title}</td>
        <td>{producto.category}</td>
        <td>${producto.price}</td>
        <td>{producto.stock}</td>
        <td>{formatDate(producto.controlStock.timestamp)}</td>
        <td className="d-flex justify-content-araund">
          <Button
            type="button"
            variant="warning"
            className="mx-3"
            onClick={() => {
              navigate(`/editar/${producto._id}`);
            }}
          >
            <PencilFill />
          </Button>
          <EliminarProducto
            id={producto._id}
            getProductos={getProductos}
          ></EliminarProducto>
        </td>
      </tr>
    </>
  );
};

export default Producto;
