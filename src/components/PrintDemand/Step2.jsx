import React, { useState } from "react";

const Step2 = ({ onNext, onPrevious, updateStepData, step1Data, step2Data }) => {
  const [designFiles, setDesignFiles] = useState(step2Data?.designFiles || []);
  const [designNotes, setDesignNotes] = useState(step2Data?.designNotes || "");

  // Xử lý tải nhiều tệp ảnh
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      file,
      url: URL.createObjectURL(file), // Tạo URL để hiển thị ảnh
      status: "NotYetApproved", // Trạng thái mặc định
      note: "", // Ghi chú mặc định
    }));
    setDesignFiles((prev) => [...prev, ...files]); // Thêm các tệp vào danh sách
  };

  // Xử lý xóa tệp
  const handleRemoveFile = (index) => {
    setDesignFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Cập nhật ghi chú cho từng tệp
  const handleNoteChange = (index, value) => {
    const updatedFiles = [...designFiles];
    updatedFiles[index].note = value;
    setDesignFiles(updatedFiles);
  };

  // Cập nhật trạng thái cho từng tệp
  const handleStatusChange = (index, value) => {
    const updatedFiles = [...designFiles];
    updatedFiles[index].status = value;
    setDesignFiles(updatedFiles);
  };

  // Chuyển sang bước tiếp theo
  const handleNext = () => {
    updateStepData({ designFiles, designNotes }); // Lưu dữ liệu vào parent component
    onNext();
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Bước 2: Thiết kế</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Khung bên trái: Yêu cầu thiết kế */}
          <div className="flex-1 bg-gray-50 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Yêu cầu từ khách hàng</h3>
            <p>
              <strong>Tên khách hàng:</strong> {step1Data?.customerName || "Chưa nhập"}
            </p>
            <p>
              <strong>Email khách hàng:</strong> {step1Data?.customerEmail || "Chưa nhập"}
            </p>
            <p>
              <strong>Mô tả dự án:</strong> {step1Data?.description || "Chưa nhập"}
            </p>

            <h3 className="text-lg font-semibold mt-6">Ghi chú thiết kế</h3>
            <textarea
              value={designNotes}
              onChange={(e) => setDesignNotes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md h-24 mt-2"
              placeholder="Nhập ghi chú từ khách hàng"
            ></textarea>
          </div>

          {/* Khung bên phải: Ảnh thiết kế */}
          <div className="flex-1 bg-gray-50 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Tải lên tệp thiết kế</h3>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <p className="text-sm text-gray-500">Bạn có thể tải lên nhiều tệp.</p>

            {/* Danh sách các tệp ảnh */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {designFiles.map((item, index) => (
                <div key={index} className="relative bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <img
                    src={item.url}
                    alt={`Design File ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <textarea
                    value={item.note}
                    onChange={(e) => handleNoteChange(index, e.target.value)}
                    placeholder="Nhập ghi chú"
                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                  ></textarea>
                  <select
                    value={item.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                  >
                    <option value="NotYetApproved">Not Yet Approved</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
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

export default Step2;
