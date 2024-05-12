![image](https://github.com/grupo3rolling/FrontEnd-BurgerScript/assets/148919690/acc4392c-2e7b-4eec-9930-88c2497660f7)

## Descripción
El proyecto está basado en un sitio de venta de hamburguesas, en el cual se desarrolla un sistema de visualización y compra (según stock) de los distintos productos. Permite además la administración de usuarios y hamburguesas. 
Para acceder a las funcionalidades de los usuarios se implementó un método de registro y login; 
-	El usuario administrador tiene total acceso y permisos. 
-	El resto de usuarios, tienen acceso y permiso a la visualización y compra de los productos

## Estructura general del sitio

- Modal login: permite al usuario ingresar a su cuenta personal
- Modal de registro: en caso de no contar con una cuenta, el usuario puede crearse una

Según el rol del usuario:
  
### Modo usuario:
-	Página principal: presenta un carrusel, muestra los productos con sus respectivas categorías y ademas tiene una vista de los productos destacados
-	Página Quienes somos: presenta a los integrantes, dando una pequeña descripción de cada uno
-	Página Burgers: muestra todos los productos, pudiendo mostrarlas por categorías
-	Página Contacto: permite al usuario mandar una consulta sobre la página y muestra ademas la ubicación del local
-	Página Detalle de producto: muestra en detalle el producto y permite al usuario agregar al carrito de comprar
-	Página Error 404: indica al usuario que ocurrió un error y la página no fué encontrada.


### Modo administrador
Los administradores tienen acceso a una pestaña exclusiva en el navbar llamada "Administración". Aquí pueden administrar los siguientes aspectos:
- Usuarios: Muestra una lista con todos los usuarios indicando su nombre, nombre de usuario, correo electrónico y rol. Los administradores pueden eliminar usuarios que no tengan el rol de administrador.
- Productos: Muestra una lista con todos los productos creados, con sus datos correspondientes(nombre, categoría, precio, posibilidad de destacar el producto y stock ). Los administradores tienen la opción crear , editar o eliminar productos existentes.


## Comandos
Para utilizar este proyecto se debe:

### 1. Clonar el repositorio:
#### Clona este repositorio desde GitHub ejecutando el siguiente comando en tu terminal:
#### git clone [URL del repositorio]

### 2. Para instalar las dependencias
npm i

### 3. Para ejecutar nuestra app de react
npm run dev

### 4. Variables de Entorno
#### Se debe crear un archivo ".env" y copiar la siguiente variable de entorno:
#### VITE_API="https://backend-burgerscript-dev.onrender.com/"

## Demo
- https://burgerscript.netlify.app
- Usuario Administrador (Mail: admin@admin.com , Password: Admin123#)

## Librerias utilizadas
- "axios": "^1.6.8"
- "bootstrap": "^5.3.3"
- "bootstrap-icons": "^1.11.3"
- "clsx": "^2.1.0"
- "formik": "^2.4.5"
- "react": "^18.2.0"
- "react-bootstrap": "^2.10.2"
- "react-bootstrap-icons": "^1.11.4"
- "react-dom": "^18.2.0"
- "react-responsive": "^10.0.0"
- "react-router-dom": "^6.22.3"
- "react-router-hash-link": "^2.4.3"
- "react-slick": "^0.30.2"
- "slick-carousel": "^1.8.1"
- "sweetalert2": "^11.10.8"
- "yup": "^1.4.0"

## Desarrolladores
-	Leandro Bader
-	Marvel Surriable
-	Andrea Saraza
-	Javier Aguilar
-	Kelvin Pucho
