"use client";

import { useState, useRef, useEffect } from "react";
import { Hotel, MapPin, Calendar, Users, ChevronDown, Search, ArrowRight, Star, Clock, DollarSign, Plus, MessageCircle, Bed, Wifi, Car, Utensils, Dumbbell, Waves, X, Minus } from "lucide-react";
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

export default function HotelPage() {
  const [searchType, setSearchType] = useState("hotel");
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  
  const guestDropdownRef = useRef(null);
  const destinationRef = useRef(null);

  const destinations = [
    "Dhaka, Bangladesh",
    "Cox's Bazar, Bangladesh", 
    "Sylhet, Bangladesh",
    "Chittagong, Bangladesh",
    "Rajshahi, Bangladesh",
    "Khulna, Bangladesh",
    "Dubai, UAE",
    "Bangkok, Thailand",
    "Singapore",
    "Kuala Lumpur, Malaysia",
    "Kolkata, India",
    "Delhi, India",
    "Mumbai, India",
    "Kathmandu, Nepal",
    "Colombo, Sri Lanka",
    "Male, Maldives",
    "Istanbul, Turkey",
    "London, UK",
    "New York, USA",
    "Paris, France"
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target)) {
        setShowGuestDropdown(false);
      }
      if (destinationRef.current && !destinationRef.current.contains(event.target)) {
        setShowDestinationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter destinations based on search input
  useEffect(() => {
    if (destination) {
      const filtered = destinations.filter(dest => 
        dest.toLowerCase().includes(destination.toLowerCase())
      );
      setFilteredDestinations(filtered);
      setShowDestinationDropdown(true);
    } else {
      setFilteredDestinations([]);
      setShowDestinationDropdown(false);
    }
  }, [destination]);

  const formatDate = (date) => {
    if (!date) return "";
    const options = { 
      day: 'numeric', 
      month: 'long', 
      weekday: 'long', 
      year: 'numeric' 
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const getMinDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    return maxDate.toISOString().split('T')[0];
  };

  const handleCheckInChange = (e) => {
    const selectedDate = e.target.value;
    setCheckIn(selectedDate);
    
    // If check-out is before check-in, update it
    if (checkOut && selectedDate >= checkOut) {
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split('T')[0]);
    }
  };

  const handleCheckOutChange = (e) => {
    const selectedDate = e.target.value;
    setCheckOut(selectedDate);
  };

  const handleDestinationSelect = (dest) => {
    setDestination(dest);
    setShowDestinationDropdown(false);
  };

  const updateGuestCount = (type, operation) => {
    if (type === 'adults') {
      const newAdults = operation === 'increment' ? adults + 1 : Math.max(1, adults - 1);
      setAdults(newAdults);
      setGuests(newAdults + children);
    } else if (type === 'children') {
      const newChildren = operation === 'increment' ? children + 1 : Math.max(0, children - 1);
      setChildren(newChildren);
      setGuests(adults + newChildren);
    }
  };

  const updateRoomCount = (operation) => {
    const newRooms = operation === 'increment' ? rooms + 1 : Math.max(1, rooms - 1);
    setRooms(newRooms);
  };

  const exclusiveOffers = [
    {
      id: 1,
      title: "Up to 80% discount on Domestic Hotels & Resorts with bKash",
      description: "Use coupon code: BKASHSTAY to enjoy up to 80% discount on domestic hotels",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      discount: "80% OFF",
      category: "Hotels",
    },
    {
      id: 2,
      title: "Save up to 70% on Domestic Hotels/Resorts",
      description: "Get exclusive deals on booking any domestic hotels and resorts from ShareTrip App & Web",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      discount: "70% OFF",
      category: "Resorts",
    },
    {
      id: 3,
      title: "Up to 78% discount on Domestic Hotels & Resorts with ST Pay",
      description: "Coupon Code: STPAYROOMS to get up to 78% discount on domestic hotels using ST Pay",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      discount: "78% OFF",
      category: "ST Pay",
    },
  ];

  const bestHotels = [
    {
      id: 1,
      name: "Sea Pearl Beach Resort & Spa Cox's Bazar",
      location: "Cox's Bazar",
      rating: 5,
      reviews: 431,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "BDT 15,000",
      features: ["Beachfront", "Spa", "Restaurant", "Pool"],
      amenities: ["Free WiFi", "Parking", "Restaurant", "Pool", "Spa"],
    },
    {
      id: 2,
      name: "Bhawal Resort & Spa",
      location: "Gazipur",
      rating: 5,
      reviews: 264,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      price: "BDT 8,500",
      features: ["Resort", "Spa", "Golf", "Conference"],
      amenities: ["Free WiFi", "Parking", "Restaurant", "Golf Course", "Spa"],
    },
    {
      id: 3,
      name: "Grand Sylhet Hotel & Resort",
      location: "Sylhet",
      rating: 5,
      reviews: 159,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "BDT 12,000",
      features: ["Luxury", "Tea Garden View", "Restaurant", "Spa"],
      amenities: ["Free WiFi", "Parking", "Restaurant", "Tea Garden", "Spa"],
    },
    {
      id: 4,
      name: "Sayeman Beach Resort",
      location: "Cox's Bazar",
      rating: 5,
      reviews: 453,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      price: "BDT 18,000",
      features: ["Beachfront", "Luxury", "Restaurant", "Pool"],
      amenities: ["Free WiFi", "Parking", "Restaurant", "Pool", "Beach Access"],
    },
    {
      id: 5,
      name: "Seagull Hotels Ltd.",
      location: "Cox's Bazar",
      rating: 5,
      reviews: 335,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "BDT 9,500",
      features: ["Beachfront", "Restaurant", "Conference", "Pool"],
      amenities: ["Free WiFi", "Parking", "Restaurant", "Pool", "Conference Room"],
    },
    {
      id: 6,
      name: "Best Western Heritage",
      location: "Dhaka",
      rating: 5,
      reviews: 288,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      price: "BDT 11,000",
      features: ["Business", "Restaurant", "Conference", "Gym"],
      amenities: ["Free WiFi", "Parking", "Restaurant", "Gym", "Conference Room"],
    },
  ];

  const popularDestinations = [
    {
      city: "Cox's Bazar",
      country: "Bangladesh",
      hotels: 97,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      price: "From BDT 5,000",
    },
    {
      city: "Sylhet",
      country: "Bangladesh",
      hotels: 44,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      price: "From BDT 3,500",
    },
    {
      city: "Chittagong",
      country: "Bangladesh",
      hotels: 36,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      price: "From BDT 4,000",
    },
    {
      city: "Dhaka",
      country: "Bangladesh",
      hotels: 156,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      price: "From BDT 6,000",
    },
  ];

  const internationalDestinations = [
    {
      city: "Dubai",
      country: "UAE",
      hotels: 2156,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      price: "From BDT 25,000",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      hotels: 4351,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      price: "From BDT 8,000",
    },
    {
      city: "Singapore",
      country: "Singapore",
      hotels: 813,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      price: "From BDT 15,000",
    },
    {
      city: "Kuala Lumpur",
      country: "Malaysia",
      hotels: 2464,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      price: "From BDT 12,000",
    },
  ];

  const faqItems = [
    {
      question: "What is ShareTrip's Hotel booking service?",
      answer: "ShareTrip Hotel is our comprehensive accommodation booking service that allows you to search, compare, and book hotels, resorts, and other accommodations at competitive prices worldwide."
    },
    {
      question: "Why should I book hotels through ShareTrip?",
      answer: "ShareTrip offers competitive prices, 24/7 customer support, secure payment options, and a user-friendly platform for all your hotel booking needs with exclusive deals and discounts."
    },
    {
      question: "How does ShareTrip find low hotel prices?",
      answer: "We partner with multiple hotel chains and booking platforms, using advanced algorithms to compare prices across different sources, ensuring you get the best deals available."
    },
    {
      question: "How do I find the best hotel deals on ShareTrip?",
      answer: "Use our search filters, check our exclusive offers section, subscribe to our newsletter, and book in advance for better deals. Also look for seasonal promotions and package deals."
    },
    {
      question: "Does ShareTrip have cheaper hotels than competitors?",
      answer: "Yes, ShareTrip often offers competitive prices and exclusive deals that may be cheaper than other platforms. We continuously work to provide the best value for our customers."
    },
    {
      question: "What details do I need to book a hotel on ShareTrip?",
      answer: "You need guest names, contact information, check-in/check-out dates, number of guests and rooms, and payment details. For international bookings, passport information may be required."
    },
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleSearch = () => {
    console.log("Searching hotels...", {
      searchType,
      destination,
      checkIn,
      checkOut,
      guests,
      rooms,
      adults,
      children,
    });
    
    // Here you would typically make an API call to search for hotels
    // For now, we'll just log the search parameters
    const checkInFormatted = checkIn ? new Date(checkIn).toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      weekday: 'long', 
      year: 'numeric' 
    }) : 'any date';
    
    const checkOutFormatted = checkOut ? new Date(checkOut).toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      weekday: 'long', 
      year: 'numeric' 
    }) : 'any date';
    
    alert(`Searching for ${searchType}s in ${destination || 'any destination'} from ${checkInFormatted} to ${checkOutFormatted} for ${guests} guests in ${rooms} room${rooms > 1 ? 's' : ''}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Hotel Search */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=600&fit=crop"
            alt="Luxury hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Where to Stay?
            </h1>
            <p className="text-xl text-white/90">
              Find Best Hotels, Resorts & Accommodations in Bangladesh
            </p>
          </div>

          {/* Hotel Search Form */}
          <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-6">
            {/* Search Type Tabs */}
            <div className="flex space-x-1 mb-6">
              <button
                onClick={() => setSearchType("hotel")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  searchType === "hotel"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Hotel
              </button>
              <button
                onClick={() => setSearchType("resort")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  searchType === "resort"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Resort
              </button>
              <button
                onClick={() => setSearchType("villa")}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  searchType === "villa"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Villa
              </button>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              {/* Destination */}
              <div className="relative" ref={destinationRef}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Can't Miss</label>
                <div className="relative">
                  <Select
                    value={destination}
                    onChange={opt => setDestination(opt.value)}
                    options={destinations.map(d=>({label:d,value:d}))}
                    placeholder="Where are you going?"
                    classNamePrefix="rs"
                    styles={selectStyles}
                    isSearchable
                  />
                  <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                {/* Destination Dropdown */}
                {showDestinationDropdown && filteredDestinations.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {filteredDestinations.map((dest, index) => (
                      <div
                        key={index}
                        onClick={() => handleDestinationSelect(dest)}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900">{dest}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={handleCheckInChange}
                    min={getMinDate()}
                    max={getMaxDate()}
                    placeholder="mm/dd/yyyy"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white text-gray-900 placeholder-gray-500"
                    style={{
                      colorScheme: 'light'
                    }}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={handleCheckOutChange}
                    min={checkIn || getMinDate()}
                    max={getMaxDate()}
                    placeholder="mm/dd/yyyy"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer bg-white text-gray-900 placeholder-gray-500"
                    style={{
                      colorScheme: 'light'
                    }}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Guests & Rooms */}
              <div className="relative" ref={guestDropdownRef}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <div className="relative">
                  <input
                    type="text"
                    value={`${guests} Guests, ${rooms} Rooms`}
                    onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                  />
                  <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 transition-transform ${showGuestDropdown ? 'rotate-180' : ''}`} />
                </div>
                
                {/* Guest & Room Selection Dropdown */}
                {showGuestDropdown && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                    <div className="space-y-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Adults</div>
                          <div className="text-sm text-gray-500">Ages 18+</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateGuestCount('adults', 'decrement')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-medium">{adults}</span>
                          <button
                            onClick={() => updateGuestCount('adults', 'increment')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Children */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Children</div>
                          <div className="text-sm text-gray-500">Ages 0-17</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateGuestCount('children', 'decrement')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-medium">{children}</span>
                          <button
                            onClick={() => updateGuestCount('children', 'increment')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Rooms */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Rooms</div>
                          <div className="text-sm text-gray-500">Number of rooms</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateRoomCount('decrement')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4 text-gray-600" />
                          </button>
                          <span className="w-8 text-center font-medium">{rooms}</span>
                          <button
                            onClick={() => updateRoomCount('increment')}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Done Button */}
                      <div className="pt-2 border-t border-gray-200">
                        <button
                          onClick={() => setShowGuestDropdown(false)}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <Search className="h-5 w-5" />
                  <span>Search Hotels</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Hotel Offers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exclusive Hotel Offers
            </h2>
            <p className="text-lg text-gray-600">
              Discover amazing hotel deals and discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exclusiveOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {offer.discount}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {offer.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {offer.description}
                  </p>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Hotels for Your Next Trip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Hotels for Your Next Trip
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Luxurious or budget-friendly hotels, villas or resorts, browse accommodations at ShareTrip that meet the need. 
              Book Long-term or short-term accommodation from our hotel deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium text-gray-700">{hotel.rating}</span>
                      <span className="text-xs text-gray-500">({hotel.reviews})</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      From {hotel.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{hotel.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {hotel.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-1 text-xs text-gray-600">
                        <Wifi className="h-3 w-3" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                    <span>Book Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Bangladesh Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Bangladesh Hotels
            </h2>
            <p className="text-lg text-gray-600">
              Discover amazing accommodations across Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.hotels} Hotels Available
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{destination.city}</h3>
                  <p className="text-gray-600 mb-3">{destination.country}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{destination.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View Hotels
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Hotel Destinations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular International Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Explore hotels around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {destination.hotels.toLocaleString()} Hotels Available
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{destination.city}</h3>
                  <p className="text-gray-600 mb-3">{destination.country}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{destination.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View Hotels
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common hotel booking queries. Simplify your travel planning with our concise and informative FAQ section.
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center">
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
                Enjoy real-time updates, schedules, travel info, play games, 
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
                          <Hotel className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900">ShareTrip</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600 text-sm">🏨</span>
                            </div>
                            <span className="text-sm font-medium">Hotel Booking</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <span className="text-green-600 text-sm">✈️</span>
                            </div>
                            <span className="text-sm font-medium">Flight Booking</span>
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
