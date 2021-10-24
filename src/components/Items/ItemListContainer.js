import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = (props) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => { 
            setDatos([
                {id: 1, name: "PHONE CASE", price: 9.99, pictureURL: "props.pictureURL"},
                {id: 2, name: "PINK HOODIE", price: 24.99, pictureURL: "props.pictureURL"},
                {id: 3, name: "BLACK HOODIE", price: 24.99, pictureURL: "props.pictureURL"}
            ]);
    }, []);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {resolve(datos)}, 2000);
       });

    promise.then((data) => {console.log(data.name)});
    

    return (
        <>
            {datos.map((item) => {
                return <ItemList key={item.id} id={item.id} name={item.name} price={item.price} pictureURL={item.pictureURL} />})} 
        </>
    )
}

export default ItemListContainer
