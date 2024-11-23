// components/AdminRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ isAdmin, children }) => {
  if (!isAdmin) {
    return <Navigate to="/" />; // Nếu không phải admin, chuyển hướng về trang chủ
  }
  return children; // Nếu là admin, render các component bên trong
};

export default AdminRoute;
