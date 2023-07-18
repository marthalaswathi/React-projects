import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

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
function App(){
    return <div className='container'>
            <Header />
            <Menu />
            <Footer />
            </div>;
}

function Header(){
   // const styling = {color : "Blue", fontSize : 25}
        return <header className='header'><h1 >
            React Pizza Company</h1></header>;
}

function Menu(){
   const pizzas = pizzaData;
   const count = pizzas.length;

        return (<main className='menu'>
            <h2>Our Menu</h2>
           
          { count > 0 ? 
          (<>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
          <ul className='pizzas'>
              {pizzas.map(pizzas => <Pizza pizzaobj={pizzas} key={pizzas.name}/>)}
</ul>
</>) : 
<p>We'll come up with a menu soon</p>}
        {/*<Pizza photoName="pizzas/prosciutto.jpg" 
        pizzaName="Pizza Prosciutto" 
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price = {50}/> 
        <Pizza photoName="pizzas/spinaci.jpg" 
        pizzaName="Pizza spinaci" 
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
price = {60}/> */}
        </main>);
}
function Pizza( {pizzaobj} ){
  
  //if(pizzaobj.soldOut) return null;
    return <li className={`pizza ${pizzaobj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaobj.photoName} alt={pizzaobj.name}></img> 
            <div>
            <h3>{pizzaobj.name}</h3>
            <p>{pizzaobj.ingredients}</p>
            <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
            </div>
            </li>;
}
function Footer(){
const hour = new Date().getHours();
const openHour = 10;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;


/*if(hour >= openHour && hour <= closeHour) 
alert("We're open");
else alert("We're Closed");*/
        return <footer className='footer'>
            {isOpen ? (<Order closeHour = {closeHour} />): <p>Sorry!We are closed now</p>}
            </footer>

    }

function Order({closeHour, openHour}){
      return <div className='order'>
      <p>we're open from {openHour}  until {closeHour}:00.Come visit us and order online.</p>
      <button className='btn'>Order</button>
      </div>}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>);