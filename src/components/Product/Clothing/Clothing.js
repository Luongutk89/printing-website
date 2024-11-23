import React, { useContext, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import './Clothing.css'; // Thêm dòng này để import CSS

const products = [
  {
    id: 4,
    name: 'Áo Thun In Logo',
    description: 'Áo thun chất liệu cotton mềm mại, có thể in logo hoặc thiết kế theo yêu cầu.',
    price: 250000,
    imageUrl: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw71ranh5wpn06',
  },
  {
    id: 5,
    name: 'Áo Đồng Phục Công Ty',
    description: 'Áo đồng phục công ty chất lượng, in ấn rõ nét, giúp tạo dựng hình ảnh thương hiệu.',
    price: 350000,
    imageUrl: 'https://xuongdobaoho.vn/wp-content/uploads/2020/10/ao-dong-phuc-chat-luong.jpg',
  },
  {
    id: 6,
    name: 'Túi Vải In Thương Hiệu',
    description: 'Túi vải chất liệu bền đẹp, có thể in ấn logo và thông tin thương hiệu.',
    price: 120000,
    imageUrl: 'https://tuivaivietnhat.com/wp-content/uploads/2021/05/tui-canvas-in-logo.webp',
  },
];

function Clothing() {
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} đã được thêm vào giỏ hàng.`);
    setTimeout(() => setNotification(''), 3000); // Xóa thông báo sau 3 giây
  };

  return (
    <div className="container">
      {notification && <div className="notification">{notification}</div>}
      <h2>Danh mục Quần Áo & In Ấn</h2>
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
                  onClick={() => handleAddToCart(product)}
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

export default Clothing;
