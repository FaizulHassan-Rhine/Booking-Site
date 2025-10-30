"use client";

import { useState } from "react";
import { Plane, MapPin, Calendar, Users, ChevronDown, Search, ArrowRight, Star, Clock, DollarSign, Plus, MessageCircle, Flag } from "lucide-react";
import Select from 'react-select';
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

export default function FlightPage() {
  const [tripType, setTripType] = useState("one-way");
  const [departure, setDeparture] = useState("DAC");
  const [arrival, setArrival] = useState("JSR");
  const [departureDate, setDepartureDate] = useState("29 October Wednesday, 2025");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("Economy");
  const [fareTypes, setFareTypes] = useState({
    regular: false,
    student: false,
    labour: false,
  });
  const [cheapestTab, setCheapestTab] = useState("domestic");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const airports = [
    { code: "DAC", name: "Dhaka", fullName: "Dhaka, Hazrat Shahjalal International Airport (DAC)" },
    { code: "JSR", name: "Jashore", fullName: "Jashore, Jashore Airport (JSR)" },
    { code: "CXB", name: "Cox's Bazar", fullName: "Cox's Bazar, Cox's Bazar Airport (CXB)" },
    { code: "CGP", name: "Chattogram", fullName: "Chattogram, Shah Amanat International Airport (CGP)" },
    { code: "ZYL", name: "Sylhet", fullName: "Sylhet, Osmany International Airport (ZYL)" },
    { code: "BZL", name: "Barisal", fullName: "Barisal, Barisal Airport (BZL)" },
  ];

  const topDeals = [
    {
      id: 1,
      from: "DAC",
      to: "DXB",
      fromCity: "Dhaka",
      toCity: "Dubai",
      price: "BDT 45,000",
      airline: "Emirates",
      duration: "5h 30m",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      from: "DAC",
      to: "BKK",
      fromCity: "Dhaka",
      toCity: "Bangkok",
      price: "BDT 25,000",
      airline: "Thai Airways",
      duration: "2h 45m",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      from: "DAC",
      to: "KUL",
      fromCity: "Dhaka",
      toCity: "Kuala Lumpur",
      price: "BDT 35,000",
      airline: "Malaysia Airlines",
      duration: "3h 15m",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      from: "DAC",
      to: "SIN",
      fromCity: "Dhaka",
      toCity: "Singapore",
      price: "BDT 40,000",
      airline: "Singapore Airlines",
      duration: "4h 20m",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
  ];

  const popularAirlines = [
    { name: "Biman Bangladesh Airlines", logo: "✈️", rating: 4.2 },
    { name: "US-Bangla Airlines", logo: "✈️", rating: 4.5 },
    { name: "Emirates", logo: "✈️", rating: 4.8 },
    { name: "Singapore Airlines", logo: "✈️", rating: 4.9 },
    { name: "Malaysia Airlines", logo: "✈️", rating: 4.6 },
    { name: "Qatar Airways", logo: "✈️", rating: 4.7 },
  ];

  const popularDestinations = [
    {
      city: "Dubai",
      country: "UAE",
      code: "DXB",
      price: "From BDT 45,000",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      code: "BKK",
      price: "From BDT 25,000",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    },
    {
      city: "Kuala Lumpur",
      country: "Malaysia",
      code: "KUL",
      price: "From BDT 35,000",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
    {
      city: "Singapore",
      country: "Singapore",
      code: "SIN",
      price: "From BDT 40,000",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    },
    {
      city: "Kolkata",
      country: "India",
      code: "CCU",
      price: "From BDT 15,000",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
    {
      city: "Riyadh",
      country: "Saudi Arabia",
      code: "RUH",
      price: "From BDT 30,000",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    },
  ];

  const domesticRoutes = [
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Cox's Bazar", toAirport: "Cox's Bazar Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Jashore", toAirport: "Jashore Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Chattogram", toAirport: "Shah Amanat International Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Sylhet", toAirport: "Osmany International Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Barisal", toAirport: "Barisal Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Saidpur", toAirport: "Saidpur Airport" },
  ];

  const internationalRoutes = [
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Dubai", toAirport: "Dubai International Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Bangkok", toAirport: "Suvarnabhumi Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Singapore", toAirport: "Singapore Changi Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Kuala Lumpur", toAirport: "Kuala Lumpur International Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Kolkata", toAirport: "Netaji Subhash Chandra Bose International Airport" },
    { from: "Dhaka", fromAirport: "Hazrat Shahjalal International Airport", to: "Riyadh", toAirport: "King Khalid International Airport" },
  ];

  const topCountries = [
    { name: "India", flag: "🇮🇳" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "United States", flag: "🇺🇸" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "United Arab Emirates", flag: "🇦🇪" },
    { name: "Nepal", flag: "🇳🇵" },
    { name: "France", flag: "🇫🇷" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Thailand", flag: "🇹🇭" },
  ];

  const faqItems = [
    {
      question: "What is ShareTrip's Flight?",
      answer: "ShareTrip Flight is our comprehensive flight booking service that allows you to search, compare, and book domestic and international flights at competitive prices."
    },
    {
      question: "Why do you book the flight by ShareTrip?",
      answer: "ShareTrip offers competitive prices, 24/7 customer support, secure payment options, and a user-friendly platform for all your flight booking needs."
    },
    {
      question: "How does ShareTrip find low flight prices?",
      answer: "We partner with multiple airlines and use advanced algorithms to compare prices across different booking platforms, ensuring you get the best deals available."
    },
    {
      question: "How do I find the best flight deals on ShareTrip?",
      answer: "Use our search filters, check our exclusive offers section, subscribe to our newsletter, and book in advance for better deals."
    },
    {
      question: "Does ShareTrip have cheaper flights than competitors?",
      answer: "Yes, ShareTrip often offers competitive prices and exclusive deals that may be cheaper than other platforms. We continuously work to provide the best value for our customers."
    },
    {
      question: "What details do you need to book a flight on ShareTrip?",
      answer: "You need passenger names, passport/ID details, contact information, and payment details. For international flights, visa requirements may also apply."
    },
  ];

  const handleFareTypeChange = (type) => {
    setFareTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleSearch = () => {
    console.log("Searching flights...", {
      tripType,
      departure,
      arrival,
      departureDate,
      returnDate,
      passengers,
      classType,
      fareTypes,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Flight Search */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop"
            alt="Airplane wing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Where to Fly?
            </h1>
            <p className="text-xl text-white/90">
              Find Cheap Flights, Airline Tickets in Bangladesh
            </p>
          </div>

          {/* Flight Search Form */}
          <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-6">
            {/* Trip Type Tabs */}
            <div className="flex space-x-1 mb-6">
              <button
                onClick={() => setTripType("one-way")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  tripType === "one-way"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                One Way
              </button>
              <button
                onClick={() => setTripType("round-trip")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  tripType === "round-trip"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Round Trip
              </button>
              <button
                onClick={() => setTripType("multi-city")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  tripType === "multi-city"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Multi City
              </button>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              {/* From */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
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

              {/* To */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
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

              {/* Departure Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
                <div className="relative">
                  <input
                    type="text"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Return Date (only for round trip) */}
              {tripType === "round-trip" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              )}

              {/* Travelers & Class */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travellers & Class</label>
                <div className="relative">
                  <input
                    type="text"
                    value={`${passengers} Traveller ${classType}`}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly
                  />
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Fare Type Checkboxes */}
            <div className="flex space-x-6 mb-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={fareTypes.regular}
                  onChange={() => handleFareTypeChange("regular")}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Regular Fare</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={fareTypes.student}
                  onChange={() => handleFareTypeChange("student")}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Student Fare</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={fareTypes.labour}
                  onChange={() => handleFareTypeChange("labour")}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Labour Fare</span>
              </label>
            </div>

            {/* Search Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search Flights</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Flight Deals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Flight Deals
            </h2>
            <p className="text-lg text-gray-600">
              Discover amazing flight deals and discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={`${deal.fromCity} to ${deal.toCity}`}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <div className="bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{deal.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{deal.from}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <span className="text-lg font-bold text-gray-900">{deal.to}</span>
                    </div>
                    <span className="text-lg font-bold text-green-600">{deal.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{deal.fromCity} to {deal.toCity}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{deal.airline}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{deal.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Popular Airlines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Most Popular Airlines
            </h2>
            <p className="text-lg text-gray-600">
              Choose from top-rated airlines for your journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularAirlines.map((airline, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{airline.logo}</div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{airline.name}</h3>
                <div className="flex items-center justify-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs text-gray-600">{airline.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Flight Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Flight Destinations from BD
            </h2>
            <p className="text-lg text-gray-600">
              Explore the world with our most popular destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-3 py-1">
                      <span className="text-sm font-medium text-gray-900">{destination.code}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{destination.city}</h3>
                  <p className="text-gray-600 mb-3">{destination.country}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{destination.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Cheapest Flight By Destination */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Search Cheapest Flight By Destination
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Instantly find cheap flight and air tickets to various destinations on ShareTrip. 
              Explore new routes, book online air tickets, and plan your next travel adventure.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setCheapestTab("domestic")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  cheapestTab === "domestic"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Domestic
              </button>
              <button
                onClick={() => setCheapestTab("international")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  cheapestTab === "international"
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
            {(cheapestTab === "domestic" ? domesticRoutes : internationalRoutes).map((route, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Plane className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">{route.from}</span>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-px bg-gray-200"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">{route.to}</span>
                    <Plane className="h-5 w-5 text-blue-600 rotate-180" />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{route.fromAirport}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{route.toAirport}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    View All
                  </button>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Book Flight
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flights to Top Countries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flights to Top Countries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Search flights to top countries, discover diverse flight destinations, 
              and choose top airlines for your ultimate journey through ShareTrip's comprehensive platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {topCountries.map((country, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer group">
                <div className="text-3xl mb-2">{country.flag}</div>
                <h3 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {country.name}
                </h3>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-auto mt-2 group-hover:text-blue-600 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common queries. Simplify your travel planning with our concise and informative FAQ section.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <Plus 
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      expandedFAQ === index ? 'rotate-45' : ''
                    }`} 
                  />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is waiting to help you 24/7
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
              <MessageCircle className="h-5 w-5" />
              <span>Let's Chat Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Grow Your Business with ShareTrip Shop */}
      <section className="py-16 bg-linear-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Grow Your Business with ShareTrip Shop
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with us to reach more customers, boost sales, and expand your brand effectively.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Become a Partner
          </button>
        </div>
      </section>

      {/* Your all-in-one Travel App */}
      <section className="py-16 bg-linear-to-br from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your all-in-one Travel App
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Get flights, hotels, holidays, and visa assistance in just a few taps. 
                Enjoy real-time flight updates, schedules, travel info, play games, 
                win trip coins, and much more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <span>App Store</span>
                </button>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <span>Google Play</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl w-64 h-[500px] relative overflow-hidden">
                    <div className="bg-blue-600 h-8 flex items-center justify-between px-4 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-4 h-full bg-linear-to-b from-blue-50 to-white">
                      <div className="text-center mb-6">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <Plane className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900">ShareTrip</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600 text-sm">✈️</span>
                            </div>
                            <span className="text-sm font-medium">Flight Booking</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-green-600 text-sm">🏨</span>
                            </div>
                            <span className="text-sm font-medium">Hotel Booking</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <span className="text-purple-600 text-sm">🎮</span>
                            </div>
                            <span className="text-sm font-medium">Play Games</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
