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
  const [showModal, setShowModal] = useState(false); // State để hiển thị modal
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    // Kiểm tra các trường thông tin có giá trị
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.address) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const order = {
      customerInfo,
      items: cart,
      total: getTotalPrice(),
    };

    // Chuyển hướng tới trang Admin và gửi thông tin order
    navigate('/admin', { state: order });
  };

  const openModal = () => {
    setShowModal(true); // Mở modal khi nhấn "Thanh toán"
  };

  const closeModal = () => {
    setShowModal(false); // Đóng modal khi nhấn "Đóng" hoặc gửi thông tin
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
              {cart.map(item => (
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

      {/* Modal hiển thị khi nhấn Thanh toán */}
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
