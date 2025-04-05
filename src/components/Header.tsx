// components/Header.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ícones modernos
import Logo from '../assets/MilNumerosLogo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0B1F33] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Mil Números Logo" className="h-10" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <a href="#inicio" className="hover:text-orange-400 transition">Início</a>
          <a href="#sobre" className="hover:text-orange-400 transition">Sobre</a>
          <a href="#servicos" className="hover:text-orange-400 transition">Serviços</a>
          <a href="#contactos" className="hover:text-orange-400 transition">Contactos</a>
          <a
            href="#orcamento"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Pedir Orçamento
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 font-medium bg-[#0B1F33]">
          <a href="#inicio" className="block hover:text-orange-400">Início</a>
          <a href="#sobre" className="block hover:text-orange-400">Sobre</a>
          <a href="#servicos" className="block hover:text-orange-400">Serviços</a>
          <a href="#contactos" className="block hover:text-orange-400">Contactos</a>
          <a
            href="#orcamento"
            className="block text-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Pedir Orçamento
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
