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
                <div className="mt-2 flex items-center gap-2">
                  <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.1.1 0 0 0-.105.062c-.29.515-.551 1.185-.753 1.713-2.271-.345-4.54-.345-6.75 0a17 17 0 0 0-.772-1.715.1.1 0 0 0-.105-.062c-1.714.29-3.354.801-4.884 1.491a.102.102 0 0 0-.047.045C.535 9.1-.32 13.588.099 18.012c.004.061.042.116.098.143 1.604 1.177 3.157 1.891 4.679 2.363a.102.102 0 0 0 .11-.039c.601-.82 1.137-1.685 1.596-2.593a.1.1 0 0 0-.054-.139c-.511-.195-.997-.413-1.464-.652a.1.1 0 0 1-.01-.165c.098-.076.197-.153.29-.232a.1.1 0 0 1 .105-.014c5.313 2.435 11.061 2.435 16.328 0a.1.1 0 0 1 .106.014c.093.079.192.156.29.232a.1.1 0 0 1-.01.165c-.467.239-.953.457-1.464.652a.1.1 0 0 0-.054.139c.46.908.995 1.773 1.597 2.593a.102.102 0 0 0 .11.039c1.522-.472 3.075-1.186 4.679-2.363a.102.102 0 0 0 .098-.143c.499-5.165-.838-9.62-3.551-13.473a.08.08 0 0 0-.047-.046ZM8.02 15.278c-.921 0-1.684-.859-1.684-1.913 0-1.054.754-1.913 1.684-1.913.941 0 1.705.868 1.684 1.913 0 1.054-.753 1.913-1.684 1.913Zm6.22 0c-.92 0-1.684-.859-1.684-1.913 0-1.054.754-1.913 1.684-1.913.941 0 1.705.868 1.684 1.913 0 1.054-.743 1.913-1.684 1.913Z"/>
                  </svg>
                  <span className="text-sm text-gray-300">Discord: landondev</span>
                </div>
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
                
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-indigo-300">Contact Information</h3>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.1.1 0 0 0-.105.062c-.29.515-.551 1.185-.753 1.713-2.271-.345-4.54-.345-6.75 0a17 17 0 0 0-.772-1.715.1.1 0 0 0-.105-.062c-1.714.29-3.354.801-4.884 1.491a.102.102 0 0 0-.047.045C.535 9.1-.32 13.588.099 18.012c.004.061.042.116.098.143 1.604 1.177 3.157 1.891 4.679 2.363a.102.102 0 0 0 .11-.039c.601-.82 1.137-1.685 1.596-2.593a.1.1 0 0 0-.054-.139c-.511-.195-.997-.413-1.464-.652a.1.1 0 0 1-.01-.165c.098-.076.197-.153.29-.232a.1.1 0 0 1 .105-.014c5.313 2.435 11.061 2.435 16.328 0a.1.1 0 0 1 .106.014c.093.079.192.156.29.232a.1.1 0 0 1-.01.165c-.467.239-.953.457-1.464.652a.1.1 0 0 0-.054.139c.46.908.995 1.773 1.597 2.593a.102.102 0 0 0 .11.039c1.522-.472 3.075-1.186 4.679-2.363a.102.102 0 0 0 .098-.143c.499-5.165-.838-9.62-3.551-13.473a.08.08 0 0 0-.047-.046ZM8.02 15.278c-.921 0-1.684-.859-1.684-1.913 0-1.054.754-1.913 1.684-1.913.941 0 1.705.868 1.684 1.913 0 1.054-.753 1.913-1.684 1.913Zm6.22 0c-.92 0-1.684-.859-1.684-1.913 0-1.054.754-1.913 1.684-1.913.941 0 1.705.868 1.684 1.913 0 1.054-.743 1.913-1.684 1.913Z"/>
                    </svg>
                    <span className="text-gray-300">Discord: landondev</span>
                  </div>
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