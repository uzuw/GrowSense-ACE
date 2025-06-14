"use client";

import { useState } from "react";

const PumpControl = ({ data }) => {
  const [mode, setMode] = useState("manual");

  return (
    <section className="max-w-[90%] md:max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl border border-green-100">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        GrowSense Pump Control
      </h1>

      <div className="flex items-center justify-between px-6 py-3 bg-green-50 rounded-xl shadow mb-6">
        <span className="text-lg font-bold text-green-800">ESP 32</span>
        <span className="w-4 h-4 rounded-full bg-green-500 shadow-md" />
      </div>

      <div className="mb-8 font-semibold space-y-1">
        <h2 className="text-xl text-green-700">Sensor Data</h2>
        <p>Temperature: -- °C</p>
        <p>Humidity: -- %</p>
        <p>Soil Moisture: --</p>
      </div>

      <form className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <input
            type="text"
            placeholder="Field Address"
            className="w-full px-4 py-2 rounded-full bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="button"
            className="w-full px-4 py-2 border border-green-600 rounded-full text-green-700 hover:bg-green-100 transition"
          >
            Submit Address
          </button>

          <input
            type="text"
            placeholder="Crops In Field"
            className="w-full px-4 py-2 rounded-full bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="button"
            className="w-full px-4 py-2 border border-green-600 rounded-full text-green-700 hover:bg-green-100 transition"
          >
            Submit Crops
          </button>
          <p className="mt-8 text-sm text-gray-700 leading-relaxed">
            Field Address: -- <br />
            Your Crops: -- <br />
          </p>
        </div>

        <div className="flex-1 space-y-4">
          <fieldset className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="mode"
                value="auto"
                onChange={() => setMode("auto")}
              />
              Automatic
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="mode"
                value="manual"
                checked={mode === "manual"}
                onChange={() => setMode("manual")}
              />
              Manual
            </label>
          </fieldset>

          <button
            type="button"
            className="w-full py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
          >
            Pump ON
          </button>
          <button
            type="button"
            className="w-full py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
          >
            Pump OFF
          </button>
          <p className="mt-8 text-sm text-gray-700 leading-relaxed">
            Current Mode:
            <span className="font-semibold uppercase">{mode}</span>
            <br />
            Pump Status: --
          </p>
        </div>
      </form>
    </section>
  );
};

export default PumpControl;
