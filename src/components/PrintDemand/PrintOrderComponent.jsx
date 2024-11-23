// import React from "react";
// import './PrintOrderComponent.css';

// const PrintOrderComponent = () => {
//   return (
//     <div className="bg-gray-900 text-white p-6 min-h-screen">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-lg font-bold">oto</h1>
//         <div className="flex gap-8 text-sm">
//           <p className="hover:underline cursor-pointer">Dự án</p>
//           <p className="hover:underline cursor-pointer">Thiết kế</p>
//           <p className="hover:underline cursor-pointer">In ấn</p>
//           <p className="hover:underline cursor-pointer font-bold">Giao hàng</p>
//         </div>
//       </div>

//       {/* Form & Information */}
//       <div className="grid grid-cols-3 gap-4">
//         {/* Left Section */}
//         <div className="col-span-2 bg-gray-800 p-4 rounded-lg">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="text-sm">Mã đơn hàng</label>
//               <input
//                 type="text"
//                 value="0560b158-b2fa-44d5-8a9b-5339036bff7d"
//                 className="w-full bg-gray-700 p-2 rounded text-sm"
//                 disabled
//               />
//             </div>
//             <div>
//               <label className="text-sm">Tên đơn hàng</label>
//               <input
//                 type="text"
//                 placeholder="Nhập tên đơn hàng"
//                 className="w-full bg-gray-700 p-2 rounded text-sm"
//               />
//             </div>
//             <div>
//               <label className="text-sm">Quản lý</label>
//               <input
//                 type="text"
//                 value="Trần Minh Quân"
//                 className="w-full bg-gray-700 p-2 rounded text-sm"
//                 disabled
//               />
//             </div>
//             <div>
//               <label className="text-sm">Ngày đặt</label>
//               <input
//                 type="date"
//                 className="w-full bg-gray-700 p-2 rounded text-sm"
//               />
//             </div>
//             <div>
//               <label className="text-sm">Loại máy móc</label>
//               <select className="w-full bg-gray-700 p-2 rounded text-sm">
//                 <option>Loại máy in màu</option>
//                 <option>Loại máy đen trắng</option>
//               </select>
//             </div>
//           </div>

//           {/* Resource Section */}
//           <div className="mt-6">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr>
//                   <th className="text-left">Tài nguyên</th>
//                   <th className="text-center">Số lượng</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { name: "Giấy A3", quantity: 22 },
//                   { name: "Giấy A2", quantity: 27 },
//                   { name: "Giấy A1", quantity: 121 },
//                   { name: "Đính giấy", quantity: 114 },
//                   { name: "Đóng sách", quantity: 103 },
//                 ].map((item, index) => (
//                   <tr key={index}>
//                     <td className="py-2">{item.name}</td>
//                     <td className="text-center">
//                       <button className="bg-gray-600 px-2 py-1 mx-1 rounded">
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button className="bg-gray-600 px-2 py-1 mx-1 rounded">
//                         +
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="bg-gray-800 p-4 rounded-lg">
//           <div className="text-center mb-4">
//             <img
//               src="https://via.placeholder.com/150"
//               alt="Thông tin dự án"
//               className="w-full h-40 object-cover rounded"
//             />
//           </div>
//           <div className="text-sm">
//             <p className="mb-2">Giá dự án: <span>10.000.000.000đ</span></p>
//             <p className="mb-4">Tên dự án: <span>oto</span></p>
//             <button className="w-full bg-purple-500 py-2 rounded text-white font-medium hover:bg-purple-600">
//               BẮT ĐẦU IN
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrintOrderComponent;
