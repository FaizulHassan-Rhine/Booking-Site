import { Plane } from "lucide-react";

export default function AirlinesSection() {
  const airlines = [
    { name: "Biman Bangladesh Airlines", logo: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/09/22/biman_bangladesh_airlines_logo.png" },
    { name: "US-Bangla Airlines", logo: "https://i.pinimg.com/736x/4d/6d/59/4d6d59b18331a866d6ebbb32d2332166.jpg" },
    { name: "NOVOAIR", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRika7qHukIt2_Ux-rNLifiylM0E2M5z6jb_A&s" },
    { name: "Air Astra", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Air_Astra_Logo.svg/2560px-Air_Astra_Logo.svg.png" },
    { name: "Emirates", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcYgEXDSntBM1gcfzHmR0lNzKXKImiWshYg&s" },
    { name: "Singapore Airlines", logo: "https://1000logos.net/wp-content/uploads/2020/04/Singapore-Airlines-logo.jpg" },
    { name: "Malaysia Airlines", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFTVzG371E8HstnePaBIIgSZnE0H2rPaohw&s" },
    { name: "Qatar Airways", logo: "https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Logo-2006-present.jpg" },
    { name: "Saudia Airlines", logo: "https://logos-world.net/wp-content/uploads/2023/01/Saudi-Arabian-Airlines-Logo.jpg" },
    { name: "Air India", logo: "https://download.logo.wine/logo/Air_India/Air_India-Logo.wine.png" },
    { name: "Gulf Air", logo: "https://1000logos.net/wp-content/uploads/2021/04/Gulf-Air-logo.png" },
    { name: "Turkish Airlines", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Turkish_Airlines_logo_2019_compact.svg/1024px-Turkish_Airlines_logo_2019_compact.svg.png" },
    { name: "Thai Airways International", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT830f5RbKHqKWeTRRqqREmhkAieqHAP2a8-A&s" },
    { name: "Cathay Pacific Airways", logo: "https://i.pinimg.com/736x/a0/b2/fd/a0b2fd2f62c82ec5e895e68054f0b350.jpg" },
    { name: "China Southern Airlines", logo: "https://1000logos.net/wp-content/uploads/2020/04/China-Southern-logo.jpg" },
    { name: "SriLankan Airlines", logo: "https://download.logo.wine/logo/SriLankan_Airlines/SriLankan_Airlines-Logo.wine.png" },
    { name: "AirAsia", logo: "https://brandlogos.net/wp-content/uploads/2014/11/airasia_2009-2012-logo_brandlogos.net_iplqw.png" },
    { name: "Batik Air", logo: "https://d18c76n7fbdfdp.cloudfront.net/webupload/batik%20air%20logo%20(color).png" },
    { name: "IndiGo", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexOjzKy-7h9YF0mlaVH-pM1MVN7W-2sMMJw&s" },
    { name: "Air Arabia", logo: "https://logos-world.net/wp-content/uploads/2023/01/Air-Arabia-Logo.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search Top Airlines
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            TravelHub's user-friendly platform connects you to top airlines instantly. 
            Enjoy a comfortable and hassle-free journey on any destination and get tickets of top airlines easily.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {airlines.map((airline, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-2 text-center hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="text-3xl mb-2"><img className="w-full h-24 object-contain" src={airline.logo} alt={airline.name} /></div>
              <h3 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {airline.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View All Airlines
          </button>
        </div>
      </div>
    </section>
  );
}
