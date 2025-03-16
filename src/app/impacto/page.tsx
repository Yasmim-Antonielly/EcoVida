import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
// Nota: No Next.js com App Router, não é necessário importar globals.css em cada página
// pois ele já é importado no arquivo layout.tsx e se aplica globalmente

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
              Transformação com <span className="text-brand-primary">Energia Limpa</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Nosso projeto visa melhorar a vida das pessoas, oferecendo acesso a energia limpa e impulsionando o desenvolvimento econômico e social.
            </p>
          </div>
        </div>
      </div>

      {/* Seções de conteúdo */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        {/* Inclusão Social */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Inclusão Social
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              O acesso à energia limpa é um catalisador para o desenvolvimento
              social e econômico em comunidades carentes. Com a implementação de
              microgrids, é possível levar eletricidade confiável a áreas isoladas
              ou com infraestrutura precária, possibilitando o funcionamento de
              escolas, postos de saúde, e pequenos negócios.
            </p>
            <p className="mb-6 text-text-body">
              A energia sustentável promove avanços na educação ao iluminar salas
              de aula e permitir o uso de tecnologias modernas, como computadores
              e internet. Na saúde, garante equipamentos médicos funcionando
              plenamente e a preservação de medicamentos em condições adequadas.
              Além disso, gera oportunidades de emprego e fomenta a criação de
              empreendimentos locais, fortalecendo a autonomia e a dignidade das
              comunidades.
            </p>
            <p className="text-text-body">
              Ao investir em inclusão social por meio da energia limpa, o projeto
              não só atende às necessidades básicas, mas também promove a
              igualdade de oportunidades, ajudando a construir um futuro mais
              justo e sustentável.
            </p>
          </div>
        </section>

        {/* Redução de Emissões */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Redução de Emissões
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              A transição para fontes renováveis como solar e eólica tem um
              impacto significativo na redução das emissões de gases de efeito
              estufa. Ao substituir combustíveis fósseis por fontes limpas, os
              microgrids contribuem diretamente para a mitigação do aquecimento
              global e a proteção do meio ambiente.
            </p>
            <p className="mb-6 text-text-body">
              Cada unidade de energia gerada de forma renovável evita a liberação
              de toneladas de dióxido de carbono na atmosfera. Além disso, ao
              promover sistemas locais de geração e armazenamento, reduz-se também
              a emissão relacionada ao transporte de energia em longas distâncias.
            </p>
            <p className="text-text-body">
              Essa abordagem permite não apenas atender às demandas energéticas de
              hoje, mas também preservar recursos naturais e garantir um ambiente
              mais saudável para as futuras gerações.
            </p>
          </div>
        </section>

        {/* Exemplos de Sucesso */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Exemplos de Sucesso
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Histórias reais destacam o impacto positivo que os microgrids
              renováveis podem trazer:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-4 text-text-body">
              <li>
                <strong className="font-medium text-text-headers">Comunidade X:</strong> Localizada em uma região remota,
                antes dependente de geradores a diesel, viu seus custos de energia
                diminuírem em 50% após a implementação de um microgrid solar. Isso
                permitiu o funcionamento de uma escola com energia confiável e o
                surgimento de novos negócios na região.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Vila Y:</strong> Uma pequena vila que enfrentava
                constantes apagões, adotou um microgrid eólico, garantindo
                eletricidade 24 horas por dia. Essa estabilidade energética
                resultou no aumento da produtividade agrícola e na preservação de
                alimentos por mais tempo.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Projeto Z:</strong> Em uma área urbana de baixa renda, o
                microgrid combinado de energia solar e baterias possibilitou o
                funcionamento contínuo de clínicas de saúde, salvando vidas e
                melhorando a qualidade do atendimento.
              </li>
            </ol>
            <p className="mb-6 text-text-body">
              Esses exemplos ilustram como os microgrids renováveis podem transformar
              realidades, promovendo um ciclo de desenvolvimento sustentável e
              gerando impactos duradouros nas comunidades atendidas.
            </p>
            <p className="text-text-body">
              O modelo também incentiva práticas de consumo consciente, promovendo
              o uso responsável de recursos naturais e contribuindo para a
              preservação ambiental. Assim, os microgrids não apenas fornecem
              energia, mas também pavimentam o caminho para um modelo energético
              mais equilibrado e harmonioso com o meio ambiente.
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