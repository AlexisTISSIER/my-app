import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './utils/context/CartContext';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <HelmetProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
