"use client";
import {
  ArrowLeftIcon,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Dot,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Verification = () => {
  return (
    <div className="mt-20 px-4">
      {/* Top Navigation */}
      <div className="max-w-[1182px] mx-auto flex flex-col sm:flex-row justify-between items-center py-2 mb-10 gap-4 sm:gap-0">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="text-[#064460] font-extrabold">Loan Tracking</span>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 w-full sm:w-auto">
          <Link
            href="/Identification"
            className="flex-1 sm:flex-initial w-full sm:w-[160px]"
          >
            <button className="flex items-center justify-center gap-2 h-[47px] w-full bg-[#0EA5E9] text-white border rounded-md">
              <ChevronLeft className="w-4 h-4" />
              <span className="leading-none">Back</span>
            </button>
          </Link>

          <Link
            href="/status"
            className="flex-1 sm:flex-initial w-full sm:w-[160px]"
          >
            <button className="flex items-center justify-center gap-2 h-[47px] w-full bg-[#0EA5E9] text-white border rounded-md">
              <span className="leading-none">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="relative border border-green-600 max-w-[1182px] mx-auto font-extrabold mb-16 px-4 sm:px-0">
        {/* Icons */}
        <div className="absolute h-[50px] w-[50px] left-[20%] bg-[#076F32] top-[-25px] text-white rounded-full flex items-center justify-center shadow-md">
          <Check className="h-8 w-8" />
        </div>
        <div className="absolute h-[50px] w-[50px] left-[45%] bg-[#EF4444] top-[-25px] text-white rounded-full flex items-center justify-center shadow-md">
          <CircleAlert className="h-6 w-6" />
        </div>
        <div className="absolute h-[50px] w-[50px] left-[70%] bg-[#076F32] top-[-25px] text-white rounded-full flex items-center justify-center shadow-md">
          <Dot className="h-6 w-6" />
        </div>

        {/* Texts below icons */}
        <div
          className="absolute  sm:text-sm top-[35px] text-[#076F32] font-extrabold text-sm"
          style={{ left: "27%", transform: "translateX(-50%)" }}
        >
          Identification
        </div>
        <div
          className="absolute sm:text-sm top-[35px] text-[#EF4444] font-extrabold text-sm"
          style={{ left: "52%", transform: "translateX(-50%)" }}
        >
          Verification
        </div>
        <div
          className="absolute  sm:text-sm top-[35px] text-[#076F32] font-extrabold text-sm"
          style={{ left: "77%", transform: "translateX(-50%)" }}
        >
          Status
        </div>
      </div>

      {/* Profile Form Card */}
      <div className="max-w-[1182px] mx-auto p-6 sm:p-10 bg-[#f1f5f9] rounded-xl flex flex-col items-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-[120px] h-[120px] rounded-full border-4 border-green-500 shadow-md overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/c0/0f/61/c00f618ccb61829479a5c7efe8752b51.jpg"
              alt="Profile"
              width={120}
              height={120}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Form Grid */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 w-full max-w-[720px]">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Loan Type
            </label>
            <input
              type="text"
              placeholder="Enter loan type"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Aadhar Card
            </label>
            <input
              type="number"
              placeholder="Enter Aadhar card number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Pan Card</label>
            <input
              type="text"
              placeholder="Enter pan number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Electric Bill
            </label>
            <input
              type="text"
              placeholder="Select date of birth"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Bank Account Number
            </label>
            <input
              type="text"
              placeholder="Enter account number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Ifsc Code
            </label>
            <input
              type="text"
              placeholder="Enter ifsc code"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Bank Name
            </label>
            <input
              type="text"
              placeholder="Enter bank name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Bank Statement Photo
            </label>
            <input
              type="file"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Salary Slip 3 Month
            </label>
            <input
              type="file"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Office Id
            </label>
            <input
              type="text"
              placeholder="Enter office Id"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Form 16</label>
            <input
              type="text"
              placeholder="Enter here"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              GST Number
            </label>
            <input
              type="text"
              placeholder="Enter Gst number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              ITR Number
            </label>
            <input
              type="text"
              placeholder="Enter Itr number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </form>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10 w-full max-w-[720px]">
          <button className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition-all duration-200 w-full sm:w-auto">
            Pending
          </button>
          <button className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 transition-all duration-200 w-full sm:w-auto">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
