import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizza, handleEditPizza }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizza.map((pizza) => { 
          return <Pizza key={pizza.id} id={pizza.id} pizza={pizza} handleEditPizza={handleEditPizza} />
        })
        }     
      </tbody>
    </table>
  );
}

export default PizzaList;
