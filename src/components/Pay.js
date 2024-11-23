import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Pay.css';

const Pay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { customerInfo, items, total } = location.state || {}; // Nhận dữ liệu từ state

  useEffect(() => {
    if (!customerInfo || !items) {
      // Chuyển hướng về trang giỏ hàng nếu thiếu dữ liệu
      navigate('/cart');
    }
  }, [customerInfo, items, navigate]);

  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false); // State to handle payment processing
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment success

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentConfirmation = () => {
    if (!paymentMethod) {
      alert("Vui lòng chọn phương thức thanh toán!");
      return;
    }

    setIsProcessing(true); // Start processing

    // Simulate a payment process (you can replace this with actual payment logic)
    setTimeout(() => {
      setIsProcessing(false); // Stop processing
      setPaymentSuccess(true); // Set payment success
    }, 2000);
  };

  return (
    <div className="pay-container">
      <h1>Thông tin yêu cầu thanh toán</h1>

      {customerInfo ? (
        <div>
          <div className="customer-info">
            <h3>Thông tin khách hàng</h3>
            <p><strong>Họ và tên:</strong> {customerInfo.name}</p>
            <p><strong>Số điện thoại:</strong> {customerInfo.phone}</p>
            <p><strong>Địa chỉ:</strong> {customerInfo.address}</p>
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
            <h3>Tổng tiền: {total?.toLocaleString()}₫</h3>
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
          <div className="payment-actions">
            {isProcessing ? (
              <button disabled>Đang xử lý...</button>
            ) : (
              <button onClick={handlePaymentConfirmation}>Xác nhận thanh toán</button>
            )}
          </div>



          {paymentSuccess && (
            <div className="payment-success">
              <h2>Thanh toán thành công!</h2>
              <p>Cảm ơn bạn đã mua hàng. Đơn hàng của bạn sẽ được xử lý ngay.</p>
            </div>
          )}
        </div>
      ) : (
        <p>Chưa có yêu cầu thanh toán.</p>
      )}
    </div>
  );
};

export default Pay;
