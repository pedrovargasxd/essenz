import React from 'react';
import TestimonialsSection from '../components/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative bg-rose-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
            alt="Pharmacy Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Depoimentos</h1>
          <p className="text-xl">
            Descubra o que nossos clientes dizem sobre nossa farmácia
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action */}
      <section className="py-16 bg-rose-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Faça parte da nossa história de sucesso
          </h2>
          <p className="text-xl mb-8">
            Experimente nossas fórmulas manipuladas e comprove a qualidade
          </p>
          <a
            href="/orcamento"
            className="inline-block bg-white text-rose-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Solicitar Orçamento
          </a>
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

export default TestimonialsPage;
