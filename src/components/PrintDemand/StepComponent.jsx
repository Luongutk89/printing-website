import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const StepComponent = () => {
  const [currentStep, setCurrentStep] = useState(1); // Bước hiện tại
  const [stepData, setStepData] = useState({
    step1Data: {}, // Dữ liệu từ Step 1
    step2Data: {}, // Dữ liệu từ Step 2
    step3Data: {}, // Dữ liệu từ Step 3
  });

  // Hàm chuyển dữ liệu giữa các bước
  const updateStepData = (stepKey, data) => {
    setStepData((prev) => ({ ...prev, [stepKey]: data }));
  };

  // Điều hướng qua lại giữa các bước
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Thanh hiển thị tiến trình */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            {["Dự án", "Thiết kế", "In ấn", "Giao hàng"].map((label, index) => (
              <div key={index} className="text-center flex-1">
                <div
                  className={`w-8 h-8 mx-auto rounded-full text-sm flex items-center justify-center ${
                    currentStep === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>
                <p
                  className={`text-sm mt-2 ${
                    currentStep === index + 1
                      ? "text-blue-500 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Thanh gạch ngang tiến trình */}
          <div className="relative mt-2">
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full bg-gray-300 h-1"></div>
            <div
              className="absolute top-1/2 transform -translate-y-1/2 bg-blue-500 h-1 transition-all"
              style={{
                width: `${(currentStep - 1) * 33.33}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Nội dung từng bước */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Hệ thống Quản lý Dự án
        </h1>

        {currentStep === 1 && (
          <Step1
            onNext={handleNext}
            updateStepData={(data) => updateStepData("step1Data", data)}
          />
        )}
        {currentStep === 2 && (
          <Step2
            onNext={handleNext}
            onPrevious={handlePrevious}
            updateStepData={(data) => updateStepData("step2Data", data)}
            step1Data={stepData.step1Data} // Truyền dữ liệu từ Step 1
            step2Data={stepData.step2Data} // Truyền dữ liệu của Step 2 (nếu cần)
          />
        )}
        {currentStep === 3 && (
          <Step3
            onNext={handleNext}
            onPrevious={handlePrevious}
            updateStepData={(data) => updateStepData("step3Data", data)}
            step2Data={stepData.step2Data} // Truyền dữ liệu từ Step 2
          />
        )}
        {currentStep === 4 && (
          <Step4
            onPrevious={handlePrevious}
            stepData={stepData} // Truyền toàn bộ dữ liệu từ các bước
          />
        )}
      </div>
    </div>
  );
};

export default StepComponent;
