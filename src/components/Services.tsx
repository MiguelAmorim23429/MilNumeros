const Services = () => {
    return (
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Um exemplo de serviço */}
          <div className="bg-white p-6 rounded-lg shadow hover:rotate-1 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Contabilidade</h3>
            <p className="mt-2 text-gray-600">
              Gestão completa da contabilidade para empresas e particulares.
            </p>
          </div>
          {/* Mais 2 iguais a este... */}
        </div>
      </section>
    );
  };
  
  export default Services;