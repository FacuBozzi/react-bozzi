import { useState, useEffect } from "react";
import Product from "../../product.json";
import ItemDetail from "./ItemDetail";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {

    //const descripcion = {Product}
    const [details, setDetails] = useState([]);
    
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Product)
            }, 2000);
        });
    }
    
    useEffect(() => { 
        getItem().then(setDetails)
    }, []);
    
    //const descr=details.Product
    
    //console.log(descr)
    
    return (
        <>
            <div className="producto-descripcion">
                <ItemDetail descripcion={details}></ItemDetail>
            </div>

            <button class="back-shopping"><Link className="route-link" to="/category/:id">go back to shopping</Link></button>
        </>
    )
}

export default ItemDetailContainer
