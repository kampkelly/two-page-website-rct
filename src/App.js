import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Navigation/Header';
import { MainCarousel } from './components/Slides/MainCarousel';
import Products from './containers/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainCarousel></MainCarousel>
      <section className="product-section">
       <h3>My products container</h3>
        <Products></Products>
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload again.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
