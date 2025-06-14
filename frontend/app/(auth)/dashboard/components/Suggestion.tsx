import React from "react";
import Image from "next/image";

const Suggestion = () => {
  return (
    <div className="p-10 bg-[#f8f9fa] border-t border-[#4caf50]/20 shadow-inner">
      <div className="max-w-7xl mx-auto relative rounded-xl bg-white shadow-lg p-8">
        <div className="absolute top-4 right-4">
          <Image src="/bulb.svg" alt="bulb" width={40} height={40} />
        </div>
        <textarea
          readOnly
          placeholder="AI Suggestions will appear here..."
          className="w-full bg-[#f1f3f4] border border-none rounded-lg shadow-sm p-5 text-[#333] placeholder-[#888] focus:outline-none transition duration-300"
        >

            
        </textarea>
      </div>
    </div>
  );
};

export default Suggestion;
