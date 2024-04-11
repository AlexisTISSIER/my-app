
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dishdetails from './pages/Dishdetails'; 
import NotFound from './pages/NotFound';
import About from './pages/About';
import Layout from './components/Layout';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (itemToAdd) => {
    setCart([...cart, itemToAdd]);
  };

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout cart={cart}/>}>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/plat/:slug" element={<Dishdetails addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
