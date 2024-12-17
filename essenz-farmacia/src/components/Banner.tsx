import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[600px] bg-rose-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-rose-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Fórmulas Manipuladas com Excelência
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Qualidade garantida em cada manipulação, cuidando da sua saúde com dedicação e precisão
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-rose-900 px-8 py-3 rounded-full font-semibold hover:bg-rose-100 transition-colors">
            Solicitar Orçamento
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
            Nossos Serviços
          </button>
        </div>

        {/* Floating Cards */}
        <div className="absolute bottom-0 right-0 translate-y-1/2 hidden lg:flex gap-4 max-w-xl">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="text-rose-900 font-bold">100+</div>
            <div className="text-gray-600 text-sm">Fórmulas Disponíveis</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="text-rose-900 font-bold">15 Anos</div>
            <div className="text-gray-600 text-sm">de Experiência</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="text-rose-900 font-bold">5000+</div>
            <div className="text-gray-600 text-sm">Clientes Satisfeitos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
