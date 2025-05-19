import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Impacto() {
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
              Segurança com <span className="text-brand-primary">Tecnologia Preventiva</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Nosso aplicativo visa salvar vidas e minimizar danos por meio da previsão, monitoramento e comunicação eficaz em situações de risco ambiental.
            </p>
          </div>
        </div>
      </div>

      {/* Seções de conteúdo */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        {/* Inclusão Social */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Acesso à Informação e Inclusão
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              O acesso rápido e preciso a informações pode salvar vidas em situações de emergência. Nosso aplicativo democratiza o acesso a dados meteorológicos e alertas oficiais, alcançando até mesmo regiões remotas ou com baixa conectividade.
            </p>
            <p className="mb-6 text-text-body">
              Por meio de notificações em tempo real, mapas interativos e linguagem acessível, comunidades vulneráveis podem se preparar melhor para enfrentar eventos como enchentes, deslizamentos e tempestades. A inclusão digital promove a autonomia local e reduz desigualdades no acesso à prevenção.
            </p>
            <p className="text-text-body">
              Garantir que todos tenham acesso à informação em tempo hábil é essencial para uma resposta eficaz e equitativa diante de desastres naturais, protegendo vidas e fortalecendo a resiliência das comunidades.
            </p>
          </div>
        </section>

        {/* Redução de Danos Ambientais e Humanos */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Redução de Danos e Impactos
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              A prevenção é a melhor forma de reduzir os impactos devastadores de desastres naturais. Com nossa tecnologia, é possível alertar a população com antecedência, permitindo evacuações seguras e planos de contingência bem estruturados.
            </p>
            <p className="mb-6 text-text-body">
              Além de proteger vidas humanas, o aplicativo contribui para evitar perdas econômicas e danos ambientais, auxiliando gestores públicos e equipes de emergência a tomarem decisões baseadas em dados e análises geoespaciais em tempo real.
            </p>
            <p className="text-text-body">
              A integração com sistemas de defesa civil e o uso de inteligência artificial aumentam a precisão dos alertas e diminuem o tempo de resposta, tornando as ações mais eficazes e organizadas.
            </p>
          </div>
        </section>

        {/* Exemplos de Sucesso */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Histórias que Inspiram
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Casos reais mostram o poder da informação na prevenção de tragédias:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-text-body">
              <li>
                <strong className="font-medium text-text-headers">Cidade A:</strong> Após receber alertas antecipados de risco de alagamento, a prefeitura mobilizou rapidamente a evacuação de 2 bairros, evitando perdas humanas e facilitando o atendimento de emergência.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Comunidade B:</strong> Uma vila em área montanhosa foi notificada sobre deslizamentos iminentes. Graças à resposta preventiva, famílias foram transferidas e abrigos foram ativados com segurança.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Escola C:</strong> Professores e alunos participaram de um simulado coordenado pelo app, o que reduziu o tempo de reação em emergências e aumentou a confiança da comunidade escolar em situações de risco.
              </li>
            </ol>
            <p className="mb-6 text-text-body">
              Esses exemplos reforçam a importância de um sistema de alerta eficaz, que transforma a tecnologia em um escudo protetor para milhares de pessoas expostas a desastres naturais todos os anos.
            </p>
            <p className="text-text-body">
              Prevenção, preparo e resposta são pilares para um futuro mais seguro. Ao combinar dados, comunicação e mobilização, nosso app representa uma nova era na gestão de riscos e na defesa da vida.
            </p>
          </div>
        </section>
      </div>

      {/* Contact Form */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
          Entre em contato para saber mais ou contribuir com o projeto.
        </h2>
        <ContactForm />
      </div>
      <WhatsAppButton />
    </main>
  );
}
