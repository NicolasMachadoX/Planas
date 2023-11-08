

/* const Cart = ({cartItems, onRemove}) => {
return(
    <div className="cart">
        <h2>Carrito</h2>
        {cartItems.length === 0 ? ( <p>Carrito vacio</p>) :
        
        (
            <ul>
                {cartItems.map((item,i)=>(
                    <li key={i}>
                        {item.name} - ${item.price}
                        <button onClick={()=> onRemove(item)}>Eliminar</button>
                    </li>
                ))}

            </ul>
        )}
    </div>
)
};

export default Cart; */

/* const Cart = ({cartItems,onRemove}) => {

return(
<div className="cart">
    <h1>Mi carrito</h1>
    {cartItems.length === 0 ?( <p>Carrito null</p>): 
    (<ul>
        {cartItems.map((item,i)=>(
            <li key={i}>
                {item.name}-${item.price}
                <button onClick={()=> onRemove(item)}>Eliminar</button>
            </li>
        ))}
    </ul>)}
</div>
)
};

export default Cart; */

/* 
const Cart = ({cartItems,onRemove}) => {
return(
<div className="card">
    <h1>Mi carrito</h1>
    {cartItems.length === 0 ? ( <p>Carrito Vacio</p> ):
    (
        <ul>
            {cartItems.map((item,i)=>(
                <li key={i}>
                    {item.nombre} - ${item.price}
                    <button onClick={()=>onRemove(item) }></button>
                </li>
            ))}
        </ul>
    )}
</div>
)
};

export default Cart; */


/* const Cart = ({cartItems,onRemove}) => {
return(
    <div className="card">
        <h1>Carrito</h1>
        {cartItems.length === 0 ? ( <p>Carrito vacia</p> ) :
         (
            <ul>
                {cartItems.map((item,i)=>(
                    <li key={i}>
                        {item.name} - ${item.price}
                        <button onClick={() => onRemove(item)}>Eliminar</button>
                    </li>
                ))}
            </ul>
         )}
    </div>
)
};

export default Cart; */

/* 

const Cart = ({cartItems,onRemove})=> {
return(
<div className="card">
    <h1>Carrito</h1>
    {cartItems.length === 0 ? ( <p>carrito vacio</p> ): 
    (
        <ul>
            {cartItems.map((item,i)=>(
                <li key={i}>
                    {item.nombre} - ${item.price}
                    <button onClick={() => onRemove(item)}>Eliminar</button>
                </li>
            ))}
        </ul>
    )}
</div>
)
}

export default Cart; */
/* 
const Cart = ({cartItems,onRemove}) => {
 return(
    <div className="cart">
        <h1>Carrito</h1>
        {cartItems.length === 0 ? (<p>'carrito Vacio</p>)
        :(
            <ul>
                {cartItems.map((item,i)=>(
                    <li key={i}>
                        {item.name} - ${item.precio}
                        <button onClick={()=>onRemove(item)}>Eliminar</button>
                    </li>
                ))}

            </ul>
        )}
    </div>
 )
};

export default Cart; */