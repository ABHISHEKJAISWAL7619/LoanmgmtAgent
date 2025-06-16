// import {
//   ArrowLeft,
//   ArrowLeftIcon,
//   Check,
//   ChevronLeft,
//   ChevronRight,
//   CircleAlert,
//   Dot,
//   Image,
// } from "lucide-react";
// import React from "react";
// import Button from "../atoms/Button";

// const Identification = () => {
//   return (
//     <div className="mt-20">
//       <div className="flex justify-between items-center px-4 py-2 mb-10">
//         {/* Left Section */}
//         <div className="flex items-center gap-2 text-lg font-semibold">
//           <ArrowLeftIcon className="w-5 h-5" />
//           <span className="text-[#064460] font-extrabold">Loan Tracking</span>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           <button className="flex items-center justify-center gap-2 h-[47px] w-[160px] bg-[#808080] text-white border rounded-md">
//             <ChevronLeft className="w-4 h-4" />
//             <span className="leading-none">Back</span>
//           </button>
//           <button className="flex items-center justify-center gap-2 h-[47px] w-[160px] bg-[#0EA5E9] text-white border rounded-md  ">
//             <span className="leading-none">Next</span>
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       <div>
//         <div className="border w-[1182px] ml-5 flex relative font-extrabold border-green-600 ">
//           {/* 1st Icon */}
//           <div className="absolute h-[50px] w-[50px] left-[20%] bg-[#076F32] top-[-25px] text-white rounded-full flex items-center justify-center">
//             <Check className="h-8 w-8" />
//           </div>

//           {/* 2nd Icon */}
//           <div className="absolute h-[50px] w-[50px] left-[45%] bg-[#EF4444] top-[-25px] text-white rounded-full flex items-center justify-center">
//             <CircleAlert className="h-6 w-6" />
//           </div>

//           {/* 3rd Icon */}
//           <div className="absolute h-[50px] w-[50px] left-[70%] bg-[#076F32] top-[-25px] text-white rounded-full flex items-center justify-center">
//             <Dot className="h-24 w-24" />
//           </div>
//         </div>
//       </div>

//       <div className="max-w-[600px] mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border space-y-4">
//         {/* Profile Picture */}
//         <div className="flex justify-center">
//           <div className="w-[100px] h-[100px] rounded-full border-4 border-green-500 overflow-hidden">
//             <Image
//               src="https://i.pinimg.com/736x/c0/0f/61/c00f618ccb61829479a5c7efe8752b51.jpg"
//               alt="Profile"
//               width={100}
//               height={100}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         </div>

//         {/* First Name | Last Name */}
//         <div className="flex justify-between gap-4">
//           <div className="flex-1">
//             <label className="block text-sm font-medium">First Name</label>
//             <input
//               type="text"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="John"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block text-sm font-medium">Last Name</label>
//             <input
//               type="text"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="Doe"
//             />
//           </div>
//         </div>

//         {/* Gender | Date of Birth */}
//         <div className="flex justify-between gap-4">
//           <div className="flex-1">
//             <label className="block text-sm font-medium">Gender</label>
//             <input
//               type="text"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="Male"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block text-sm font-medium">Date of Birth</label>
//             <input
//               type="date"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//             />
//           </div>
//         </div>

//         {/* Address | Email */}
//         <div className="flex justify-between gap-4">
//           <div className="flex-1">
//             <label className="block text-sm font-medium">Address</label>
//             <input
//               type="text"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="123 Main Street"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block text-sm font-medium">Email Address</label>
//             <input
//               type="email"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="john@example.com"
//             />
//           </div>
//         </div>

//         {/* Country | State */}
//         <div className="flex justify-between gap-4">
//           <div className="flex-1">
//             <label className="block text-sm font-medium">Country</label>
//             <input
//               type="text"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="India"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block text-sm font-medium">State</label>
//             <input
//               type="text"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="Uttar Pradesh"
//             />
//           </div>
//         </div>

//         {/* City | Pin Code */}
//         <div className="flex justify-between gap-4">
//           <div className="flex-1">
//             <label className="block text-sm font-medium">City</label>
//             <input
//               type="text"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="Lucknow"
//             />
//           </div>
//           <div className="flex-1">
//             <label className="block text-sm font-medium">Pin/Zip Code</label>
//             <input
//               type="text"
//               className="w-[340px] h-[43px] border rounded-[10px] px-3"
//               placeholder="226001"
//             />
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-end gap-4 mt-6">
//           <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
//             Reject
//           </button>
//           <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
//             Verify
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Identification;

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
    <div className="mt-20">
      {/* Top Navigation */}
      <div className="w-[1182px] mx-auto flex justify-between items-center px-4 py-2 mb-10">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="text-[#064460] font-extrabold">Loan Tracking</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="w-[160px]">
            <button className="flex items-center cursor-pointer justify-center gap-2 h-[47px] w-full bg-[#808080] text-white border rounded-md">
              <ChevronLeft className="w-4 h-4" />
              <span className="leading-none">Back</span>
            </button>
          </Link>

          <Link href="/verification" className="w-[160px]">
            <button className="flex items-center cursor-pointer justify-center gap-2 h-[47px] w-full bg-[#0EA5E9] text-white border rounded-md">
              <span className="leading-none">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="relative border border-green-600 w-[1182px] mx-auto font-extrabold mb-16">
        {/* Icons */}
        <div className="absolute h-[50px] w-[50px] left-[20%] bg-[#076F32] top-[-25px] text-white rounded-full flex items-center justify-center shadow-md">
          <Check className="h-8 w-8" />
        </div>
        <div className="absolute h-[50px] w-[50px] left-[45%] bg-[#EF4444] top-[-25px] text-white rounded-full flex items-center justify-center shadow-md">
          <CircleAlert className="h-6 w-6" />
        </div>
        <div className="absolute h-[50px] w-[50px] left-[70%] bg-[#076F32] top-[-25px] text-white rounded-full flex items-center justify-center shadow-md">
          <Dot className="h-6 w-6" />{" "}
          {/* h-24 w-24 toh bahut bada tha, change kiya thoda */}
        </div>

        {/* Texts below icons */}
        <div
          className="absolute top-[35px] text-[#076F32] font-extrabold text-sm"
          style={{ left: "22%", transform: "translateX(-50%)" }}
        >
          Identification
        </div>
        <div
          className="absolute top-[35px] text-[#EF4444] font-extrabold text-sm"
          style={{ left: "47%", transform: "translateX(-50%)" }}
        >
          Verification
        </div>
        <div
          className="absolute top-[35px] text-[#076F32] font-extrabold text-sm"
          style={{ left: "72%", transform: "translateX(-50%)" }}
        >
          Status
        </div>
      </div>

      {/* Profile Form Card */}
      <div className="w-[1182px] mx-auto p-10 bg-[#f1f5f9]  rounded-xl   flex flex-col items-center">
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
        <form className="grid grid-cols-2 gap-x-10 gap-y-6 w-full max-w-[720px]">
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
        <div className="flex justify-end gap-4 mt-10 w-full max-w-[700px]">
          <button className="bg-red-500 text-white px-8 py-2 rounded-md hover:bg-red-600 transition-all duration-200">
            Reject
          </button>
          <button className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 transition-all duration-200">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Identification;
