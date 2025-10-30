"use client";

import { useState } from "react";
import { Plane, Hotel, Calendar, Users, MapPin, Search, ArrowRight } from "lucide-react";
import Select from 'react-select';

export default function HeroSection() {
  const [searchType, setSearchType] = useState("flight");
  const [tripType, setTripType] = useState("one-way");
  const [departure, setDeparture] = useState("DAC");
  const [arrival, setArrival] = useState("CXB");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("economy");

  const airports = [
    { code: "DAC", name: "Dhaka", country: "Bangladesh" },
    { code: "CXB", name: "Cox's Bazar", country: "Bangladesh" },
    { code: "CGP", name: "Chattogram", country: "Bangladesh" },
    { code: "ZYL", name: "Sylhet", country: "Bangladesh" },
    { code: "JSR", name: "Jashore", country: "Bangladesh" },
  ];

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching...", {
      searchType,
      tripType,
      departure,
      arrival,
      departureDate,
      returnDate,
      passengers,
      classType,
    });
  };

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      background: '#fff',
      borderColor: state.isFocused ? '#2563eb' : '#e2e8f0',
      boxShadow: state.isFocused ? '0 0 0 2px #2563eb33' : 'none',
      minHeight: 44,
      borderRadius: 8,
      fontWeight: 500,
      fontSize: 16,
      color: '#171717',
      transition: 'all 0.2s'
    }),
    option: (base, state) => ({
      ...base,
      background: state.isSelected
        ? '#2563eb'
        : state.isFocused
          ? '#eff6ff'
          : '#fff',
      color: state.isSelected ? '#fff' : '#171717',
      borderRadius: 6,
      padding: '10px 16px',
      cursor: 'pointer',
      fontWeight: 500
    }),
    menu: (base) => ({
      ...base,
      background: '#fff',
      borderRadius: 8,
      boxShadow: '0 8px 32px 0 rgba(30,32,37,0.08)',
      zIndex: 100
    }),
    singleValue: (base) => ({
      ...base,
      color: '#171717',
      fontWeight: 500
    })
  };

  return (
    <section className="bg-linear-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">TravelHub!</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find Flights, Hotels, Visa & Holidays. Your trusted travel partner for seamless bookings and unforgettable experiences.
          </p>
        </div>

        {/* Search Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setSearchType("flight")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                searchType === "flight"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Plane className="h-4 w-4" />
              <span>Flight</span>
            </button>
            <button
              onClick={() => setSearchType("hotel")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                searchType === "hotel"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Hotel className="h-4 w-4" />
              <span>Hotel</span>
            </button>
            <button
              onClick={() => setSearchType("holiday")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                searchType === "holiday"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Holiday</span>
            </button>
          </div>

          {/* Flight Search Form */}
          {searchType === "flight" && (
            <div className="space-y-6">
              {/* Trip Type */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setTripType("one-way")}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    tripType === "one-way"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  One Way
                </button>
                <button
                  onClick={() => setTripType("round-trip")}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    tripType === "round-trip"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Round Trip
                </button>
                <button
                  onClick={() => setTripType("multi-city")}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    tripType === "multi-city"
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Multi City
                </button>
              </div>

              {/* Search Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* From */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Select
                      value={airports.find(a => a.code === departure)}
                      onChange={opt => setDeparture(opt.code)}
                      options={airports}
                      getOptionLabel={a => `${a.code} - ${a.name}`}
                      getOptionValue={a => a.code}
                      classNamePrefix="rs"
                      styles={selectStyles}
                      isSearchable
                    />
                  </div>
                </div>

                {/* To */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Select
                      value={airports.find(a => a.code === arrival)}
                      onChange={opt => setArrival(opt.code)}
                      options={airports}
                      getOptionLabel={a => `${a.code} - ${a.name}`}
                      getOptionValue={a => a.code}
                      classNamePrefix="rs"
                      styles={selectStyles}
                      isSearchable
                    />
                  </div>
                </div>

                {/* Departure Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Return Date (only for round trip) */}
                {tripType === "round-trip" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Passengers */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travellers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Select
                      value={passengers}
                      onChange={(opt) => setPassengers(opt.value)}
                      options={[
                        { value: 1, label: "1 Traveller" },
                        { value: 2, label: "2 Travellers" },
                        { value: 3, label: "3 Travellers" },
                        { value: 4, label: "4 Travellers" },
                        { value: 5, label: "5 Travellers" },
                        { value: 6, label: "6 Travellers" },
                        { value: 7, label: "7 Travellers" },
                        { value: 8, label: "8 Travellers" },
                        { value: 9, label: "9 Travellers" },
                      ]}
                      getOptionLabel={opt => opt.label}
                      getOptionValue={opt => opt.value}
                      classNamePrefix="rs"
                      styles={selectStyles}
                      isSearchable
                    />
                  </div>
                </div>

                {/* Class */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                  <Select
                    value={classType}
                    onChange={(opt) => setClassType(opt.value)}
                    options={[
                      { value: "economy", label: "Economy" },
                      { value: "business", label: "Business" },
                      { value: "first", label: "First Class" },
                    ]}
                    getOptionLabel={opt => opt.label}
                    getOptionValue={opt => opt.value}
                    classNamePrefix="rs"
                    styles={selectStyles}
                    isSearchable
                  />
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button
                    onClick={handleSearch}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Search className="h-4 w-4" />
                    <span>Search Flights</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Hotel Search Form */}
          {searchType === "hotel" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Search className="h-4 w-4" />
                    <span>Search Hotels</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Mobile Recharge", icon: "📱" },
            { name: "Pay Bill", icon: "💳" },
            { name: "Gift Card", icon: "🎁" },
            { name: "Visa", icon: "🛂" },
          ].map((service) => (
            <div key={service.name} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-2xl mb-2">{service.icon}</div>
              <div className="text-sm font-medium text-gray-700">{service.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
