import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CrearUsuarioAdmin = () => {
  const API = import.meta.env.VITE_API;
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ProductSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Mínimo 4 caracteres")
      .max(20, "Máximo 20 caracteres")
      .required("El nombre es requerido"),
    username: Yup.string()
      .required("El nombre de usuario es requerido")
      .matches(/^[a-zA-Z0-9_]{4,20}$/),
    email: Yup.string()
      .required()
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Ingrese un correo electrónico válido"
      ),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
        "ingrese una contraseña válida"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Confirme su contraseña"),
    role: Yup.string().required(),
  });

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Admin",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ProductSchema,
    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: (values) => {
      Swal.fire({
        title: "¿Estas seguro que quieres crear el usuario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Crear",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Creando usuario...",
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
          });

          try {
            const validateRepeat = await axios.get(`${API}/users/get-users`);
            const existemail = validateRepeat.data.some(
              (user) => user.email === values.email
            );
            const existUsername = validateRepeat.data.some(
              (user) => user.username === values.username
            );
            if (existemail) {
              Swal.fire({
                title: "Error",
                text: "El email ingresado ya se encuentra asociado a otro usuario",
                icon: "error",
              });
              return;
            }
            if (existUsername) {
              Swal.fire({
                title: "Error",
                text: "Nombre de usuario no disponible",
                icon: "error",
              });
              return;
            }

            const response = await axios.post(`${API}/users/new-admin`, values);
            if (response.status === 201) {
              formik.resetForm();
              Swal.fire({
                title: "¡Éxito!",
                text: "Usuario creado",
                icon: "success",
              });
              formik.resetForm();
              navigate("/administracion");
              scrollToTop();
            }
          } catch (error) {
            console.log("ERROR => ", error);
          }
        }
      });
    },
  });

  return (
    <>
      <Container fluid className="admin_bg py-4">
        <div className="container my-3 py-3">
          <div className="text-center">
            <h1 className="admin_title">Crear Usuario Administrador</h1>
          </div>
          <div>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label className="admin_label fs-5">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre"
                  minLength={4}
                  maxLength={20}
                  required
                  name="name"
                  {...formik.getFieldProps("name")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid": formik.touched.name && formik.errors.name,
                    },
                    {
                      "is-valid": formik.touched.name && !formik.errors.name,
                    }
                  )}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="mt-2 text-danger">
                    <span role="alert">{formik.errors.name}</span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label className="admin_label fs-5">
                  Nombre de usuario
                </Form.Label>
                <Form.Control
                  type="text"
                  minLength={4}
                  maxLength={20}
                  placeholder="Ingrese un nombre de usuario"
                  required
                  name="username"
                  {...formik.getFieldProps("username")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid":
                        formik.touched.username && formik.errors.username,
                    },
                    {
                      "is-valid":
                        formik.touched.username && !formik.errors.username,
                    }
                  )}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="mt-2 text-danger">
                    <span role="alert">{formik.errors.username}</span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="admin_label fs-5">
                  Correo Electrónico
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese el email"
                  required
                  minLength={8}
                  maxLength={100}
                  name="email"
                  {...formik.getFieldProps("email")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid": formik.touched.email && formik.errors.email,
                    },
                    {
                      "is-valid": formik.touched.email && !formik.errors.email,
                    }
                  )}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="mt-2 text-danger">
                    <span role="alert">{formik.errors.email}</span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="admin_label fs-5">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese la contraseña"
                  required
                  minLength={8}
                  maxLength={16}
                  name="password"
                  {...formik.getFieldProps("password")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid":
                        formik.touched.password && formik.errors.password,
                    },
                    {
                      "is-valid":
                        formik.touched.password && !formik.errors.password,
                    }
                  )}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="mt-2 text-danger">
                    <span role="alert">{formik.errors.password}</span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label className="admin_label fs-5">
                  Confirmar contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirme la contraseña"
                  required
                  minLength={8}
                  maxLength={16}
                  name="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid":
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword,
                    },
                    {
                      "is-valid":
                        formik.touched.confirmPassword &&
                        !formik.errors.confirmPassword,
                    }
                  )}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="mt-2 text-danger">
                      <span role="alert">{formik.errors.confirmPassword}</span>
                    </div>
                  )}
              </Form.Group>
              <Button variant="primary" type="submit" className="admin_btn">
                Crear
              </Button>
              <Button
                className="mx-3"
                variant="secondary"
                onClick={() => {
                  navigate(-1);
                  scrollToTop();
                }}
              >
                Volver
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CrearUsuarioAdmin;
