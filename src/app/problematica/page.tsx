import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Problematica() {
  return (
    <main>
      <Header
        title="O Desafio da"
        highlightedText="Energia Limpa"
        description="Milhões ainda carecem de acesso à energia confiável, e a dependência de combustíveis fósseis agrava a crise climática. Nosso projeto propõe uma alternativa sustentável e inclusiva para enfrentar esses desafios."
      />

      <div className="sections">
        <section>
          <h2>Importância da Energia</h2>
          <p>
            A transição para fontes renováveis é essencial para enfrentar os
            desafios globais relacionados à mudança climática e à dependência de
            combustíveis fósseis. Energia renovável, como solar e eólica, reduz
            significativamente as emissões de gases de efeito estufa,
            contribuindo para a mitigação do aquecimento global. Além disso,
            essas fontes são abundantes e inesgotáveis, tornando-as uma
            alternativa sustentável para suprir as crescentes demandas
            energéticas.
          </p>
          <p>
            Investir em energia renovável não é apenas uma escolha ambiental,
            mas também econômica: ela reduz a dependência de fontes de energia
            importadas, gera empregos verdes e promove o desenvolvimento
            tecnológico. Em comunidades, a energia renovável pode transformar
            vidas ao fornecer uma base para o progresso social, como acesso
            confiável à eletricidade, educação e saúde. Ao adotar tecnologias
            limpas, pavimentamos o caminho para um futuro mais equilibrado entre
            crescimento econômico e preservação ambiental.
          </p>
        </section>

        <section>
          <h2>Microgrids Comunitários</h2>
          <p>
            Os microgrids comunitários representam uma solução inovadora e
            eficiente para atender comunidades isoladas ou com infraestrutura
            energética limitada. Diferente das redes elétricas tradicionais, os
            microgrids são sistemas descentralizados que geram, armazenam e
            distribuem energia localmente. Isso elimina a dependência de redes
            extensas e vulneráveis, além de reduzir perdas de transmissão.
          </p>

          <p>
            Ao combinar tecnologias de energia solar e eólica com sistemas de
            armazenamento, como baterias, os microgrids oferecem uma fonte de
            energia confiável e limpa, mesmo em locais remotos. Eles também
            promovem a autonomia energética, permitindo que comunidades
            gerenciem sua própria eletricidade e se tornem menos dependentes de
            combustíveis fósseis ou serviços instáveis.
          </p>

          <p>
            Além de benefícios ambientais, os microgrids comunitários
            impulsionam o desenvolvimento social ao permitir o funcionamento de
            escolas, clínicas de saúde e pequenos negócios, criando
            oportunidades econômicas locais. Essa abordagem é escalável e
            adaptável, tornando-a uma solução sustentável para enfrentar os
            desafios energéticos globais e regionais.
          </p>
        </section>
      </div>

      <ContactForm />
    </main>
  );
}
