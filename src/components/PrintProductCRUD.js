import React, { useState } from 'react';

// Dữ liệu mẫu cho sản phẩm in ấn
const initialProducts = [
  { id: 1, name: 'Áo thun', price: 100000, quantity: 50 },
  { id: 2, name: 'Mũ', price: 50000, quantity: 100 },
  { id: 3, name: 'Túi vải', price: 30000, quantity: 200 },
];

const PrintProductCRUD = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '' });
  const [editProduct, setEditProduct] = useState(null);

  const handleAdd = () => {
    if (newProduct.name.trim() && newProduct.price && newProduct.quantity) {
      const newProd = {
        id: products.length + 1,
        ...newProduct,
      };
      setProducts([...products, newProd]);
      setNewProduct({ name: '', price: '', quantity: '' });
    }
  };

  const handleEdit = (id) => {
    const prod = products.find((prod) => prod.id === id);
    setEditProduct({ ...prod });
  };

  const handleUpdate = () => {
    if (editProduct.name.trim() && editProduct.price && editProduct.quantity) {
      setProducts(products.map((prod) =>
        prod.id === editProduct.id ? editProduct : prod
      ));
      setEditProduct(null);
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editProduct) {
      setEditProduct({ ...editProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  return (
    <div>
      <h1>Quản lý sản phẩm in ấn</h1>
      
      {/* Form tạo sản phẩm mới hoặc cập nhật sản phẩm */}
      <input
        type="text"
        name="name"
        value={editProduct ? editProduct.name : newProduct.name}
        onChange={handleChange}
        placeholder="Tên sản phẩm"
      />
      <input
        type="number"
        name="price"
        value={editProduct ? editProduct.price : newProduct.price}
        onChange={handleChange}
        placeholder="Giá"
      />
      <input
        type="number"
        name="quantity"
        value={editProduct ? editProduct.quantity : newProduct.quantity}
        onChange={handleChange}
        placeholder="Số lượng"
      />
      <button onClick={editProduct ? handleUpdate : handleAdd}>
        {editProduct ? 'Cập nhật' : 'Thêm mới'}
      </button>

      {/* Bảng danh sách sản phẩm */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Sửa</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrintProductCRUD;
