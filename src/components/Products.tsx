import { Box, Layers, Mountain, Drill, Hammer, Wrench, Package } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: 'Cement',
      description: 'Premium quality cement from top brands like UltraTech, ACC, and Ambuja. Available in various grades for all construction needs.',
      icon: Box,
      image: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-ro7f6zs9zs.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Moran',
      description: 'River sand and M-sand available. Clean, graded sand suitable for plastering, brickwork, and concrete work.',
      icon: Mountain,
      image: 'https://5.imimg.com/data5/ANDROID/Default/2022/6/ED/IC/GF/34744661/product-jpeg-1000x1000.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Iron Rod',
      description: 'Corrosion-resistant TMT bars in various sizes. High strength and ductility for structural safety.',
      icon: Package,
      image: 'https://t4.ftcdn.net/jpg/02/70/54/01/360_F_270540128_SbIbnPpRno7A3BcZlO8gNqAjjKPJzYwI.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Gravel',
      description: 'Various sizes of gravel and crushed stone. Perfect for concrete mixing and foundation work.',
      icon: Mountain,
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/8/540542206/HM/CA/GM/104112692/jeera-crushed-gitti-stone-500x500.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Construction Tools',
      description: 'Wide range of construction tools and equipment. Quality tools for professional and DIY projects.',
      icon: Drill,
      image: 'https://t4.ftcdn.net/jpg/05/03/69/45/360_F_503694546_u5GUD8KGyTGh44S3HOAVtvd0OJTj3j3O.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Hardware Materials',
      description: 'Nails, screws, bolts, hinges, locks, and all types of hardware materials for construction.',
      icon: Hammer,
      image: 'https://brickandbuild.in/wp-content/uploads/2020/08/Industrial-Hardware-Material-Supply.jpg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-yellow-500">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of quality building materials for all your construction needs.
            Contact us for competitive pricing and bulk orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className="h-56 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <IconComponent className="text-slate-900" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  <a
                    href="tel:+919651588662"
                    className="inline-block mt-4 bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition font-semibold"
                  >
                    Call for Price
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-yellow-500 p-8 md:p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Bulk Orders?</h2>
          <p className="text-slate-700 text-lg mb-6">
            We offer special pricing for bulk orders and long-term contracts. Contact us to discuss your requirements.
          </p>
          <a
            href="tel:+919651588662"
            className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition font-bold text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
