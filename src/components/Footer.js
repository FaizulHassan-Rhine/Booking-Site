import Link from "next/link";
import { Plane, Hotel, Calendar, CreditCard, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: "About Us", href: "/about" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "FAQ", href: "/faq" },
    { name: "Hotel Sitemap", href: "/hotel-sitemap" },
    { name: "Medical Tourism", href: "/medical-tourism" },
  ];

  const servicesLinks = [
    { name: "Flight", href: "/flight" },
    { name: "Hotel", href: "/hotel" },
    { name: "Holiday", href: "/holiday" },
    { name: "Visa", href: "/visa" },
  ];

  const usefulLinks = [
    { name: "Travel Guide", href: "/travel-guide" },
    { name: "Travel Advisory", href: "/travel-advisory" },
    { name: "Visa Guide", href: "/visa-guide" },
    { name: "Visa Application", href: "/visa-application" },
    { name: "ST Pay", href: "/st-pay" },
  ];

  const promotionLinks = [
    { name: "News", href: "/news" },
    { name: "Promotions", href: "/promotions" },
    { name: "VAS", href: "/vas" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">TravelHub</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted travel partner for flights, hotels, holidays, and visa services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Promotions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Promotions</h3>
            <ul className="space-y-2">
              {promotionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>ask@travelhub.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Hotline: 13701</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>WhatsApp: Message us</span>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Office Locations</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Dhaka Office</p>
                      <p>3rd Floor, House 1, Road 17, Block C, Banani, Dhaka 1213, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Chattogram Office</p>
                      <p>BM Height 5th Floor, 318 Sheikh Mujib Road, Chattogram 4100, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-lg font-semibold mb-4">We Accept</h3>
              <div className="grid grid-cols-3 gap-2">
                {["Visa", "MasterCard", "bKash", "Nagad", "Rocket", "Upay"].map((method) => (
                  <div key={method} className="bg-gray-800 rounded p-2 text-center text-xs">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              Copyright © {currentYear}. TravelHub. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                Support Center
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/payment-security" className="text-gray-400 hover:text-white transition-colors">
                Payment Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
