import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <div className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <Navbar />
        </div>
      </div>
      
      {/* Hero Section com fundo cinza */}
      <div className="w-full bg-background-silver">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="py-8 md:py-12">
            <h1 className="text-4xl md:text-5xl font-medium text-text-headers text-center">
              Energia Sustentável para um
              <span className="block mt-1 text-brand-primary">Futuro Justo</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Nosso projeto para a Global Solution 2024 apresenta uma proposta de microgrids comunitários que utilizam energia solar e eólica para fornecer eletricidade limpa e acessível a comunidades carentes, promovendo autonomia e desenvolvimento sustentável.
            </p>
          </div>
        </div>
      </div>

      {/* Seções centralizadas */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Nossa Missão */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center">
            Nossa Missão
          </h2>
          <p className="mt-4 text-text-body max-w-3xl mx-auto text-center">
            Facilitar a transição para um futuro mais sustentável, garantindo que comunidades e indivíduos tenham acesso acessível e equitativo às tecnologias de energia renovável.
          </p>
        </section>

        {/* Por Que Microgrids? */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center">
            Por Que Microgrids?
          </h2>
          <p className="mt-4 text-text-body max-w-3xl mx-auto text-center">
            Uma alternativa eficiente e econômica para geração local de energia limpa.
          </p>
        </section>

        {/* Video Section */}
        <section className="mt-16 md:mt-20 flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="bg-gray-200 w-full aspect-video flex items-center justify-center">
              <p className="text-text-headers">Vídeo do pitch</p>
            </div>
          </div>
        </section>

        {/* Contact Form com título centralizado */}
        <section className="mt-16 md:mt-20 mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Fale conosco para saber mais ou colaborar.
          </h2>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}