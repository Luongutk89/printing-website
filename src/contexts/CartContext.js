import React, { createContext, useState } from 'react';

// Tạo Context cho giỏ hàng
export const CartContext = createContext();

// Component CartProvider để bọc các component con và cung cấp trạng thái giỏ hàng
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      // Nếu số lượng <= 0, xóa sản phẩm khỏi giỏ hàng
      removeFromCart(productId);
    } else {
      // Cập nhật số lượng của sản phẩm
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  // Hàm tính tổng giá trị của giỏ hàng
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
