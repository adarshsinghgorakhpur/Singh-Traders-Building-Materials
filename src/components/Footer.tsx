import { Phone, MapPin, Mail, Map } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-yellow-500">Singh Traders</span>
              <br />
              & Building Materials
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted supplier of quality building materials in Belghat.
              Serving contractors, builders, and local customers with excellence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <a href="tel:+919651588662" className="flex items-center gap-2 hover:text-yellow-500 transition">
                <Phone size={18} />
                <span>+91 96515 88662</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Siswababu, Belghat, Gorakhpur</span>
              </div>
              <a
                href="https://wa.me/919651588662"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-500 transition"
              >
                <Mail size={18} />
                <span>WhatsApp: +91 96515 88662</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <div className="space-y-2 text-gray-300">
              <a
                href="https://maps.app.goo.gl/YfbVrerW2N1h7Phj8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-500 transition"
              >
                <Map size={18} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Singh Traders & Building Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
