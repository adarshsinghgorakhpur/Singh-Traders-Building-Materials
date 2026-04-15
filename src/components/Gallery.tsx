export default function Gallery() {
  const galleryImages = [
    {
      url: 'https://images.jdmagicbox.com/v2/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-ppkny5zszt.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Construction Site',
      category: 'Projects',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-ro7f6zs9zs.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cement Bags',
      category: 'Materials',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-ci1e32dml8.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Building Materials',
      category: 'Materials',
    },
    {
      url: 'https://raw.githubusercontent.com/adarshsinghgorakhpur/Public/refs/heads/main/for%20database/hh.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Moran',
      category: 'Materials',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-m8kqj1suah.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Building Materials',
      category: 'Inventory',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-olpgk9wpos.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Sand Supply',
      category: 'Materials',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-l4x1oae94g.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Gravel and Stone',
      category: 'Materials',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-za3e257gea.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Construction Tools',
      category: 'Tools',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-5pj29kt2oo.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Building Work',
      category: 'Projects',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-67ebbtj1cf.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Hardware Store',
      category: 'Inventory',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-uob1cis2td.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Brick Stack',
      category: 'Materials',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-9orn2pvw68.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Quality Products',
      category: 'Materials',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-061y66cjb3.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Quality Products',
      category: 'Materials',
    },   
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-x91r1p6280.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Brick Stack',
      category: 'Materials',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-mezqjsii1i.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Quality Products',
      category: 'Materials',
    },
    {
      url: 'https://images.jdmagicbox.com/comp/gorakhpur/p6/9999px551.x551.210920213730.d8p6/catalogue/singh-traders-and-building-materials-belghat-gorakhpur-building-material-dealers-vfjbcm70qq.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Quality Products',
      category: 'Materials',
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-yellow-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our extensive inventory, quality products, and successful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-yellow-500 text-sm font-semibold mb-1">{image.category}</p>
                  <h3 className="text-white text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-lg inline-block">
            <h2 className="text-3xl font-bold mb-4">Visit Our Store</h2>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Come visit us to see our complete range of products. Our team will be happy to assist you with your construction needs.
            </p>
            <a
              href="https://maps.app.goo.gl/YfbVrerW2N1h7Phj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-slate-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition font-bold"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
