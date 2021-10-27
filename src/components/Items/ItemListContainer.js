import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = () => {

    const products = [{id: 1, name: "PHONE CASE", stock:"17", price: "$9.99", pictureURL: "https://www.montblanc.com/variants/images/19971654706771425/A/w2500.jpg"},
                    {id: 2, name: "PINK HOODIE", stock:"12", price: "$24.99", pictureURL: "https://cdn.shopify.com/s/files/1/0040/6146/2626/products/ODF87992ClLogoHoodiepinkfront_1200x.png?v=1628299298"},
                    {id: 3, name: "WHITE", stock:"23", price: "$14.99", pictureURL: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623333444-61jgr5y0ibl-ac-ul1500-1623333437.jpg"},
                    {id: 4, name: "BLACK HOODIE", stock:"9", price: "$24.99", pictureURL: "https://ninefoldpath.org/wp-content/uploads/2018/05/NINE-BEATS-Logo-hoodie-600x600.jpg"}] 

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
            <ItemList items={datos}></ItemList>
        </>
    )
}

export default ItemListContainer
