import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Producto from "./Producto";
import axios from "axios";

const ListarProductos = () => {

    const [productos, setProductos] = useState([]);

    const API = import.meta.env.VITE_API;

    const getProductos= async()=>{
        try {
            const response = await axios.get(`${API}/products/get-products`);
            setProductos(response.data);
        } catch (error) {
            console.log("ERROR ==> ", error);
        }
    };

    useEffect(()=>{
        getProductos();
        return ()=>{
            setProductos([]);
        }
    },[])
  return (
    <div>
      <div className="text-center my-3">
        <h1 className="admin_subtitle mb-4">Listado de Productos</h1>
      </div>
      <div>
        <Table striped bordered hover responsive variant="light">
          <thead className="text-center">
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Último control de Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((element, index)=>{
                return(
                    <Producto producto={element} key={index} index={index +1} getProductos={getProductos}/>
                )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListarProductos;
