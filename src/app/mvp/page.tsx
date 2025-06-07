import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Projeto() {
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
              Guardiã Natural
              <span className="block mt-1 text-brand-primary">Prevenção de Desastres Naturais</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Aplicativo que salva vidas e evita acidentes por meio da comunicação de possíveis desastres naturais no seu Estado, cidade e inclusive no seu bairro!
            </p>
          </div>
        </div>
      </div>

      {/* Seções de conteúdo */}
      <div className="pxmax-w-[1440px] mx-auto px-4 md:-8 py-16">
        {/* Importância da Energia */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            MVP DO PROJETO
          </h2>
            <p className="mt-4 text-text-body max-w-3xl mx-auto text-center">
              O MVP (Produto Mínimo Viável) do nosso aplicativo já está desenvolvido e funcional. Ele consegue detectar e exibir alertas de desastres naturais, como enchentes, terremotos ou furacões, com base em dados de fontes confiáveis. Os usuários podem receber notificações em tempo real, visualizar informações detalhadas e até configurar suas preferências de alerta, garantindo uma experiência prática e útil.
            </p>
        </section>
        </div>
        {/* Video Section */}
    
        <section className="mt-16 md:mt-20 flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/I2M2AKv_zWo?si=Hyk7EmkMgIj9bLE-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

      {/* Contact Form */}
      <section className="mt-16 md:mt-20 mb-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
          Fale conosco para saber mais ou colaborar.
        </h2>
        <ContactForm />
        </div>
       </section>
       
      <WhatsAppButton />
    </main>
  );
}