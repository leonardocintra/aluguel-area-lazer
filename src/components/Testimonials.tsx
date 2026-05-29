export function Testimonials() {
  const testimonials = [
    { text: "A festa de 1 ano do meu filho foi mágica. O espaço é amplo e as crianças se divertiram muito com segurança.", author: "Mariana Souza" },
    { text: "Alugamos para o nosso chá revelação e foi perfeito. A iluminação natural rende fotos incríveis.", author: "Ricardo & Aline" },
    { text: "Lugar impecável, muito bem cuidado e com uma energia única. Recomendo para quem busca sofisticação na natureza.", author: "Juliana Costa" }
  ];

  return (
    <section className="py-section-gap-desktop bg-surface-container-low" id="depoimentos">
      <div className="max-w-container-max-width mx-auto px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">O que nossos clientes dizem</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Compartilhamos o orgulho de fazer parte de momentos que se tornam memórias eternas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-surface p-8 rounded-2xl shadow-[0_10px_30px_rgba(23,49,36,0.03)] flex flex-col h-full">
              <div className="flex gap-1 mb-4 text-tertiary">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">"{t.text}"</p>
              <span className="font-label-md text-label-md text-primary">{t.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
