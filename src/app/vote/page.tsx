'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VotePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Header Section - Reduced spacing */}
      <section className="relative py-8 md:py-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-indigo-950/50 to-slate-900/80"></div>
          <Image 
            src="/hero-bg.jpg" 
            alt="MTSU Esports Background" 
            fill
            className="object-cover object-center opacity-20"
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
              className="mb-4 flex items-center gap-2 rounded-lg bg-indigo-900/30 px-4 py-2 text-indigo-300 transition-colors hover:bg-indigo-800/40 hover:text-indigo-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              See the Plan
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">How to Vote</h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructions Section - More compact */}
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Desktop version */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[39px] top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-400"></div>
              
              {/* Step 1 */}
              <div className="mb-12 flex items-start">
                <div className="flex-shrink-0 mr-8 relative z-10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 text-white text-2xl font-bold shadow-lg shadow-indigo-500/20">
                    1
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Join the MTSU Esports Club on myMT</h3>
                  <p className="text-gray-300 mb-4">
                    You must be a registered club member to vote. Already a member? Skip to step 2.
                  </p>
                  <motion.a 
                    href="https://mtsu.campuslabs.com/engage/organization/esports"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Join on myMT</span>
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <div className="mt-4 rounded-lg bg-indigo-900/30 p-3 text-sm">
                    <ol className="list-decimal pl-5 space-y-0.5 text-gray-300">
                      <li>Log in with your MTSU credentials</li>
                      <li>Click the blue "Join" button</li>
                      <li>Approval typically happens within the hour</li>
                      <li>You'll receive an email notification when approved</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-8 relative z-10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white text-2xl font-bold shadow-lg shadow-red-500/20">
                    2
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Vote in the Election</h3>
                  <p className="text-gray-300 mb-4">
                    Once approved, access the election ballot and cast your vote.
                  </p>
                  <motion.a 
                    href="https://mtsu.campuslabs.com/engage/submitter/election/start/682047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-xl bg-gradient-to-r from-red-500 to-red-700 px-6 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Vote Now</span>
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <div className="mt-4 rounded-lg bg-red-900/30 p-3 text-sm">
                    <ul className="list-disc pl-5 space-y-0.5 text-gray-300">
                      <li>You must be an approved member to vote</li>
                      <li>If you can't access the ballot, your membership may still be pending</li>
                      <li>You can only vote once</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile version - already expanded */}
          <div className="md:hidden space-y-4">
            {/* Step 1 */}
            <div className="rounded-xl bg-gradient-to-br from-gray-900/70 to-indigo-900/50 overflow-hidden p-4">
              <div className="flex items-center mb-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 text-white font-bold mr-3">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Join the Club</h3>
              </div>
              
              <p className="text-gray-300 mb-4">
                You must be a member to vote. Already joined? Skip to step 2.
              </p>
              <motion.a 
                href="https://mtsu.campuslabs.com/engage/organization/esports"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-3 font-medium text-white shadow-md"
                whileTap={{ scale: 0.97 }}
              >
                <span>Join on myMT</span>
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <div className="rounded-lg bg-indigo-900/30 p-3 text-sm">
                <ol className="list-decimal pl-4 space-y-0.5 text-gray-300">
                  <li>Log in with your MTSU credentials</li>
                  <li>Click the blue "Join" button</li>
                  <li>Approval typically happens within the hour</li>
                  <li>You'll get an email when approved</li>
                </ol>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl bg-gradient-to-br from-gray-900/70 to-red-900/30 overflow-hidden p-4">
              <div className="flex items-center mb-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white font-bold mr-3">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Vote Now</h3>
              </div>
              
              <p className="text-gray-300 mb-4">
                Once approved, access the election ballot to cast your vote. Vote Landon, Kyle, Connor, & Sean!
              </p>
              <motion.a 
                href="https://mtsu.campuslabs.com/engage/submitter/election/start/682047"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-red-700 px-4 py-3 font-medium text-white shadow-md"
                whileTap={{ scale: 0.97 }}
              >
                <span>Vote Now</span>
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <div className="rounded-lg bg-red-900/30 p-3 text-sm">
                <ul className="list-disc pl-4 space-y-0.5 text-gray-300">
                  <li>You must be an approved member to vote</li>
                  <li>You can only vote once</li>
                  <li>Results announced after April 27th</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Simplified */}
      <section className="py-6 md:py-10 bg-gradient-to-t from-indigo-900/20 to-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-4 text-center md:text-3xl">Help & FAQ</h2>
          
          <div className="space-y-3">
            <div className="rounded-xl bg-gradient-to-br from-gray-900/70 to-indigo-900/30 p-4">
              <h3 className="text-lg font-semibold text-white mb-1">Can't access the voting page?</h3>
              <p className="text-gray-300">
                Make sure you're an approved member. Contact officers through Discord if you need help.
              </p>
            </div>
            
            <div className="rounded-xl bg-gradient-to-br from-gray-900/70 to-indigo-900/30 p-4">
              <h3 className="text-lg font-semibold text-white mb-1">When will results be announced?</h3>
              <p className="text-gray-300">
                Shortly after voting ends on April 27th. Follow Discord announcements for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Link 
            href="/"
            className="inline-block rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-3 font-medium text-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
} 