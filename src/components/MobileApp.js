import { Smartphone, Download, QrCode, Star, Gamepad2, CreditCard } from "lucide-react";

export default function MobileApp() {
  const features = [
    {
      icon: Smartphone,
      title: "Real-time Updates",
      description: "Get instant flight updates and schedules",
    },
    {
      icon: Gamepad2,
      title: "Play Games",
      description: "Win trip coins while playing fun games",
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      description: "Secure and convenient payment options",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-br from-indigo-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your all-in-one Travel App
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Get flights, hotels, holidays and visa assistance in just a few taps. 
              Enjoy real-time flight updates, schedules, travel info, play games, 
              win trip coins and much more.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-white bg-opacity-20 rounded-full p-2">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-indigo-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>App Store</span>
              </button>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Play Store</span>
              </button>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl w-64 h-[500px] relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-blue-600 h-8 flex items-center justify-between px-4 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 h-full bg-linear-to-b from-blue-50 to-white">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Smartphone className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">TravelHub</h3>
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
              
              {/* QR Code */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-2 shadow-lg">
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <QrCode className="h-8 w-8 text-gray-600" />
                </div>
                <p className="text-xs text-gray-600 text-center mt-1">Scan to Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
