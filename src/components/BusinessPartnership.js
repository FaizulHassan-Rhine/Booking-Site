import { ArrowRight, Users, TrendingUp, Globe } from "lucide-react";

export default function BusinessPartnership() {
  const benefits = [
    {
      icon: Users,
      title: "Reach More Customers",
      description: "Expand your customer base with our extensive network of travelers",
    },
    {
      icon: TrendingUp,
      title: "Boost Sales",
      description: "Increase your revenue with our proven marketing strategies",
    },
    {
      icon: Globe,
      title: "Expand Your Brand",
      description: "Grow your business effortlessly with our platform",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Grow Your Business with TravelHub Shop
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Partner with us to reach more customers, boost sales, and expand your brand effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto">
            <span>Become a Partner</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
