
import { Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

const Producto = ({producto}) => {
  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.title}</td>
        <td>{producto.category}</td>
        <td>{producto.stock}</td>
        <td><img src={producto.urlImg} alt="imagen" width="50px"/></td>
        {/* <td><a href="${producto.urlImg}" target ="_blank" title="Ver imagen"><img src="${element.urlImg}" alt="Miniatura imagen producto" width=50px></a></td> */}
        <td className="d-flex justify-content-araund">
            <Button type="button" variant="warning" className="mx-3">Editar</Button>
            <Button type="button" variant="danger" className="mx-3">Eliminar</Button>
        </td>
      </tr>
    </>
  );
};

export default Producto;
