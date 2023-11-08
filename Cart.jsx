const Cart = ({cartItems,onRemove}) => {
    return(
    <div className="cart">
        <h1>carrito</h1>
    
        {cartItems.length == 0 ? ( <p>carrito Vacio</p>) : (
            <ul>
                {cartItems.map((item,i)=>(
                    <li key={i}>
                       {item.name} -  {item.price}
                        <button onClick={()=>onRemove(item)}>Delete</button>
                    </li>
                ))}
            </ul>
        )
        }
        
    </div>
    )
    };
    
    export default Cart;