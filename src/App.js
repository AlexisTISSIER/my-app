import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dishdetails from './pages/Dishdetails'; 
import NotFound from './components/NotFound';
import About from './pages/About';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plat/:slug" element={<Dishdetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  );
}

export default App;
