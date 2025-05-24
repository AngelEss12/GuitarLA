import { useState } from 'react';
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { db } from './data/db';

function App() {

  // state
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    // Check if the item is already in the cart
    const itemExists = cart.findIndex(guitar => guitar.id === item.id);
    if (itemExists >= 0) {
      const uptdatedCart = [...cart];
      uptdatedCart[itemExists].quantity++;
      setCart(uptdatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      item.quantity = 1;
      setCart(prevCart => [...prevCart, item]);
    }
  }

  function removeFromCart() {
    console.log("Eliminando...");
  }

  return (
    <>
      
    <Header 
      cart={cart}
      removeFromCart={removeFromCart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar 
              key={guitar.id}
              guitar={guitar} 
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
