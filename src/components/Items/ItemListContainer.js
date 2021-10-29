import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import Product from "../../product.json";

const ItemListContainer = () => {

    const products = {Product}

    const [datos, setDatos] = useState([]);

    const promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });
    }
    
    useEffect(() => { 
        promise().then(setDatos)
    }, []);


    return (
        <>
            <ItemList items={datos.Product}></ItemList>
        </>
    )
}

export default ItemListContainer
