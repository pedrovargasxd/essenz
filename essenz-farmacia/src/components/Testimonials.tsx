import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Cliente desde 2022",
    content: "Excelente atendimento e fórmulas personalizadas que realmente funcionam! A equipe é muito atenciosa e profissional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Cliente desde 2021",
    content: "Encontrei na Essenz a solução perfeita para minhas necessidades. As fórmulas são preparadas com muito cuidado e qualidade.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Ana Oliveira",
    role: "Cliente desde 2023",
    content: "Ótimo custo-benefício e atendimento personalizado. Recomendo a todos que precisam de medicamentos manipulados.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Cliente desde 2020",
    content: "Farmácia de confiança! Sempre entregam no prazo e com a qualidade que precisamos. Muito satisfeito com os resultados.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  },
  {
    id: 5,
    name: "Patricia Lima",
    role: "Cliente desde 2023",
    content: "Profissionais extremamente capacitados e atenciosos. As fórmulas são preparadas com excelência e os resultados são fantásticos!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos de quem confia em nossa qualidade
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-rose-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-rose-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-rose-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-rose-800 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Testimonial Content */}
            <div className="text-center">
              <div className="mb-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-xl italic text-gray-900 mb-4">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="text-gray-800 font-semibold">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-600">
                {testimonials[currentIndex].role}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-rose-900' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Satisfação Garantida
            </h3>
            <p className="text-gray-600">
              98% dos nossos clientes recomendam nossos serviços
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Reconhecimento
            </h3>
            <p className="text-gray-600">
              Premiada como melhor farmácia de manipulação
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Qualidade Superior
            </h3>
            <p className="text-gray-600">
              Certificada pelos principais órgãos reguladores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
