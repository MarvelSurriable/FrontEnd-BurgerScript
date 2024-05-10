import axios from "axios";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Trash3Fill } from "react-bootstrap-icons";

const EliminarUsuario = ({ id, isAdmin, getUsuarios }) => {
  const API = import.meta.env.VITE_API;
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${API}/users/delete-user/` + id);
          getUsuarios();
          Swal.fire({
            title: "¡Exito!",
            text: "Se elimino el usuario correctamente",
            icon: "success",
          });
        } catch (error) {
          console.log("ERROR => ", error);
        }
      }
    });
  };
  return (
    <div>
      <Button
        type="button"
        variant="danger"
        className="mx-3"
        onClick={() => {
          handleDelete();
        }}
        disabled={isAdmin}
      >
        <Trash3Fill />
      </Button>
    </div>
  );
};

export default EliminarUsuario;
