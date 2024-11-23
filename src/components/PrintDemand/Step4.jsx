import React, { useState } from "react";

const Step4 = ({ stepData, onPrevious }) => {
  const { selectedImages, resources, machine, totalPrice, step1Data } = stepData;
  const [orderStatus, setOrderStatus] = useState("Đang xử lý");

  const handleDelivery = () => {
    setOrderStatus("Đang giao hàng");
    setTimeout(() => {
      setOrderStatus("Đơn hàng đã tạo thành công");
    }, 2000); // Giả lập giao hàng sau 2 giây
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Bước 4: Giao hàng</h2>

        {/* Thông báo trạng thái đơn hàng */}
        {orderStatus === "Đơn hàng đã tạo thành công" && (
          <div className="bg-green-100 text-green-800 border border-green-300 p-4 rounded-lg mb-6">
            <p>
              <strong>{orderStatus}</strong>
            </p>
            <p>Đơn hàng đang được giao cho nhân viên giao hàng.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bảng thông tin đơn hàng */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin đơn hàng</h3>
            <table className="w-full text-left border border-gray-300 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border-b">Tên đơn hàng</th>
                  <th className="px-4 py-2 border-b">Khách hàng</th>
                  <th className="px-4 py-2 border-b">Địa chỉ</th>
                  <th className="px-4 py-2 border-b">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">
                    {step1Data?.projectName || "Bất động sản BigTower"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {step1Data?.customerName || "Trần Văn Dương"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {step1Data?.customerAddress || "Vĩnh Phúc"}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={handleDelivery}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      Giao Hàng
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Chi tiết thông tin đơn hàng */}
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Chi tiết đơn hàng</h3>
            <p>
              <strong>Mã đơn hàng:</strong>{" "}
              {Math.random().toString(36).substr(2, 10)}
            </p>
            <p>
              <strong>Tên đơn hàng:</strong>{" "}
              {step1Data?.projectName || "Bất động sản BigTower"}
            </p>
            <p>
              <strong>Khách hàng:</strong>{" "}
              {step1Data?.customerName || "Lê Văn Lương"}
            </p>
            <p>
              <strong>Số điện thoại:</strong>{" "}
              {step1Data?.customerPhone || "0388049008"}
            </p>
            <p>
              <strong>Địa chỉ:</strong>{" "}
              {step1Data?.customerAddress || "Hải Phòng"}
            </p>
            <p>
              <strong>Thành tiền:</strong>{" "}
              {totalPrice ? totalPrice.toLocaleString() : "14.288.700"} VNĐ
            </p>
          </div>
        </div>

        {/* Nút điều hướng */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={onPrevious}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-6 rounded-lg"
          >
            Quay lại
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
