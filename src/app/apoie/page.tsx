import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Apoie() {
  return (
    <main>
      <Header
        title="Junte-se a Nós na Expansão dos"
        highlightedText="Microgrids"
        description="Convidamos empresas, ONGs e indivíduos a apoiar nossa iniciativa por meio de financiamento, parcerias ou voluntariado."
      />

      <div className="sections">
        <section>
          <h2>Parcerias</h2>
          <p>
            Unir forças é essencial para transformar a visão de um mundo
            sustentável em realidade. Nossa iniciativa está aberta à colaboração
            com empresas, organizações não governamentais e instituições que
            compartilham o compromisso com a inclusão social e a
            sustentabilidade.
          </p>
          <p>As parcerias podem contribuir de várias formas:</p>
          <ul>
            <li>
              <strong>Recursos financeiros:</strong> Apoio monetário para
              viabilizar a instalação de microgrids em comunidades carentes.
            </li>
            <li>
              <strong>Expertise técnica:</strong> Engenheiros, pesquisadores e
              especialistas podem agregar conhecimentos valiosos para aprimorar
              a eficiência dos sistemas.
            </li>
            <li>
              <strong>Materiais e equipamentos:</strong> Doações de componentes
              como painéis solares, baterias e inversores são fundamentais para
              a expansão do projeto.
            </li>
          </ul>
          <p>
            Juntos, podemos levar energia renovável a lugares que mais precisam,
            promovendo impacto duradouro e positivo.
          </p>
        </section>

        <section>
          <h2>Como Ajudar</h2>
          <p>
            Existem várias maneiras de contribuir para o sucesso desta
            iniciativa:
          </p>
          <ul>
            <li>
              <strong>Financie:</strong> Faça doações ou invista em um projeto
              que combina impacto social com inovação tecnológica. Cada
              contribuição acelera a implementação dos microgrids.
            </li>
            <li>
              <strong>Voluntarie-se:</strong> Engaje-se pessoalmente, oferecendo
              suas habilidades ou ajudando em ações locais de conscientização e
              capacitação.
            </li>
            <li>
              <strong>Divulgue:</strong> Amplifique nossa mensagem
              compartilhando o projeto em redes sociais, eventos e entre seus
              contatos. Quanto mais pessoas conhecerem a iniciativa, maior será
              o impacto.
            </li>
          </ul>
          <p>
            Qualquer apoio, grande ou pequeno, ajuda a transformar vidas por
            meio do acesso à energia limpa.
          </p>
        </section>

        <section>
          <h2>Agradecimentos</h2>
          <p>
            Reconhecemos com imensa gratidão os parceiros que tornaram este
            projeto possível. Seja através de financiamento, doação de
            equipamentos ou suporte técnico, sua contribuição faz a diferença.
          </p>
          <p>
            Parceiros recebem visibilidade em nossas campanhas e materiais
            promocionais, além de se tornarem parte de uma rede de transformação
            social e ambiental. Juntos, celebramos cada avanço na busca por um
            mundo mais sustentável.
          </p>
        </section>

        <section className="text-center">
          <h2>
            Juntos, podemos criar um futuro de energia limpa e acessível para
            todos.
            <span className="block mt-2" style={{ color: "#4caf4f" }}>
              Participe dessa transformação!
            </span>
          </h2>
          <p>
            Não fique de fora! Conecte-se conosco para fazer parte dessa jornada
            de impacto positivo e construção de um mundo mais sustentável.
          </p>
        </section>
      </div>

      <ContactForm />
    </main>
  );
}
