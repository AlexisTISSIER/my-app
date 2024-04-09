
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Layout from './components/Layout';
import Dishdetails from './components/Dishdetails'; 
import NotFound from './components/NotFound';
import About from './components/About';

function App() {
  return (
    <Router>
      <div> 
        <Header /> {}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/plat/:slug" component={Dishdetails} /> {}
          <Route component={NotFound} /> {}
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
