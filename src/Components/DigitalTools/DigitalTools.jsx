import React from "react";
import writing from "../../assets/writing.png";
import design from "../../assets/design-tool.png";
import camera from "../../assets/camera.png";
import operation from "../../assets/operation.png";
import portfolio from "../../assets/portfolio.png";
import social from "../../assets/social-media.png";
import { Check } from "lucide-react";

const tools = [
  {
    title: "AI Writing Pro",
    price: "$29/mo",
    badge: "Best Seller",
    badgeColor: "bg-orange-100 text-orange-600",
    image: writing,
    features: [
      "Unlimited AI generations",
      "SEO writing templates",
      "Grammar checker",
    ],
  },
  {
    title: "Design Templates Pack",
    price: "$49/one-time",
    badge: "Popular",
    badgeColor: "bg-purple-100 text-purple-600",
    image: design,
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
  },
  {
    title: "Premium Stock Assets",
    price: "$19/mo",
    badge: "New",
    badgeColor: "bg-green-100 text-green-600",
    image: camera,
    features: ["10k+ assets", "High resolution", "Commercial use"],
  },
  {
    title: "Automation Toolkit",
    price: "$79/mo",
    badge: "Popular",
    badgeColor: "bg-purple-100 text-purple-600",
    image: operation,
    features: ["50+ automations", "API access", "Custom workflows"],
  },
  {
    title: "Resume Builder Pro",
    price: "$15/one-time",
    badge: "New",
    badgeColor: "bg-green-100 text-green-600",
    image: portfolio,
    features: ["100+ templates", "ATS optimized", "Export to PDF"],
  },
  {
    title: "Social Media Content Kit",
    price: "$39/mo",
    badge: "Best Seller",
    badgeColor: "bg-orange-100 text-orange-600",
    image: social,
    features: ["500+ posts", "Scheduling tools", "Analytics dashboard"],
  },
];

const DigitalTools = () => {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Premium Digital Tools
            </h2>
            <p className="text-gray-500 mt-2">
              Choose from our curated collection of premium digital products
              designed <br />
              to boost your productivity and creativity.
            </p>

            {/* Tabs */}
            <div className="mt-4 flex justify-center gap-2">
              <button className="px-4 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full text-sm">
                Products
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm border">
                Cart (2)
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-300"
              >
                {/* Top Row (Image + Badge) */}
                <div className="flex items-center justify-between">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-10 h-10 object-contain"
                  />

                  <span
                    className={`text-xs px-3 py-1 rounded-full ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-4">{tool.title}</h3>

                {/* Price */}
                <p className="text-purple-600 font-bold mt-2">{tool.price}</p>

                {/* Features */}
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {tool.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500"><Check></Check></span> {f}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="mt-6 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-2 rounded-full hover:scale-105 transition">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTools;
