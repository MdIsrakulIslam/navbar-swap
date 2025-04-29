import React from 'react';
import { SunMoon, Github } from 'lucide-react';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="bg-[#0e1117] text-white">
      
      <div className="bg-[#334155] text-center text-sm p-2">
        Join us for React Conf Oct 7-8. <a href="#" className="text-[#61dafb] hover:underline">Learn more.</a>
      </div>

      
      <nav className="flex justify-between items-center bg-[#1c1f26] p-3 px-6">
        
        <div className="flex items-center gap-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React" 
            className="w-10 h-10"
          />
          <span className="text-gray-400 text-sm">v19.1</span>
        </div>


        <div className="relative  flex-1 max-w-xl">
          <input 
        
            type="text" 
            placeholder="Search" 
            className="w-full bg-[#334155] border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#61dafb]"
          />
          <div className="absolute right-3 top-2 flex gap-1">
            <span className="text-xs bg-black   px-1 rounded">Ctrl</span>
            <span className="text-xs bg-black px-1 rounded">K</span>
          </div>
        </div>

        
        <div className="flex items-center gap-10 text-sm">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Learn</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Reference</a>
          <a href="#" className="text-[#61dafb] font-medium">Community</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
          <button className="text-gray-300 hover:text-white">
            <SunMoon size={20} />
          </button>
          <a href="#" className="text-gray-300 hover:text-white">
            <Github size={20} />
          </a>
        </div>
      </nav>
    </div>
  );
}