import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import './PackagingCategory.css'; // Import CSS

const products = [
  {
    id: 1,
    name: 'In tại xưởng',
    description: 'Vật liệu in ấn chất lượng cao',
    price: 20000,
    imageUrl: 'https://phucloiviet.vn/wp-content/uploads/2021/07/z1918045753258_c73e80ff51f6236f05ac084c68ab72a9-1024x768.jpg',
  },
  {
    id: 2,
    name: 'Bao bì thân thiện môi trường',
    description: 'Bao bì thân thiện môi trường',
    price: 55000,
    imageUrl: 'https://cacaomi.vn/wp-content/uploads/2022/04/gia-dong-dong-goi-bao-bi-scaled.jpg',
  },
  {
    id: 3,
    name: 'Bao bì có thể tùy chỉnh',
    description: 'Bao bì có thể tùy chỉnh',
    price: 20000,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY940eaoCsuwOkOpJr9aDAxWPekdIfLi7lyg&s',
  },
];

function PackagingCategory() {
  const { addToCart, notification } = useContext(CartContext); // Lấy thông báo từ CartContext

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      {/* Hiển thị thông báo */}
      {notification && <div className="notification animated">{notification}</div>} 

      <h2>Danh mục Bao bì</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Giá: {product.price.toLocaleString()} VND</strong></p>
                <button
                  className="btn btn-primary add-to-cart-btn"
                  onClick={() => handleAddToCart(product)} // Thêm sản phẩm vào giỏ hàng
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

export default PackagingCategory;
