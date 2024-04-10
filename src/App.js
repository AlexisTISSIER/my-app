import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx";
import Layout from './components/Layout.jsx';
import Dishdetails from './pages/Dishdetails.jsx'; 
import NotFound from './components/NotFound.jsx';
import About from './pages/About.jsx';

function App() {
  return (
      <div>
        <Header />
        <Layout>
          <Routes>
            <Route index path="/" component={Home} />
            <Route path="/plat/:slug" element={<Dishdetails/>}/>
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Routes>
        </Layout>
        <Footer />
      </div>
  );
}

export default App;
