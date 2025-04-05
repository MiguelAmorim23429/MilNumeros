import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">
          MIL Números
        </div>

        {/* Navegação */}
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#inicio" className="hover:text-blue-600">Início</a>
          <a href="#servicos" className="hover:text-blue-600">Serviços</a>
          <a href="#sobre" className="hover:text-blue-600">Sobre Nós</a>
          <a href="#contactos" className="hover:text-blue-600">Contactos</a>
          <a
            href="#orcamento"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Pedir Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;