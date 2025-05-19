import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ProximosPassos() {
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
              Visão de Futuro para a <span className="text-brand-primary">Prevenção de Desastres</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Estamos comprometidos em levar soluções inteligentes e escaláveis para proteger comunidades vulneráveis em todo o país.
            </p>
          </div>
        </div>
      </div>

      {/* Seções de conteúdo */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        {/* Continuidade do Projeto */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Continuidade do Projeto
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Nosso trabalho não termina com a implementação inicial. A continuidade envolve o aprimoramento contínuo das ferramentas de monitoramento, capacitação das comunidades e parcerias com governos locais.
            </p>
            <p className="mb-6 text-text-body">
              Já estamos em fase de expansão para novas regiões, com foco em áreas de alto risco geológico e climático. A manutenção e atualização dos dados coletados são prioridades para garantir respostas rápidas e eficazes.
            </p>
            <p className="text-text-body">
              A prevenção eficaz exige comprometimento de longo prazo e, por isso, seguimos fortalecendo nossa atuação de forma consistente e responsável.
            </p>
          </div>
        </section>

        {/* Escalabilidade e Expansão */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Escalabilidade e Expansão
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Para escalar nosso impacto, estamos desenvolvendo modelos replicáveis de prevenção baseados em tecnologia acessível e dados em tempo real. Isso inclui plataformas de alerta antecipado, mapas de risco interativos e painéis de controle para gestores públicos.
            </p>
            <p className="mb-6 text-text-body">
              Com apoio estratégico e infraestrutura adequada, nossa meta é atingir 500 municípios até o próximo ciclo. Também buscamos internacionalizar a solução, começando por regiões da América Latina com desafios semelhantes.
            </p>
            <p className="text-text-body">
              A escalabilidade não é apenas sobre crescer — é sobre crescer com qualidade, garantindo que cada comunidade atendida esteja mais preparada para o futuro.
            </p>
          </div>
        </section>

        {/* Inovação Contínua */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Inovação Contínua
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              A tecnologia está em constante evolução, e nosso projeto também. Estamos investindo em inteligência artificial para análise de risco preditiva, além de sensores remotos e drones para monitoramento em tempo real.
            </p>
            <p className="text-text-body">
              O objetivo é sempre estar um passo à frente dos desastres, transformando dados em ações preventivas e salvando vidas.
            </p>
          </div>
        </section>

        {/* Chamada à ação final */}
        <section className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-text-headers mb-4">
              O futuro da prevenção começa agora.
              <span className="block mt-2 text-brand-primary">
                Vamos juntos construir comunidades mais seguras.
              </span>
            </h2>
            <p className="text-text-body">
              Entre em contato para apoiar, colaborar ou implementar nossa solução em sua região. Estamos prontos para crescer com responsabilidade e impacto real.
            </p>
          </div>
        </section>
      </div>

      {/* Formulário de contato */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
          Fale conosco para saber mais ou participar da expansão.
        </h2>
        <ContactForm />
      </div>
      <WhatsAppButton />
    </main>
  );
}