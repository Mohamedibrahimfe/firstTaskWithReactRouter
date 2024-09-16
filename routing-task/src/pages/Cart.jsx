import React from "react";

const Cart = (props) => {
  console.log(props.dishs);
  return (
    <div>
      <h1 className="p-2  text-center w-100 ">Cart</h1>
      {props.dishs.map((dish, index) => {
        if (!dish.isSelected) return null;
        return (
          
            <h2 className="pt-2">{dish.name} : <span className="badge bg-primary">{dish.quantity}</span> :  <button onClick={() => props.onAdd(dish.id)} className="btn btn-primary">+</button> </h2>
            
          
        );
      })}
            
       <h3 className="p-4 text-success ">Total price : {props.dishs.reduce((total, dish) => total + dish.price * dish.quantity, 0)}</h3>
    </div>
  )
};

export default Cart;
