import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Impacto() {
  return (
    <main>
      <Header
        title="Transformação com"
        highlightedText="Energia Limpa"
        description="Nosso projeto visa melhorar a vida das pessoas, oferecendo acesso a energia limpa e impulsionando o desenvolvimento econômico e social."
      />

      <div className="sections">
        <section>
          <h2>Inclusão Social</h2>
          <p>
            O acesso à energia limpa é um catalisador para o desenvolvimento
            social e econômico em comunidades carentes. Com a implementação de
            microgrids, é possível levar eletricidade confiável a áreas isoladas
            ou com infraestrutura precária, possibilitando o funcionamento de
            escolas, postos de saúde, e pequenos negócios.
          </p>
          <p>
            A energia sustentável promove avanços na educação ao iluminar salas
            de aula e permitir o uso de tecnologias modernas, como computadores
            e internet. Na saúde, garante equipamentos médicos funcionando
            plenamente e a preservação de medicamentos em condições adequadas.
            Além disso, gera oportunidades de emprego e fomenta a criação de
            empreendimentos locais, fortalecendo a autonomia e a dignidade das
            comunidades.
          </p>
          <p>
            Ao investir em inclusão social por meio da energia limpa, o projeto
            não só atende às necessidades básicas, mas também promove a
            igualdade de oportunidades, ajudando a construir um futuro mais
            justo e sustentável.
          </p>
        </section>

        <section>
          <h2>Redução de Emissões</h2>
          <p>
            A transição para fontes renováveis como solar e eólica tem um
            impacto significativo na redução das emissões de gases de efeito
            estufa. Ao substituir combustíveis fósseis por fontes limpas, os
            microgrids contribuem diretamente para a mitigação do aquecimento
            global e a proteção do meio ambiente.
          </p>

          <p>
            Cada unidade de energia gerada de forma renovável evita a liberação
            de toneladas de dióxido de carbono na atmosfera. Além disso, ao
            promover sistemas locais de geração e armazenamento, reduz-se também
            a emissão relacionada ao transporte de energia em longas distâncias.
          </p>

          <p>
            Essa abordagem permite não apenas atender às demandas energéticas de
            hoje, mas também preservar recursos naturais e garantir um ambiente
            mais saudável para as futuras gerações.
          </p>
        </section>

        <section>
          <h2>Exemplos de Sucesso</h2>
          <p>
            Histórias reais destacam o impacto positivo que os microgrids
            renováveis podem trazer:
          </p>
          <ol>
            <li>
              <strong>Comunidade X:</strong> Localizada em uma região remota,
              antes dependente de geradores a diesel, viu seus custos de energia
              diminuírem em 50% após a implementação de um microgrid solar. Isso
              permitiu o funcionamento de uma escola com energia confiável e o
              surgimento de novos negócios na região.
            </li>
            <li>
              <strong>Vila Y:</strong> Uma pequena vila que enfrentava
              constantes apagões, adotou um microgrid eólico, garantindo
              eletricidade 24 horas por dia. Essa estabilidade energética
              resultou no aumento da produtividade agrícola e na preservação de
              alimentos por mais tempo.
            </li>
            <li>
              <strong>Projeto Z:</strong> Em uma área urbana de baixa renda, o
              microgrid combinado de energia solar e baterias possibilitou o
              funcionamento contínuo de clínicas de saúde, salvando vidas e
              melhorando a qualidade do atendimento.
            </li>
          </ol>
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
