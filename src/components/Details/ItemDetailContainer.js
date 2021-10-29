import { useState, useEffect } from "react";
import Product from "../../product.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const descripcion = {Product}

    const [details, setDetails] = useState([]);

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(descripcion)
            }, 2000);
        });
    }
    
    useEffect(() => { 
        getItem().then(setDetails)
    }, []);

    const descr=details.Product

    let itemsToRender;
    if (descr) {
      itemsToRender = descr.map(desc => {
        return <ItemDetail key={desc.id} {...desc}></ItemDetail>
      });
    }

    return (
        <>
            {itemsToRender}
        </>
    )
}

export default ItemDetailContainer
