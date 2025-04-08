import React from "react";
import HeroImage from "../assets/HeroImage.png";

interface HeroProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ setShowModal }) => {
  return (
    <section id="inicio" className="relative w-full h-[550px] md:h-[650px] overflow-hidden flex items-center">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-right md:bg-center z-0"
        style={{ backgroundImage: `url(${HeroImage})` }}
      />

      {/* Triângulo laranja */}
      <svg
        className="absolute inset-0 w-full h-full z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 50,0 40,100 0,100" fill="#ea580c" />
      </svg>

      {/* Texto principal (lado esquerdo) */}
      <div className="absolute z-20 left-6 md:left-16 px-4 md:px-0 max-w-xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Contabilidade <br />
          e Gestão <br />
          IRC / IRS
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#001d36] text-white font-bold px-6 py-3 rounded hover:bg-[#003459] mb-4"
        >
          Iniciar Pedido
        </button>

        {/* Mostra nome e título EM MOBILE */}
        <div className="block md:hidden mt-2 text-sm">
          <h2 className="text-2xl font-bold leading-snug">
            AMANDIO <br /> GUIMARÃES
          </h2>
          <p className="mt-1 tracking-wide text-[13px]">
            ECONOMISTA &nbsp;&nbsp; CONTABILISTA CERTIFICADO
          </p>
        </div>
      </div>

      {/* Conteúdo da direita — apenas em DESKTOP */}
      <div className="hidden md:block absolute z-20 right-16 text-white text-right max-w-md">
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
          AMÂNDIO <br /> GUIMARÃES
        </h2>
        <p className="mt-4 text-2xl tracking-wider">
          ECONOMISTA &nbsp;&nbsp; CONTABILISTA CERTIFICADO
        </p>
      </div>
    </section>
  );
};

export default Hero;
