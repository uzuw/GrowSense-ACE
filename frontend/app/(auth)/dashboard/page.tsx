import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] font-sans">
      <main className="h-full grid grid-rows-[2fr_1fr]">
        <div className="grid grid-cols-2 gap-6 p-6">
          <section className="flex justify-center items-center">
            <div className="relative w-[90%] h-[90%] rounded-3xl p-6 bg-white shadow-2xl flex flex-wrap justify-around items-center gap-6">
              {[{ src: '/temperature-icon.gif' }, { src: '/humidity-icon.gif' }, { src: '/wind-icon.gif' }, { src: '/wind-icon.gif' }].map((item, i) => (
                <div key={i} className="w-[40%] h-[40%] rounded-2xl bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] shadow-lg flex justify-center items-center">
                  <Image src={item.src} alt="icon" width={80} height={80} />
                </div>
              ))}
            </div>
          </section>

          <section className="flex justify-center items-center">
            <div className="relative w-[90%] h-[90%] rounded-3xl p-6 bg-white shadow-2xl flex flex-col justify-around items-center gap-4">
              <div className="w-4/5 h-[25%] rounded-2xl bg-gradient-to-r from-[#667eea] to-[#764ba2] shadow-md flex items-center justify-center text-white text-xl font-semibold">
                Recent Stats
              </div>
              <div className="w-4/5 h-[25%] rounded-2xl bg-gradient-to-r from-[#ff9966] to-[#ff5e62] shadow-md flex items-center justify-center text-white text-xl font-semibold">
                Device Info
              </div>
              <div className="w-4/5 h-[25%] rounded-2xl bg-gradient-to-r from-[#00c6ff] to-[#0072ff] shadow-md flex items-center justify-center text-white text-xl font-semibold">
                Analysis
              </div>
              <a href="#" className="absolute bottom-4 right-4 px-4 py-2 bg-[#28a745] text-white rounded-xl shadow hover:bg-green-600 transition">
                See More
              </a>
            </div>
          </section>
        </div>

        <div className="p-6 flex justify-center items-center bg-white shadow-inner rounded-t-3xl">
          <div className="w-full max-w-4xl h-[80%] flex justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Enter suggestion..."
              className="flex-1 h-[60px] px-4 border border-gray-300 rounded-xl shadow focus:ring-2 focus:ring-blue-400 transition"
            />
            <button className="h-[60px] w-[150px] bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition">
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
