import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import Categories from './components/Categories/Categories';
import FlashSale from './components/FlashSale/FlashSale';
import CartPage from './components/CartPage/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LoginPage from './components/LoginPage/LoginPage';
import PackagingCategory from './components/PackagingCategory/PackagingCategory';
import { CartProvider } from './contexts/CartContext';
import AdminPage from './components/AdminPage';
 // Import CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <Categories />
                  <FlashSale />
                </>
              } />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/packaging" element={<PackagingCategory />} />
              <Route path="/office" element={<div>Office Category</div>} />
              <Route path="/clothing" element={<div>Clothing Category</div>} />
              <Route path="/other" element={<div>Other Category</div>} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<div>404 - Trang không tồn tại</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
