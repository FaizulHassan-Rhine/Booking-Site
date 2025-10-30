import { Star, MapPin, ArrowRight, Calendar } from "lucide-react";

export default function TourPackages() {
  const packages = [
    {
      id: 1,
      name: "Bangkok Adventure",
      location: "Bangkok, Thailand",
      rating: 5,
      reviews: 57,
      image: "https://cdn.kimkim.com/files/a/images/455032b53771729aea147277477025a358d8c1e2/original-e6aa1143f03b0ba9e8d99b7d0ceef403.jpg",
      price: "BDT 45,000",
      duration: "5 Days",
      features: ["Temple Tours", "Street Food", "Shopping", "Cultural Sites"],
    },
    {
      id: 2,
      name: "Maldives Paradise",
      location: "Maafushi Island, Maldives",
      rating: 5,
      reviews: 29,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/513732018.webp?k=7c26bf320836a1bb455d5a1d837b32d5466b0ca3794dbd77c5e891a1436d85de&o=",
      price: "BDT 85,000",
      duration: "7 Days",
      features: ["Beach Resort", "Snorkeling", "Spa", "Sunset Cruise"],
    },
    {
      id: 3,
      name: "Kolkata Heritage",
      location: "Kolkata, India",
      rating: 4.5,
      reviews: 97,
      image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/08/Feature-image-Kolkata-Heritage.jpg",
      price: "BDT 25,000",
      duration: "4 Days",
      features: ["Heritage Sites", "Street Food", "Shopping", "Cultural Tours"],
    },
    {
      id: 4,
      name: "Kuala Lumpur City",
      location: "Kuala Lumpur, Malaysia",
      rating: 5,
      reviews: 68,
      image: "https://cdn-imgix.headout.com/media/images/95f0efc3d46f89461244223c89a588a1-16156-KualaLumpurHop-OnHop-OffNightBusTour---002.jpg?auto=format&w=900&h=562.5&q=90&ar=16%3A10&crop=faces%2Ccenter&fit=crop",
      price: "BDT 35,000",
      duration: "5 Days",
      features: ["City Tours", "Shopping", "Food Tours", "Sky Tower"],
    },
    {
      id: 5,
      name: "Singapore Explorer",
      location: "Singapore",
      rating: 5,
      reviews: 33,
      image: "https://media.cntraveler.com/photos/61e8d6b910b17d326b4255c3/16:9/w_2560%2Cc_limit/MarinaBaySands-Singapore-CRHotel.jpg",
      price: "BDT 55,000",
      duration: "6 Days",
      features: ["Marina Bay", "Gardens", "Shopping", "Universal Studios"],
    },
    {
      id: 6,
      name: "Dubai Luxury",
      location: "Dubai, UAE",
      rating: 5,
      reviews: 36,
      image: "https://d33om22pidobo4.cloudfront.net/blogs/ckeditor/4png-289ed752-ee1d-4b6c-a955-78895e55f68e.png",
      price: "BDT 75,000",
      duration: "6 Days",
      features: ["Burj Khalifa", "Desert Safari", "Shopping", "Luxury Hotels"],
    },
    {
      id: 7,
      name: "Kathmandu Valley",
      location: "Kathmandu, Nepal",
      rating: 4,
      reviews: 44,
      image: "https://i1.himalayas.life/c/u/f67894297b6134a6b759b3a9ec15b6cb/2018/10/21085840/kathmandu-valley1-e1661072353343.jpg",
      price: "BDT 30,000",
      duration: "5 Days",
      features: ["Temple Tours", "Mountain Views", "Cultural Sites", "Shopping"],
    },
    {
      id: 8,
      name: "Riyadh Discovery",
      location: "Riyadh, Saudi Arabia",
      rating: 5,
      reviews: 77,
      image: "https://dom-publishers.com/cdn/shop/articles/iStock-1264361225_1024x1024.jpg?v=1709557130",
      price: "BDT 40,000",
      duration: "5 Days",
      features: ["Cultural Sites", "Shopping", "Desert Tours", "Modern Architecture"],
    },
    {
      id: 9,
      name: "Toronto Experience",
      location: "Toronto, Canada",
      rating: 5,
      reviews: 16,
      image: "https://www.cntower.ca/sites/default/files/styles/16_9_scale_and_crop_large/public/images/explore-cn-tower%20.jpg.webp?itok=1kYajz48",
      price: "BDT 120,000",
      duration: "8 Days",
      features: ["CN Tower", "Niagara Falls", "City Tours", "Cultural Sites"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Tour Packages for You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plan your dream gateway and choose from uncountable tour packages at TravelHub. 
            Book our holiday packages for the best deals on any international trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">{pkg.rating}</span>
                    <span className="text-xs text-gray-500">({pkg.reviews})</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    From {pkg.price}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{pkg.location}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{pkg.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group">
                  <span>Book Package</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}
