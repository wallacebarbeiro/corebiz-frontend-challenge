import React from 'react';
import { Footer } from '../components/Footer';
import { FormNews } from '../components/FormNews';
import { Header } from '../components/Header';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main></main>
      <FormNews title="Participe de nossas news com promoções e novidades!" />
      <Footer />
    </div>
  );
};

export default App;
