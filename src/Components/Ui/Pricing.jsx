import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 mt-2">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <div className="rounded-xl p-6 border border-gray-300 bg-[#f9fafc] text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-800">Starter</h3>
              <p className="text-sm mt-1 text-gray-500">
                Perfect for getting started
              </p>

              <div className="mt-4">
                <span className="text-3xl font-bold">$0</span>
                <span className="ml-1 text-sm text-gray-500">/Month</span>
              </div>

              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">Access to 10 free tools</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">Basic templates</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">Community support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">1 project per month</span>
                </li>
              </ul>

              <button className="mt-6 w-full py-2 text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-6 hover:brightness-150 hover:scale-105 transition">
                Get Started Free
              </button>
            </div>

            
            <div className="relative rounded-xl p-6 border border-gray-300 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white scale-100 md:scale-105 text-center md:text-left">

              {/* Badge */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-xs px-3 py-1 rounded-full text-amber-900 font-medium">
                Most Popular
              </span>

              <h3 className="text-lg font-bold">Pro</h3>
              <p className="text-sm mt-1 text-gray-200">
                Best for professionals
              </p>

              <div className="mt-4">
                <span className="text-3xl font-bold">$29</span>
                <span className="ml-1 text-sm text-gray-200">/Month</span>
              </div>

              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16}/>
                  <span>Access to all premium tools</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} />
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} />
                  <span>Cloud sync</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} />
                  <span>Advanced analytics</span>
                </li>
              </ul>

              <button className="mt-6 w-full py-2 rounded-full text-sm font-medium bg-white hover:scale-105 transition">
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
           text-transparent bg-clip-text">Start Pro Trial</span>
              </button>
            </div>

            <div className="rounded-xl p-6 border border-gray-300 bg-[#f9fafc] text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-800">Enterprise</h3>
              <p className="text-sm mt-1 text-gray-500">
                For teams and businesses
              </p>

              <div className="mt-4">
                <span className="text-3xl font-bold">$99</span>
                <span className="ml-1 text-sm text-gray-500">/Month</span>
              </div>

              <ul className="mt-5 space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">Team collaboration</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">Custom integrations</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">Dedicated support</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">SLA guarantee</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-500" />
                  <span className="text-gray-600">Custom branding</span>
                </li>
              </ul>

              <button className="mt-6 w-full py-2 text-sm font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full px-6 hover:brightness-150 hover:scale-105 transition">
                Contact Sales
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;