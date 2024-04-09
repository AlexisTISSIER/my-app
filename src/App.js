import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div>
        <Header /> {}
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
