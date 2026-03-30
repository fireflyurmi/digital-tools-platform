import React from "react";
import { Plus } from 'lucide-react';

const Counter = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center text-white">
          <div className="flex flex-col items-center md:border-r border-white/30">
            <div className="flex items-center justify-center gap-1">
              <span className="text-6xl md:text-7xl font-bold">50K</span>
              <Plus size={32} strokeWidth={4} className="mt-1" />
            </div>
            <p className="text-white/80 mt-3 text-lg">Active Users</p>
          </div>
          <div className="flex flex-col items-center md:border-r border-white/30">
            <div className="flex items-center justify-center gap-1">
              <span className="text-6xl md:text-7xl font-bold">200</span>
              <Plus size={32} strokeWidth={4} className="mt-1" />
            </div>
            <p className="text-white/80 mt-3 text-lg">Premium Tools</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-6xl md:text-7xl font-bold">4.9</div>
            <p className="text-white/80 mt-3 text-lg">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
