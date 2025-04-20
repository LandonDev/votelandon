'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-b from-black to-indigo-950/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <Image 
          src="/hero-bg.jpg" 
          alt="MTSU Esports" 
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      <div className="container relative z-10 mx-auto flex min-h-[70vh] items-center px-4">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            It's Time To Level Up <span className="text-indigo-400">MTSU Esports</span>
          </h1>
          <p className="mb-8 text-xl text-gray-300">
            A detailed strategic plan to transform our club into a powerhouse for both competitive and casual gamers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#plan" 
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              View the Plan
            </a>
            <a 
              href="#join" 
              className="rounded-lg border-2 border-indigo-600/50 bg-transparent px-6 py-3 font-medium text-indigo-400 transition-colors hover:bg-indigo-600/10 hover:text-indigo-300"
            >
              Join the Movement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 