import { Phone, MapPin, Building2, Truck, Shield, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[500px] md:h-[600px] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(https://images.jdmagicbox.com/v2/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-ppkny5zszt.jpg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Singh Traders & Building Materials
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-400">
              Siswababu, Belghat, Gorakhpur 273404
            </p>          
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919651588662"
                className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://maps.app.goo.gl/g4T6ZQPSij1RDhdT6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best quality building materials and exceptional service to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-slate-900" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Quality Assured</h3>
              <p className="text-gray-600">
                We supply only the highest quality materials from trusted manufacturers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-slate-900" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery services to your construction site.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-slate-900" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Wide Range</h3>
              <p className="text-gray-600">
                Comprehensive selection of building materials under one roof.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-slate-900" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Always Available</h3>
              <p className="text-gray-600">
                Ready to serve you with materials whenever you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Popular Products
            </h2>
            <p className="text-gray-600">
              Browse our most sought-after building materials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { name: 'Cement', image: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-ro7f6zs9zs.jpg?auto=compress&cs=tinysrgb&w=600' },
              { name: 'Iron Rod', image: 'https://content.jdmagicbox.com/quickquotes/images_main/structural-metal-iron-rod-803204425-qantbpkb.jpg?auto=compress&cs=tinysrgb&w=600' },
              { name: 'Moran', image: 'https://5.imimg.com/data5/ANDROID/Default/2022/6/ED/IC/GF/34744661/product-jpeg.jpg?auto=compress&cs=tinysrgb&w=600' },
              { name: 'Gravel', image: 'https://5.imimg.com/data5/SELLER/Default/2025/8/540542206/HM/CA/GM/104112692/jeera-crushed-gitti-stone-500x500.jpg?auto=compress&cs=tinysrgb&w=600' },
            ].map((product) => (
              <div key={product.name} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('products')}
              className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Contractor',
                text: 'Singh Traders has been our go-to supplier for all building materials. Always reliable and quality products.',
              },
              {
                name: 'Arnav Vishwakarma',
                role: 'Builder',
                text: 'Excellent service and competitive prices. The delivery is always on time which helps keep our projects on schedule.',
              },
              {
                name: 'Prinkesh Yadav',
                role: 'Homeowner',
                text: 'Very helpful staff and good quality materials. They guided us through our home renovation project.',
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-slate-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="font-bold text-yellow-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
