import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Cart from './pages/cart/Cart';
import NotFound from './pages/notFound/NotFound';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/busca" element={<Search/>}/>
      <Route path="/carrinho" element={<Cart/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
