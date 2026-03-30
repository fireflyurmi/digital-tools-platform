import React from 'react';
import bannerImage from '../../assets/banner.png';
import badgeImg from '../../assets/badge.png';
import playImg from '../../assets/Play.png';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[#e1e7ff] text-sm font-medium px-5 py-2 rounded-full mx-auto lg:mx-0">
                    <img src={badgeImg} alt="Badge Image" />
                    <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                        text-transparent bg-clip-text'>New: AI-Powered Tools Available</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                    Supercharge Your <br />
                    Digital Workflow
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                    Access premium AI tools, design assets, templates, and productivity 
                    software—all in one place. Start creating faster today.<br></br> Explore Products :
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                    <button className="w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold rounded-full hover:brightness-150 transition-all">
                        Explore Products
                    </button>
                    <button className="flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 border-2 border-[#861dfa] hover:-translate-y-2 rounded-full font-semibold transition-all duration-300 hover:bg-blue-100">
                        <img src={playImg} alt="Play Icon" />
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                        text-transparent bg-clip-text'>Watch Demo</span>
                    </button>
                </div>
            </div>

            <div className="flex-1 hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden">
                    <img 
                        src={bannerImage} 
                        alt="Supercharge Your Digital Workflow" 
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;