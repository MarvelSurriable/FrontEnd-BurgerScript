import { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import "./Login.css"
import clsx from 'clsx';
import * as Yup from "yup";
import { useFormik } from 'formik';

const Login = ({isOpen, handleClose}) => {
  const LoginSchema=Yup.object().shape({
    email: Yup.string()
    .email("Formato invalido")
    .min(7)
    .max(128)
    .required("El email es requerido"),
    password: Yup.string()    
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20)
    .required("La contraseña es requerida")
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
      onSubmit:async (values) => {
        console.log("Values de Formik", values); 
      }
      })

    return (
        <>
          <Modal show={isOpen} onHide={handleClose}  className='background'>
        <Modal.Header closeButton >
          <Modal.Title >Es hora de una Script! Ingresa y disfruta! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='mb-3'controlId="Email"> 
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder='Ingresa tu email' 
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
              )}/>
              {formik.touched.email && formik.errors.email && (
                 <div className="mt-2 text-danger fw-bolder">
                   <span role="alert">{formik.errors.email}</span>
                 </div>
               )}              
            </Form.Group>

            <Form.Group className='mb-4'>
              <Form.Label>Contraseña</Form.Label>              
              <Form.Control type="password" placeholder='Ingresa tu contraseña' name="password"
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
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.password}</span>
            </div>
          )}              
            </Form.Group>

          </Form>
          <div style={{ textAlign: 'right' }}>
            <Button variant="success" type='submit' className='me-1'>
           Ingresar
          </Button>
          <Button variant="danger" href='/error'>
            Olvidé mi contraseña
          </Button>
          </div>          

          </Modal.Body>
        <Modal.Footer>  
        <p>No tenes una cuenta?</p>        
        <Button variant="link" onClick={handleClose}> Registrate</Button>
          
          
        </Modal.Footer>
      </Modal>
            
        </>
    );
};

export default Login;