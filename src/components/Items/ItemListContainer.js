import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import Product from "../../product.json";
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const ItemListContainer = () => {

    const products = {Product}

    const [datos, setDatos] = useState([]);

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
