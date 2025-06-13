import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#f4f9f6] font-sans">
      <main className="min-h-screen flex flex-col">

        {/* Top Section */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Side - Sensor Cards */}
          <section className="w-1/2 bg-[#f4f9f6] p-10 flex flex-wrap gap-6 justify-center items-center border-r border-gray-300">
            <h2 className="w-full text-2xl font-bold text-[#28a745] mb-4 text-center">Live Sensors</h2>
            {[
              { src: '/temperature-icon.gif', label: 'Temperature', value: '24°C' },
              { src: '/humidity-icon.gif', label: 'Humidity', value: '60%' },
              { src: '/wind-icon.gif', label: 'Wind Speed', value: '12 km/h' },
              { src: '/wind-icon.gif', label: 'Wind Dir', value: 'NE' },
            ].map((item, i) => (
              <div
                key={i}
                className="w-[45%] h-[40%] bg-[#e8f5ec] rounded-xl border border-[#cfe7d8] shadow-md flex flex-col justify-center items-center gap-3 p-4 hover:shadow-lg transition"
              >
                <Image src={item.src} alt="icon" width={50} height={50} />
                <div className="text-base font-medium text-gray-700">{item.label}</div>
                <div className="text-xl font-bold text-[#28a745]">{item.value}</div>
              </div>
            ))}
          </section>

          {/* Right Side - Dashboard Cards */}
          <section className="w-1/2 bg-white p-10 flex flex-col justify-between items-center">
            <h2 className="w-full text-2xl font-bold text-[#28a745] mb-4 text-center">Dashboard Overview</h2>
            {[
              { title: 'Recent Stats' },
              { title: 'Device Info' },
              { title: 'Analysis' },
            ].map((item, i) => (
              <div
                key={i}
                className="w-[85%] h-[25%] bg-[#f8fdfa] border border-[#d2ead8] rounded-xl shadow-md flex items-center justify-center text-lg font-semibold text-gray-800 mb-6 hover:shadow-lg transition"
              >
                {item.title}
              </div>
            ))}
            <a
              href="#"
              className="mt-auto text-[#28a745] hover:underline font-medium"
            >
              See More
            </a>
          </section>
        </div>

        {/* AI Suggestion Section */}
        <div className="p-10 bg-white border-t border-gray-300 shadow-md">
          <div className="max-w-5xl mx-auto flex gap-6 items-center">
            <input
              type="text"
              placeholder="Enter suggestion..."
              className="flex-1 h-[60px] px-4 border border-gray-300 rounded-lg shadow focus:ring-2 focus:ring-[#28a745] transition"
            />
            <button className="h-[60px] w-[160px] bg-[#28a745] text-white font-semibold rounded-lg shadow-md hover:bg-[#219638] transition">
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
