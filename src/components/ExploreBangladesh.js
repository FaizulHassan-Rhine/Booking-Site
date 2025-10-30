import { MapPin, Star, ArrowRight } from "lucide-react";

export default function ExploreBangladesh() {
  const destinations = [
    {
      id: 1,
      name: "Cox's Bazar",
      hotels: 97,
      image: "https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogiJR0K1sWVNFzinGC_l4r3IdsVLyxZfkr.jpg",
      description: "World's longest natural sea beach",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Sylhet",
      hotels: 44,
      image: "https://english.janomot.com/library/2024/07/05/1720178954_7.jpg",
      description: "Land of tea gardens and natural beauty",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Chittagong",
      hotels: 36,
      image: "https://chittagongportagent.com/wp-content/uploads/2025/03/Aerial-view-of-Chittagong-Port.webp",
      description: "Port city with hill stations nearby",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Bandarban",
      hotels: 28,
      image: "https://ttg.com.bd/uploads/tours/plans/204_36376273530_3c9a0335f5_b-copyjpg.jpg",
      description: "Hill district with tribal culture",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Sajek Valley",
      hotels: 15,
      image: "https://whatson.guide/wp-content/uploads/2018/02/171782_185994668099908_100000681295465_502955_3502055_o.jpg",
      description: "Cloud-covered hills and valleys",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Rangamati",
      hotels: 22,
      image: "https://propertyguide-store.s3.ap-southeast-1.amazonaws.com/bikroy/Rangamati_1_c957fe6d25.jpg",
      description: "Lake district with tribal heritage",
      rating: 4.6,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Bangladesh
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prepare to experience Bangladesh's rich culture and explore the majestic beauties of Cox's Bazar, 
            Sylhet, Bandarban, Sajek Valley, Rangamati and more. Plan your trip now!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">{destination.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.hotels} Hotels Available
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="flex items-center cursor-pointer space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                  <span>Explore Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 cursor-pointer rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
