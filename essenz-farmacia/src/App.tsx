import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Quote from './pages/Quote';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Banner from './components/Banner';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import ProductCatalog from './components/ProductCatalog';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <Services />
                <ProductCatalog />
                <ProductShowcase />
              </>
            } />
            <Route path="/sobre" element={<About />} />
            <Route path="/orcamento" element={<Quote />} />
            <Route path="/depoimentos" element={<Testimonials />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <footer className="bg-rose-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p> 2024 Essenz Farmácia de Manipulação. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
