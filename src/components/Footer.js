import React from 'react';
import './Footer.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer container">
      {/* Contact Information */}
      <div className="footer-column">
        <h3>Thương Hiệu Thành Viên</h3>
        <p><strong>Pixefy</strong></p>
        <p>CTY TNHH MTV THẾ GIỚI IBB</p>
        <p>GPKD số: 032432434</p>
        <p>Điện thoại: 0123456789</p>
        <p><strong>Sáng</strong>: 8h00 - 12h00</p>
        <p><strong>Chiều</strong>: 13h30 - 17h30</p>
        <p><strong>Thứ 7</strong>: 8h - 12h00</p>
        <p>(Nghỉ chiều Thứ 7 & Chủ nhật)</p>
      </div>

      {/* Order Information */}
      <div className="footer-column">
        <h3>Tư Vấn Đặt Hàng</h3>
        <p>02365490</p>
        <p><strong>Email</strong>: hotro@aznet.vn, baogia@aznet.vn</p>
        <p><strong>Phone</strong>: 0938 805 668</p>
        <p><strong>Nhân Viên:</strong></p>
        <p>NV Thanh Hà - 0938 80 10 68</p>
        <p>NV Ngọc Trâm - 0932 75 46 86</p>
        <p>NV Huỳnh Trân - 0902 31 31 93</p>
        <p>NV Kiều Trang - 0906 67 48 86</p>
      </div>

      {/* Policy Information */}
      <div className="footer-column">
        <h3>Chính Sách</h3>
        <p>- Chính sách bảo hành</p>
        <p>- Thỏa thuận sử dụng</p>
        <p>- Chính sách đổi trả hàng</p>
        <p>- Chính sách bảo mật</p>
        <h3>Phương Thức Thanh Toán</h3>
        <div className="payment-methods">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlxmaeHpkOZde33aU6LX6ejwcKb7jGVPV5w&s" alt="Mastercard" className="payment-icon" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6YnQoM78NCEw3f--iWcGhpQFjBxfo9k6fw&s" alt="Visa" className="payment-icon" />
          <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png" alt="MoMo" className="payment-icon" />
          {/* Add more payment icons as needed */}
        </div>
      </div>

      {/* Address Information */}
      <div className="footer-column">
        <h3>Đc văn phòng giao dịch:</h3>
        <p>193/9R Điện Biên Phủ, Phường 15</p>
        <p>Quận Bình Thạnh, TP Hồ Chí Minh</p>
        <h3>Đc nhà xưởng:</h3>
        <p>45 Đường số 29, Đường Trần Não, Phường Bình An</p>
        <p>Quận 2, TP Hồ Chí Minh</p>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Mẫu web in ấn. Thiết kế bởi AZnet</p>
      </div>
    </footer>
  );
};

export default Footer;
