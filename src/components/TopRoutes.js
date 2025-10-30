"use client";

import { useState } from "react";
import { Plane, MapPin } from "lucide-react";

export default function TopRoutes() {
  const [activeTab, setActiveTab] = useState("domestic");

  const domesticRoutes = [
    { from: "Dhaka", fromCode: "DAC", to: "Cox's Bazar", toCode: "CXB", airport: "Hazrat Shahjalal International Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Jashore", toCode: "JSR", airport: "Jashore Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Chattogram", toCode: "CGP", airport: "Shah Amanat International Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Sylhet", toCode: "ZYL", airport: "Osmany International Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Barisal", toCode: "BZL", airport: "Barisal Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Saidpur", toCode: "SPD", airport: "Saidpur Airport" },
  ];

  const internationalRoutes = [
    { from: "Dhaka", fromCode: "DAC", to: "Dubai", toCode: "DXB", airport: "Dubai International Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Kolkata", toCode: "CCU", airport: "Netaji Subhash Chandra Bose International Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Bangkok", toCode: "BKK", airport: "Suvarnabhumi Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Singapore", toCode: "SIN", airport: "Singapore Changi Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Kuala Lumpur", toCode: "KUL", airport: "Kuala Lumpur International Airport" },
    { from: "Dhaka", fromCode: "DAC", to: "Riyadh", toCode: "RUH", airport: "King Khalid International Airport" },
  ];

  const currentRoutes = activeTab === "domestic" ? domesticRoutes : internationalRoutes;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Domestic & International Routes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Make your next trip unforgettable with TravelHub! From business class to economy class flights 
            on international trips or domestic ones, choose from hundreds of airlines.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "domestic"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "international"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              International
            </button>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentRoutes.map((route, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Plane className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">{route.fromCode}</span>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-px bg-gray-200"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">{route.toCode}</span>
                  <Plane className="h-5 w-5 text-blue-600 rotate-180" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{route.from}</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-gray-500">{route.airport}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{route.to}</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Book Flight
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View All Routes
          </button>
        </div>
      </div>
    </section>
  );
}
