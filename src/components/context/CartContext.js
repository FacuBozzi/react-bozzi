import React, {useState} from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cont, setCont] = useState(0)
  const [contador, setContador] = useState(0)
  //array productos
  const [details, setDetails] = useState([]);
  //precio
  const [price, setPrice] = useState(0);
  //datos de los productos (totales) importados de firebase
  const [datos, setDatos] = useState([]);

  const addItem = (item) => {
    var itemFound = cart.find(itemState => itemState.id === item.id)
    if (itemFound) {
      setCart(cart.map((itemState) => {
        if (itemState.id === item.id) {
          itemState.quantity = itemState.quantity + item.quantity;
        }
        return itemState;
      }))
    } else {
      setCart([...cart, item]);
    }
  }


  //logica de limpiar carrito
  const clear = () => { setCart([]); setCont(0)};

  //logica de eliminar un item del carrito
  const removeItem = (id) => {
    const borrarItems = cart.filter((item) => item.id !== id);
    setCart(borrarItems)
}


  return (
    <CartContext.Provider value={[cart, addItem, removeItem, clear, cont, setCont, details, setDetails, price, setPrice, datos, setDatos, contador, setContador]}>
      {props.children}
    </CartContext.Provider>
  )
}