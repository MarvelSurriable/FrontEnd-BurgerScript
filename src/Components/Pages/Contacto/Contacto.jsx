import "./Contacto.css";
import { Container } from "react-bootstrap";
import { Row, Col, Form, Button } from "react-bootstrap";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    nombre: Yup.string().
    matches(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]*$/, "El campo nombre solo puede contener letras")
      .min(3, "Escribe un nombre con más de 3 caracteres")
      .required("Contanos como te llamas!"),
    email: Yup.string()
      .email("Formato invalido")
      .min(7)
      .required("El email es requerido"),
    description: Yup.string()
      .min(8, "Tu consulta debe superar los 8 caracteres")
      .required("No te olvides de contarnos tu consulta"),
  });
  const initialValues = {
    nombre: "",
    email: "",
    description: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      formik.resetForm();
      Swal.fire({
        title: "¡Exito!",
        text: "¡Muchas gracias por tu mensaje!",
        icon: "success",
      });
      navigate("/");
    },
  });

  return (
    <Container fluid className="back-body py-5">
      <div className="container back-div pb-3">
        <h1 className="text-center pt-4">Contáctanos</h1>
        <Row className="py-5">
          <Col xs={12} md={6}>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group controlId="nombre" className="mb-3">
                <Form.Label>Nombre y apellido</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={40}
                  placeholder="Ingresa tu nombre"
                  name="nombre"
                  {...formik.getFieldProps("nombre")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid":
                        formik.touched.nombre && formik.errors.nombre,
                    },
                    {
                      "is-valid":
                        formik.touched.nombre && !formik.errors.nombre,
                    }
                  )}
                />
                {formik.touched.nombre && formik.errors.nombre && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.nombre}</span>
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Mail</Form.Label>
                <Form.Control
                  type="email"
                  maxLength={50}
                  placeholder="Ingresa tu email"
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
              <Form.Group controlId="descrption">
                <Form.Label>Tu consulta</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  maxLength={300}
                  placeholder="Ingresa tu consulta"
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
                        formik.touched.description &&
                        !formik.errors.description,
                    }
                  )}
                />
                {formik.touched.description && formik.errors.description && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.description}</span>
                  </div>
                )}
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button variant="light" type="submit" className="mt-2">
                  Enviar!
                </Button>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370777457!2d-65.2093904844119!3d-26.836696096502912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1631390004391!5m2!1ses-419!2sar"
              height="450"
              className="w-100 py-4 "
              allowFullScreen
              style={{ borderRadius: "50px" }}
            ></iframe>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contacto;
