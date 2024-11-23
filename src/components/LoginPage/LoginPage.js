import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // Thêm trường số điện thoại
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Thêm xác nhận mật khẩu
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Chuyển giữa đăng nhập và đăng ký

  const navigate = useNavigate(); // Khởi tạo navigate để điều hướng sau khi đăng ký thành công

  // Xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Vui lòng điền đầy đủ thông tin đăng nhập.');
      return;
    }
    setError('');
    // Kiểm tra thông tin đăng nhập (Ví dụ đơn giản với email và mật khẩu mặc định)
    if (email === 'admin@example.com' && password === 'admin123') {
      navigate('/admin'); // Điều hướng đến trang Admin nếu đăng nhập thành công
    } else {
      setError('Thông tin đăng nhập không chính xác.');
    }
  };

  // Xử lý đăng ký
  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !phone || !password || !confirmPassword) {
      setError('Vui lòng điền đầy đủ thông tin đăng ký.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }

    setError('');
    console.log('Đăng ký với', email, phone, password);

    // Điều hướng người dùng đến trang đăng nhập hoặc trang khác sau khi đăng ký thành công
    navigate('/login'); // Ví dụ điều hướng đến trang đăng nhập
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h2>
      <form
        onSubmit={isRegistering ? handleRegister : handleLogin}
        className="login-form"
      >
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {isRegistering && (
          <div className="form-group">
            <label>Số điện thoại:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {isRegistering && (
          <div className="form-group">
            <label>Xác nhận mật khẩu:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="login-button">
          {isRegistering ? 'Đăng ký' : 'Đăng nhập'}
        </button>
      </form>
      <div className="toggle-form">
        <p>
          {isRegistering
            ? 'Bạn đã có tài khoản? '
            : 'Chưa có tài khoản? '}
          <button onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? 'Đăng nhập' : 'Đăng ký'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
