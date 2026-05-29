import Link from "next/link";

export function CTA() {
  return (
    <section className="py-section-gap-desktop bg-primary text-on-primary" id="reserva">
      <div className="max-w-container-max-width mx-auto px-margin-desktop text-center flex flex-col items-center">
        <h2 className="font-display-lg text-display-lg mb-6 max-w-3xl">Sua festa merece um lugar especial.</h2>
        <p className="font-body-lg text-body-lg text-on-primary/90 mb-10 max-w-2xl">
          Fale conosco agora e garanta sua data! Nossa agenda é concorrida e oferecemos condições exclusivas para reservas antecipadas.
        </p>
        <Link href="#reserva" className="bg-tertiary-container text-on-tertiary-container px-10 py-5 rounded-full font-label-md text-label-md text-lg hover:bg-tertiary transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          Conversar no WhatsApp
        </Link>
      </div>
    </section>
  );
}
