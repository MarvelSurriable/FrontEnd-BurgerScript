import { useContext, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import UserContext from "../../../Context/UserContext";
import Register from "../Register/Register";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = ({ isOpen, handleClose }) => {
  const navigate = useNavigate();
  const [isOpen1, setIsOpen1] = useState(false);
  const handleShow1 = () => {
    setIsOpen1(true);
  };
  const handleClose1 = () => {
    setIsOpen1(false);
  };

  const API = import.meta.env.VITE_API;
  const { setCurrentUser, SaveAuth } = useContext(UserContext);

  const handleCloseAndReset = () => {
    handleClose();
    formik.resetForm();
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato inválido")
      .min(7)
      .max(128)
      .required("El email es requerido"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .max(16)
      .required("La contraseña es requerida"),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      Swal.fire({
        title: "Iniciando sesión...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const response = await axios.post(`${API}/users/login`, values);
        if (response.status === 200) {
          SaveAuth(response.data);
          setCurrentUser(response.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `¡Bienvenido ${response.data.username}!`,
            showConfirmButton: false,
            timer: 2000,
          });
          formik.resetForm();
          handleClose();
        }
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Ups! email o contraseña incorrecto`,
          showConfirmButton: false,
          timer: 2000,
        });
        formik.resetForm();
        console.log("ERROR: ", error);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Register isOpen={isOpen1} handleClose={handleClose1}></Register>
      <Modal show={isOpen} onHide={handleCloseAndReset} className="background">
        <Modal.Header closeButton>
          <Modal.Title>Es hora de una Script! Ingresá y disfrutá! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                minLength={7}
                maxLength={128}
                required
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
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.email}</span>
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Contraseña:</Form.Label>
              <div className="groupPassword">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña"
                maxLength={16}
                minLength={8}
                required
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
              <button
                  className="btn btn-outline-dark mx-2 px-2 py-1"
                  type="button"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <AiFillEye className="fs-3" /> : <AiFillEyeInvisible className="fs-3" />}
                </button>
                </div>
              {formik.touched.password && formik.errors.password && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.password}</span>
                </div>
              )}
              
            </Form.Group>

            <div style={{ textAlign: "right" }}>
              <Button variant="success" type="submit" className="me-1">
                Ingresar
              </Button>
              <Button variant="danger" onClick={() => {
              handleClose();
              navigate("/error");
            }}>
                Olvidé mi contraseña
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p>No tienes una cuenta?</p>
          <Button
            variant="link"
            onClick={() => {
              handleClose();
              handleShow1();
            }}
          >
            {" "}
            Regístrate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
