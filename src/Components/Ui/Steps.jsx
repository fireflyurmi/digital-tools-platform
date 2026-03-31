import React from "react";
import user from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div>
      <section className="bg-[#f9fafc] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Get Started in 3 Steps
            </h2>
            <p className="text-gray-500 mt-2">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative bg-white p-8 rounded-xl border border-gray-300 text-center">
              <span className="absolute top-4 right-4 text-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-2 py-2 rounded-full">
                01
              </span>

              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src={user} alt="Create Account" className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                Create Account
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>

            
            <div className="relative bg-white p-8 rounded-xl border border-gray-300 text-center">
              <span className="absolute top-4 right-4 text-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-2 py-2 rounded-full">
                02
              </span>

              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img
                  src={packageIcon}
                  alt="Choose Products"
                  className="w-8 h-8"
                />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                Choose Products
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>

            
            <div className="relative bg-white p-8 rounded-xl border border-gray-300 text-center">
              <span className="absolute top-4 right-4 text-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-2 py-2 rounded-full">
                03
              </span>

              <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src={rocket} alt="Start Creating" className="w-8 h-8" />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                Start Creating
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
