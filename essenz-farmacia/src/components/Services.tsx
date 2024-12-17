import React from 'react';

const ServiceCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-4xl text-rose-800 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-rose-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: '💊',
      title: 'Medicamentos Manipulados',
      description: 'Fórmulas personalizadas de acordo com sua necessidade específica.'
    },
    {
      icon: '⚖️',
      title: 'Emagrecimento',
      description: 'Suplementos e fórmulas especiais para apoiar sua jornada de emagrecimento.'
    },
    {
      icon: '🧠',
      title: 'Saúde Mental',
      description: 'Medicamentos manipulados para tratamentos psiquiátricos e neurológicos.'
    },
    {
      icon: '🌿',
      title: 'Fitoterápicos',
      description: 'Produtos naturais e fitoterápicos para uma abordagem mais natural.'
    },
    {
      icon: '✨',
      title: 'Dermocosméticos',
      description: 'Produtos personalizados para cuidados com a pele e cabelo.'
    },
    {
      icon: '💪',
      title: 'Suplementação',
      description: 'Suplementos vitamínicos e minerais para sua saúde e bem-estar.'
    }
  ];

  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-rose-900 text-center mb-4">
          Nossos Serviços
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Oferecemos uma ampla gama de serviços personalizados para atender às suas necessidades específicas de saúde e bem-estar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
