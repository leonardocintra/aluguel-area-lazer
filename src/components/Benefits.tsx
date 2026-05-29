export function Benefits() {
  const benefits = [
    { icon: "park", title: "Contato com a Natureza", text: "Um ambiente cercado por verde, ar puro e tranquilidade para recarregar as energias." },
    { icon: "vpn_key", title: "Privacidade Exclusiva", text: "Seu evento será o único no dia, garantindo total privacidade para seus convidados." },
    { icon: "diversity_3", title: "Ambiente Familiar", text: "Espaços desenhados para acolher todas as idades com segurança e conforto." },
    { icon: "map", title: "Fácil Acesso", text: "Localização privilegiada, de fácil chegada e com amplo estacionamento interno." }
  ];

  return (
    <section className="py-section-gap-desktop bg-surface-container-low" id="beneficios">
      <div className="max-w-container-max-width mx-auto px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter text-center">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 bg-surface rounded-2xl shadow-[0_20px_40px_rgba(23,49,36,0.05)] flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-2">
                <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">{benefit.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
