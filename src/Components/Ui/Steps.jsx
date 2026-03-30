import React from "react";
import user from "../../assets/user.png";
import packageIcon from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    image: user,
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    image: packageIcon,
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    image: rocket,
  },
];

const Steps = () => {
  return (
    <div>
      <section className="bg-[#f9fafc] py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
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
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-xl border border-gray-300"
              >
                {/* Step Number */}
                <span className="absolute top-4 right-4 text-xs bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-2 py-2 rounded-full">
                  {step.id}
                </span>

                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-gray-800 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-500 text-center">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
