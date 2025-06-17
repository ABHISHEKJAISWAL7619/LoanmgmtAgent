"use client";
import React from "react";

const Profile = () => {
  const inputStyle =
    "h-[52px] rounded border-[0.6px] border-gray-400 px-3 w-full sm:w-[369.47px]";
  const labelStyle = "text-sm font-medium mb-1";

  return (
    <div className="bg-[#f1f5f9] min-h-screen py-6">
      <div className="max-w-6xl mx-auto bg-[#f1f5f9] p-6 rounded-md mt-10">
        {/* Buttons top & profile below on mobile, side by side on desktop */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center mb-8 gap-4 sm:gap-0">
          {/* Empty div for left spacing on desktop */}
          <div className="w-0 sm:w-[120px]" />

          {/* Profile in center */}
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcH8kditnw1ElmBpQsWdkHiukx1XEDg_JGig&s"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
            <h2 className="mt-3 text-lg font-semibold">Add Photo</h2>
          </div>

          {/* Buttons on right / top */}
          <div className="flex gap-3 justify-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Edit
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
              Delete
            </button>
          </div>
        </div>

        <div className="bg-[#f1f5f9]">
          {/* First Name & Last Name */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-5">
            <div className="flex flex-col w-full sm:w-auto">
              <label className={labelStyle}>First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto">
              <label className={labelStyle}>Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                className={inputStyle}
              />
            </div>
          </div>

          {/* Email & Phone Number */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-5">
            <div className="flex flex-col w-full sm:w-auto">
              <label className={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto">
              <label className={labelStyle}>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className={inputStyle}
              />
            </div>
          </div>

          {/* DOB & Gender */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-5">
            <div className="flex flex-col w-full sm:w-auto">
              <label className={labelStyle}>Date of Birth</label>
              <input
                type="date"
                className="w-full sm:w-[369.47px] h-[52px] rounded border-[0.6px] border-gray-400 px-3"
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto">
              <label className={labelStyle}>Gender</label>
              <select className="w-full sm:w-[369.47px] h-[52px] rounded border-[0.6px] border-gray-400 px-3">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* ID & Password */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-5">
            <div className="flex flex-col w-full sm:w-auto">
              <label className={labelStyle}>ID</label>
              <input
                type="text"
                placeholder="Enter ID"
                className={inputStyle}
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto">
              <label className={labelStyle}>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className={inputStyle}
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
