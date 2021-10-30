import Item from "./Item"

const ItemList = ({items}) => {

    let itemsToRender;
    if (items) {
      itemsToRender = items.map(item => {
        return (
          <div className="item-container"> 
            <Item key={item.id} {...item}></Item>
          </div> 
          )
      });
    }

    return (
        <>
          <div className="container-productos">
            {itemsToRender}
          </div>
        </>
    )
}

export default ItemList;