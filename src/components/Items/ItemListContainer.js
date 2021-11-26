import ItemList from "./ItemList";
import { useState, useEffect, useContext } from "react";
import Product from "../../product.json";
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore/lite';
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

    const Comprador = collection(db, 'Comprador');
    // const newProduct = {
    //     comprador: "Pedro",
    //     items: cart,
    //     date: firebase.firestore.Timestamp.fromDate(new Date()),
    //     total: price
    // }
    const time = new Date().getTime()
    var date = new Date(time);
    const newComprador = async () =>{
        await setDoc(doc(db, "Comprador", "comprador"), {
            comprador: "Pedro",
            telefono: "123456789",
            email: "pedroargossi@gmail.com",
            items: cart,
            date: date,
            total: price
        })
    }

    // const updateComprador = async () =>{
    //     await updateDoc(Comprador, {
    //         items: cart,
    //         date: date,
    //         total: price
    //     });
    // }
  

    async function getProducts(db) {
        const productCol = collection(db, 'Products');
        const productSnapshot = await getDocs(productCol);
        const productList = productSnapshot.docs.map(doc => doc.data());
        setDatos(productList);
      }

    useEffect(() => {
        getProducts(db);
        newComprador();
        // updateComprador();
    }, [])



    return (
        <>
            <ItemList items={datos} key={datos.id}></ItemList>
        </> 
    )
}

export default ItemListContainer
