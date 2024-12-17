import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1940',
      category: 'Dermocosméticos',
      title: 'Cremes Personalizados',
      description: 'Fórmulas exclusivas para sua pele'
    },
    {
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030',
      category: 'Suplementos',
      title: 'Vitaminas e Minerais',
      description: 'Suplementação para sua saúde'
    },
    {
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070',
      category: 'Fitoterápicos',
      title: 'Produtos Naturais',
      description: 'O poder da natureza para seu bem-estar'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-rose-900 text-center mb-4">
          Produtos em Destaque
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conheça alguns dos nossos produtos mais populares, desenvolvidos com ingredientes de alta qualidade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="object-cover w-full h-[300px] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium text-rose-200">{product.category}</span>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-sm text-gray-200">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
