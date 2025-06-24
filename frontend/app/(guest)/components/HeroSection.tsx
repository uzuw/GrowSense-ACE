"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] bg-black text-white overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/farm8.jpg"
          alt="Growsense Farm Background"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <main className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-400 mb-4 drop-shadow-lg">
          GrowSense
        </h1>

        <p className="text-base md:text-xl text-gray-100 mb-6 max-w-2xl leading-relaxed">
          Real-time insights, weather updates, and expert farming tips — all in one platform.
        </p>

        <span className="inline-block text-sm md:text-base text-green-300 uppercase tracking-wider bg-white/10 px-5 py-2 rounded-full shadow backdrop-blur-sm">
          Smart farming. Less stress. Higher yields.
        </span>
      </main>
    </section>
  );
}
