import React, { useEffect, useState } from 'react';
import './Carrito.css';
import { useNavigate } from 'react-router-dom';
import { Trash3Fill } from 'react-bootstrap-icons';
import Table from "react-bootstrap/Table";
import { Button } from 'react-bootstrap';
import Swal from "sweetalert2";

const Carrito = ({actualizarContador}) => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchProductsFromSession();
    }, []);

    const fetchProductsFromSession = () => {
        const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
        setProducts(cartItems);
        updateTotal(cartItems);
    };

    const updateTotal = (products) => {
        let totalPrice = 0;
        products.forEach((product) => {
            const price = parseFloat(product.price);
            const quantity = product.quantity || 1;
            totalPrice += price * quantity;
        });
        setTotal(totalPrice);
    };

    const handleQuantityChange = (index, newQuantity) => {
        const updatedProducts = [...products];
        const product = updatedProducts[index];
        if (newQuantity <= product.stock) {
            product.quantity = newQuantity;
            setProducts(updatedProducts);
            updateTotal(updatedProducts);
            sessionStorage.setItem('cart', JSON.stringify(updatedProducts)); // Update cart in sessionStorage
        } else {
            alert(`Stock insuficiente. Stock disponible: ${product.stock}`);
        }
    };

    const handleRemoveProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        updateTotal(updatedProducts);
        sessionStorage.setItem('cart', JSON.stringify(updatedProducts)); // Update cart in sessionStorage
        actualizarContador();
    };

    const handlePurchase = () => {
        if (products.length === 0) {
            Swal.fire({
                text: "¡Agrega al menos un producto al carrito para realizar la compra!",
                icon: "warning",
            });
        } else {
            Swal.fire({
                text: "¡Muchas gracias por tu compra!",
                icon: "success",
            });
            handleRemoveProduct();
            navigate("/")
        }
    };

    return (
        <div className='burgers_bg'>
            <button
            className="mx-3 mt-3 rounded-3 fs-4 ms-5 bg-warning"
            variant="secondary"
            onClick={() => {
              navigate('/burgers');
            }}
          >
            Volver
          </button>
            <h1 className="text-center mt-3 text-danger fs-1">Carrito de Compras</h1>
            <div className="cart table-responsive-sm">
                <Table className="table text-center" variant='dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>
                                    <input
                                        type="number"
                                        min="1"
                                        max={product.stock}
                                        value={product.quantity || 1}
                                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                        className='table-quantity'
                                    />
                                </td>
                                <td>${(parseFloat(product.price)).toFixed(2)}</td>
                                <td>
                                    <Button type='button' className="mx-3" variant="danger" onClick={() => handleRemoveProduct(index)}>
                                    <Trash3Fill/>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="text-center mt-3">
                <div className="fs-1 text-white pb-3">Total: ${total.toFixed(2)}</div>
                <button onClick={handlePurchase} className="subtitle_burger btn_burger px-4 fs-5 bg-success text-light me-3 fs-3 mb-5">Comprar</button>
            </div>
        </div>
    );
};

export default Carrito;
