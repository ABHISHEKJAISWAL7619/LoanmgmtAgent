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

const Identification = () => {
  return (
    <div className="mt-20 px-4 sm:px-0">
      {/* Top Navigation */}
      <div className="max-w-[1182px] mx-auto flex justify-between items-center py-2 mb-10">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="text-[#064460] font-extrabold">Loan Tracking</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="w-[120px] md:w-[160px]">
            <button className="flex items-center cursor-pointer justify-center gap-2 h-[40px] md:h-[47px] w-full bg-[#808080] text-white border rounded-md text-sm md:text-base px-2 md:px-4">
              <ChevronLeft className="w-4 h-4" />
              <span className="leading-none">Back</span>
            </button>
          </Link>

          <Link href="/verification" className="w-[120px] md:w-[160px]">
            <button className="flex items-center cursor-pointer justify-center gap-2 h-[40px] md:h-[47px] w-full bg-[#0EA5E9] text-white border rounded-md text-sm md:text-base px-2 md:px-4">
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
      <div className="max-w-[1182px] mx-auto p-10 bg-[#f1f5f9] rounded-xl flex flex-col items-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="w-[120px] h-[120px] rounded-full border-4 border-green-500 shadow-md overflow-hidden ">
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
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 w-full max-w-[720px]">
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Gender</label>
            <input
              type="text"
              placeholder="Enter gender"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="Select date of birth"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">Country</label>
            <input
              type="text"
              placeholder="Enter country"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">State</label>
            <input
              type="text"
              placeholder="Enter state"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">City</label>
            <input
              type="text"
              placeholder="Enter city"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-gray-700">
              Pin/Zip Code
            </label>
            <input
              type="text"
              placeholder="Enter pin/zip code"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </form>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10 w-full max-w-[720px]">
          <button className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition-all duration-200 w-full sm:w-auto">
            Reject
          </button>
          <button className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 transition-all duration-200 w-full sm:w-auto">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Identification;
