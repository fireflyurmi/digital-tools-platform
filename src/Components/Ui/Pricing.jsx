import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: "$0",
    duration: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: "$29",
    duration: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    price: "$99",
    duration: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 mt-2">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center bg-[#f9fafc]">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl p-6 border border-gray-300
                ${
                  plan.highlight
                    ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white scale-105"
                    : "bg-white"
                }`}
              >
                {/* Most Popular Badge */}
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-xs px-3 py-1 rounded-full text-amber-900 font-medium">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-gray-800"}`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`text-sm mt-1 ${plan.highlight ? "text-gray-200" : "text-gray-500"}`}
                >
                  {plan.desc}
                </p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span
                    className={`ml-1 text-sm ${plan.highlight ? "text-gray-200" : "text-gray-500"}`}
                  >
                    {plan.duration}
                  </span>
                </div>
                <ul className="mt-5 space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-green-400" />
                      <span
                        className={
                          plan.highlight ? "text-white" : "text-gray-600"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full py-2 rounded-full text-sm font-medium transition
                  ${
                    plan.highlight
                      ? "bg-white text-[#6d29f8]"
                      : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
