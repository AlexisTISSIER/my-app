import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Layout from './components/Layout';
import Dishdetails from './pages/Dishdetails'; 
import NotFound from './components/NotFound';
import About from './pages/About';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plat/:slug" element={<Dishdetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
  );
}

export default App;
