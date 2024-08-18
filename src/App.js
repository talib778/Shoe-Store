import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import BlogDetail from './Pages/Blog/BlogDetail';
import Shop from './Components/Shop/Shop';
import { CartProvider } from './Components/Cards/CartContext';
import CartItems from './Components/Cards/CartItems';
import FAQ from './FAQ/FAQ';
import ContactForm from './Components/Form/ContactForm';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import { credentials } from '../src/Pages/Login/Credentials';

function setInitialCredentials() {
  if (!localStorage.getItem('username') || !localStorage.getItem('password')) {
    localStorage.setItem('username', credentials.username);
    localStorage.setItem('password', credentials.password);
  }
}

setInitialCredentials();

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route 
            path="*" 
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/Blog/:id" element={<BlogDetail />} />
                  <Route path="/cart" element={<CartItems />} />
                  <Route path="/FAQs" element={<FAQ />} />
                  <Route path="/Form" element={<ContactForm />} />
                </Routes>
                <Footer />
              </>
            } 
          />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
