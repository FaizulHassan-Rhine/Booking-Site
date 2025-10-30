"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";

export default function ExclusiveOffers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      id: 1,
      title: "Bangladesh's first ever lifestyle cards, Stellar Cards",
      description: "Experience premium travel benefits with our exclusive lifestyle cards",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
      discount: "Up to 18%",
      category: "Cards",
    },
    {
      id: 2,
      title: "Up to 18% savings on int'l flights with StanChart bank card",
      description: "Get exclusive discounts on international flights with Standard Chartered Bank",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=200&fit=crop",
      discount: "18% OFF",
      category: "Banking",
    },
    {
      id: 3,
      title: "Cashback Rewards Await – Pay & Get Instant Cashback with bKash",
      description: "Up to BDT 4,000 cashback offer on domestic and international flights",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=200&fit=crop",
      discount: "BDT 4,000",
      category: "Cashback",
    },
    {
      id: 4,
      title: "Enjoy Free Delivery, Every Saturday!",
      description: "Enjoy FREE delivery on all shopping every Saturday at TravelHub Shop!",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
      discount: "FREE",
      category: "Shopping",
    },
    {
      id: 5,
      title: "Up to 15% discount on the base fare of domestic flights",
      description: "Use coupon code: BKASHDOM to enjoy up to 15% discount on domestic flight tickets",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=200&fit=crop",
      discount: "15% OFF",
      category: "Flights",
    },
    {
      id: 6,
      title: "Up to 80% discount on Domestic Hotels & Resorts with bKash",
      description: "Use coupon code: BKASHSTAY to enjoy up to 80% discount on domestic hotels",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=200&fit=crop",
      discount: "80% OFF",
      category: "Hotels",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(offers.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(offers.length / 2)) % Math.ceil(offers.length / 2));
  };

  const getVisibleOffers = () => {
    const startIndex = currentSlide * 2;
    return offers.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Offers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals and discounts on flights, hotels, and more. Limited time offers you won't want to miss!
          </p>
        </div>

        <div className="relative">
          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {getVisibleOffers().map((offer) => (
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

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
              disabled={currentSlide === Math.ceil(offers.length / 2) - 1}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: Math.ceil(offers.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Offers Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View All Offers
          </button>
        </div>
      </div>
    </section>
  );
}
