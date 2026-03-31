import React from 'react';

const WorkFlow = () => {
    return (
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready To Transform Your Workflow?
                </h2>
                <p className="text-purple-100 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of professionals who are already using DigiTools to work smarter. 
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                    <button className="bg-white text-[#8B2CF5] px-8 py-3 rounded-full font-semibold hover:scale-105 transition w-full sm:w-auto">
                        Explore Products
                    </button>
                    <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition w-full sm:w-auto">
                        View Pricing
                    </button>
                </div>

                <p className="text-purple-200 text-xs sm:text-sm opacity-80">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default WorkFlow;