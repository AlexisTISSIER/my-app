import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import Dishdetails from './pages/Dishdetails'; 
import NotFound from './pages/NotFound';
import About from './pages/About';
import Layout from './components/Layout';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Mexican Food</title>
        <meta name="description" content="Savourez les meilleurs plats mexicains chez vous : tacos, burritos, enchiladas. Cuisine
        authentique et livraison rapide." />
        <link rel="icon" type="image/png" href="/assets/images/favicon.ico" />
      </Helmet>
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/plat/:slug" element={<Dishdetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
