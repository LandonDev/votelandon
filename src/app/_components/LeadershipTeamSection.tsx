'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  isCandidate: boolean;
};

type LeadershipTeamSectionProps = {
  leadershipTeam: Member[];
};

export default function LeadershipTeamSection({ leadershipTeam }: LeadershipTeamSectionProps) {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  // Safety check for empty array
  if (!leadershipTeam || leadershipTeam.length === 0) {
    return null;
  }

  const toggleMemberBio = (memberId: string) => {
    if (expandedMember === memberId) {
      setExpandedMember(null);
    } else {
      setExpandedMember(memberId);
    }
  };
  
  // Get the president (first member)
  const president = leadershipTeam[0];
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900/20 via-indigo-900/25 to-transparent py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-4xl font-extrabold text-white"
          >
            Transform MTSU Esports
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-lg text-xl text-gray-300"
          >
            Vote Landon Hale for President
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* President (Landon) - Featured Prominently */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-xs"
          >
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 p-6 backdrop-blur-md">
              <div className="mb-4 flex justify-center">
                <div className="relative h-56 w-56 overflow-hidden rounded-xl border-4 border-indigo-500/50 shadow-lg shadow-indigo-500/20">
                  <Image
                    src={president.avatarUrl}
                    alt={president.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-1 text-center text-2xl font-bold text-white">{president.name}</h3>
              <p className="mb-4 text-center text-lg font-semibold text-indigo-300">{president.role}</p>
              <p className="text-gray-300">{president.bio}</p>
            </div>
          </motion.div>
          
          {/* Other Candidates */}
          <div className="flex flex-wrap justify-center gap-4">
            {leadershipTeam.filter(member => member.isCandidate).map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                className="w-full max-w-xs"
              >
                <div 
                  className={`cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md transition-all ${
                    expandedMember === member.id ? 'scale-105 shadow-xl shadow-indigo-500/20' : 'hover:shadow-lg hover:shadow-indigo-500/10'
                  }`}
                  onClick={() => toggleMemberBio(member.id)}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-indigo-500/30">
                      <Image
                        src={member.avatarUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{member.name}</h3>
                      <p className="text-sm font-medium text-indigo-300">{member.role}</p>
                    </div>
                    <div className="ml-auto">
                      <svg
                        className={`h-6 w-6 text-gray-400 transition-transform ${expandedMember === member.id ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {expandedMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700/50 p-4"
                    >
                      <p className="text-gray-300">{member.bio}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 