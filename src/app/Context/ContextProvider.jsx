"use client"
import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext();



export default function ContextProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [totalDeProductos, setTotalDeProductos] = useState(0);
    const [totalDeDinero, setTotalDeDinero] = useState(0);

    // Agregar al carro
    const addToCart = (item) => {
        // Verificamos si el item ya está en el carrito
        const itemIndex = cart.findIndex((cartItem) =>
            cartItem[0]._id === item[0]._id
        )

        if (itemIndex !== -1) {
            // El item ya está en el carrito, incrementamos la cantidad
            const updatedCart = [...cart];
            updatedCart[itemIndex].cantProduct += 1;
            setCart(updatedCart);
        } else {
            // El item no está en el carrito, lo añadimos al carrito
            const updatedCart = [...cart, { ...item, cantProduct: 1 }];
            setCart(updatedCart);
        }
    };


    // REMOVER DEL CARRO
    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item[0]._id !== itemId));
    };
    // LIMPIAR CARRO
    function clear() {
        setCart([])
        // console.log(cart)
    }

    //TOTAL DE CANTIDAD DE PRODUCTOS
    function totalProducts() {
        setTotalDeProductos(cart.reduce((acc, item) => acc += item.cantProduc, 0))
    }
    // TOTAL DEL DINERO
    const totalDinero = () => {
        const total = cart.reduce((acc, item) => {
            // Verificamos que las propiedades precio y cantProduct existen y son números
            const itemPrecio = parseFloat(item[0].precio)
            const itemCantProduct = parseInt(item.cantProduct, 10)
            return acc + (itemPrecio * itemCantProduct);
        }, 0);
        setTotalDeDinero(total);

    };
    useEffect(() => {
        totalProducts();
        totalDinero();
    }, [cart]);

    return (
        <Context.Provider value={{ cart, setCart, addToCart, removeItem, clear, totalDeProductos, totalDeDinero }}>
            {children}
        </Context.Provider>
    )
}