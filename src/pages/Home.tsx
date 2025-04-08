import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import SectionAboutContact from "../components/SectionAboutContact";
import Footer from "../components/Footer";
import ModalOrcamento from "../components/ModalOrcamento";

const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
        <Header setShowModal={setShowModal} />
        <Hero setShowModal={setShowModal} />
        <Services />
        <SectionAboutContact />
        <Footer />
        <ModalOrcamento isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Home;
