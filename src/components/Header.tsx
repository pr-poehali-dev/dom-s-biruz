import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/projects", label: "Проекты домов" },
    { href: "/about", label: "О нас" },
    { href: "/services", label: "Услуги" },
    { href: "/pricing", label: "Цены" },
    { href: "/gallery", label: "Галерея" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <Link to="/" className="flex items-center space-x-3">
            <Icon name="Home" size={32} className="text-blue-600" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                РостовДом
              </h1>
              <p className="text-sm text-gray-600 hidden md:block">
                Строительство домов в Ростовской области
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (863) 123-45-67
            </Button>
            <Button size="sm">Консультация</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" size="sm" className="justify-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (863) 123-45-67
                </Button>
                <Button size="sm">Консультация</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
