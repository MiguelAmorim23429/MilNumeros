import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full text-gray-800">
      <h2 className="text-[44px] font-bold mb-6">Contacte-nos</h2>

      {/* Morada + Contactos lado a lado */}
      <div className="flex flex-col md:flex-row md:justify-between md:gap-8 mb-6 text-[18px]">
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="font-semibold mb-2">Morada</h3>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" />
            Rua João Paulo II nº21, Recarei
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold mb-2">Contactos</h3>
          <div className="flex items-center mb-2">
            <Phone className="w-5 h-5 mr-2 text-gray-600" />
            224 332 354
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-gray-600" />
            geral@milnumeros.pt
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div>
        <iframe
          title="Localização no mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.9186930486756!2d-8.442842323666888!3d41.161117008895446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247ab90b6c52a5%3A0x6d02e7606b4138fc!2sR.%20Jo%C3%A3o%20Paulo%20II%2021%2C%204585%20Recarei!5e0!3m2!1spt-PT!2spt!4v1712337280574!5m2!1spt-PT!2spt"
          width="100%"
          height="220"
          className="rounded-md shadow-sm border"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
