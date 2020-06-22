import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter,Route } from 'react-router-dom';
import Products from './pages/Products';
import AddProducts from './pages/AddProducts';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './reducers/Reducer';
import thunk from 'redux-thunk';
import EditProduct from './pages/EditProduct';
const store=new createStore(Reducer,applyMiddleware(thunk))




function App() {
 
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    <Header></Header>
      <Route path='/products'>
        <Products></Products>
      </Route>
      <Route path='/products/addproducts'>
        <AddProducts></AddProducts>
      </Route>
      <Route path='/editproduct'>
        <EditProduct></EditProduct>
      </Route>
      <Route path='/products/viewproducts'>
        <ProductList></ProductList>
      </Route>
     <Route path='/productDetails'>
       <ProductDetails></ProductDetails>
     </Route>
     <Route path='/cart'>
       <Cart></Cart>
     </Route>
     
    
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
