/* import React,{useState} from "react";
import Cart from './CARTSHOP';

function App(){
    const [cartItems,setCartItems] = useState([]);
      const [isCartVisible,setCartVisible] = useState(false);

      const addItem = (item) => {
        setCartItems([...cartItems,item]);
      };

      const removeItem = (item) => {
        const  updateCart = cartItems.filter((cartItems) => cartItems !== item);
        setCartItems(updateCart);
      };

      
      return (
        <div className="app">

          <h1>Mi Tienda</h1>

          <button onClick={() => setCartVisible(!isCartVisible)}>
            {isCartVisible ? 'Ocultar Carrito' : 'Mostrar Carrito'}
          </button>


          <div className="product-list">
            {items.map((item, index) => (
              <div key={index} className="product">
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button onClick={() => addItem(item)}>Agregar al carrito</button>
              </div>
            ))}
          </div>



          {isCartVisible && (
            <Cart cartItems={cartItems} onRemove={removeItem} />
          )}

        </div>
      );




};

export default App;
 */
/* 
import { useState } from "react";

array-falso
const [cartItems,setCartItems] = useState([]);
const [isCartVisible,setCartVisible] = useState(false);

add/remove

const addItem = (item) => {
    setCartItems([...cartItems,item]);
};

const removeItem = (item) =>{
    const updateCart = cartItems.filter((cartItem)=> cartItem !== item);
    setCartItems(updateCart);
} */
/* 
import { useState } from "react";

const [cartItems,setCartItem] = useState([]);
const [isCartVisible,setCartVisible] = useState(false);

//add/remove

const add = (item) => {
    setCartItems([...cartItems,item])
}

const remove = (item) => {
    const updateItem = cartItems.filter((cartItem)=> cartItem !== item);
    setCartItem(updateItem);
} */

import { useState } from "react";


/* const [cartItems,setCartItems] = useState([]);
const [isCartVisible,SetCartVisible] = useState(false);

const add = (item) => {
    setCartItems([...cartItems, item]);
}

const remove = (item) => {
    const updateCart = cartItems.filter((cartItem)=> cartItem !== item);
    setCartItems(updateCart);
} */

/* const [cartItems,setCartItems] = useState([]);
const [isCartVisible,setCartVisible] = useState(false);

const add = (item) => {
    setCartItems([...cartItems],item);
}


const remove = (item) => {
    const updateCart = cartItems.filter((cartItem)=> cartItem !== item);
    setCartItems(updateCart);
    
} */

/* 
const [cardItems,setCardItems] = useState([]);
const [isCartVisible,setCartVisible] = useState(false);

const add = (item) => {

    setCardItems([...cardItems,item]);

}

const remove = (item) => {
    const updateCard = cardItems.filter((cardItem)=> cardItem !== item);
    setCardItems(updateCard);

} */


{/* <div className="app">

<h1>Mi Tienda</h1>

//Button

<button onClick={() => setCartVisible(!isCartVisible)}>
  {isCartVisible ? 'Ocultar Carrito' : 'Mostrar Carrito'}
</button>


//div.producList
<div className="productList">
  {items.map((item, index) => (
    <div key={index} className="product">
      <span>{item.name}</span>
      <span>${item.price}</span>
      <button onClick={() => addItem(item)}>Agregar al carrito</button>
    </div>
  ))}
</div>

//isCartVisible



{isCartVisible && (
  <Cart cartItems={cartItems} onRemove={removeItem} />
)}

</div> */}


/*
<div className="App">
    <h1> tienda</h1>

<button onClick={()=> setCartVisible(isCartVisible)}>
    {isCartVisible ? 'Ocultar Carrito' : 'abrir carrito'}
</button>

 <div className="productList">
    {data.map((item,i)=>{
        <div key={i} className="product">
            <span>{item.price}</span>
            <span>{item.name}</span>
        <button onClick={()=>add(item)} ></button>
        </div>
    })}


 </div>



{isCartVisible && ( <Cart  cartItems={cartItems} onRemove={remove} />)}


</div>*/
/* 
<div className="app">

<h1>shop</h1>

<button onClick={()=>setCartVisible(isCartVisible)}>
{isCartVisible ? 'Ocultar Carrito': 'MostrarCarrito'}
</button>

<div className="productList">
    { data.map((item,i)=>(
         <div className="product" key={i}>
            <span>{item.nombre}</span>
            <span>{item.precio}</span>
            <button onClick={()=> add(item)}>Agregar al carrito</button>
         </div>
    ))
    }
</div>


{isCartVisible && ( <Cart cartItems={cartItems} onRemove={remove} /> ) }

    
</div> */


c