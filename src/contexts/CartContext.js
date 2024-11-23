import React, { createContext, useState } from 'react';

// Tạo Context cho giỏ hàng
export const CartContext = createContext();

// Component CartProvider để bọc các component con và cung cấp trạng thái giỏ hàng
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(''); // Thêm trạng thái thông báo

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Nếu có, cập nhật số lượng sản phẩm
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Nếu chưa có, thêm sản phẩm mới với số lượng 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setNotification(`${product.name} đã được thêm vào giỏ hàng!`); // Thêm thông báo
    setTimeout(() => setNotification(''), 3000); // Xóa thông báo sau 3 giây
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
  const updateQuantity = (productId, quantity) => {
    // Kiểm tra giá trị số lượng là hợp lệ (số nguyên dương)
    if (isNaN(quantity) || quantity <= 0) {
      alert('Vui lòng nhập số lượng hợp lệ!');
      return;
    }

    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  // Hàm tính tổng giá trị của giỏ hàng
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, notification }}
    >
      {children}
    </CartContext.Provider>
  );
};
