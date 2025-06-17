"use client";

import data from "../../../public/db/data.json";
import Link from "next/link";
import Image from "next/image";
import DashboardLink from "../molecules/DashboardLink";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const { navigation } = data;
  const path = ""; // Use pathname with usePathname() in real app

  return (
    <aside
      className={`fixed top-0 left-0 z-50 bg-[#f1f5f9] w-[243px] h-full md:relative md:translate-x-0 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex justify-center py-4 border-b border-gray-300">
          <Link href="/">
            <Image
              alt="logo"
              className="w-[106px] h-auto"
              src="/img/logo.png"
              width={200}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex-1 overflow-y-auto px-3 py-2">
          {navigation?.map((item, index) => (
            <li key={index}>
              <DashboardLink
                active={path === item.route}
                route={item.route}
                label={item.label}
                heroIcon={item.icon}
                handleClick={() => {
                  if (window.innerWidth < 768) {
                    setIsSidebarOpen(false); // Auto-close on mobile
                  }
                }}
                subMenu={item.subMenu}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Only: Close Button */}
        <div className="md:hidden p-4 border-t border-gray-300">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Close Sidebar
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
