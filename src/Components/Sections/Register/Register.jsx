import React from "react";
import { Form, Modal, Button } from "react-bootstrap";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const Register = ({ isOpen, handleClose }) => {
  const API = import.meta.env.VITE_API;

  const handleCloseAndReset = () => {
    handleClose();
    formik.resetForm();
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
        "Ingrese una contraseña válida"
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
    role: "User",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ProductSchema,
    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: async (values) => {
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
            text: "Ya se encuentra registrado, inicie sesión",
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

        const response = await axios.post(`${API}/users/new-user`, values);
        if (response.status === 201) {
          formik.resetForm();
          Swal.fire({
            title: "¡Éxito!",
            text: "Usuario registrado, por favor inicie sesión",
            icon: "success",
          });
          formik.resetForm();
          handleClose();
        }
      } catch (error) {
        console.log("ERROR => ", error);
      }
    },
  });

  return (
    <>
      <Modal show={isOpen} onHide={handleCloseAndReset} className="background">
        <Modal.Header closeButton>
          <Modal.Title>Registrarse!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre *</Form.Label>
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
              <Form.Label>Nombre de usuario *</Form.Label>
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
              <Form.Label>Correo Electrónico *</Form.Label>
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
              <Form.Label>Contraseña *</Form.Label>
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
              <Form.Label>Repetir contraseña *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repetir contraseña"
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
            <Button variant="success" type="submit" className="me-3">
              Confirmar
            </Button>
            <Button variant="danger" onClick={handleCloseAndReset}>
              Cancelar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>Los campos marcados con un * son obligatorios</p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;
