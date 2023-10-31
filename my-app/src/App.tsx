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
import Sportsware from "./components/category/sportsware/Sportsware";
import Jewelry from "./components/category/jewelry/Jewelry";
import Outware from "./components/category/outware/Outware";
import Womans from "./components/category/womans/Womans";
import Footware from "./components/category/footware/Footware";
import Mens from "./components/category/mens/Mens";
import Outdoor from "./components/category/outdoor/Outdoor";
import Home from "./pages/home/Home";

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
          <Route path="/store/category/outdoor" element={<Outdoor />} />
          <Route path="/store/category/mens" element={<Mens />} />
          <Route path="/store/category/footware" element={<Footware />} />
          <Route path="/store/category/womans" element={<Womans />} />
          <Route path="/store/category/outware" element={<Outware />} />
          <Route path="/store/category/jewelry" element={<Jewelry />} />
          <Route path="/store/category/sportsware" element={<Sportsware />} />
          {/*<Route path="/blog" element={<Products />} />*/}
          {/*<Route path="/blog" element={<Products />} />*/}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
