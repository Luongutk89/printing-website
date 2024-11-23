import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { ProductProvider } from './contexts/ProductContext';
import HeroSection from './components/HeroSection/HeroSection';
import Categories from './components/Categories/Categories';
import FlashSale from './components/FlashSale/FlashSale';
import CartPage from './components/CartPage/CartPage';
import LoginPage from './components/LoginPage/LoginPage';
import AdminPage from './components/AdminPage';
import Pay from './components/Pay';
import AdminRoute from './components/AdminRoute'; // Import AdminRoute
import PackagingCategory from './components/Product/PackagingCategory/PackagingCategory';
import Clothing from './components/Product/Clothing/Clothing';
import Office from './components/Product/Office/Office';
import NotFoundPage from './components/NotFoundPage';
// import PrintOrderComponent from './components/PrintDemand/PrintOrderComponent';
import StepComponent from './components/PrintDemand/StepComponent';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Giả sử trạng thái isAdmin của người dùng

  // Giả sử bạn có logic xác thực người dùng đăng nhập ở đây
  const handleLogin = (email, password) => {
    if (email === 'luonglux555@mail.com' && password === 'admin123') {
      setIsAdmin(true); // Nếu là admin, thiết lập isAdmin thành true
    } else {
      setIsAdmin(false); // Nếu không phải admin, thiết lập isAdmin thành false
    }
  };

  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <div>
            <Header />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <Categories />
                      <FlashSale />
                      <PackagingCategory />
                      <Clothing/>
                      <Office/>
                    </>
                  }
                />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
                <Route path="/packaging" element={<PackagingCategory />} />
                <Route path="/office" element={<Office/>} />
                <Route path="/clothing" element={<Clothing/>} />
                <Route path="/other" element={<div>Other Category</div>} />
                <Route path="/print-order" element={<StepComponent />} />


                {/* Bảo vệ route Admin bằng AdminRoute */}
                <Route
                  path="/admin"
                  element={
                    <AdminRoute isAdmin={isAdmin}>
                      <AdminPage />
                    </AdminRoute>
                  }
                />

                <Route path="/pay" element={<Pay />} /> {/* Thêm tuyến đường cho PayPage */}
                <Route path="*" element={<NotFoundPage/>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
