import React from "react";

const Dashboard = () => {
  return (
    <section className="w-1/2 bg-transparent p-10 flex flex-col justify-between items-center">
      <h2 className="w-full text-2xl font-bold text-[#4caf50] mb-4 text-center">
        Dashboard Overview
      </h2>
      <div className="w-[85%] h-[85%] bg-gradient-to-br from-[#c8f0d2] to-[#e4f5e9] backdrop-blur-md border border-[#4caf50]/50 rounded-xl shadow-md flex flex-col items-center justify-center text-lg font-semibold text-black transition-all duration-300">
        <p>Dashboard Content</p>
      </div>
      <a
        href="#"
        className="mt-10 bg-[#4caf50] text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-[#66bb6a] transition duration-300"
      >
        Control
      </a>
    </section>
  );
};

export default Dashboard;
