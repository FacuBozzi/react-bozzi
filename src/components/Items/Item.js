const Item = ({id, name, stock, price, pictureURL}) => {

    // const Item = new {
    //     name: '',
    //     price: 0,
    //     id: 0,
    //     stock: 0,
    //     pictureURL: ''
    // }

    return (
        <>
            <div className="producto-lista" id={id}>
              <h2>{name}</h2>
              <img src={pictureURL} alt="unisex hoodie" id="picture-store"/>
              <p>Only {price}$ for the next 24 hours</p>
              <p>{stock} units left</p>
            </div>  
        </>
    )
}

export default Item
