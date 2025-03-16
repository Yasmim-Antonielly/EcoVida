import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
// Nota: No Next.js com App Router, não é necessário importar globals.css em cada página
// pois ele já é importado no arquivo layout.tsx e se aplica globalmente

export default function Problematica() {
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
              O Desafio da <span className="text-brand-primary">Energia Limpa</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Milhões ainda carecem de acesso à energia confiável, e a dependência de combustíveis fósseis agrava a crise climática. Nosso projeto propõe uma alternativa sustentável e inclusiva para enfrentar esses desafios.
            </p>
          </div>
        </div>
      </div>

      {/* Seções de conteúdo */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        {/* Importância da Energia */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Importância da Energia
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              A transição para fontes renováveis é essencial para enfrentar os
              desafios globais relacionados à mudança climática e à dependência de
              combustíveis fósseis. Energia renovável, como solar e eólica, reduz
              significativamente as emissões de gases de efeito estufa,
              contribuindo para a mitigação do aquecimento global. Além disso,
              essas fontes são abundantes e inesgotáveis, tornando-as uma
              alternativa sustentável para suprir as crescentes demandas
              energéticas.
            </p>
            <p className="text-text-body">
              Investir em energia renovável não é apenas uma escolha ambiental,
              mas também econômica: ela reduz a dependência de fontes de energia
              importadas, gera empregos verdes e promove o desenvolvimento
              tecnológico. Em comunidades, a energia renovável pode transformar
              vidas ao fornecer uma base para o progresso social, como acesso
              confiável à eletricidade, educação e saúde. Ao adotar tecnologias
              limpas, pavimentamos o caminho para um futuro mais equilibrado entre
              crescimento econômico e preservação ambiental.
            </p>
          </div>
        </section>

        {/* Microgrids Comunitários */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Microgrids Comunitários
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Os microgrids comunitários representam uma solução inovadora e
              eficiente para atender comunidades isoladas ou com infraestrutura
              energética limitada. Diferente das redes elétricas tradicionais, os
              microgrids são sistemas descentralizados que geram, armazenam e
              distribuem energia localmente. Isso elimina a dependência de redes
              extensas e vulneráveis, além de reduzir perdas de transmissão.
            </p>

            <p className="mb-6 text-text-body">
              Ao combinar tecnologias de energia solar e eólica com sistemas de
              armazenamento, como baterias, os microgrids oferecem uma fonte de
              energia confiável e limpa, mesmo em locais remotos. Eles também
              promovem a autonomia energética, permitindo que comunidades
              gerenciem sua própria eletricidade e se tornem menos dependentes de
              combustíveis fósseis ou serviços instáveis.
            </p>

            <p className="text-text-body">
              Além de benefícios ambientais, os microgrids comunitários
              impulsionam o desenvolvimento social ao permitir o funcionamento de
              escolas, clínicas de saúde e pequenos negócios, criando
              oportunidades econômicas locais. Essa abordagem é escalável e
              adaptável, tornando-a uma solução sustentável para enfrentar os
              desafios energéticos globais e regionais.
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