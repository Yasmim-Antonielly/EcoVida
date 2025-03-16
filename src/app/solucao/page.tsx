import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Solucao() {
  return (
    <main>
      <Header
        title="Microgrids Comunitários com"
        highlightedText="Energia Solar e Eólica"
        description="Propomos microgrids que combinam energia solar e eólica, armazenada em baterias e distribuída de forma inteligente. Isso garante energia local e confiável para residências e pequenos negócios."
      />

      <div className="sections">
        <section>
          <h2>Funcionamento</h2>
          <p>
            Os microgrids comunitários combinam tecnologias avançadas de energia
            renovável para gerar, armazenar e distribuir eletricidade de forma
            eficiente e confiável. A energia é captada por meio de painéis
            solares e turbinas eólicas, garantindo o aproveitamento das
            condições climáticas locais. Para evitar desperdícios e garantir o
            fornecimento mesmo em períodos de baixa geração, a energia é
            armazenada em sistemas de baterias de última geração.
          </p>
          <p>
            Esses sistemas operam de maneira inteligente, utilizando algoritmos
            para gerenciar a distribuição com base na demanda local, priorizando
            residências, escolas, pequenas empresas e serviços essenciais. Além
            disso, a infraestrutura é modular e escalável, permitindo adaptações
            para atender às necessidades específicas de cada comunidade. Esse
            modelo descentralizado garante maior autonomia e segurança
            energética, reduzindo a dependência de redes elétricas tradicionais.
          </p>
        </section>

        <section>
          <h2>Benefícios</h2>
          <p>
            Os microgrids oferecem uma série de vantagens que vão além do
            fornecimento de energia:
          </p>
          <ol>
            <li>
              <strong>Redução de Custos:</strong> A geração local elimina
              despesas relacionadas ao transporte de eletricidade e reduz a
              dependência de combustíveis fósseis, resultando em contas de
              energia mais acessíveis.
            </li>
            <li>
              <strong>Autonomia Energética:</strong> Comunidades ganham controle
              sobre seu fornecimento de energia, eliminando interrupções
              frequentes e instabilidades comuns em redes convencionais.
            </li>
            <li>
              <strong>Proteção Ambiental:</strong> A utilização de fontes
              limpas, como solar e eólica, diminui a emissão de gases de efeito
              estufa e reduz o impacto ambiental causado pela geração de energia
              convencional.
            </li>
            <li>
              <strong>Inclusão Social:</strong> Oferece acesso a eletricidade
              confiável para comunidades isoladas, promovendo melhorias em
              educação, saúde e oportunidades econômicas.
            </li>
          </ol>
          <p>
            Com os microgrids, é possível transformar vidas ao aliar economia,
            sustentabilidade e impacto social positivo.
          </p>
        </section>

        <section>
          <h2>Sustentabilidade</h2>
          <p>
            Os microgrids comunitários desempenham um papel crucial na
            construção de um futuro sustentável. Ao utilizar fontes renováveis,
            como energia solar e eólica, o sistema reduz a dependência de
            combustíveis fósseis e minimiza as emissões de carbono.
          </p>
          <p>
            Além disso, a infraestrutura é projetada para ser resiliente e
            duradoura, com baixo impacto ambiental. A combinação de geração
            local e tecnologias de armazenamento garante eficiência energética e
            sustentabilidade a longo prazo.
          </p>
          <p>
            O modelo também incentiva práticas de consumo consciente, promovendo
            o uso responsável de recursos naturais e contribuindo para a
            preservação ambiental. Assim, os microgrids não apenas fornecem
            energia, mas também pavimentam o caminho para um modelo energético
            mais equilibrado e harmonioso com o meio ambiente.
          </p>
        </section>
      </div>

      <ContactForm />
    </main>
  );
}
