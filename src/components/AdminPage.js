import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  // Hàm thoát khỏi trang Admin và quay lại trang đăng nhập
  const handleLogout = () => {
    // Xóa trạng thái người dùng hoặc thực hiện bất kỳ hành động thoát nào
    navigate('/login');
  };

  return (
    <div>
      <h2>Trang Admin</h2>
      <p>Chào mừng đến với trang quản trị.</p>
      <button onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
};

export default AdminPage;
