'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const planData = [
  {
    id: 1,
    title: "Member & Team Evaluation",
    description: "Comprehensive survey to understand the exact needs of all members.",
    icon: "📊",
    details: "We'll conduct a thorough survey to determine what resources, equipment, and opportunities will benefit you most.",
    gradient: "from-indigo-500 to-purple-600",
    iconSvg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-16 w-16 text-white opacity-90">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Club Distinction",
    description: "Clear separation between competitive and casual to better serve both.",
    icon: "🏆",
    details: "Different leadership tracks & resources specifically dedicated to each facet of the club.",
    gradient: "from-blue-500 to-cyan-600",
    iconSvg: (
      <svg className="h-14 w-14 text-white opacity-80" viewBox="0 0 24 24" fill="none">
        <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "New Competitive Heights",
    description: "Dedicated coaches, more tournaments, and paths to varsity-level play.",
    icon: "⚔️",
    details: [
      "Paid coaches assigned to each competitive team",
      "New league participation",
      "More LAN events & tournaments",
      "Higher production quality for streaming",
      "Path to Conference USA's varsity esports with scholarship opportunities"
    ],
    gradient: "from-amber-500 to-red-600",
    iconSvg: (
      <svg className="h-16 w-16 text-white opacity-90" viewBox="0 0 24 24" fill="none">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10l7-7m0 0l7 7m-7-7v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Better Working Teams",
    description: "Restructure core leadership to better serve each working team and increase fragmentation by allowing people to do what they are best at.",
    icon: "👥",
    details: [
      "Reformat the Media Team to completely overhaul media efforts of the club and focus on production",
      "Introduce a dedicated Live Operations Team dedicated to streaming and other ventures",
      "Introduce a Director of Casual to oversee the Community Events Manager to produce more events to fundraises"
    ],
    gradient: "from-emerald-500 to-green-600",
    iconSvg: (
      <svg className="h-16 w-16 text-white opacity-90" viewBox="0 0 24 24" fill="none">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 5,
    title: "Fundraising & Partnerships",
    description: "More events and sponsorship opportunities to increase club funding.",
    icon: "💰",
    details: "Secured partnerships with local businesses and increased number of fundraising events each semester.",
    gradient: "from-rose-500 to-pink-600",
    iconSvg: (
      <svg className="h-16 w-16 text-white opacity-90" viewBox="0 0 24 24" fill="none">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 6,
    title: "Budget Management",
    description: "Help the Treasurer overhaul the budget and use strategic partnerships with Campus Rec Leadership to allow for more potential opportunities.",
    icon: "📝",
    details: [
      "Free jerseys for competitive team members",
      "Paid positions for coaches and some volunteer staff",
      "Host more LAN events per semester",
      "Professional-grade production equipment"
    ],
    gradient: "from-purple-500 to-violet-600",
    iconSvg: (
      <svg className="h-16 w-16 text-white opacity-90" viewBox="0 0 24 24" fill="none">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 7,
    title: "Custom Mobile App",
    description: "Team stats, event schedules, player profiles, and clip sharing.",
    icon: "📱",
    details: [
      "Real-time team rosters and match schedules",
      "Event calendar with notifications",
      "Player profiles with stats, achievements, and clips",
      "Daily clip challenges",
      "Match livestream notifications",
      "Community engagement and interaction",
      "Streamlined official member process"
    ],
    gradient: "from-sky-500 to-blue-600",
    iconSvg: (
      <svg className="h-16 w-16 text-white opacity-90" viewBox="0 0 24 24" fill="none">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 8,
    title: "Strategic Partnerships",
    description: "Form a strategic partnership with MT Unions & BAS Lab.",
    icon: "🤝",
    details: [
      "Always ensure lab spaces are properly equipped for every club member",
      "Allow for competitive teams to play together in a shared space",
      "Work to elevate the lab experience with new peripherals and higher personal customization"
    ],
    gradient: "from-orange-500 to-amber-600",
    iconSvg: (
      <svg className="h-16 w-16 text-white opacity-90" viewBox="0 0 24 24" fill="none">
        <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 9,
    title: "Club Efficiency",
    description: "Automate many menial tasks to improve club efficiency and spend more time on what matters.",
    icon: "⚙️",
    details: [
      "Automated t-shirt ordering system",
      "Automated official member process",
      "Streamlined reimbursement process",
      "Tryout & registration process"
    ],
    gradient: "from-gray-600 to-slate-700",
    iconSvg: (
      <svg className="h-16 w-16 text-white opacity-90" viewBox="0 0 24 24" fill="none">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    id: 10,
    title: "Member Engagement",
    description: "Regular feedback sessions and community-driven decision making.",
    icon: "🎮",
    details: "Monthly member feedback sessions and voting on major club decisions to ensure everyone's voice is heard.",
    gradient: "from-red-500 to-pink-600",
    iconSvg: (
      <svg className="h-16 w-16 text-white opacity-90" viewBox="0 0 24 24" fill="none">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

// Example of array containing items with potential quotes issues
const appFeatures = [
  "Build more community by having player profiles with clips & bio information",
  "Host fun challenges like 'clip of the day'",
  "Promote live streaming & competitive matches",
  "Help market to other people outside of the club",
];

// Benefits for all members - consolidated and direct
const memberBenefits = [
  // Competitive Benefits
  { 
    icon: "👨‍🏫", 
    title: "Professional Coaches", 
    description: "Dedicated coaches for every competitive team",
    gradient: "from-blue-600 to-blue-800",
    type: "competitive"
  },
  { 
    icon: "🏆", 
    title: "More Tournaments", 
    description: "At least two major tournaments per semester",
    gradient: "from-blue-500 to-indigo-700",
    type: "competitive"
  },
  { 
    icon: "👕", 
    title: "Free Team Jerseys", 
    description: "Custom jerseys for all competitive players",
    gradient: "from-indigo-500 to-blue-700",
    type: "competitive"
  },
  { 
    icon: "🏫", 
    title: "Varsity Pathway", 
    description: "Clear path to Conference USA varsity esports",
    gradient: "from-blue-700 to-indigo-900",
    type: "competitive"
  },
  
  // Casual Benefits
  { 
    icon: "🎮", 
    title: "More LAN Events", 
    description: "4+ major LAN parties each semester",
    gradient: "from-green-600 to-emerald-800",
    type: "casual"
  },
  { 
    icon: "🎪", 
    title: "Weekly Game Nights", 
    description: "Organized casual gaming every week",
    gradient: "from-emerald-500 to-green-700",
    type: "casual"
  },
  { 
    icon: "🎬", 
    title: "Content Creation", 
    description: "Equipment and training for streaming",
    gradient: "from-green-700 to-emerald-900",
    type: "casual"
  },
  { 
    icon: "🏅", 
    title: "Daily Challenges", 
    description: "Fun gaming challenges with prizes",
    gradient: "from-emerald-600 to-teal-800",
    type: "casual"
  },
  
  // All Member Benefits
  { 
    icon: "📱", 
    title: "Custom App", 
    description: "Team stats, schedules, and event info",
    gradient: "from-purple-600 to-indigo-800",
    type: "all"
  },
  { 
    icon: "🖥️", 
    title: "Better Equipment", 
    description: "Upgraded PCs, peripherals, and networking",
    gradient: "from-violet-600 to-purple-800", 
    type: "all"
  },
  { 
    icon: "📺", 
    title: "Pro Production", 
    description: "Professional streaming and event quality",
    gradient: "from-purple-700 to-violet-900",
    type: "all"
  },
  { 
    icon: "🤝", 
    title: "Industry Connections", 
    description: "Network with game devs and esports pros",
    gradient: "from-indigo-600 to-violet-800",
    type: "all"
  }
];

export default function PlanSection() {
  return (
    <div className="space-y-20">

      {/* Action plan - visually engaging grid */}
      <div>
        <h3 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
          Our 10-Step Action Plan
        </h3>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {planData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: item.id * 0.04 }}
              className={`group overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/80 shadow-xl backdrop-blur-lg hover:shadow-xl`}
            >
              {/* Card header with number and gradient */}
              <div className={`flex h-24 items-center justify-center bg-gradient-to-r ${item.gradient} p-4`}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl text-white backdrop-blur-md">
                  {item.iconSvg}
                </div>
                <div className="absolute right-0 top-0 m-3 flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-gray-900">
                  {item.id}
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="mb-3 text-sm text-gray-300">{item.description}</p>
                
                {/* Details section */}
                <div className="mt-2 rounded-lg bg-black/20 p-3">
                  {typeof item.details === 'string' ? (
                    <p className="text-xs text-gray-400">{item.details}</p>
                  ) : (
                    <ul className="space-y-1.5 text-xs text-gray-400">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="mt-0.5 h-3 w-3 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 