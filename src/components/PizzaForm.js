import React from "react";

function PizzaForm({ pizzaEdit, handleCheck, setPizzaEdit, handleFormSubmit }) {
  
  function handleChange(e) {
    setPizzaEdit({...pizzaEdit, size: e.target.value})
  }

  function handleCheck() {
    setPizzaEdit({...pizzaEdit, vegetarian: !pizzaEdit.vegetarian})
  } 

  console.log(pizzaEdit)

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={pizzaEdit.topping}
            onChange={handleChange}
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select 
          className="form-control" 
          name="size"
          onChange={handleChange}
          value={pizzaEdit.size}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col" >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value='true'
              checked={pizzaEdit.vegetarian}
              onChange={handleCheck}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="not-vegetarian"
              value='false'
              checked={!pizzaEdit.vegetarian}
              onChange={handleCheck}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
