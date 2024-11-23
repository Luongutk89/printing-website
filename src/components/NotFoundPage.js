// components/NotFoundPage.js
import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Xin lỗi, trang bạn tìm không tồn tại</p>
      <button onClick={() => window.history.back()} className="back-button">
        Trở về
      </button>
    </div>
  );
};

export default NotFoundPage;
