import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

    const getItem = [{},
                    {}];

    const [details, setDetails] = useState([]);

    const promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getItem)
            }, 2000);
        });
    }
    
    useEffect(() => { 
        promise().then(setDetails)
    }, []);


    return (
        <>
            <p>hola</p>
        </>
    )
}

export default ItemDetailContainer
