import { Star, MapPin, ArrowRight } from "lucide-react";

export default function BestHotels() {
  const hotels = [
    {
      id: 1,
      name: "Sea Pearl Beach Resort & Spa Cox's Bazar",
      location: "Cox's Bazar",
      rating: 5,
      reviews: 431,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/44/ea/2f/royal-tulip-sea-pearl.jpg?w=900&h=-1&s=1",
      price: "BDT 15,000",
      features: ["Beachfront", "Spa", "Restaurant", "Pool"],
    },
    {
      id: 2,
      name: "Bhawal Resort & Spa",
      location: "Gazipur",
      rating: 5,
      reviews: 264,
      image: "https://www.bdbooking.com/upload/property/hotel/011120201014052405e199fed4d3e3.png",
      price: "BDT 8,500",
      features: ["Resort", "Spa", "Golf", "Conference"],
    },
    {
      id: 3,
      name: "Grand Sylhet Hotel & Resort",
      location: "Sylhet",
      rating: 5,
      reviews: 159,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/562015580.jpg?k=173d233c682f3cab8c8c402d1e76e19e227e5ebec74fb4566c15f1e3276b1259&o=",
      price: "BDT 12,000",
      features: ["Luxury", "Tea Garden View", "Restaurant", "Spa"],
    },
    {
      id: 4,
      name: "Sayeman Beach Resort",
      location: "Cox's Bazar",
      rating: 5,
      reviews: 453,
      image: "https://sayemanresort.com/wp-content/uploads/2020/09/banner1_sbr.jpg",
      price: "BDT 18,000",
      features: ["Beachfront", "Luxury", "Restaurant", "Pool"],
    },
    {
      id: 5,
      name: "Seagull Hotels Ltd.",
      location: "Cox's Bazar",
      rating: 5,
      reviews: 335,
      image: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/03/330382489_1215707232670258_7355349742900289851_n-744x493.jpg",
      price: "BDT 9,500",
      features: ["Beachfront", "Restaurant", "Conference", "Pool"],
    },
    {
      id: 6,
      name: "Best Western Heritage",
      location: "Dhaka",
      rating: 5,
      reviews: 288,
      image: "https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,c_fill,f_auto,w_750,q_85/travelapi/24000000/23710000/23709100/23709030/abe68235_z.jpg",
      price: "BDT 11,000",
      features: ["Business", "Restaurant", "Conference", "Gym"],
    },
    {
      id: 7,
      name: "Grand Sultan Tea Resort & Golf",
      location: "Sylhet",
      rating: 5,
      reviews: 378,
      image: "https://grandsultanresort.com/wp-content/uploads/2023/08/1-8.jpg",
      price: "BDT 14,500",
      features: ["Golf", "Tea Garden", "Luxury", "Spa"],
    },
    {
      id: 8,
      name: "Ocean Paradise Hotel & Resort",
      location: "Cox's Bazar",
      rating: 5,
      reviews: 345,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ff/c8/6f/ocean-paradise-hotel.jpg?w=900&h=500&s=1",
      price: "BDT 16,500",
      features: ["Beachfront", "Luxury", "Restaurant", "Pool"],
    },
    {
      id: 9,
      name: "Dream Square Resort",
      location: "Cox's Bazar",
      rating: 5,
      reviews: 324,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/90/2f/77/caption.jpg?w=900&h=500&s=1",
      price: "BDT 13,000",
      features: ["Beachfront", "Resort", "Restaurant", "Pool"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best Hotels for Your Next Trip
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Luxurious or budget-friendly hotels, villas or resorts, browse accommodations at TravelHub that meet the need. 
            Book Long-term or short-term accommodation from our hotel deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
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
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                  <span>Book Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View All Hotels
          </button>
        </div>
      </div>
    </section>
  );
}
