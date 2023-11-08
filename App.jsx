import React,{useState} from 'react'

import Cart from './components/Cart'


const App = () => {

   const items = [
    { name: 'Producto 1', price: 10 },
    { name: 'Producto 2', price: 20 },
    { name: 'Producto 3', price: 30 },
  ];

  const [cartItems,setCartItems] = useState([]);
  const [isCartVisible,setCartVisible] = useState(false);

  
 
  const add = (item) =>  {
    setCartItems([...cartItems,item]);
    console.log(cartItems);

  }

  const remove = (item) =>  {
    const updateCart = cartItems.filter((cartItem)=> cartItem !== item);
    setCartItems(updateCart);
    console.log(cartItems);
  }
  return(
   <div className="app">
    <h1>shop</h1>
      
      <button onClick={()=> setCartVisible(!isCartVisible)}>
      {isCartVisible ? 'Ocultar carrito' : 'abrir carrito'}
      </button>

      <div className="productList">
        {items.map((item,i)=>(
          <div  key={i} className="product">
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={()=>add(item)}>Agregar Al carrito</button>
          </div>
        ))}
      </div>

      {isCartVisible && ( <Cart  cartItems={cartItems} onRemove={remove}/>)}

   </div> 
  )

}

export default App;