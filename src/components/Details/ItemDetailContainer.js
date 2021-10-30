import { useState, useEffect } from "react";
import Product from "../../product.json";
import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";

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
            <div className="producto-descripcion">
                {itemsToRender}
            </div>

            <button class="back-shopping"><Link className="route-link" to="/category/:id">go back to shopping</Link></button>
        </>
    )
}

export default ItemDetailContainer
