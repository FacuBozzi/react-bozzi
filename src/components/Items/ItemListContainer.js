import ItemList from "./ItemList";
import { useState, useEffect, useContext } from "react";
import Product from "../../product.json";
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { CartContext } from '../context/CartContext';


const ItemListContainer = () => {

    //importe de contexto
    const [cart, addItem, removeItem, clear, cont, setCont, details, setDetails, price, setPrice, datos, setDatos] = useContext(CartContext)

    const products = {Product}

    const app = initializeApp({
        apiKey: "AIzaSyAdXrk2EHPVXISaPtJQDniw0-dlzh2Jn6g",
        authDomain: "reactcoder-17fc7.firebaseapp.com",
        projectId: "reactcoder-17fc7",
        storageBucket: "reactcoder-17fc7.appspot.com",
        messagingSenderId: "588405796332",
        appId: "1:588405796332:web:d55017292d043d638e64c9",
        measurementId: "G-WTY3W9QW7B"
      });

    const db = getFirestore(app);

    // const product = collection(db, 'product');
    // const newProduct = {
    //     comprador: "Pedro",
    //     items: cart,
    //     date: firebase.firestore.Timestamp.fromDate(new Date()),
    //     total: price
    // }


    async function getProducts(db) {
        const productCol = collection(db, 'Products');
        const productSnapshot = await getDocs(productCol);
        const productList = productSnapshot.docs.map(doc => doc.data());
        setDatos(productList);
      }

    useEffect(() => {
        getProducts(db);
    }, [])



    return (
        <>
            <ItemList items={datos} key={datos.id}></ItemList>
        </> 
    )
}

export default ItemListContainer
