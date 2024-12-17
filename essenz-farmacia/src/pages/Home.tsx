import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import ProductCatalog from '../components/ProductCatalog';
import ProductShowcase from '../components/ProductShowcase';

const Home = () => {
  return (
    <>
      <Banner />
      <main>
        <Services />
        <ProductCatalog />
        <ProductShowcase />
        
        <section id="contato" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-rose-900 text-center mb-12">Entre em Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-rose-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-rose-900 mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700">
                    <span className="text-rose-600 mr-2">📍</span>
                    Rua Example, 123 - Centro
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="text-rose-600 mr-2">📞</span>
                    (11) 1234-5678
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="text-rose-600 mr-2">📱</span>
                    WhatsApp: (11) 98765-4321
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="text-rose-600 mr-2">✉️</span>
                    contato@example.com
                  </p>
                </div>
              </div>
              
              <div className="bg-rose-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-rose-900 mb-4">Horário de Funcionamento</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-700">
                    <span className="text-rose-600 mr-2">🕒</span>
                    Segunda a Sexta: 9h às 18h
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="text-rose-600 mr-2">🕒</span>
                    Sábado: 9h às 13h
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="text-rose-600 mr-2">🕒</span>
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
