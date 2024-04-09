import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';



function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="ListeCard" style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '100px' }}>
          <Card
            price="3"
            name="Tacos à l’unité"
            img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
          />

          <Card
            price="12"
            name="Enchiladas"
            img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
          />

          <Card
            price="15"
            name="Mole poblano"
            img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
