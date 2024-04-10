import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dishdetails from './pages/Dishdetails'; 
import NotFound from './pages/NotFound';
import About from './pages/About';
import Layout from './components/Layout';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/plat/:slug" element={<Dishdetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
