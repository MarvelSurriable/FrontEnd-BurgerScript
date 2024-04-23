import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CrearUsuario = () => {
  const API = import.meta.env.VITE_API;
  const navigate = useNavigate();

  const ProductSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Mínimo 4 caracteres")
      .max(20, "Maximo 20 caracteres")
      .required("El nombre es requerido"),
    username: Yup.string()
      .required("El nombre de usuario es requerido")
      .matches(/^[a-zA-Z0-9_]{4,20}$/),
    email: Yup.string()
      .required()
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Ingrese un correo electronico valido"
      ),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
        "ingrese una contraseña valida"
      ),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Confirme su contraseña"),
      role: Yup.string().required()
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
          try {
            const existeUsername = await axios.get(`${API}/usuarios?username=${values.username}`)
            const existeUserMail = await axios.get(`${API}/usuarios?email=${values.email}`);
        if (existeUserMail.data.length > 0) {
          // Si ya existe un usuario con el mismo correo electrónico, mostrar un mensaje de error
          Swal.fire({
            title: "Error",
            text: "Ya existe un usuario con este correo electrónico",
            icon: "error",
          });
          return;
        }
        if (existeUsername.data.length > 0) {
            // Si ya existe un usuario con el mismo nombre de usuario, mostrar un mensaje de error
            Swal.fire({
              title: "Error",
              text: "Ya existe un usuario con este nombre de usuario",
              icon: "error",
            });
            return;
          }

            const response = await axios.post(
              `${API}/usuarios`,
              values
            );
            if (response.status === 201) {
              formik.resetForm();
              Swal.fire({
                title: "¡Exito!",
                text: "Se creo el usuario",
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

  return (
    <div className="container my-3 py-3">
      <div className="text-center">
        <h1>Crear Usuario Administrador</h1>
      </div>
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
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
            <Form.Label>Nombre de usuario</Form.Label>
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
            <Form.Label>Correo Electronico</Form.Label>
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
            <Form.Label>Contraseña</Form.Label>
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
                  "is-invalid": formik.touched.password && formik.errors.password,
                },
                {
                  "is-valid": formik.touched.password && !formik.errors.password,
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
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingrese la contraseña"
              required
              minLength={8}
              maxLength={16}
              name="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
              className={clsx(
                "form-control",
                {
                  "is-invalid": formik.touched.confirmPassword && formik.errors.confirmPassword,
                },
                {
                  "is-valid": formik.touched.confirmPassword && !formik.errors.confirmPassword,
                }
              )}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="mt-2 text-danger">
                <span role="alert">{formik.errors.confirmPassword}</span>
              </div>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Crear
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

export default CrearUsuario;
