import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
// Nota: No Next.js com App Router, não é necessário importar globals.css em cada página
// pois ele já é importado no arquivo layout.tsx e se aplica globalmente

export default function Apoie() {
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
              Junte-se a Nós na Expansão dos <span className="text-brand-primary">Microgrids</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Convidamos empresas, ONGs e indivíduos a apoiar nossa iniciativa por meio de financiamento, parcerias ou voluntariado.
            </p>
          </div>
        </div>
      </div>

      {/* Seções de conteúdo */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        {/* Parcerias */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Parcerias
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Unir forças é essencial para transformar a visão de um mundo
              sustentável em realidade. Nossa iniciativa está aberta à colaboração
              com empresas, organizações não governamentais e instituições que
              compartilham o compromisso com a inclusão social e a
              sustentabilidade.
            </p>
            <p className="mb-4 text-text-body">As parcerias podem contribuir de várias formas:</p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-text-body">
              <li>
                <strong className="font-medium text-text-headers">Recursos financeiros:</strong> Apoio monetário para
                viabilizar a instalação de microgrids em comunidades carentes.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Expertise técnica:</strong> Engenheiros, pesquisadores e
                especialistas podem agregar conhecimentos valiosos para aprimorar
                a eficiência dos sistemas.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Materiais e equipamentos:</strong> Doações de componentes
                como painéis solares, baterias e inversores são fundamentais para
                a expansão do projeto.
              </li>
            </ul>
            <p className="text-text-body">
              Juntos, podemos levar energia renovável a lugares que mais precisam,
              promovendo impacto duradouro e positivo.
            </p>
          </div>
        </section>

        {/* Como Ajudar */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Como Ajudar
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-4 text-text-body">
              Existem várias maneiras de contribuir para o sucesso desta
              iniciativa:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3 text-text-body">
              <li>
                <strong className="font-medium text-text-headers">Financie:</strong> Faça doações ou invista em um projeto
                que combina impacto social com inovação tecnológica. Cada
                contribuição acelera a implementação dos microgrids.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Voluntarie-se:</strong> Engaje-se pessoalmente, oferecendo
                suas habilidades ou ajudando em ações locais de conscientização e
                capacitação.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Divulgue:</strong> Amplifique nossa mensagem
                compartilhando o projeto em redes sociais, eventos e entre seus
                contatos. Quanto mais pessoas conhecerem a iniciativa, maior será
                o impacto.
              </li>
            </ul>
            <p className="text-text-body">
              Qualquer apoio, grande ou pequeno, ajuda a transformar vidas por
              meio do acesso à energia limpa.
            </p>
          </div>
        </section>

        {/* Agradecimentos */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Agradecimentos
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Reconhecemos com imensa gratidão os parceiros que tornaram este
              projeto possível. Seja através de financiamento, doação de
              equipamentos ou suporte técnico, sua contribuição faz a diferença.
            </p>
            <p className="text-text-body">
              Parceiros recebem visibilidade em nossas campanhas e materiais
              promocionais, além de se tornarem parte de uma rede de transformação
              social e ambiental. Juntos, celebramos cada avanço na busca por um
              mundo mais sustentável.
            </p>
          </div>
        </section>

        {/* Seção final com chamada à ação */}
        <section className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-text-headers mb-4">
              Juntos, podemos criar um futuro de energia limpa e acessível para todos.
              <span className="block mt-2 text-brand-primary">
                Participe dessa transformação!
              </span>
            </h2>
            <p className="text-text-body">
              Não fique de fora! Conecte-se conosco para fazer parte dessa jornada
              de impacto positivo e construção de um mundo mais sustentável.
            </p>
          </div>
        </section>
      </div>

      {/* Contact Form */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
          Fale conosco para saber mais ou colaborar.
        </h2>
        <ContactForm />
      </div>
    </main>
  );
}