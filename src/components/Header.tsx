import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="bg-yellow-500 text-slate-900 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="font-semibold">
            <span>Owner - Amit Kumar Singh</span>
          </div>           
          <div className="flex items-center gap-4">
            <a href="tel:+919651588662" className="flex items-center gap-1 hover:text-slate-700 transition">
              <Phone size={14} />
              <span className="font-semibold">+91 96515 88662</span>
            </a>
          </div>          
          <div className="hidden sm:flex items-center gap-1">
            <MapPin size={14} />
            <span>Siswababu, Belghat, Gorakhpur</span>
          </div>         
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold overflow-hidden">
              <span className="text-yellow-500 inline-block animate-slideBounceLeft">Singh Traders & Building Materials</span>
            </h1>
          </div>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`hover:text-yellow-500 transition font-medium ${
                  currentPage === item.id ? 'text-yellow-500' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left hover:text-yellow-500 transition font-medium ${
                  currentPage === item.id ? 'text-yellow-500' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
