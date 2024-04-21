import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Editar = () => {
    
    const [producto, setProducto] = useState(undefined);
    const API = import.meta.env.VITE_API;
    const {id} = useParams();
    const getProducto = async()=>{
        try {
            const {data} = await axios.get(`${API}/productos/${id}`);
            setProducto(data);
        } catch (error) {
            console.log("ERROR => ", error);
        }
    }
    useEffect(()=>{
        getProducto();
    },[])
    
    
    const navigate = useNavigate();
    const fecha = new Date(); // Obtener la fecha y hora actual
    const año = fecha.getFullYear(); // Obtener el año
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Obtener el mes (añadir 1 porque los meses están indexados desde 0)
    const dia = String(fecha.getDate()).padStart(2, "0");
    const hora = String(fecha.getHours()).padStart(2, '0'); // Obtener las horas
  const minutos = String(fecha.getMinutes()).padStart(2, '0');
  
    const ProductSchema = Yup.object().shape({
      title: Yup.string()
        .min(4, "Mínimo 4 caracteres")
        .max(50, "Maximo 50 caracteres")
        .required("El título es requerido"),
      category: Yup.string().required("La categoría es requerida"),
      description: Yup.string()
        .min(4, "Mínimo 4 caracteres")
        .max(250, "Maximo 250 caracteres")
        .required("La descripcion es requerida"),
      stock: Yup.string()
        .min(1, "Ingrese al menos un numero")
        .max(6, "Maximo 6")
        .required("El stock es requerido")
        .matches(/^[0-9]*$/, "Solo valores numericos"),
      urlImg: Yup.string()
        .min(10, "ingrese la URL")
        .max(500, "ingrese la URL")
        .required("La URL de la imagen es requerida")
        .matches(
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
          "URL invalida"
        ),
      controlStock: Yup.string().required(),
    });
  
    const initialValues = {
      title: "",
      category: "",
      description: "",
      stock: "",
      urlImg: "",
      controlStock: `${dia}/${mes}/${año} ${hora}:${minutos}`
    };
  
    const formik = useFormik({
      initialValues,
      validationSchema: ProductSchema,
      validateOnBlur: true,
      validateOnChange: true,
  
      onSubmit: (values) => {
        values.controlStock = `${dia}/${mes}/${año} ${hora}:${minutos}`;
        Swal.fire({
          title: "¿Estas seguro que quieres editar el producto?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Editar",
          cancelButtonText: "Cancelar",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const response = await axios.put(`${API}/productos/${id}`, values);
              if (response.status === 200) {
                Swal.fire({
                  title: "¡Exito!",
                  text: "Se edito el producto correctamente",
                  icon: "success",
                });
                navigate("/administracion");
              }
            } catch (error) {
              console.log("ERROR => ", error);
            }
          }
        });
      },
    });

    useEffect(()=>{
        if (producto !== undefined) {
            formik.setFieldValue("title", producto.title, true);
            formik.setFieldValue("category", producto.category, true);
            formik.setFieldValue("description", producto.description, true);
            formik.setFieldValue("stock", producto.stock, true);
            formik.setFieldValue("urlImg", producto.urlImg, true);
            // formik.setFieldValue("controlStock", producto.controlStock, true);
        }
        
    },[producto])
  
    return (
      <div className="container my-3 py-3">
        <div className="text-center">
          <h1>Editar Productos</h1>
        </div>
        <div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el titulo"
                minLength={4}
                maxLength={50}
                required
                name="title"
                {...formik.getFieldProps("title")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.title && formik.errors.title,
                  },
                  {
                    "is-valid": formik.touched.title && !formik.errors.title,
                  }
                )}
              />
              {formik.touched.title && formik.errors.title && (
                <div className="mt-2 text-danger">
                  <span role="alert">{formik.errors.title}</span>
                </div>
              )}
            </Form.Group>
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              aria-label="category"
              required
              name="category"
              {...formik.getFieldProps("category")}
              className={clsx(
                "form-control",
                {
                  "is-invalid": formik.touched.category && formik.errors.category,
                },
                {
                  "is-valid": formik.touched.category && !formik.errors.category,
                }
              )}
            >
              <option value="">Seleccione una categoria</option>
              <option value="carne">Carne</option>
              <option value="pollo">Pollo</option>
              <option value="vegetariana">Vegetariana</option>
            </Form.Select>
            {formik.touched.category && formik.errors.category && (
              <div className="mt-2 text-danger">
                <span role="alert">{formik.errors.category}</span>
              </div>
            )}
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                minLength={4}
                maxLength={250}
                placeholder="Ingrese una descripcion"
                required
                name="description"
                {...formik.getFieldProps("description")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.description && formik.errors.description,
                  },
                  {
                    "is-valid":
                      formik.touched.description && !formik.errors.description,
                  }
                )}
              />
              {formik.touched.description && formik.errors.description && (
                <div className="mt-2 text-danger">
                  <span role="alert">{formik.errors.description}</span>
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el stock"
                required
                minLength={1}
                maxLength={6}
                name="title"
                {...formik.getFieldProps("stock")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.stock && formik.errors.stock,
                  },
                  {
                    "is-valid": formik.touched.stock && !formik.errors.stock,
                  }
                )}
              />
              {formik.touched.stock && formik.errors.stock && (
                <div className="mt-2 text-danger">
                  <span role="alert">{formik.errors.stock}</span>
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="urlImg">
              <Form.Label>URL imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la URL de la imagen"
                required
                minLength={10}
                maxLength={400}
                name="urlImg"
                {...formik.getFieldProps("urlImg")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.urlImg && formik.errors.urlImg,
                  },
                  {
                    "is-valid": formik.touched.urlImg && !formik.errors.urlImg,
                  }
                )}
              />
              {formik.touched.urlImg && formik.errors.urlImg && (
                <div className="mt-2 text-danger">
                  <span role="alert">{formik.errors.urlImg}</span>
                </div>
              )}
            </Form.Group>
  
            <Button variant="primary" type="submit">
              Editar
            </Button>
            <Button
              className="mx-3"
              variant="secondary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Volver
            </Button>
          </Form>
        </div>
      </div>
    );
};

export default Editar;