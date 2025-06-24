"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUserPlus, FaSeedling, FaBrain } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-5xl text-green-600" />,
    gif: "/signup.gif",
    title: "Sign Up",
    desc: "Create a free account in minutes.",
  },
  {
    icon: <FaSeedling className="text-5xl text-green-600" />,
    gif: "/setup.gif",
    title: "Set Up Your Farm",
    desc: "Input your crops, land details, and preferences.",
  },
  {
    icon: <FaBrain className="text-5xl text-green-600" />,
    gif: "/smart.gif",
    title: "Grow Smarter",
    desc: "Access tools, insights, and resources to succeed.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Started in 3 Easy Steps
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center items-center mb-4">
                {step.icon}
              </div>

              <div className="mb-4">
                <Image
                  src={step.gif}
                  alt={`${step.title} Icon`}
                  width={100}
                  height={100}
                  className="mx-auto rounded"
                />
              </div>

              <h3 className="text-xl md:text-2xl text-[#28a745] font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-[#555] text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Link
            href="/register"
            className="inline-block px-8 py-3 bg-[#28a745] text-white text-lg rounded-full font-medium hover:bg-[#218838] transition"
          >
            Sign Up
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
