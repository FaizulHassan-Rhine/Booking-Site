import { MapPin, Star, ArrowRight } from "lucide-react";

export default function PopularDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Kolkata",
      hotels: 1319,
      image: "https://s3.india.com/wp-content/uploads/2025/07/kolkata-DIY.jpg##image/jpg",
      country: "India",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Chennai",
      hotels: 1497,
      image: "https://www.formulaindia.com/blog/wp-content/uploads/2021/07/chennai1-scaled.jpg",
      country: "India",
      rating: 4.3,
    },
    {
      id: 3,
      name: "Kathmandu",
      hotels: 1152,
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F0aG1hbmR1fGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
      country: "Nepal",
      rating: 4.6,
    },
    {
      id: 4,
      name: "Bangkok",
      hotels: 4351,
      image: "https://www.capehouse.com/blog/wp-content/uploads/2023/12/getting-around-bangkok.jpg",
      country: "Thailand",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Singapore",
      hotels: 813,
      image: "https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_3x2.jpg",
      country: "Singapore",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Kuala Lumpur",
      hotels: 2464,
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/21/15/kuala-lumpur.jpg",
      country: "Malaysia",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Maafushi",
      hotels: 36,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/35/cf/ff/maafushi-village.jpg?w=1400&h=-1&s=1",
      country: "Maldives",
      rating: 4.9,
    },
    {
      id: 8,
      name: "Dubai",
      hotels: 2156,
      image: "https://deih43ym53wif.cloudfront.net/dubai-palm-jumeirah-island-shutterstock_1291548640.jpg_3ab124c2b9.jpg",
      country: "UAE",
      rating: 4.6,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expand your travel horizons with new facets! Explore the world by choosing your ideal travel destinations 
            in Asia, Europe, America, Australia and more with TravelHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    {destination.hotels.toLocaleString()} Hotels Available
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{destination.country}</p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                  <span>Explore Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
