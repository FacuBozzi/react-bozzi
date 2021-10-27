const Item = ({id, name, stock, price, pictureURL}) => {

    return (
        <>
            <div className="producto-lista" id={id}>
              <h2>{name}</h2>
              <img src={pictureURL} alt="unisex hoodie" id="picture-store"/>
              <p>Only {price} for the next 24 hours</p>
              <p>{stock} units left</p>
            </div>  
        </>
    )
}

export default Item
