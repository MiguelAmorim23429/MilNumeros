// components/Servicos.tsx
import React, { useState } from 'react';
import { BarChart3, FileCog, FileText } from 'lucide-react';

const servicos = [
  {
    titulo: 'Contabilidade',
    descricao: 'Gestão completa da contabilidade da sua empresa, garantindo rigor e conformidade fiscal.',
    icon: <BarChart3 size={64} className="text-white" />,
  },
  {
    titulo: 'Gestão Fiscal',
    descricao: 'Planeamento e otimização fiscal para reduzir encargos e maximizar benefícios.',
    icon: <FileCog size={64} className="text-white" />,
  },
  {
    titulo: 'Consultoria',
    descricao: 'Aconselhamento especializado para ajudar o seu negócio a crescer de forma sustentável.',
    icon: <FileText size={64} className="text-white" />,
  },
];

const Servicos: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="servicos" className="py-24 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#0B1F33] mb-16">Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="perspective"
            onClick={() => toggleFlip(index)}
          >
            <div
              className={`relative w-full h-[340px] transition-transform duration-500 transform-style-preserve-3d ${
                flippedIndex === index ? 'rotate-y-180' : ''
              }`}
            >
              {/* Frente */}
              <div className="absolute inset-0 bg-[#0B1F33] text-white rounded-2xl p-8 flex flex-col items-center justify-center backface-hidden shadow-xl">
                {servico.icon}
                <h3 className="mt-6 text-2xl font-semibold">{servico.titulo}</h3>
              </div>

              {/* Verso */}
              <div className="absolute inset-0 bg-orange-500 text-white rounded-2xl p-8 flex items-center justify-center backface-hidden rotate-y-180 shadow-xl">
                <p className="text-lg leading-relaxed font-medium">{servico.descricao}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicos;
