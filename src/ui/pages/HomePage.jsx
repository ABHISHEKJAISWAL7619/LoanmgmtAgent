"use client";

import Image from "next/image";

import StatsCard from "../molecules/StatsCard";
import Table from "../molecules/Table";
import Link from "next/link";

const HomePage = () => {
  const stats = [
    {
      title: "Missing Documents",
      span: "trained",
      icon: "/icon/icon.svg",
      count: "24",
      growth: "8.5",
    },
    {
      title: "Success Loans",
      span: "",
      icon: "/icon/icon.svg",
      count: "245",
      growth: "1.3",
    },
    {
      title: "Process Loans",
      span: "theory",
      icon: "/icon/icon.svg",
      count: "32",
      growth: "4.3",
      timeline: "yesterday",
    },
    {
      title: "Total Loans",
      span: "",
      icon: "/icon/progress.svg",
      count: "85%",
      growth: "1.8",
      timeline: "yesterday",
    },
  ];

  return (
    <div>
      <section className="space-y-4 mb-5 mt-16 bg-[#f1f5f9] ">
        <div className="grid lg:grid-cols-4 ">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </section>

      <span className="text-2xl text-[#64748B] mb-5 font-light">
        Pending Loans
      </span>
      <div className="flex w mt-5 w-[1182px] mb-6 justify-between">
        <div className="flex items-center w-[320px] h-[32px] py-1 pl-2 gap-3 rounded-full border border-gray-300 bg-white">
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
          className="w-[161px] h-[36px] px-4 py-2  rounded-[4px] bg-[#0EA5E9] text-white text-sm shadow"
        >
          Add New Borrower
        </Link>
      </div>
      <Table />
    </div>
  );
};

export default HomePage;
