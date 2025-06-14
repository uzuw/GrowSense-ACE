import React from "react";
import PumpControl from "./components/PumpControl";
import getFirebaseData from "@/lib/getFirebaseData";

const page = async () => {
  const data = await getFirebaseData();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#c8f0d2] to-[#e4f5e9]">
      <PumpControl data={data} />
    </div>
  );
};

export default page;
