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

    //logica del carrito
    // const addItem = (item) => {
    //     if (cart.length !== 0) return
    //     var itemExiste = cart.find(Items => Items.item.id === item.item.id)
    //     if(itemExiste){
    //         setCart(cart.map((Items) => {
    //             if (Items.item.id === item.item.id){
    //                 Items.cantidad = Items.cantidad + item.cantidad;
    //             } 
    //             return Items;
    //         }))
    //     } else {
    //         const newCart = [...cart, item];
    //         setCart([...cart, item]);
    //         setCart(newCart);
    //     }

    // };

    const addItem = (item) => {
      var itemFound = cart.find(itemState => itemState.id === item.id)
      console.log("EL ITEM FOUND", itemFound)
      console.log(1, itemFound);
      if(itemFound){
        console.log(100000);
          setCart(cart.map((itemState) => {
              if (itemState.id === item.id){
                  itemState.quantity = itemState.quantity + item.quantity;
                  console.log("mi itemstate", itemState)
                  setCont(itemState.quantity) //quiza se borra
              }
              return itemState;
          }))
      } else {
          // setCart([item]);
          console.log(20000)
            setCart([...cart, item]);
            console.log(2, cart);
      }
      console.log(3, cart);
    }


    // const addItem = (item) => {
    //   if (cart.length !== 0) return
    //   var itemFound = cart.find(itemState => itemState.item.id === item.item.id)
    //   console.log("EL ITEM FOUND", itemFound)
    //   if(itemFound){
    //       setCart(cart.map((itemState) => {
    //           if (itemState.item.id === item.item.id){
    //               itemState.quantity = itemState.quantity + item.quantity;
    //           } 
    //           return itemState;
    //       }))
    //   } else {
    //       setCart([...cart, item]);
    //   }
    // }



  //logica de limpiar carrito
  const clear = () => { setCart([]); setCont(0)};

  //logica de eliminar un item del carrito
  const removeItem = (id) => {
    const borrarItems = cart.filter((item) => item.id !== id);
    setCart(borrarItems)
}


  console.log(datos)

  return (
    <CartContext.Provider value={[cart, addItem, removeItem, clear, cont, setCont, details, setDetails, price, setPrice, datos, setDatos, contador, setContador]}>
      {props.children}
    </CartContext.Provider>
  )
}