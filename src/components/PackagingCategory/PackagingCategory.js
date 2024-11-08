import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'; // Đảm bảo đường dẫn chính xác tới CartContext

const products = [
  {
    id: 1,
    name: 'Sản phẩm 1',
    description: 'Vật liệu in ấn chất lượng cao',
    price: 20000,
    imageUrl: 'https://cacaomi.vn/wp-content/uploads/2022/04/gia-dong-dong-goi-bao-bi-scaled.jpg',
  },
  {
    id: 2,
    name: 'Sản phẩm 2',
    description: 'Bao bì thân thiện môi trường',
    price: 55000,
    imageUrl: 'https://cacaomi.vn/wp-content/uploads/2022/04/gia-dong-dong-goi-bao-bi-scaled.jpg',
  },
  {
    id: 3,
    name: 'Sản phẩm 3',
    description: 'Bao bì có thể tùy chỉnh',
    price: 20000,
    imageUrl: 'https://cacaomi.vn/wp-content/uploads/2022/04/gia-dong-dong-goi-bao-bi-scaled.jpg',
  },
];

function PackagingCategory() {
  const { addToCart } = useContext(CartContext); // Lấy hàm addToCart từ CartContext

  return (
    <div className="container">
      <h2>Danh mục Bao bì</h2>
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
                  onClick={() => addToCart(product)} // Thêm sản phẩm vào giỏ hàng qua context
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
