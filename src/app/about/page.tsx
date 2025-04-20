'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-indigo-950/50 to-slate-900/80"></div>
          <Image 
            src="/hero-bg.jpg" 
            alt="MTSU Esports Background" 
            fill
            className="object-cover object-center opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-4xl flex-col items-center"
          >
            <Link 
              href="/" 
              className="mb-8 flex items-center gap-2 rounded-lg bg-indigo-900/30 px-4 py-2 text-indigo-300 transition-colors hover:bg-indigo-800/40 hover:text-indigo-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
            
            <div className="mb-8 flex items-center gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/20 sm:h-32 sm:w-32">
                <Image
                  src="/landon.jpg"
                  alt="Landon Hale"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white sm:text-4xl">Landon Hale</h1>
                <p className="text-lg text-indigo-300">Presidential Candidate</p>
              </div>
            </div>
            
            <div className="w-full rounded-xl bg-gradient-to-br from-gray-900/70 to-indigo-900/50 p-6 shadow-lg backdrop-blur-sm sm:p-8">
              <h2 className="mb-6 text-center text-2xl font-bold text-white">About Me</h2>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  I'm Landon Hale, the current Vice President of MTSU Esports. I've worked closely on the logistical operations of the club such as writing the club constitution & producing the Minecraft server. 
                </p>
                
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-indigo-300">My Experience</h3>
                  <p>
                    I have extensive experience in a professional environment. Most recently, I've worked as a Game Developer & Project Manager at Hypixel for three years.
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-indigo-300">My Vision</h3>
                  <p>
                    If elected president, I'll focus on the logistical operations of the club and ensuring we have the right people & resources in the proper areas. I want to take this club into its next era, and to do that, we need to run the club like a professional organization. Myself, Kyle Greaney, Sean Williams, and Connor McCulley can make this happen.
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-indigo-300">Why Vote for Me</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Commitment to serving both competitive and casual gamers</li>
                    <li>Professional experience organizing business operations</li>
                    <li>Strong connections with multiple competitive teams</li>
                    <li>Clear plan to improve club resources and experiences</li>
                    <li>Passion for building a supportive gaming community</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Link 
                  href="/#plan"
                  className="rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  See My Plan
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 