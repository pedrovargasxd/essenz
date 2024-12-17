import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
  file?: File | null;
}

const Quote = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    description: '',
    file: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: '',
        file: null
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="relative bg-rose-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069"
            alt="Farmácia Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solicite seu Orçamento</h1>
          <p className="text-xl">Preencha o formulário abaixo e receba sua cotação personalizada</p>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-rose-900 mb-2">Orçamento Solicitado!</h3>
                  <p className="text-gray-600">
                    Entraremos em contato em breve através dos dados fornecidos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors"
                      placeholder="Digite seu e-mail"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                      Descrição da Fórmula *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors"
                      placeholder="Descreva a fórmula que você precisa ou cole a receita aqui"
                    />
                  </div>

                  <div>
                    <label htmlFor="file" className="block text-gray-700 font-medium mb-2">
                      Anexar Receita (opcional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-colors"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Formatos aceitos: PDF, JPG, PNG (máx. 5MB)
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-rose-900 text-white rounded-lg hover:bg-rose-800 transition-colors font-medium text-lg"
                    >
                      Solicitar Orçamento Agora!
                    </button>
                    <p className="text-sm text-gray-500">
                      * Campos obrigatórios
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Additional Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl text-rose-900 mb-4">🔒</div>
                <h3 className="font-bold text-gray-900 mb-2">Dados Seguros</h3>
                <p className="text-gray-600">Suas informações estão protegidas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-rose-900 mb-4">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Resposta Rápida</h3>
                <p className="text-gray-600">Retorno em até 24 horas úteis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-rose-900 mb-4">💊</div>
                <h3 className="font-bold text-gray-900 mb-2">Qualidade Garantida</h3>
                <p className="text-gray-600">Fórmulas com excelência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-rose-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Essenz Farmácia de Manipulação. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Quote;
