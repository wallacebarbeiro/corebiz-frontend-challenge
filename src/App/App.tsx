import React from 'react';
import { Footer } from '../components/Footer';
import { FormNews } from '../components/FormNews';
import { Header } from '../components/Header';
import { Showcase } from '../components/Showcase';
import CartProvider from '../context/Cart';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <main>
          <Showcase />
        </main>
        <FormNews title="Participe de nossas news com promoções e novidades!" />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
