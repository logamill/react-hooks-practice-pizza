import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const baseURL = 'http://localhost:3001/pizzas/'
  const [pizzas, setPizzas] = useState([])
  const [pizzaEdit, setPizzaEdit] = useState({})

  useEffect(() => {
    getFetch()
  }, [])

  function getFetch() {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => setPizzas(data))
  }

  function handleEditPizza(e) {
    setPizzaEdit(pizzas[e.target.value -1])
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`${baseURL}${pizzaEdit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pizzaEdit)      
    })
    .then(resp => resp.json())
    .then(data => 
      {
      getFetch()
    })
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaEdit={pizzaEdit} setPizzaEdit={setPizzaEdit} handleFormSubmit={handleFormSubmit}/>
      <PizzaList pizza={pizzas} handleEditPizza={handleEditPizza} />
    </>
  );
}

export default App;
