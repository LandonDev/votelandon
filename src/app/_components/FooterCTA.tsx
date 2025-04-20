'use client';

export default function FooterCTA() {
  return (
    <section id="join" className="bg-gradient-to-t from-indigo-900/20 to-transparent py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white">Join Our Movement</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-300">
          We're building the future of MTSU Esports together. Get involved and help us create the gaming community you want to see.
        </p>
        <a 
          href="https://forms.gle/1Z5Z5Z5Z5Z5Z5Z5Z5" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-indigo-600 px-8 py-4 font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Pledge Your Support
        </a>
      </div>
    </section>
  );
} 