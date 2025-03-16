import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

export default function Solucao() {
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
              Microgrids Comunitários com <br/><span className="text-brand-primary">Energia Solar e Eólica</span>
            </h1>
            <p className="mt-6 text-text-body max-w-3xl mx-auto text-center">
              Propomos microgrids que combinam energia solar e eólica, armazenada em baterias e distribuída de forma inteligente. Isso garante energia local e confiável para residências e pequenos negócios.
            </p>
          </div>
        </div>
      </div>

      {/* Seções de conteúdo */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        {/* Funcionamento */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Funcionamento
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Os microgrids comunitários combinam tecnologias avançadas de energia
              renovável para gerar, armazenar e distribuir eletricidade de forma
              eficiente e confiável. A energia é captada por meio de painéis
              solares e turbinas eólicas, garantindo o aproveitamento das
              condições climáticas locais. Para evitar desperdícios e garantir o
              fornecimento mesmo em períodos de baixa geração, a energia é
              armazenada em sistemas de baterias de última geração.
            </p>
            <p className="text-text-body">
              Esses sistemas operam de maneira inteligente, utilizando algoritmos
              para gerenciar a distribuição com base na demanda local, priorizando
              residências, escolas, pequenas empresas e serviços essenciais. Além
              disso, a infraestrutura é modular e escalável, permitindo adaptações
              para atender às necessidades específicas de cada comunidade. Esse
              modelo descentralizado garante maior autonomia e segurança
              energética, reduzindo a dependência de redes elétricas tradicionais.
            </p>
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Benefícios
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Os microgrids oferecem uma série de vantagens que vão além do
              fornecimento de energia:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-3 text-text-body">
              <li>
                <strong className="font-medium text-text-headers">Redução de Custos:</strong> A geração local elimina
                despesas relacionadas ao transporte de eletricidade e reduz a
                dependência de combustíveis fósseis, resultando em contas de
                energia mais acessíveis.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Autonomia Energética:</strong> Comunidades ganham controle
                sobre seu fornecimento de energia, eliminando interrupções
                frequentes e instabilidades comuns em redes convencionais.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Proteção Ambiental:</strong> A utilização de fontes
                limpas, como solar e eólica, diminui a emissão de gases de efeito
                estufa e reduz o impacto ambiental causado pela geração de energia
                convencional.
              </li>
              <li>
                <strong className="font-medium text-text-headers">Inclusão Social:</strong> Oferece acesso a eletricidade
                confiável para comunidades isoladas, promovendo melhorias em
                educação, saúde e oportunidades econômicas.
              </li>
            </ol>
            <p className="text-text-body">
              Com os microgrids, é possível transformar vidas ao aliar economia,
              sustentabilidade e impacto social positivo.
            </p>
          </div>
        </section>

        {/* Sustentabilidade */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-text-headers text-center mb-8">
            Sustentabilidade
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-text-body">
              Os microgrids comunitários desempenham um papel crucial na
              construção de um futuro sustentável. Ao utilizar fontes renováveis,
              como energia solar e eólica, o sistema reduz a dependência de
              combustíveis fósseis e minimiza as emissões de carbono.
            </p>
            <p className="mb-6 text-text-body">
              Além disso, a infraestrutura é projetada para ser resiliente e
              duradoura, com baixo impacto ambiental. A combinação de geração
              local e tecnologias de armazenamento garante eficiência energética e
              sustentabilidade a longo prazo.
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