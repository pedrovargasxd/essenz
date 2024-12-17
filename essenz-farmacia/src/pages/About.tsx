import React from 'react';

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-rose-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070"
            alt="Farmácia Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl">Conheça nossa história e compromisso com a saúde</p>
        </div>
      </section>

      {/* História Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nossa História</h2>
            <p className="text-gray-600 mb-6">
              Fundada em 2010, a Essenz nasceu do sonho de oferecer soluções personalizadas em medicamentos manipulados.
              Com mais de uma década de experiência, nos tornamos referência em qualidade e inovação no setor farmacêutico.
            </p>
            <p className="text-gray-600 mb-6">
              Nossa equipe é formada por profissionais altamente qualificados e comprometidos com a excelência em cada fórmula
              manipulada. Investimos constantemente em tecnologia e treinamento para garantir os melhores resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Missão</h3>
              <p className="text-gray-600">
                Proporcionar saúde e bem-estar através de medicamentos manipulados com excelência,
                atendendo às necessidades específicas de cada cliente.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como referência em manipulação farmacêutica,
                inovando constantemente e mantendo os mais altos padrões de qualidade.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-rose-900 mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Excelência em qualidade</li>
                <li>• Compromisso com o cliente</li>
                <li>• Inovação constante</li>
                <li>• Ética e transparência</li>
                <li>• Responsabilidade social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratório Moderno</h3>
              <p className="text-gray-600">
                Equipamentos de última geração para garantir precisão e qualidade
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">
                Profissionais altamente qualificados e em constante atualização
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agilidade</h3>
              <p className="text-gray-600">
                Processos otimizados para entrega rápida sem comprometer a qualidade
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">
                Compromisso com práticas sustentáveis e responsabilidade ambiental
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certificações</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ANVISA</h3>
              <p className="text-gray-600">
                Certificação de Boas Práticas de Manipulação
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-gray-600">
                Certificação de Qualidade em Processos
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CRF</h3>
              <p className="text-gray-600">
                Conselho Regional de Farmácia
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
