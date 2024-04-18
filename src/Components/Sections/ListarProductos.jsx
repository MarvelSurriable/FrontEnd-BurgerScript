import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Producto from "./Producto";
import axios from "axios";

const ListarProductos = () => {

    const [productos, setProductos] = useState([]);

    const API = import.meta.env.VITE_API;

    const getProductos= async()=>{
        try {
            const response = await axios.get(`${API}/productos`);
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
        <h1>Listado de Productos</h1>
      </div>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Categoria</th>
              <th>Stock</th>
              <th>URL Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((element)=>{
                return(
                    <Producto producto={element} key={element.id}/>
                )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListarProductos;
