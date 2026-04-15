import { Award, Users, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
            About <span className="text-yellow-500">Singh Traders</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Building Trust, Delivering Quality Since Years
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: 'url(https://images.jdmagicbox.com/v2/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-ppkny5zszt.jpg?auto=compress&cs=tinysrgb&w=800)',
              }}
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Singh Traders & Building Materials has been a trusted name in the Belghat region,
                serving the construction industry with dedication and commitment to quality.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We specialize in providing a comprehensive range of building materials to contractors,
                builders, and individual customers, ensuring that every project gets the quality materials
                it deserves.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in Siswababu, Belghat, we have built strong relationships with our customers
                by maintaining high standards and providing exceptional service.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-900 text-white p-6 rounded-lg text-center">
              <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-slate-900" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Quality</h3>
              <p className="text-gray-300 text-sm">
                Premium materials from trusted brands
              </p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg text-center">
              <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-slate-900" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Service</h3>
              <p className="text-gray-300 text-sm">
                Dedicated customer support team
              </p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg text-center">
              <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-slate-900" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-300 text-sm">
                On-time delivery every time
              </p>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-lg text-center">
              <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-slate-900" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-gray-300 text-sm">
                Expanding to serve you better
              </p>
            </div>
          </div>

          <div className="bg-yellow-500 p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Contractors</h3>
                <p className="text-slate-700">
                  Bulk supplies for large construction projects with competitive pricing
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Builders</h3>
                <p className="text-slate-700">
                  Complete material solutions for residential and commercial buildings
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Local Customers</h3>
                <p className="text-slate-700">
                  Quality materials for home renovation and construction needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
