import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Products from './pages/products/Products';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from "./components/contact/Contact";
import Category from "./components/category/Category";
import Accessories from "./components/category/accessories/Accessories";
import Outware from "./components/category/liquid/liquid";
import Home from "./pages/home/Home";
import Vapes from './components/category/Vapes/Vapes';

const App = ():JSX.Element  =>{
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Category />
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/login"  element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/store/category/accessories" element={<Accessories />} />
          <Route path="/store/category/Vapes" element={<Vapes />} />
          <Route path="/store/category/outware" element={<Outware />} />
          {/*<Route path="/blog" element={<Products />} />*/}
          {/*<Route path="/blog" element={<Products />} />*/}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
