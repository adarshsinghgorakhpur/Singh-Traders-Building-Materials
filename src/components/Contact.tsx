import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for all your building material needs. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Phone className="text-slate-900" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                  <a href="tel:+919651588662" className="text-gray-600 hover:text-yellow-500 transition">
                    +91 96515 88662
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <MapPin className="text-slate-900" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Siswababu, Belghat<br />
                    Gorakhpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Mail className="text-slate-900" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/919651588662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-yellow-500 transition"
                  >
                    +91 96515 88662
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Clock className="text-slate-900" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 7:00 AM - 8:00 PM<br />
                    Sunday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/YfbVrerW2N1h7Phj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition font-bold"
            >
              Get Directions on Google Maps
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
                Thank you! We'll contact you soon.
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Your email (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Tell us about your requirements"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition font-bold text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3572.981765023755!2d83.10864917665783!3d26.42406502898931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39910f4a16c3ec95%3A0x2afcbc22d036d23c!2sSingh%20traders%20%26%20building%20materials!5e0!3m2!1sen!2sin!4v1773904705268!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Singh Traders Location"
          />
        </div>
      </div>
    </div>
  );
}
