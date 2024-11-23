// src/contexts/ProductContext.js
import React, { createContext, useState } from 'react';

// Tạo context để quản lý sản phẩm
export const ProductContext = createContext();

// Provider để cung cấp context cho các component con
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
