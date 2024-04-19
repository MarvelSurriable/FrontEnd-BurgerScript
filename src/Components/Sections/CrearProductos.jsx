import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const CrearProductos = () => {

  const API = import.meta.env.VITE_API;
  const navigate = useNavigate();

  const ProductSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, "Mínimo 4 caracteres")
      .max(20, "Maximo 20 caracteres")
      .required("El título es requerido"),
    category: Yup.string().required("La categoría es requerida"),
    description: Yup.string()
      .min(4, "Mínimo 4 caracteres")
      .max(250, "Maximo 250 caracteres")
      .required("La descripcion es requerida"),
    stock: Yup.string()
      .min(1, "Ingrese al menos un numero")
      .max(4, "Maximo 4")
      .required("El stock es requerido"),
    urlImg: Yup.string()
      .min(10, "ingrese la URL")
      .max(500, "ingrese la URL")
      .required("La URL de la imagen es requerida"),
  });

  const initialValues = {
    title: "",
    category: "",
    description: "",
    stock: "",
    urlImg:""
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ProductSchema,
    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: (values) => {
      Swal.fire({
        title: "¿Estas seguro que quieres crear el producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Crear",
        cancelButtonText: "Cancelar"
      }).then(async(result) => {
        if (result.isConfirmed) {
          try {
            const response = await axios.post(`${API}/productos`, values);
            if(response.status===201){
              formik.resetForm();
              Swal.fire({
                title: "¡Exito!",
                text: "Se creo el producto",
                icon: "success"
              });
              navigate("/administracion")
            }
          } catch (error) {
            console.log("ERROR => ", error);
          }
        }
      });
    },
  });

  return (
    <div className="container my-3 py-3">
      <div className="text-center">
        <h1>Crear Productos</h1>
      </div>
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el titulo"
              minLength={4}
              maxLength={20}
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
              maxLength={4}
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
            Guardar
          </Button>
          <Button className="mx-3" variant="secondary" onClick={()=>{navigate(-1)}}>Volver</Button>
        </Form>
      </div>
    </div>
  );
};

export default CrearProductos;
