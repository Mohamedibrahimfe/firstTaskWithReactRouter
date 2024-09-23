import React from 'react';
import { Link } from "react-router-dom";
const Admin = (props) => {


    return ( <> 
        <>
    <Link to="/add" className="btn btn-primary p-2 my-2">Add an item to menu</Link>
      <table class="table table-hover"> 
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
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
                    onClick={() => props.onEdit(dish.id)}
                    className="btn"
                  >
                    <Link to={`/edit/${dish.id}`}><i className={dish.isSelected ? "bi bi-pencil-fill bg-dark text-white p-2 " : "bi bi-pencil-fill p-2"}></i></Link>
                  </button>  
                </td>
                <td>
                <button
                    onClick={()=>props.onDelete(dish)}
                    className="btn"
                  >
                    <i className={dish.isSelected ? "bi bi-trash bg-dark text-white p-2 " : "bi bi-trash p-2"}></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>  
    </>
    </> );
}
 
export default Admin;