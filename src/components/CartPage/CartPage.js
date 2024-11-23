import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useContext(CartContext);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    // Kiểm tra nếu thông tin khách hàng chưa đầy đủ
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(customerInfo.email)) {
      alert('Email không hợp lệ!');
      return;
    }

    // Kiểm tra định dạng số điện thoại (kiểm tra cơ bản)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(customerInfo.phone)) {
      alert('Số điện thoại không hợp lệ!');
      return;
    }

    const order = {
      customerInfo,
      items: cart,
      total: getTotalPrice(),
    };

    // Chuyển đến trang thanh toán và truyền thông tin đơn hàng
    navigate('/pay', { state: order });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cart-container">
      <h2>Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <div className="cart-table">
          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng cộng</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price.toLocaleString()}₫</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                  </td>
                  <td>{(item.price * item.quantity).toLocaleString()}₫</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h3>Tổng tiền: {getTotalPrice().toLocaleString()}₫</h3>
            <button onClick={openModal}>Thanh toán</button>
          </div>
        </div>
      )}

      {/* Modal để hiển thị thông tin khách hàng khi nhấn "Thanh toán" */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <h3>Thông tin khách hàng</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
              <div>
                <label>Họ và tên:</label>
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Số điện thoại:</label>
                <input
                  type="text"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Địa chỉ:</label>
                <input
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="modal-actions">
                <button type="submit">Gửi</button>
                <button type="button" onClick={closeModal}>Đóng</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
