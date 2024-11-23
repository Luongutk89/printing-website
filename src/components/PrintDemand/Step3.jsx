import React, { useState, useEffect } from "react";

const Step3 = ({ onNext, onPrevious, updateStepData, step2Data }) => {
  // Lấy danh sách ảnh đã được Approved từ Step2
  const approvedImages = step2Data.designFiles.filter(
    (file) => file.status === "Approved"
  );

  const [resources, setResources] = useState([
    { name: "Giấy A3", quantity: 22, price: 5000 },
    { name: "Giấy A2", quantity: 27, price: 7000 },
    { name: "Ghim giấy", quantity: 114, price: 2000 },
    { name: "Ghim sắt", quantity: 104, price: 3000 },
    { name: "Giấy A1", quantity: 103, price: 10000 },
  ]);

  const [machine, setMachine] = useState("Máy in 1");
  const [selectedImages, setSelectedImages] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Tính tổng giá thành
  useEffect(() => {
    const total = resources.reduce(
      (sum, resource) => sum + resource.quantity * resource.price,
      0
    );
    setTotalPrice(total);
  }, [resources]);

  // Xử lý chọn hoặc bỏ chọn ảnh
  const handleImageSelect = (url) => {
    if (selectedImages.includes(url)) {
      setSelectedImages(selectedImages.filter((img) => img !== url));
    } else {
      setSelectedImages([...selectedImages, url]);
    }
  };

  // Xử lý thay đổi số lượng tài nguyên
  const handleQuantityChange = (index, delta) => {
    const updatedResources = [...resources];
    updatedResources[index].quantity = Math.max(
      0,
      updatedResources[index].quantity + delta
    );
    setResources(updatedResources);
  };

  // Chuyển sang bước tiếp theo
  const handleNext = () => {
    updateStepData({ selectedImages, resources, machine, totalPrice });
    onNext();
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Bước 3: Thiết lập in ấn</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bên trái: Ảnh đã Approved */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ảnh đã Approved</h3>
            {approvedImages.length === 0 ? (
              <p className="text-gray-600">Không có ảnh nào được Approved.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {approvedImages.map((file, index) => (
                  <div
                    key={index}
                    className={`relative border-2 ${
                      selectedImages.includes(file.url)
                        ? "border-blue-500"
                        : "border-gray-300"
                    } rounded-lg`}
                  >
                    <img
                      src={file.url}
                      alt={`Approved File ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg cursor-pointer"
                      onClick={() => handleImageSelect(file.url)}
                    />
                    <p className="absolute top-2 right-2 bg-blue-500 text-white rounded-full px-2 py-1 text-xs cursor-pointer">
                      {selectedImages.includes(file.url) ? "Chọn" : "Chưa chọn"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bên phải: Danh sách tài nguyên */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Danh sách tài nguyên</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 border border-gray-300 rounded-lg px-4 py-3"
                >
                  <span>{resource.name}</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(index, -1)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={resource.quantity}
                      readOnly
                      className="w-16 text-center mx-3 bg-gray-100 border border-gray-300 rounded-lg"
                    />
                    <button
                      onClick={() => handleQuantityChange(index, 1)}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chọn máy in */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Chọn máy in</h3>
          <select
            value={machine}
            onChange={(e) => setMachine(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-2"
          >
            <option value="Máy in 1">Máy in 1</option>
            <option value="Máy in 2">Máy in 2</option>
            <option value="Máy in 3">Máy in 3</option>
          </select>
        </div>

        {/* Tổng giá */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Tổng giá:</h3>
          <p className="text-2xl font-bold text-green-600">
            {totalPrice.toLocaleString()} VNĐ
          </p>
        </div>

        {/* Nút điều hướng */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={onPrevious}
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-6 rounded-lg"
          >
            Quay lại
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
