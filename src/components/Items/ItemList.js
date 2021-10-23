import Item from "./Item"

const ItemList = () => {
    return (
        <>
            <Item id={1} name="Unisex Hoodie" stock={12} price="24.99" pictureURL="https://ninefoldpath.org/wp-content/uploads/2018/05/NINE-BEATS-Logo-hoodie-600x600.jpg"/>
            <Item id={2} name="Pink Hoodie" stock={7} price="34.99" pictureURL="https://cdn.shopify.com/s/files/1/0040/6146/2626/products/ODF87992ClLogoHoodiepinkfront_1200x.png?v=1628299298"/>
            <Item id={3} name="White Shirt" stock={14} price="14.99" pictureURL="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623333444-61jgr5y0ibl-ac-ul1500-1623333437.jpg"/>
            <Item id={4} name="Phone Case" stock={33} price="11.99" pictureURL="https://www.montblanc.com/variants/images/19971654706771425/A/w2500.jpg"/>
        </>
    )
}

export default ItemList
