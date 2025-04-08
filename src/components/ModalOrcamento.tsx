import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalOrcamento = ({ isOpen, onClose }: ModalProps) => {
  const [state, handleSubmit] = useForm("xqapgqze");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) setSubmitted(true);
  };

  // Fecha o modal ao clicar no botão "Obrigado!"
  const handleThankYouClick = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        {/* Cabeçalho */}
        <div className="bg-orange-600 text-white text-center py-4 rounded-t-lg">
          <h2 className="text-2xl font-bold">Pedir Orçamento</h2>
        </div>

        {/* Formulário */}
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div>
            <label className="block font-semibold">Nome</label>
            <input
              type="text"
              name="nome"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label className="block font-semibold">Telefone</label>
            <input
              type="tel"
              name="telefone"
              required
              pattern="^\d{9}$"
              title="O número deve conter exatamente 9 dígitos."
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="servico">Serviço Pretendido</label>
            <select
              name="servico"
              id="servico"
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Escolha um serviço</option>
              <option value="Contabilidade">Contabilidade</option>
              <option value="Gestão Fiscal">Gestão Fiscal</option>
              <option value="Consultoria">Consultoria</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Mensagem</label>
            <textarea
              name="mensagem"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
            />
            <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors} />
          </div>

          <button
            type={submitted ? "button" : "submit"}
            onClick={submitted ? handleThankYouClick : undefined}
            disabled={state.submitting}
            className={`w-full font-bold py-2 rounded-md transition ${
              submitted
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-[#001C3A] hover:bg-blue-900 text-white"
            }`}
          >
            {submitted ? "Obrigado!" : "Enviar Pedido"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalOrcamento;
