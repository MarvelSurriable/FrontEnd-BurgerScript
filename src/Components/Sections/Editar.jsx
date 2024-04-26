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
            const {data} = await axios.get(`${API}/products/get-product/${id}`);
            setProducto(data);
        } catch (error) {
            console.log("ERROR => ", error);
        }
    }
    useEffect(()=>{
        getProducto();
    },[])
    
    const navigate = useNavigate();
  
    const ProductSchema = Yup.object().shape({
      title: Yup.string()
        .min(4, "Mínimo 4 caracteres")
        .max(20, "Maximo 20 caracteres")
        .required("El título es requerido"),
      description: Yup.string()
        .min(4, "Mínimo 4 caracteres")
        .max(200, "Maximo 200 caracteres")
        .required("La descripcion es requerida"),
      image: Yup.string()
        .required("La URL de la imagen es requerida")
        .matches(
          /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
          "Ingrese una URL valida"
        ),
      price: Yup.number()
        .required("El precio es requerido")
        .positive("El precio debe ser mayor a cero"),
      category: Yup.string().required("La categoría es requerida"),
      stock: Yup.number()
        .required("El stock es requerido")
        .min(0, "El stock no puede ser menor a cero"),
    });
  
    const initialValues = {
      title: "",
      description: "",
      image: "",
      price: "",
      category: "",
      stock: "",
    };
  
    const formik = useFormik({
      initialValues,
      validationSchema: ProductSchema,
      validateOnBlur: true,
      validateOnChange: true,
  
      onSubmit: (values) => {
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
              const response = await axios.put(`${API}/products/update-product/${id}`, values);
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
            formik.setFieldValue("image", producto.image, true);
            formik.setFieldValue("price", producto.price, true);
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
            <option value="Carne">Carne</option>
            <option value="Pollo">Pollo</option>
            <option value="Vegetarianas">Vegetariana</option>
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
              type="number"
              placeholder="Ingrese el stock"
              required
              minLength={1}
              maxLength={6}
              name="stock"
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
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>URL imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la URL de la imagen"
              required
              minLength={10}
              maxLength={400}
              name="image"
              {...formik.getFieldProps("image")}
              className={clsx(
                "form-control",
                {
                  "is-invalid": formik.touched.image && formik.errors.image,
                },
                {
                  "is-valid": formik.touched.image && !formik.errors.image,
                }
              )}
            />
            {formik.touched.image && formik.errors.image && (
              <div className="mt-2 text-danger">
                <span role="alert">{formik.errors.image}</span>
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el precio del producto"
              required
              minLength={2}
              maxLength={11}
              name="price"
              {...formik.getFieldProps("price")}
              className={clsx(
                "form-control",
                {
                  "is-invalid": formik.touched.price && formik.errors.price,
                },
                {
                  "is-valid": formik.touched.price && !formik.errors.price,
                }
              )}
            />
            {formik.touched.price && formik.errors.price && (
              <div className="mt-2 text-danger">
                <span role="alert">{formik.errors.price}</span>
              </div>
            )}
          </Form.Group>

          <Button type="submit" variant="primary">
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