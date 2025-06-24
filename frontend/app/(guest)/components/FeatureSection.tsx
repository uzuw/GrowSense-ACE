"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Crop Management",
    desc: "Monitor soil health, track crop growth, and optimize yields with real-time data.",
    icon: "/crop-icon.png",
  },
  {
    title: "Market Insights",
    desc: "Stay ahead with live market prices and trends for your crops.",
    icon: "/market-icon.png",
  },
  {
    title: "Weather Updates",
    desc: "Get accurate, localized weather forecasts to plan planting and harvesting.",
    icon: "/weather-icon.gif", // GIF plays by default
  },
  {
    title: "Community & Resources",
    desc: "Access expert advice, farming tips, and connect with a community of growers.",
    icon: "/community-icon.gif", // GIF plays by default
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#F5F5F5] py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#1A202C] text-center mb-16 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tools to Grow Your Farm
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-[72px] h-[72px] mx-auto mb-5">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#256029] mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm text-center leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
