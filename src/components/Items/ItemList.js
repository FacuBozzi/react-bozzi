import Item from "./Item"

const ItemList = ({items}) => {

    let itemsToRender;
    if (items) {
      itemsToRender = items.map(item => {
        return <Item key={item.id} {...item}></Item>
      });
    }

    return (
        <>
            {itemsToRender}
        </>
    )
}

export default ItemList;