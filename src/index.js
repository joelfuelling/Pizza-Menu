import React from 'react'
import ReactDOM  from 'react-dom/client'

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    const x = 'Joel'
    return (
    <>
    <div>   
        <h1>Welcome to React. Hello {`${x}`}!</h1>
        <Pizza />
        <Pizza />
        <Pizza />
    </div>
    </>
    )
}

// React Components need to start with an UpperCase letter.

function Pizza() {
    return (
    <>
    <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci: Tomato, mozarella, spinach, and ricotta cheese" />
    <h2>{pizzaData[2].name}:</h2><p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </>
    )
}

// React version 18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// Before React 18
// React.render(<App />)