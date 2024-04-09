import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Layout from './components/Layout';
import Dishdetails from './pages/Dishdetails'; 
import NotFound from './components/NotFound';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/plat/:slug" component={Dishdetails} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
