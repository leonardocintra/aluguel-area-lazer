import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 bg-surface-container overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/img/hero.jpg"
          alt="A breathtaking outdoor event space in a lush garden setting at golden hour."
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="relative z-20 max-w-container-max-width mx-auto px-margin-desktop text-center flex flex-col items-center">
        <span className="inline-block py-2 px-4 bg-secondary-container/80 backdrop-blur-sm text-on-secondary-container rounded-full font-label-md text-label-md mb-6 uppercase tracking-widest shadow-sm">
          Espaço Exclusivo
        </span>
        <h1 className="font-display-lg text-display-lg text-on-primary max-w-4xl mb-6 drop-shadow-md">
          O cenário perfeito para os seus momentos mais inesquecíveis
        </h1>
        <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl mb-10 drop-shadow">
          Celebre aniversários, chás revelação e eventos familiares em um refúgio de paz e natureza, com estrutura completa e sofisticação.
        </p>
        <Link href="#reserva" className="bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-full font-label-md text-label-md hover:bg-tertiary transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
          Reservar pelo WhatsApp
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-on-primary animate-bounce">
        <span className="material-symbols-outlined text-4xl">expand_more</span>
      </div>
    </section>
  );
}
