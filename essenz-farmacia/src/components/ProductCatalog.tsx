import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  benefits: string[];
}

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'emagrecimento', name: 'Emagrecimento' },
    { id: 'dermatologia', name: 'Dermatologia' },
    { id: 'saudemasculina', name: 'Saúde Masculina' },
    { id: 'saudefeminina', name: 'Saúde Feminina' },
    { id: 'suplementos', name: 'Suplementos' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Fórmula Emagrecedora Plus',
      category: 'emagrecimento',
      description: 'Composto personalizado para auxiliar no processo de emagrecimento saudável.',
      image: 'https://images.unsplash.com/photo-1626465489500-29a421febe9c?q=80&w=2070',
      benefits: ['Auxilia na queima de gordura', 'Controle do apetite', 'Aumento da disposição']
    },
    {
      id: 2,
      name: 'Creme Anti-idade',
      category: 'dermatologia',
      description: 'Tratamento personalizado para rejuvenescimento e hidratação profunda da pele.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974',
      benefits: ['Redução de rugas', 'Hidratação profunda', 'Proteção UV']
    },
    {
      id: 3,
      name: 'Vitamina para Homens',
      category: 'saudemasculina',
      description: 'Suplemento vitamínico formulado especialmente para as necessidades masculinas.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070',
      benefits: ['Aumento da energia', 'Saúde hormonal', 'Fortalecimento muscular']
    },
    {
      id: 4,
      name: 'Complexo Feminino',
      category: 'saudefeminina',
      description: 'Fórmula exclusiva para atender às necessidades da saúde feminina.',
      image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=2070',
      benefits: ['Equilíbrio hormonal', 'Saúde íntima', 'Bem-estar geral']
    },
    {
      id: 5,
      name: 'Suplemento Multivitamínico',
      category: 'suplementos',
      description: 'Blend completo de vitaminas e minerais para sua saúde diária.',
      image: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?q=80&w=1974',
      benefits: ['Fortalecimento imunológico', 'Energia diária', 'Saúde dos ossos']
    },
    {
      id: 6,
      name: 'Creme Hidratante Facial',
      category: 'dermatologia',
      description: 'Hidratante facial personalizado para seu tipo de pele.',
      image: 'https://images.unsplash.com/photo-1556229174-5e42a09e45c3?q=80&w=1974',
      benefits: ['Hidratação profunda', 'Controle da oleosidade', 'Proteção da pele']
    }
  ];

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-rose-900 text-center mb-4">
          Nossos Produtos
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conheça nossa linha completa de produtos manipulados, desenvolvidos com os mais altos padrões de qualidade.
        </p>

        {/* Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-rose-900 text-white'
                  : 'bg-rose-50 text-rose-900 hover:bg-rose-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-rose-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <span className="text-rose-600 mr-2">•</span>
                      {benefit}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-rose-900 text-white px-4 py-2 rounded-md hover:bg-rose-800 transition-colors">
                    Solicitar Orçamento
                  </button>
                  <button className="flex-1 border border-rose-900 text-rose-900 px-4 py-2 rounded-md hover:bg-rose-50 transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
