import React, { useContext, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import './Office.css'; // Import the Office-specific CSS

const products = [
  {
    id: 7,
    name: 'Giấy In A4',
    description: 'Giấy in chất lượng cao, phù hợp cho mọi loại máy in văn phòng.',
    price: 50000,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLU_qyjasUmuDOCdBWbFYSLjjifV4YJy5VQw&s',
  },
  {
    id: 8,
    name: 'Bút Bi Văn Phòng',
    description: 'Bút bi êm tay, mực viết mượt, phù hợp cho công việc văn phòng.',
    price: 15000,
    imageUrl: 'https://hienphong.com/wp-content/uploads/2022/05/hinh-anh-ten-cac-loai-trong-tieng-trung-1.png',
  },
  {
    id: 9,
    name: 'Máy In Laser',
    description: 'Máy in laser hiệu suất cao, lý tưởng cho công việc văn phòng số lượng lớn.',
    price: 1500000,
    imageUrl: 'https://file.hstatic.net/200000379859/article/photo1687504258413-16875042585441659952552-16875785612131305133062_3b1e5e5557ad4647acfc433ee1a9f927.webp',
  },
];

function Office() {
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState(''); // Thêm trạng thái thông báo

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} đã được thêm vào giỏ hàng.`);
    setTimeout(() => setNotification(''), 3000); // Xóa thông báo sau 3 giây
  };

  return (
    <div className="container">
      {notification && <div className="notification">{notification}</div>} {/* Hiển thị thông báo */}
      <h2>Danh mục Sản phẩm Văn Phòng</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Giá: {product.price.toLocaleString()} VND</strong></p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)} // Xử lý sự kiện thêm vào giỏ hàng
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Office;
