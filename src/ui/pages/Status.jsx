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

const Status = () => {
  return (
    <div className="mt-20 px-4 max-w-full">
      {/* Top Navigation */}
      <div className="max-w-[1182px] mx-auto flex justify-between items-center py-2 mb-10">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="text-[#064460] font-extrabold">Loan Tracking</span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <Link href="/Identification" className="w-full sm:w-[160px]">
            <button className="flex items-center justify-center gap-2 h-[47px] w-full bg-[#0EA5E9] text-white border rounded-md">
              <ChevronLeft className="w-4 h-4" />
              <span className="leading-none">Back</span>
            </button>
          </Link>
          <Link href="/status" className="w-full sm:w-[160px]">
            <button className="flex items-center justify-center gap-2 h-[47px] w-full bg-gray-500 text-white border rounded-md">
              <span className="leading-none">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="relative border border-green-600 max-w-[1182px] mx-auto font-extrabold mb-8 px-4 sm:px-0">
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
          className="absolute sm:text-sm text-[#076F32] font-extrabold text-sm"
          style={{ left: "27%", transform: "translateX(-50%)", top: "40px" }}
        >
          Identification
        </div>
        <div
          className="absolute sm:text-sm text-[#EF4444] font-extrabold text-sm"
          style={{ left: "52%", transform: "translateX(-50%)", top: "40px" }}
        >
          Verification
        </div>
        <div
          className="absolute sm:text-sm text-[#076F32] font-extrabold text-sm"
          style={{ left: "77%", transform: "translateX(-50%)", top: "40px" }}
        >
          Status
        </div>
      </div>

      {/* Status Buttons - OUTSIDE green box */}
      <div className="flex justify-center gap-3  w-full px-4 max-w-[1182px] mx-auto">
        <button className="bg-yellow-300 h-10 mt-9 rounded-md shadow flex-1">
          Missing Document
        </button>
        <button className="bg-red-500 h-10 rounded-md mt-9 shadow flex-1">
          Processing
        </button>
        <button className="bg-green-500 h-10 rounded-md mt-9 shadow flex-1">
          Approved
        </button>
      </div>

      {/* Centered Form & Buttons */}
      <div className="flex flex-col items-center justify-center mt-10">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 w-full max-w-[720px]">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Document 1
            </label>
            <input
              type="text"
              placeholder="Aadhar Card"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Document 2
            </label>
            <input
              type="text"
              placeholder="Bank Statement"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Document 3
            </label>
            <input
              type="text"
              placeholder="Cancelled Cheque"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Document 4
            </label>
            <input
              type="text"
              placeholder="ITR"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Document 5
            </label>
            <input
              type="text"
              placeholder="Passport Photo"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Document 6
            </label>
            <input
              type="email"
              placeholder="GST"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </form>

        {/* Buttons Centered Below Form */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full max-w-[720px] px-4">
          <button className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition-all duration-200 w-full sm:w-auto">
            Cancel
          </button>
          <button className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 transition-all duration-200 w-full sm:w-auto">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Status;
