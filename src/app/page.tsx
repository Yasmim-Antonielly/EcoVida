import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

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
              EcoVida
              <span className="block mt-1 text-brand-primary">Prevenção de Desastres Naturais</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Aplicativo que salva vidas e evita acidentes por meio da comunicação de possíveis desastres naturais no seu Estado, cidade e inclusive no seu bairro!
            </p>
          </div>
        </div>
      </div>

      {/* Seções centralizadas */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Quem Somos */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center">
            Quem Somos
          </h2>
          <p className="mt-4 text-text-body max-w-3xl mx-auto text-center">
            Em um cenário marcado pelo aquecimento global, pessoas do mundo inteiro estão sofrendo as consequências perdendo suas casas, meios de subsistência, rotinas, saúde e até mesmo a própria vida nas enchentes, inundações, secas, dentre os mais diversos desastres naturais, conforme publicado no estudo realizado pela Organização Metereológica Mundial, OMM, em maio de 2023: "Extensas inundações no Paquistão causadas por fortes chuvas em julho e agosto do ano passado mataram mais de 1,7 mil pessoas e cerca de 33 milhões foram afetadas. A OMM destaca que os danos totais e as perdas econômicas foram avaliados em US$ 30 bilhões e que, até outubro de 2022, cerca de 8 milhões de pessoas foram deslocadas internamente pelas enchentes." Preocupados com esse cenário, nós, da Ecovida, desenvolvemos um aplicativo visando minimizar esses efeitos a partir de um bem comum: a comunicação.
          </p>
          <div className="mt-6 text-center">
            <a
              href="https://docs.google.com/document/d/1Lv6AKnlWqZ0GDDokIeDiJjM0z9vzYhb5zj-JXKTN6Tc/edit?hl=pt-br&tab=t.0#heading=h.rtl6xs1e6fq0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-primary underline hover:text-brand-secondary transition-colors text-lg font-medium"
            >
              Integrantes do projeto
            </a>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center">
            Nossa Missão
          </h2>
          <p className="mt-4 text-text-body max-w-3xl mx-auto text-center">
            Tendo em vista que diversas pessoas não recebem informações rápidas e precisas sobre eventos que estão por acontecer ou que já estão ocorrendo em suas regiões, surgiu a preocupação sobre como facilitar a recepção da comunicação dos alertas ambientais, que nos levou a criação de uma solução que atendesse a esses critérios: o EcoVida! Sendo simples e intuitivo, o Ecovida é um aplicativo que notifica os usuários sobre possíveis desastres naturais na sua cidade, permitindo que eles se preparem e tomem as devidas precauções de forma mais eficiente.
          </p>
        </section>

        {/* Video Section */}
        <section className="mt-16 md:mt-20 flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/ebZK9wtOv_k?si=whLcQGAkZvvBDqjw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
      <WhatsAppButton />
    </main>
  );
}