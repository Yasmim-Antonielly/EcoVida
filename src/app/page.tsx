import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Header
        title="Energia Sustentável para um"
        highlightedText="Futuro Justo"
        description="Nosso projeto para a Global Solution 2024 apresenta uma proposta de microgrids comunitários que utilizam energia solar e eólica para fornecer eletricidade limpa e acessível a comunidades carentes, promovendo autonomia e desenvolvimento sustentável."
      />

      <div className="sections">
        <section>
          <h2 className="text-center">Nossa Missão</h2>
          <p className="text-center pb-8">
            Facilitar a transição para um futuro mais sustentável, garantindo
            que comunidades e indivíduos tenham acesso acessível e equitativo às
            tecnologias de energia renovável.
          </p>
        </section>

        <section>
          <h2 className="text-center">Por Que Microgrids?</h2>
          <p className="text-center pb-8">
            Uma alternativa eficiente e econômica para geração local de energia
            limpa.
          </p>
        </section>

        <section className="flex justify-center">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ebZK9wtOv_k?si=whLcQGAkZvvBDqjw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      </div>

      <ContactForm />
    </main>
  );
}
