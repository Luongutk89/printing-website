import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const location = useLocation();
  const { customerInfo, items, total } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="admin-container">
      <h1>Thông tin yêu cầu thanh toán</h1>

      {customerInfo ? (
        <div>
          <div className="customer-info">
            <h3>Thông tin khách hàng</h3>
            <p><strong>Họ và tên:</strong> {customerInfo.name}</p>
            <p><strong>Số điện thoại:</strong> {customerInfo.phone}</p>
            <p><strong>Địa chỉ:</strong> {customerInfo.address}</p>
          </div>

          <div className="payment-method">
            <h3>Phương thức thanh toán</h3>
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="">Chọn phương thức</option>
              <option value="bank_transfer">Chuyển khoản ngân hàng</option>
              <option value="qr_momo">QR MoMo</option>
              <option value="cash">Tiền mặt</option>
            </select>

            {paymentMethod === "bank_transfer" && (
              <p><strong>Thông tin:</strong> Vui lòng chuyển khoản đến tài khoản ngân hàng của chúng tôi.</p>
            )}
            {paymentMethod === "qr_momo" && (
              <p><strong>Thông tin:</strong> Quét mã QR MoMo để thanh toán.</p>
            )}
            {paymentMethod === "cash" && (
              <p><strong>Thông tin:</strong> Thanh toán bằng tiền mặt khi nhận hàng.</p>
            )}
          </div>

          <div className="product-list">
            <h3>Danh sách sản phẩm</h3>
            <ul>
              {items && items.map((item) => (
                <li key={item.id} className="product-item">
                  {item.name} - Số lượng: {item.quantity} - Giá: {item.price.toLocaleString()}₫
                </li>
              ))}
            </ul>
          </div>

          <div className="total-price">
            <h3>Tổng tiền: {total.toLocaleString()}₫</h3>
          </div>
        </div>
      ) : (
        <p>Chưa có yêu cầu thanh toán.</p>
      )}
    </div>
  );
};

export default AdminPage;
