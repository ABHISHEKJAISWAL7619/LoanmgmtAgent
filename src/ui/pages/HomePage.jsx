"use client";

import Image from "next/image";
import StatsCard from "../molecules/StatsCard";
import Table from "../molecules/Table";
import Link from "next/link";

const HomePage = () => {
  const stats = [
    {
      title: "Missing Documents",
      icon: "/icon/icon.svg",
      count: "24",
    },
    {
      title: "Success Loans",
      icon: "/icon/icon.svg",
      count: "245",
    },
    {
      title: "Process Loans",
      icon: "/icon/icon.svg",
      count: "32",
    },
    {
      title: "Total Loans",
      icon: "/icon/progress.svg",
      count: "85%",
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-10 pt-20 pb-8 bg-[#f1f5f9] min-h-screen">
      {/* Stats Cards */}
      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center mb-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </section>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl text-[#64748B] mb-4 font-light">
        Pending Loans
      </h2>

      {/* Search and Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center w-full sm:w-[320px] h-[36px] py-1 pl-3 gap-3 rounded-full border border-gray-300 bg-white">
          <Image
            src="/icon/search.svg"
            alt="Search Icon"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        <Link
          href="/Identification"
          className="w-full sm:w-auto h-[36px] px-4 py-2 rounded bg-[#0EA5E9] text-white text-sm text-center shadow"
        >
          Add New Borrower
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow-sm">
        <Table />
      </div>
    </div>
  );
};

export default HomePage;
