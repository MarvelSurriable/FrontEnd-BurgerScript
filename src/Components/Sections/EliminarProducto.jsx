
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Swal from "sweetalert2";

const EliminarProducto = ({id, getProductos}) => {
    const API = import.meta.env.VITE_API;
    const handleDelete =()=>{
        Swal.fire({
            title: "¿Estas seguro de eliminar este producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar",
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await axios.delete(`${API}/products/delete-product/`+id)
                getProductos();
                  Swal.fire({
                    title: "¡Exito!",
                    text: "Se elimino el producto correctamente",
                    icon: "success",
                  });
                }
               catch (error) {
                console.log("ERROR => ", error);
              }
            }
          });
    }
    return (
        <div>
            <Button type="button" variant="danger" className="mx-3" onClick={()=>{
                handleDelete();
            }}>Eliminar</Button>
        </div>
    );
};

export default EliminarProducto;