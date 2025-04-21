'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlanSection from "./_components/PlanSection";

// Define types for team member data
type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  discord: string;
  major?: string;     // Optional fields for "get to know them" info
  hometown?: string;
  favoriteGame?: string;
  funFact?: string;
};

export default function Home() {
  // State for modal with proper typing
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Team data
  const teamMembers: TeamMember[] = [
    {
      id: 'vp',
      name: 'Kyle Greaney',
      role: 'for Vice President',
      bio: "Kyle has been an active member of MTSU Esports for 2 years and previously served as Vice President & Creative Director. His familiarity with the club's structure and operations will help ensure a smooth transition in leadership. As a member of the VALORANT Wings team, Kyle will strengthen connections between the competitive teams and leadership.",
      avatarUrl: '/kyle.jpg',
      discord: 'plinkplort',
      major: "Film & Video Production",
      hometown: "Memphis, TN",
      favoriteGame: "Call of Duty: Black Ops 2",
      funFact: "Kyle was instrumental in the production of a Netflix Movie premiere."
    },
    {
      id: 'secretary',
      name: 'Sean Williams',
      role: 'for Secretary',
      bio: "Sean currently serves as Secretary of MTSU Esports and has been an active member for 2 years. His organizational skills will help improve club documentation and communication. With Tier 2 professional experiene and one of the top ranked Halo: Infinite players in the world, Sean brings valuable perspective on competitive gaming that will help the club better support its teams.",
      avatarUrl: '/sean.jpg',
      discord: 'promosw',
      major: "Communication",
      hometown: "Chattanooga, TN",
      favoriteGame: "Halo: Infinite",
      funFact: "Sean is a demon on the pickleball court."
    },
    {
      id: 'treasurer',
      name: 'Connor McCulley',
      role: 'for Treasurer',
      bio: "Connor has been with MTSU Esports and the VALORANT Wings team for 2 years. His commitment to the club's growth will show through his focus on finding practical financial solutions. Connor will help manage the club's budget transparently and develop funding strategies that support both competitive and casual members.",
      avatarUrl: '/connor.jpg',
      discord: 'conskiii',
      major: "Business Administration",
      hometown: "Memphis, TN",
      favoriteGame: "VALORANT",
      funFact: "Connor has been on the VALORANT Wings team the longest."
    }
  ];

  // Open modal with member bio - properly typed
  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  // Close modal
  const closeModal = () => {
    setSelectedMember(null);
  };

  // Open Discord in new tab
  const contactOnDiscord = (discordUsername: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(`https://discord.com/users/${discordUsername}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white">
      {/* Hero Section with Landon's image */}
      <section className="relative h-[90vh] md:h-screen overflow-hidden bg-gradient-to-b from-black to-indigo-950/30">
        {/* Background gradient only (no image) */}
        
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4">
          {/* Landon's image and title */}
          <div className="mb-4 flex flex-col items-center text-center">
            <div className="mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-indigo-500/50 shadow-lg shadow-indigo-500/20 sm:mb-6 sm:h-56 sm:w-56">
              <Image
                src="/landon.jpg"
                alt="Landon Hale"
                width={224}
                height={224}
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="mb-1 text-3xl font-extrabold text-white sm:mb-2 sm:text-5xl md:text-6xl">
              Vote <span className="text-indigo-400">Landon Hale</span>
            </h1>
            <h2 className="mb-2 text-xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
              for President
            </h2>
            <p className="mb-2 text-base text-gray-300 sm:text-xl md:text-2xl">
              to transform MTSU Esports
            </p>
            
            {/* Moved bouncing scroll indicator below the text */}
            <motion.div 
              className="mb-4 flex flex-col items-center sm:mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: scrollPosition > 100 ? 0 : 1, 
                y: scrollPosition > 100 ? -20 : 0 
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.p 
                className="mb-1 text-center text-xs text-gray-400 sm:text-sm"
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "loop" 
                }}
              >
                Scroll to see my plan
              </motion.p>
              <motion.svg 
                className="h-4 w-4 text-indigo-400 sm:h-5 sm:w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "loop" 
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </div>
          
          {/* Team members in small display - fixed layout for mobile */}
          <div className="mb-6 flex w-full flex-wrap justify-center gap-2 sm:mb-10 sm:gap-4">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="group relative w-[32%] cursor-pointer overflow-visible rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-3 text-center backdrop-blur-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-indigo-500/10 sm:w-[30%]"
                onClick={() => openModal(member)}
              >
                {/* Simple tooltip that appears on hover */}
                <div 
                  className="invisible absolute left-1/2 -top-16 z-50 w-max -translate-x-1/2 transform rounded-md bg-indigo-900 px-4 py-2 text-white opacity-0 transition-all duration-300 before:absolute before:left-1/2 before:top-[100%] before:-translate-x-1/2 before:border-8 before:border-transparent before:border-t-indigo-900 lg:group-hover:visible lg:group-hover:opacity-100"
                >
                  Click to read more about {member.name.split(' ')[0]}
                </div>
                
                {/* Card content */}
                <div className="flex w-full flex-col items-center justify-center">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-indigo-500/30 sm:h-16 sm:w-16">
                    <Image
                      src={member.avatarUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-1 text-xs font-bold text-white sm:text-sm lg:text-lg">{member.name}</p>
                  <p className="text-[10px] text-indigo-300 sm:text-xs lg:text-base">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Three BIG square buttons with animations */}
          <div className="flex w-full max-w-md flex-col gap-2 px-2 sm:flex-row sm:gap-4 sm:px-0">
            <motion.a 
              href="#plan" 
              className="flex-1 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-2 text-center text-sm font-medium text-white shadow-md shadow-indigo-500/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 sm:aspect-square sm:p-5 sm:text-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(99, 102, 241, 0.2)",
                  "0px 0px 15px rgba(99, 102, 241, 0.4)",
                  "0px 0px 0px rgba(99, 102, 241, 0.2)"
                ]
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  repeatDelay: 4
                }
              }}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <svg className="mb-1 h-5 w-5 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                See the Plan
              </div>
            </motion.a>
            <motion.button 
              disabled
              className="flex-1 cursor-not-allowed rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-2 text-center text-sm font-medium text-gray-400 backdrop-blur-sm shadow-inner sm:aspect-square sm:p-5 sm:text-xl"
              animate={{
                opacity: [0.8, 0.9, 0.8],
                boxShadow: [
                  "inset 0px 0px 0px rgba(75, 85, 99, 0.2)", 
                  "inset 0px 0px 15px rgba(75, 85, 99, 0.4)", 
                  "inset 0px 0px 0px rgba(75, 85, 99, 0.2)"
                ]
              }}
              transition={{
                opacity: {
                  repeat: Infinity,
                  duration: 2
                },
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  delay: 2,
                  repeatDelay: 4
                }
              }}
            >
              <div className="flex h-full flex-col items-center justify-center">
                <svg className="mb-1 h-5 w-5 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                Vote Now
                <span className="mt-0.5 text-[10px] sm:mt-1 sm:text-xs">Voting opens Monday</span>
              </div>
            </motion.button>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(168, 85, 247, 0.2)", 
                  "0px 0px 15px rgba(168, 85, 247, 0.4)", 
                  "0px 0px 0px rgba(168, 85, 247, 0.2)"
                ]
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                  delay: 4,
                  repeatDelay: 4
                }
              }}
            >
              <Link
                href="/about"
                className="flex h-full w-full rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 p-2 text-center text-sm font-medium text-white shadow-md shadow-purple-500/10 sm:aspect-square sm:p-5 sm:text-xl"
              >
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <svg className="mb-1 h-5 w-5 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  About Me
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Plan Section with concise mobile-friendly "What You'll Get" */}
      <section id="plan" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Here's the Plan</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              A comprehensive approach to elevate MTSU Esports through improved organization, expanded opportunities, and enhanced member experiences.
            </p>
          </div>
          
          {/* Mobile-optimized "What You'll Get" section - clean & concise version only */}
          <div className="mb-16 overflow-hidden rounded-xl bg-gradient-to-r from-black/60 to-indigo-900/30 shadow-lg shadow-indigo-900/10">
            <div className="p-6">
              <h3 className="mb-6 text-center text-2xl font-bold text-white">
                What You'll Get If We Win
              </h3>
              
              <div className="grid gap-6 sm:grid-cols-3">
                {/* Competitive benefits - compact card */}
                <div className="overflow-hidden rounded-lg bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-4">
                  <h4 className="mb-3 text-lg font-bold text-blue-400">For Competitive Players</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Professional coaches for teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Free team jerseys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">More LANs & tournaments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">More leagues to compete in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Setup customization in labs like monitor arms & better chairs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Path to varsity esports & scholarships</span>
                    </li>
                  </ul>
                </div>
                
                {/* Casual benefits - compact card */}
                <div className="overflow-hidden rounded-lg bg-gradient-to-br from-green-900/40 to-green-800/20 p-4">
                  <h4 className="mb-3 text-lg font-bold text-green-400">For Casual Players</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Major community event(s) each month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Game nights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">More community interaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Daily challenges with prizes</span>
                    </li>
                  </ul>
                </div>
                
                {/* All member benefits - compact card */}
                <div className="overflow-hidden rounded-lg bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-4">
                  <h4 className="mb-3 text-lg font-bold text-purple-400">For All Members</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Custom mobile app with info, rosters, stats, tryouts, and more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Better equipment and less lab PC malfunctions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Pro-level production for events & livestreams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Donation connections for funding opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">More marketing for club growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">Paid opportunities for member volunteers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <PlanSection />
        </div>
      </section>

      {/* Footer CTA - Changed to Vote Now button */}
      <section id="join" className="bg-gradient-to-t from-indigo-900/20 to-transparent py-8 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-3xl">Join Our Movement</h2>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300 sm:mb-8">
            We're building the future of MTSU Esports together. Get involved and help us create the gaming community you want to see.
          </p>
          <button 
            disabled
            className="inline-block cursor-not-allowed rounded-xl bg-gradient-to-r from-indigo-600/60 to-indigo-700/60 px-6 py-3 text-base font-medium text-gray-300 shadow-md sm:px-8 sm:py-4 sm:text-lg"
          >
            Vote Now
            <span className="block mt-0.5 text-xs sm:mt-1 sm:text-sm">Voting opens Monday</span>
          </button>
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-md rounded-xl bg-gradient-to-br from-gray-900 to-indigo-900/90 p-6 shadow-xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white"
                onClick={closeModal}
                aria-label="Close"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-indigo-500/30">
                  <Image
                    src={selectedMember.avatarUrl}
                    alt={selectedMember.name}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-indigo-300">{selectedMember.role}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="mb-1 text-base font-semibold text-white">Biography</h4>
                <p className="text-gray-300">{selectedMember.bio}</p>
              </div>
              
              {/* Get to know them section */}
              <div className="mt-5 border-t border-gray-700/50 pt-4">
                <h4 className="mb-3 text-base font-semibold text-white">Get to Know {selectedMember.name.split(' ')[0]}</h4>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="w-32 flex-shrink-0 font-medium text-indigo-300">Major:</span>
                    <span className="text-gray-300">{selectedMember.major || "[Not specified]"}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 flex-shrink-0 font-medium text-indigo-300">Hometown:</span>
                    <span className="text-gray-300">{selectedMember.hometown || "[Not specified]"}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 flex-shrink-0 font-medium text-indigo-300">Favorite Game:</span>
                    <span className="text-gray-300">{selectedMember.favoriteGame || "[Not specified]"}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 flex-shrink-0 font-medium text-indigo-300">Fun Fact:</span>
                    <span className="text-gray-300">{selectedMember.funFact || "[Not specified]"}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 border-t border-gray-700/50 pt-4">
                <p className="mb-2 text-sm font-semibold text-indigo-300">Contact Information:</p>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.1.1 0 0 0-.105.062c-.29.515-.551 1.185-.753 1.713-2.271-.345-4.54-.345-6.75 0a17 17 0 0 0-.772-1.715.1.1 0 0 0-.105-.062c-1.714.29-3.354.801-4.884 1.491a.102.102 0 0 0-.047.045C.535 9.1-.32 13.588.099 18.012c.004.061.042.116.098.143 1.604 1.177 3.157 1.891 4.679 2.363a.102.102 0 0 0 .11-.039c.601-.82 1.137-1.685 1.596-2.593a.1.1 0 0 0-.054-.139c-.511-.195-.997-.413-1.464-.652a.1.1 0 0 1-.01-.165c.098-.076.197-.153.29-.232a.1.1 0 0 1 .105-.014c5.313 2.435 11.061 2.435 16.328 0a.1.1 0 0 1 .106.014c.093.079.192.156.29.232a.1.1 0 0 1-.01.165c-.467.239-.953.457-1.464.652a.1.1 0 0 0-.054.139c.46.908.995 1.773 1.597 2.593a.102.102 0 0 0 .11.039c1.522-.472 3.075-1.186 4.679-2.363a.102.102 0 0 0 .098-.143c.499-5.165-.838-9.62-3.551-13.473a.08.08 0 0 0-.047-.046ZM8.02 15.278c-.921 0-1.684-.859-1.684-1.913 0-1.054.754-1.913 1.684-1.913.941 0 1.705.868 1.684 1.913 0 1.054-.753 1.913-1.684 1.913Zm6.22 0c-.92 0-1.684-.859-1.684-1.913 0-1.054.754-1.913 1.684-1.913.941 0 1.705.868 1.684 1.913 0 1.054-.743 1.913-1.684 1.913Z"/>
                  </svg>
                  <span className="text-gray-300">Discord: {selectedMember.discord}</span>
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                Swipe down or tap outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
