
import React from 'react';

const Page = () => {
  return (
    <div className="h-screen">
    

      <main className="h-full grid grid-rows-[2fr_1fr] border-2 border-red-500">
        <div className="grid grid-cols-2 box-border">
          {/* Weather Section */}
          <section className="flex justify-center items-center">
            <div className="relative w-[90%] h-[90%] rounded-2xl p-3 border-2 bg-[#000066] flex flex-wrap justify-around items-center gap-2">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="w-[40%] h-[30%] rounded-2xl bg-[#b6b6b6]"></div>
              ))}
            </div>
          </section>  
          {/* Parameter Section */}
          <section className="flex justify-center items-center">
            <div className="relative w-[90%] h-[90%] rounded-2xl p-3 border-2 bg-[#000066] flex flex-col justify-around items-center">
              <div className="w-4/5 h-[30%] border-2 border-silver rounded-2xl bg-[#263245]"></div>
              <div className="w-4/5 h-[30%] border-2 border-silver rounded-2xl bg-[#263245]"></div>
              <div className="w-4/5 h-[30%] border-2 border-silver rounded-2xl bg-[#263245]"></div>
              <a href="#" className="absolute bottom-0 right-0 p-2 mr-2 text-white">See More</a>
            </div>
          </section>

          
        </div>

        {/* Suggestion Box */}
        <div className="p-3 border-2 flex justify-center items-center">
          <div className="w-full h-[80%] flex justify-around items-center">
            <input
              type="text"
              placeholder="Enter suggestion..."
              className="w-[60%] h-[70%] border border-gray-400 outline-none px-2"
            />
            <button className="h-[7vh] w-[30%] bg-pink-400/70 border-none outline-none rounded-xl tracking-widest">
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
