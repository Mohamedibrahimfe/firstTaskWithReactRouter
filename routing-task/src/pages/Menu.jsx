import React from "react";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// import Cart from "./Cart";
const Menu = (props) => {
  return (
    <>
      <table class="table table-hover"> 
        <thead>
          <tr>
            <th scope="col-3">Name</th>
            <th scope="col-3">Price</th>
            <th scope="col-5">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.dishs.map((dish, index) => {
            return (
              <tr>
                <td>{dish.name}</td>
                <td>{dish.price}</td>
                <td>

                  <button
                    onClick={() => props.onAdd(dish.id)}
                    className="btn"
                  >
                    <i className={dish.isSelected ? "bi bi-bag-plus bg-dark text-white p-2 " : "bi bi-bag-plus p-2"}></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>  
    </>
  );
};

export default Menu;
