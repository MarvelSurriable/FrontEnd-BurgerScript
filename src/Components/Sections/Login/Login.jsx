import { useContext, useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import "./Login.css"
import clsx from 'clsx';
import * as Yup from "yup";
import { useFormik } from 'formik';
import axios from 'axios';
import Swal from "sweetalert2";
import UserContext from '../../../Context/UserContext';
const Login = ({isOpen, handleClose}) => {

  const { currentUser1, setCurrentUser1, RemoveAuth1, SaveAuth1 } =
    useContext(UserContext);
  const [isOpen1, setIsOpen1] = useState(false);
  const handleShow1 = () => {
    setIsOpen1(true);
  };
  const handleClose1 = () => {
    setIsOpen1(false);
  };

  const API=import.meta.env.VITE_API;
  const {setCurrentUser, SaveAuth} = useContext(UserContext);

  const LoginSchema=Yup.object().shape({
    email: Yup.string()
    .email("Formato invalido")
    .min(7)
    .max(128)
    .required("El email es requerido"),
    password: Yup.string()    
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(16)
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
        try {
          const response = await axios.post(`${API}/users/login`, values)
          console.log("Respuesta login ==> ", response.data);
          if (response.status === 200) {
            SaveAuth(response.data)
            setCurrentUser(response.data)
            Swal.fire({
              position: "center",
              icon: "success",
              title: `¡Bienvenido ${response.data.username}!`,
              showConfirmButton: false,
              timer: 2000
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
            timer: 2000
          });
          formik.resetForm();
          console.log("ERROR: ", error);
        }
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
            <Form.Group className='mb-3'controlId="email"> 
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder='Ingresa tu email' 
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
              )}/>
              {formik.touched.email && formik.errors.email && (
                 <div className="mt-2 text-danger fw-bolder">
                   <span role="alert">{formik.errors.email}</span>
                 </div>
               )}              
            </Form.Group>

            <Form.Group className='mb-4' controlId='password'>
              <Form.Label>Contraseña:</Form.Label>              
              <Form.Control type="password" placeholder='Ingrese su contraseña' 
              maxLength={16}
              minLength={8}
              required
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
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.password}</span>
            </div>
          )}              
            </Form.Group>

            <div style={{ textAlign: 'right' }}>
            <Button variant="success" type='submit' className='me-1'>
           Ingresar
          </Button>
          <Button variant="danger" href='/error'>
            Olvidé mi contraseña
          </Button>
          </div>          

          </Form>
          

          </Modal.Body>
        <Modal.Footer>  
        <p>No tenes una cuenta?</p>        
        <Button variant="link" onClick={() => {
          handleClose();
          handleShow1();
        }} > Registrate</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isOpen1} onHide={handleClose1} className='background'>
        <Modal.Header closeButton>
          <Modal.Title>Registrarse!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mail:</Form.Label>
        <Form.Control type="email" 
        placeholder='Ingresa tu email' 
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
        )}/>
        {formik.touched.email && formik.errors.email && (
                 <div className="mt-2 text-danger fw-bolder">
                   <span role="alert">{formik.errors.email}</span>
                 </div>
               )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInpunt2">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control type="password" placeholder='Ingrese su contraseña' 
              maxLength={16}
              minLength={8}
              required
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
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.password}</span>
            </div>
          )}              
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={()=>{handleClose1() ; show={isOpen1}}} type='submit'>
            Confirmar
          </Button>
          <Button variant="danger" onClick={handleClose1}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    );
};

export default Login;