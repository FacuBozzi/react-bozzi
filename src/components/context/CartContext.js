import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cont, setCont] = useState(0)

    //logica del carrito
    const addItem = (item) => {
        if (cart.length !== 0) return
        var itemExiste = cart.find(Items => Items.item.id === item.item.id)
        if(itemExiste){
            setCart(cart.map((Items) => {
                if (Items.item.id === item.item.id){
                    Items.cantidad = Items.cantidad + item.cantidad;
                } 
                return Items;
            }))
        } else {
            const newCart = [...cart, item];
            setCart([...cart, item]);
            setCart(newCart);
        }

    };

  //logica de limpiar carrito
  const clear = () => setCart([]);


  console.log(cont)

  return (
    <CartContext.Provider value={[cart, addItem, clear, cont, setCont]}>
      {props.children}
    </CartContext.Provider>
  )
}