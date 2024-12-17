import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative bg-rose-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069"
            alt="Pharmacy Contact"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-xl">
            Estamos aqui para ajudar. Entre em contato conosco!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Additional Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Atendimento Rápido
              </h3>
              <p className="text-gray-600">
                Respondemos todas as mensagens em até 2 horas em horário comercial
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Suporte Especializado
              </h3>
              <p className="text-gray-600">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Multi-canais
              </h3>
              <p className="text-gray-600">
                Atendimento via WhatsApp, telefone, e-mail ou presencial
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p> 2024 Essenz Farmácia de Manipulação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
