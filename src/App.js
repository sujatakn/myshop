import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route } from 'react-router-dom';
import Products from './pages/Products';
import AddProducts from './pages/AddProducts';
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>
      <Route path='/products'>
        <Products></Products>
      </Route>
      <Route path='/products/addproducts'>
        <AddProducts></AddProducts>
      </Route>
      <Route path='/products/viewproducts'>
        <ProductList></ProductList>
      </Route>
     
    
    </div>
    </BrowserRouter>
  );
}

export default App;
