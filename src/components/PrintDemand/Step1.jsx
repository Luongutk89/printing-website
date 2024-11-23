import React, { useState } from "react";

const Step1 = ({ onNext, updateStepData }) => {
  const [data, setData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    projectManager: "",
    managerPhone: "",
    managerEmail: "",
    projectName: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    updateStepData(data);
    onNext();
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Bước 1: Điền thông tin dự án</h2>

        <div className="space-y-6">
          {/* Thông tin khách hàng */}
          <h3 className="font-semibold text-lg">Thông tin khách hàng</h3>
          <div>
            <input
              type="text"
              name="customerName"
              placeholder="Tên khách hàng (VD: Nguyễn Văn A)"
              value={data.customerName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">VD: Nguyễn Văn A</p>
          </div>
          <div>
            <input
              type="text"
              name="customerPhone"
              placeholder="Số điện thoại khách hàng (VD: 0912345678)"
              value={data.customerPhone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">VD: 0912345678</p>
          </div>
          <div>
            <input
              type="email"
              name="customerEmail"
              placeholder="Email khách hàng (VD: email@example.com)"
              value={data.customerEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">VD: email@example.com</p>
          </div>

          {/* Thông tin người làm */}
          <h3 className="font-semibold text-lg">Thông tin người làm</h3>
          <div>
            <input
              type="text"
              name="projectManager"
              placeholder="Tên người làm (VD: Trần Văn B)"
              value={data.projectManager}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">VD: Trần Văn B</p>
          </div>
          <div>
            <input
              type="text"
              name="managerPhone"
              placeholder="Số điện thoại người làm (VD: 0987654321)"
              value={data.managerPhone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">VD: 0987654321</p>
          </div>
          <div>
            <input
              type="email"
              name="managerEmail"
              placeholder="Email người làm (VD: manager@example.com)"
              value={data.managerEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">VD: manager@example.com</p>
          </div>

          {/* Thông tin dự án */}
          <h3 className="font-semibold text-lg">Thông tin dự án</h3>
          <div>
            <input
              type="text"
              name="projectName"
              placeholder="Tên dự án (VD: Xây dựng nhà máy ABC)"
              value={data.projectName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-1">VD: Xây dựng nhà máy ABC</p>
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Mô tả dự án (VD: Xây dựng nhà máy công nghiệp với 2 tầng và diện tích 500m2)"
              value={data.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md h-24"
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              VD: Xây dựng nhà máy công nghiệp với 2 tầng và diện tích 500m2
            </p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg mt-6"
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
};

export default Step1;
