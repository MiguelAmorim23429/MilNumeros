import About from "../components/About";
import Contact from "../components/Contact";

const SectionAboutContact = () => {
  return (
    <section className="bg-[#0a1c2e] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">

        {/* Secção Sobre */}
        <div id="sobre" className="md:w-1/2">
          <About />
        </div>

        {/* Secção Contactos */}
        <div id="contactos" className="md:w-1/2">
          <Contact />
        </div>
        
      </div>
    </section>
  );
};

export default SectionAboutContact;
