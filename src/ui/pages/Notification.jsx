import { FileDown, Info, Search, Star, Trash2 } from "lucide-react";
import React from "react";

const dummyNotifications = [
  {
    sender: "Jullu Jalal",
    label: "Primary",
    message: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    color: "bg-teal-100 text-teal-700",
  },
  {
    sender: "Admin",
    label: "Admin",
    message: "Reminder To Update Pending Documents",
    time: "8:13 AM",
    color: "bg-orange-100 text-orange-700",
  },
  {
    sender: "Peter Lewis",
    label: "",
    message: "Vacation Home Rental Success",
    time: "7:52 PM",
  },
  {
    sender: "Anthony Briggs",
    label: "",
    message: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
  },
  {
    sender: "Clifford Morgan",
    label: "User",
    message: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    sender: "Clifford Morgan",
    label: "User",
    message: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    sender: "Clifford Morgan",
    label: "User",
    message: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    color: "bg-indigo-100 text-indigo-700",
  },
];

const Notification = () => {
  return (
    <div className="w-full flex justify-center mt-16 px-2">
      <div className="w-full max-w-[1182px] bg-white px-2 sm:px-4">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-5 mb-4 gap-4">
          {/* Search Bar */}
          <div className="flex items-center w-full sm:w-[350px] h-[40px] pl-3 pr-2 gap-3 rounded-full border border-gray-300 bg-white shadow-sm">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center w-full sm:w-[150px] h-[40px] bg-white rounded-[12px] border border-gray-300 shadow-sm overflow-hidden">
            <button
              title="Export"
              className="flex items-center justify-center w-1/3 h-full hover:bg-gray-100"
            >
              <FileDown className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-[1px] h-[60%] bg-gray-300" />
            <button
              title="Info"
              className="flex items-center justify-center w-1/3 h-full hover:bg-gray-100"
            >
              <Info className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-[1px] h-[60%] bg-gray-300" />
            <button
              title="Delete"
              className="flex items-center justify-center w-1/3 h-full hover:bg-gray-100"
            >
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>

        {/* Heading */}
        <div className="w-full mb-6 text-2xl sm:text-3xl border-b border-gray-200 flex items-center px-2 font-extrabold text-gray-700">
          Notifications
        </div>

        {/* Notifications List */}
        <div className="w-full">
          {dummyNotifications.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-100 px-3 py-3 hover:bg-gray-50 transition text-sm gap-2"
            >
              {/* Left Side */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 w-full overflow-hidden">
                <input type="checkbox" className="w-4 h-4 text-blue-500" />
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-medium min-w-[90px] truncate">
                  {item.sender}
                </span>

                {item.label && (
                  <span
                    className={`text-xs px-2 py-[2px] rounded-md font-medium ${item.color}`}
                  >
                    {item.label}
                  </span>
                )}

                <span className="text-gray-600 truncate w-full">
                  {item.message}
                </span>
              </div>

              {/* Right Side (Time) */}
              <span className="text-gray-500 text-xs sm:text-sm whitespace-nowrap sm:ml-4">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
