import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import Product from "../../product.json";
// import {db} from "../Firebase/firebase";
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const ItemListContainer = () => {

    const products = {Product}

    const [datos, setDatos] = useState([]);

    // const firebaseConfig = {
    //     apiKey: "AIzaSyAdXrk2EHPVXISaPtJQDniw0-dlzh2Jn6g",
    //     authDomain: "reactcoder-17fc7.firebaseapp.com",
    //     projectId: "reactcoder-17fc7",
    //     storageBucket: "reactcoder-17fc7.appspot.com",
    //     messagingSenderId: "588405796332",
    //     appId: "1:588405796332:web:d55017292d043d638e64c9",
    //     measurementId: "G-WTY3W9QW7B"
    //   };
      
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

    // useEffect(() => {
    //     setLoading(true);
    //     const itemCollection = db.collection("Products");
    //     itemCollection.get().then((querySnapshot) => {
    //         if(querySnapshot.size === 0) {
    //             console.log("no results")
    //         }
    //         setItems(querySnapshot.docs.map(doc => doc.data()))
    //     }).catch((error) => {
    //         console.log("error searching item", error)
    //     }).finally(() => {
    //         setLoading(false)
    //     })
    // }, [])

    async function getProducts(db) {
        const productCol = collection(db, 'Products');
        const productSnapshot = await getDocs(productCol);
        const productList = productSnapshot.docs.map(doc => doc.data());
        setDatos(productList);
      }

    useEffect(() => {
        getProducts(db);
    }, [])

    console.log(datos)

   

    // const promise = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(products)
    //         }, 2000);
    //     });
    // }
    
    // useEffect(() => { 
    //     promise().then(setDatos)
    // }, []);


    return (
        <>
            <ItemList items={datos} key={datos.id}></ItemList>
        </> 
    )
}

export default ItemListContainer
